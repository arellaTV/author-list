import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Author = sequelize.define(
  "author",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    date_of_birth: {
      type: DataTypes.DATE,
    },
    profile_photo_path: {
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
console.log(Author === sequelize.models.Author); // true

export { Author, sequelize };
