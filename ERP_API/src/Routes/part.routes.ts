import express, { Router } from 'express';
import {getAllParts} from '../Controllers/part.controller';

const partRouter = express.Router();

partRouter.get("/", getAllParts);

export default partRouter;
