import { Request, Response } from 'express';

export class MockApp {
  routes: { [key: string]: (req: Request, res: Response) => void } = {};

  get(route: string, handler: (req: Request, res: Response) => void) {
    this.routes[route] = handler;
  }

  post(route: string, handler: (req: Request, res: Response) => void) {
    this.routes[route] = handler;
  }

  put(route: string, handler: (req: Request, res: Response) => void) {
    this.routes[route] = handler;
  }

  delete(route: string, handler: (req: Request, res: Response) => void) {
    this.routes[route] = handler;
  }

  // Add other HTTP methods as needed (e.g., patch, head, options, etc.)

  // Add the address method to the mock app
  address() {
    return "http://localhost:3000";
  }
  
}
