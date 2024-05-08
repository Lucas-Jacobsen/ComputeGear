import { MongoClient, Db } from 'mongodb';

class MongoDBService {
  private db: Db | null = null;

  async connect(url: string, dbName: string): Promise<void> {
    const client = new MongoClient(url);

    try {
      await client.connect();
      this.db = client.db(dbName);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  getDb(): Db | null {
    return this.db;
  }
}

export default MongoDBService;
