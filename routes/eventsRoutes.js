import express from "express";
import EventsController from "../controllers/eventsController.js";

const router = express.Router();

router
  .route("/events")
  .all((req, res, next) => {
    console.log(`[${req.method}] Request to ${req.originalUrl}`);
    next();
  })
  .get(EventsController.getEvents)
  .post(EventsController.createEvent)
  .patch(EventsController.updateEvent)
  .delete(EventsController.deleteEvent);

export default router;
