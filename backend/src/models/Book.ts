import { DataTypes } from "sequelize";
import sequelize from "../config/database";
import { Author } from "./Author";

const Book = sequelize.define(
  "book",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    author_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Author,
        key: "id",
      },
    },
    isbn: {
      type: DataTypes.STRING,
    },
  },
  {
    indexes: [{ unique: true, fields: ["id"] }],
    createdAt: false,
    updatedAt: false,
  }
);

// `sequelize.define` also returns the model
console.log(Book === sequelize.models.Book); // true

export { Book, sequelize };
