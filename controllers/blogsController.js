import mongoose from "mongoose";
import BlogsModel from "../models/BlogsModel.js";

class BlogsController {
  // get blogs
  static async getBlogs(req, res) {
    try {
      const blogs = await BlogsModel.find();

      res.status(200).json({
        message: "Blogs retrieved successfully",
        data: blogs,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // create blogs
  static async createBlog(req, res) {
    try {
      const { title, thumbnailImage, description } = req.body;

      if (!title || !thumbnailImage || !description) {
        res.status(400).json({ message: "All fields are required" });
        return;
      }

      const blogs = await BlogsModel.create({
        title,
        thumbnailImage,
        description,
      });

      res.status(200).json({
        message: "blogs created successfully",
        data: blogs,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // update blog
  static async updateBlog(req, res) {
    try {
      const { id, title, thumbnailImage, requirements } = req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await BlogsModel.findOneAndUpdate(
        { _id: id },
        { title, thumbnailImage, requirements },
        { new: true, runValidators: true }
      );

      res.status(400).json({
        message: "Blogs updated successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // delete blog
  static async deleteBlog(req, res) {
    try {
      const { id } = req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await BlogsModel.findOneAndDelete({ _id: id });

      res.status(200).json({
        message: "Blog deleted successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default BlogsController;
