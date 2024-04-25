import express from 'express';
import MongoDBService from './Services/mongodb.service';

import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv'; 
import partRouter from './Routes/part.routes';

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(compression());

app.use('/parts', partRouter);

// Error handling middleware
app.use((err: { stack: any }, req: any, res: { status: (arg0: number) => any; send: (arg0: string) => void }, next: any) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Check if DATABASE_URL is defined before connecting to MongoDB
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error('DATABASE_URL is not defined. Please check your environment configuration.');
} else {
  mongoose.connect(databaseUrl)
    .then(() => {
      console.log('Database Connected');
      app.listen(port, () => {
        console.log(`ERP API running on port ${port}.`);
      });
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error);
    });
}
