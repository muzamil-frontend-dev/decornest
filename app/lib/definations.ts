// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type users = {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

export type Product = {
  name: string;
  image: string;
  description: string;
  color: string;
  category: string;
  fabric: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  isActive: boolean;
};
