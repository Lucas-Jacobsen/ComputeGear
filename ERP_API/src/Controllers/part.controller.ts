import { Request, Response } from 'express';
import { ObjectId } from 'mongodb'; // Import ObjectId from mongodb
import MongoDBService from '../Services/mongodb.service';

class PartController {
  private dbService: MongoDBService;

  constructor(dbService: MongoDBService) {
    this.dbService = dbService;
  }

  async getPart(req: Request, res: Response): Promise<void> {
    const db = this.dbService.getDb();
    if (!db) {
      res.status(500).json({ error: 'Database connection error' });
      return;
    }

    const partId = req.params.id;
    try {
      const part = await db.collection('parts').findOne({ _id: new ObjectId(partId) }); // Convert partId to ObjectId

      if (!part) {
        res.status(404).json({ error: 'Part not found' });
        return;
      }

      res.json(part);
    } catch (error) {
      console.error('Error retrieving part:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default PartController;
