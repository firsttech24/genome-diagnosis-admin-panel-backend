import mongoose from "mongoose";

import PartnersModel from "../models/PartnersModel.js";

class PartnersController {
  // get partners
  static async getPartners(req, res) {
    try {
      const partners = await PartnersModel.find();

      res.status(200).json({
        message: "Partners retrieved successfully",
        data: partners,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // create partner
  static async createPartner(req, res) {
    try {
      const { photo, name, timeline, description } = req.body;

      if (!photo || !name || !timeline || !description) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newPartner = await PartnersModel.create({
        photo,
        name,
        timeline,
        description,
      });

      res.status(200).json({
        message: "Partner created successfully",
        data: newPartner,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // update partner
  static async updatePartner(req, res) {
    try {
      const { id, photo, name, timeline, description } = req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await PartnersModel.findOneAndUpdate(
        { _id: id },
        { photo, name, timeline, description },
        { new: true, runValidators: true }
      );

      res.status(200).json({
        message: "Partner updated successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // delete partner
  static async deletePartner(req, res) {
    try {
      const { id } = req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await PartnersModel.findOneAndDelete({ _id: id });

      if (!result) {
        return res.status(404).json({ message: "Partner not found" });
      }

      res.status(200).json({
        message: "Partner deleted successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default PartnersController;
