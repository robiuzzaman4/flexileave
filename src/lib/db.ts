/* eslint-disable @typescript-eslint/no-explicit-any */
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cachedClient: MongoClient | null = null;
let cachedDb: any = null;

async function connectDb() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();

  const db = client.db();

  console.log("Connected to MongoDB");

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default connectDb;
