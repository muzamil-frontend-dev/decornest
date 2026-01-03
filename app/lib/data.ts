import { db } from "@vercel/postgres";
import { Product } from "./definations";

const client = await db.connect();

export async function fetchProducts() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log("Fetching products data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await client.sql<Product>`SELECT * FROM products`;

    console.log("Data fetch completed after 3 seconds.");

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products data.");
  }
}
