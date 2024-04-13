// Initialize environment variables first
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express, { Express, Request, Response } from "express";
import {
  ContainerTypes,
  ExpressJoiError,
  ValidatedRequest,
  ValidatedRequestSchema,
  createValidator,
} from "express-joi-validation";
import * as Joi from "joi";
import { QueryTypes } from "sequelize";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import db from "./config/database";

const app: Express = express();
const port = process.env.PORT || 8080;
const validator = createValidator({ passError: true });

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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

    const nameSanitized = author_name?.trim()?.replace(/[^\w\s]/gi, "");

    // // Saving the sequelize query below to use as reference when comparing against the raw query
    // const topSellingAuthors = await SaleItem.findAll({
    //   limit: 10,
    //   order: [["sales_revenue", "DESC"]],
    //   attributes: [
    //     [db.fn("sum", db.literal("(item_price * quantity)")), "sales_revenue"],
    //     [db.col("book.author.name"), "author_name"],
    //     [db.col("book.author.email"), "author_email"],
    //   ],
    //   include: [
    //     {
    //       model: Book,
    //       required: true,
    //       attributes: [],
    //       include: [
    //         {
    //           model: Author,
    //           required: true,
    //           attributes: [],
    //           // If an author_name is included and valid after sanitation,
    //           // include it in a `where` statement.
    //           ...(nameSanitized && {
    //             where: {
    //               name: {
    //                 [Op.iLike]: nameSanitized,
    //               },
    //             },
    //           }),
    //         },
    //       ],
    //     },
    //   ],
    //   group: "book.author.id",
    //   raw: true,
    // });

    const topSellingAuthors = await db.query(
      `
      select sum(t1.item_price * t1.quantity) as sales_revenue, t3.name as name, t3.email as email, t3.profile_photo_path as profile_photo_path
      from sale_items t1
      inner join books t2 on t1.book_id = t2.id
      inner join authors t3 on t2.author_id = t3.id ${
        nameSanitized ? `where t3.name ilike '${nameSanitized}'\n` : ""
      }
      group by name, email, profile_photo_path
      order by sales_revenue desc
      limit 10
    `,
      { type: QueryTypes.SELECT }
    );

    if (nameSanitized && topSellingAuthors[0]) {
      return res.json(topSellingAuthors[0]);
    }

    if (nameSanitized && !topSellingAuthors.length) {
      return res.status(404).json({ error: "Author not found" });
    }

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
