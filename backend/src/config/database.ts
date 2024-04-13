import { Sequelize } from "sequelize";

const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING ||
  "postgres://krikey_user:r@nd0mv@lu3@localhost:5432/krikey_db";

const sequelize = new Sequelize(DB_CONNECTION_STRING);

export default sequelize;
