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

  // create blog
  static async createBlog(req, res) {
    try {
      const { photo, name, designation, testimonial } = req.body;

      if (!photo || !name || !designation || !testimonial) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newBlog = await BlogsModel.create({
        photo,
        name,
        designation,
        testimonial,
      });

      res.status(200).json({
        message: "blog created successfully",
        data: newBlog,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // update blog
  static async updateBlog(req, res) {
    try {
      const { id, photo, name, designation, testimonial } = req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await BlogsModel.findOneAndUpdate(
        { _id: id },
        { photo, name, designation, testimonial },
        { new: true, runValidators: true }
      );

      res.status(400).json({
        message: "Blog updated successfully",
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

      if (!result) {
        return res.status(404).json({ message: "Blog not found" });
      }

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
