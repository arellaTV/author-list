const { Sequelize } = require("sequelize");

const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING ||
  "postgres://krikey_user:r@nd0mv@lu3@localhost:5432/krikey_db";

const sequelize = new Sequelize(DB_CONNECTION_STRING);

(async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
