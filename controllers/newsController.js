import mongoose from "mongoose";
import NewsModel from "../models/NewsModel.js";

class NewsController {
  // get news
  static async getNews(req, res) {
    try {
      const news = await NewsModel.find();

      res.status(200).json({
        message: "News retrieved successfully",
        data: news,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // create news
  static async createNews(req, res) {
    try {
      const { photo, editor, headline, time, description } = req.body;

      if (!photo || !editor || !headline || !time || !description) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newNews = await NewsModel.create({
        photo,
        editor,
        headline,
        time,
        description,
      });

      res.status(200).json({
        message: "News created successfully",
        data: newNews,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // update news
  static async updateNews(req, res) {
    try {
      const { id, photo, editor, headline, time, description } = req.body;

      if (!id) {
        return res.status(400).json({ message: "Id is required" });
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await NewsModel.findOneAndUpdate(
        { _id: id },
        {
          photo,
          editor,
          headline,
          time,
          description,
        },
        { new: true, runValidators: true }
      );

      res.status(200).json({
        message: "News updated successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // delete news
  static async deleteNews(req, res) {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ message: "Id is required" });
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await NewsModel.findOneAndDelete({ _id: id });

      res.status(200).json({
        message: "News deleted successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default NewsController;
