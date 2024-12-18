import mongoose from "mongoose";
import CareersModel from "../models/CareersModel.js";

class CareersController {
  // get careers
  static async getCareers(req, res) {
    try {
      const careers = await CareersModel.find();

      res.status(200).json({
        message: "Careers retrieved successfully",
        data: careers,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // create careers
  static async createCareers(req, res) {
    try {
      const { title, thumbnailImage, requirements } = req.body;

      if (!title || !thumbnailImage || !requirements) {
        res.status(400).json({ message: "All fields are required" });
        return;
      }

      const careers = await CareersModel.create({
        title,
        thumbnailImage,
        requirements,
      });

      res.status(200).json({
        message: "Careers created successfully",
        data: careers,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // update careers
  static async updateCareers(req, res) {
    try {
      const { id, title, thumbnailImage, requirements } = req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await CareersModel.findOneAndUpdate(
        { _id: id },
        { title, thumbnailImage, requirements },
        { new: true, runValidators: true }
      );

      res.status(400).json({
        message: "Careers updated successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // delete careers
  static async deleteCareers(req, res) {
    try {
      const { id } = req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await CareersModel.findOneAndDelete({ _id: id });

      res.status(200).json({
        message: "Careers deleted successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default CareersController;
