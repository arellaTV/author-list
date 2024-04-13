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

Book.hasMany(SaleItem, { foreignKey: "book_id" });
SaleItem.belongsTo(Book, { foreignKey: "book_id" });

export { SaleItem, sequelize };
