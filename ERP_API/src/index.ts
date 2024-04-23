import express from 'express';
import MongoDBService from './Services/mongodb.service';
import PartController from './Controllers/part.controller';
import PartRoutes from './Routes/part.routes';

const app = express();
const PORT = 3000;

const dbService = new MongoDBService();
dbService.connect('mongodb://localhost:27017', 'your_db_name');

const partController = new PartController(dbService);
const partRoutes = new PartRoutes(partController);

app.use('/parts', partRoutes.getRouter());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
