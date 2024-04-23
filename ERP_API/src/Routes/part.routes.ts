import express, { Router } from 'express';
import PartController from '../Controllers/part.controller';

class PartRoutes {
  private router: Router;
  private controller: PartController;

  constructor(controller: PartController) {
    this.router = express.Router();
    this.controller = controller;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/:id', this.controller.getPart.bind(this.controller));
    // Add more routes as needed
  }

  getRouter(): Router {
    return this.router;
  }
}

export default PartRoutes;
