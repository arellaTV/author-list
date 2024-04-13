import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import {
  ContainerTypes,
  ExpressJoiError,
  ValidatedRequest,
  ValidatedRequestSchema,
  createValidator,
} from "express-joi-validation";
import * as Joi from "joi";
import { Author } from "./models/Author";
import db from "./config/database";
import { Book } from "./models/Book";
import { SaleItem } from "./models/SaleItem";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;
const validator = createValidator({ passError: true });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

const querySchema = Joi.object({
  author_name: Joi.string().optional(),
});

interface AuthorRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Query]: {
    author_name: string;
  };
}

app.get(
  "/authors",
  validator.query(querySchema),
  (req: ValidatedRequest<AuthorRequestSchema>, res: Response) => {
    const { author_name } = req.query;

    const nameSanitized = author_name
      ?.toLowerCase()
      ?.trim()
      ?.replace(/\W/g, "");
    res.json({
      message: nameSanitized || "OK",
    });
  }
);

app.use(
  (
    err: any | ExpressJoiError,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (err && err.error && err.error.isJoi) {
      res.status(400).json({
        type: err.type,
        message: err.error.toString(),
      });
    } else {
      next(err);
    }
  }
);

const initApp = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");

    const authors = await Author.findAll();
    console.log("All authors:", JSON.stringify(authors, null, 2));

    const books = await Book.findAll();
    console.log("All books:", JSON.stringify(books, null, 2));

    const saleItems = await SaleItem.findAll();
    console.log("All saleItems:", JSON.stringify(saleItems, null, 2));

    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initApp();
