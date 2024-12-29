import express from "express";
import BlogsController from "../controllers/blogsController.js";

const router = express.Router();

router
  .route("/blogs")
  .all((req, res, next) => {
    console.log(`[${req.method}] Request to ${req.originalUrl}`);
    next();
  })
  .get(BlogsController.getBlogs)
  .post(BlogsController.createBlog)
  .patch(BlogsController.updateBlog)
  .delete(BlogsController.deleteBlog);

export default router;
