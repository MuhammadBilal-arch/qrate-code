import { MongoClient } from 'mongodb';

declare global {
  // Add the custom global property
  var _mongoClientPromise: Promise<MongoClient>;
}

// Export an empty object to treat this as a module
export {};
