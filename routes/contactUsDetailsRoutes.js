import express from "express";
import ContactUsDetailsController from "../controllers/contactUsDetailsController.js";

const router = express.Router();

router
  .route("/contact-us-details")
  .all((req, res, next) => {
    console.log(`[${req.method}] Request to ${req.originalUrl}`);
    next();
  })
  .get(ContactUsDetailsController.getContactUsDetails)
  .patch(ContactUsDetailsController.updateContactUsDetails);

export default router;
