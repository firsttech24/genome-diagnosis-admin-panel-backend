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
      const { name, photo, designation, company, comment } = req.body;

      if (!name || !photo || !designation || !company || !comment) {
        res.status(400).json({ message: "All fields are required" });
        return;
      }

      const testimonialDetails = await TestimonialsModel.create({
        name,
        photo,
        designation,
        company,
        comment,
      });

      res.status(200).json({
        message: "Testimonial created successfully",
        data: testimonialDetails,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // update testimonial
  static async updateTestimonial(req, res) {
    try {
      const { id, name, photo, designation, company, comment } = req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await TestimonialsModel.findOneAndUpdate(
        { _id: id },
        { name, photo, designation, company, comment },
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

      if (!result) {
        return res.status(404).json({ message: "Testimonial not found" });
      }

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
