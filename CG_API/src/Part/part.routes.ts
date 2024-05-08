import express, { Router } from 'express';
import {getAllParts, createPart} from './part.controller';

const partRouter = express.Router();

partRouter.get("/", getAllParts);
partRouter.post("/", createPart);

export default partRouter;
