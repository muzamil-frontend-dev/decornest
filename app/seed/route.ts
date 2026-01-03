import { db } from "@vercel/postgres";
import { users, products } from "../lib/placeholder-data";

const client = await db.connect();

async function seedUsers() {
  console.log("🚀 ~ seedUsers ~ seedUsers");
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      return client.sql`
        INSERT INTO users (name, email, password)
        VALUES (${user.name}, ${user.email}, ${user.password})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedProducts() {
  console.log("🚀 ~ seedProducts ~ seedProducts");
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      color VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL,
      fabric VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      count_in_stock INT NOT NULL,
      rating FLOAT NOT NULL,
      num_reviews INT NOT NULL,
      is_active BOOLEAN NOT NULL
    );
  `;

  const insertedProducts = await Promise.all(
    products.map(
      (product) => client.sql`
        INSERT INTO products (name, image, description, color, category, fabric, price, count_in_stock, rating, num_reviews, is_active)
        VALUES (${product.name}, ${product.image}, ${product.description}, ${product.color}, ${product.category}, ${product.fabric}, ${product.price}, ${product.countInStock}, ${product.rating}, ${product.numReviews}, ${product.isActive})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedProducts;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     "Uncomment this file and remove this line. You can delete this file when you are finished.",
  // });
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedProducts();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
