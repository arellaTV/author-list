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
import { Op } from "sequelize";
import { SaleItem } from "./models/SaleItem";
import { Book } from "./models/Book";

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
  async (req: ValidatedRequest<AuthorRequestSchema>, res: Response) => {
    const { author_name } = req.query;

    const nameSanitized = author_name?.trim()?.replace(/\W/g, "");

    const topSellingAuthors = await SaleItem.findAll({
      limit: 10,
      order: [["sales_revenue", "DESC"]],
      attributes: [
        [db.fn("sum", db.literal("(item_price * quantity)")), "sales_revenue"],
      ],
      include: [
        {
          model: Book,
          required: true,
          attributes: [],
          include: [
            {
              model: Author,
              required: true,
              attributes: ["id", "name"],
              // If an author_name is included and valid after sanitation,
              // include it in a `where` statement.
              ...(nameSanitized && {
                where: {
                  name: {
                    [Op.iLike]: `%${nameSanitized}%`,
                  },
                },
              }),
            },
          ],
        },
      ],
      group: "book.author.id",
      raw: true,
    });

    res.json(topSellingAuthors);
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

    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initApp();
