import express from "express";
import NewsController from "../controllers/newsController.js";

const router = express.Router();

router
  .route("/news")
  .all((req, res, next) => {
    console.log(`[${req.method}] Request to ${req.originalUrl}`);
    next();
  })
  .get(NewsController.getNews)
  .post(NewsController.createNews)
  .patch(NewsController.updateNews)
  .delete(NewsController.deleteNews);

export default router;
