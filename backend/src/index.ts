import { Author } from "./models/Author";
import db from "./config/database";

const initApp = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");

    const authors = await Author.findAll();
    console.log("All users:", JSON.stringify(authors, null, 2));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initApp();
