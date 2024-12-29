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

  // create career
  static async createCareer(req, res) {
    try {
      const {
        photo,
        designation,
        description,
        location,
        experience,
        salary,
        skills,
        qualification,
      } = req.body;

      if (
        !photo ||
        !designation ||
        !description ||
        !location ||
        !experience ||
        !salary ||
        !skills ||
        !qualification
      ) {
        res.status(400).json({ message: "All fields are required" });
        return;
      }

      const newCareer = await CareersModel.create({
        photo,
        designation,
        description,
        location,
        experience,
        salary,
        skills,
        qualification,
      });

      res.status(200).json({
        message: "Career created successfully",
        data: newCareer,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // update career
  static async updateCareer(req, res) {
    try {
      const {
        id,
        photo,
        designation,
        description,
        location,
        experience,
        salary,
        skills,
        qualification,
      } = req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await CareersModel.findOneAndUpdate(
        { _id: id },
        {
          photo,
          designation,
          description,
          location,
          experience,
          salary,
          skills,
          qualification,
        },
        { new: true, runValidators: true }
      );

      res.status(400).json({
        message: "Career updated successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // delete career
  static async deleteCareer(req, res) {
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
        message: "Career deleted successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default CareersController;
