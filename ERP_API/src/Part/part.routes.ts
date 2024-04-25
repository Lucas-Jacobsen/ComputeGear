import express, { Router } from 'express';
import {getAllParts} from './part.controller';

const partRouter = express.Router();

partRouter.get("/", getAllParts);

export default partRouter;
