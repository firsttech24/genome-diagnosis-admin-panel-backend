import express from "express";
import CareersController from "../controllers/careersController.js";

const router = express.Router();

router
  .route("/careers")
  .all((req, res, next) => {
    console.log(`[${req.method}] Request to ${req.originalUrl}`);
    next();
  })
  .get(CareersController.getCareers)
  .post(CareersController.createCareers)
  .patch(CareersController.updateCareers)
  .delete(CareersController.deleteCareers);

export default router;
