import { Router } from "express";
import { EventRepoMongoose } from "../repositories/EventRepoMongoose";
import { EventUseCase } from "../useCases/EventUseCase";
import { EventController } from "../controllers/EventController";

class EventRoutes {
  public router: Router;
  private eventController: EventController;

  constructor() {
    this.router = Router();

    const eventRepository = new EventRepoMongoose();
    const eventUseCase = new EventUseCase(eventRepository);
    this.eventController = new EventController(eventUseCase);

    this.initRoutes();
  }

  initRoutes() {
    this.router.post('/', this.eventController.create.bind(this.eventController));
  }
}
export { EventRoutes };