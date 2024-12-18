import express from "express";
import PartnersController from "../controllers/partnersController.js";

const router = express.Router();

router
  .route("/partners")
  .all((req, res, next) => {
    console.log(`[${req.method}] Request to ${req.originalUrl}`);
    next();
  })
  .get(PartnersController.getPartners)
  .post(PartnersController.createPartner)
  .patch(PartnersController.updatePartner)
  .delete(PartnersController.deletePartner);

export default router;
