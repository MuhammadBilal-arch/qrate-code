import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectMongo = async () => {
  try {
    if (cached.conn) return cached.conn;
    console.log("Connecting to MongoDB...");
    cached.promise =
      cached.promise ||
      mongoose.connect(MONGODB_URL, {
        dbName: "MERN",
        bufferCommands: false,
        connectTimeoutMS: 30000,
      });
  
    cached.conn = await cached.promise;
    console.log("MongoDB connection successful.");
    return cached.conn;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};