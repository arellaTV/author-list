import { DataTypes } from "sequelize";
import sequelize from "../config/database";
import { Book } from "./Book";

const SaleItem = sequelize.define(
  "sale_item",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Book,
        key: "id",
      },
    },
    customer_name: {
      type: DataTypes.STRING,
    },
    item_price: {
      type: DataTypes.NUMBER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  },
  {
    indexes: [{ unique: true, fields: ["id"] }],
    createdAt: false,
    updatedAt: false,
  }
);

// `sequelize.define` also returns the model
console.log(SaleItem === sequelize.models.SaleItem); // true

export { SaleItem, sequelize };
