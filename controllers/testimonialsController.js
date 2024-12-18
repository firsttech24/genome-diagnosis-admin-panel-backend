import mongoose from "mongoose";
import TestimonialsModel from "../models/TestimonialsModel.js";

class TestimonialsController {
  // get testimonial
  static async getTestimonial(req, res) {
    try {
      const testimonial = await TestimonialsModel.find();

      res.status(200).json({
        message: "Testimonial fetched successfully",
        data: testimonial,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }

  // create testimonial
  static async createTestimonial(req, res) {
    try {
      const { userName, userPhoto, testimonial, designation, companyName } =
        req.body;

      if (
        !userName ||
        !userPhoto ||
        !testimonial ||
        !designation ||
        !companyName
      ) {
        res.status(400).json({ message: "All fields are required" });
        return;
      }

      const testimonialDetails = await TestimonialsModel.create({
        userName,
        userPhoto,
        testimonial,
        designation,
        companyName,
      });

      const result = await testimonialDetails.save();

      res.status(200).json({
        message: "Testimonial created successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // update testimonial
  static async updateTestimonial(req, res) {
    try {
      const { id, userName, userPhoto, testimonial, designation, companyName } =
        req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await TestimonialsModel.findOneAndUpdate(
        { _id: id },
        { userName, userPhoto, testimonial, designation, companyName },
        { new: true, runValidators: true }
      );

      res.status(200).json({
        message: "Testimonial updated successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //   delete testimonial
  static async deleteTestimonial(req, res) {
    try {
      const { id } = req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await TestimonialsModel.findOneAndDelete({ _id: id });

      res.status(200).json({
        message: "Testimonial deleted successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default TestimonialsController;
