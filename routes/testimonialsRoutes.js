import express from "express";
import TestimonialsController from "../controllers/testimonialsController.js";

const router = express.Router();

router
  .route("/testimonials")
  .all((req, res, next) => {
    console.log(`[${req.method}] Request to ${req.originalUrl}`);
    next();
  })
  .get(TestimonialsController.getTestimonial)
  .post(TestimonialsController.createTestimonial)
  .patch(TestimonialsController.updateTestimonial)
  .delete(TestimonialsController.deleteTestimonial);

export default router;
