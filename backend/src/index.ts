import { Author } from "./models/Author";
import db from "./config/database";
import { Book } from "./models/Book";
import { SaleItem } from "./models/SaleItem";

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
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initApp();
