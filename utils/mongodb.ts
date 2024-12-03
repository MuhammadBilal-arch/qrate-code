import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URL) {
  throw new Error('MONGODB_URI environment variable is not defined');
}

const uri = process.env.MONGODB_URL;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // Use a global variable to preserve connection across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, always create a new connection
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  console.log('data is connected')
}

// A utility function to connect to MongoDB
export async function connectMongo(): Promise<MongoClient> {
  return clientPromise; // Resolves to the MongoClient instance
}
