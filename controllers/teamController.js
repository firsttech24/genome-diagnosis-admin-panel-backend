import mongoose from "mongoose";
import TeamModel from "../models/TeamModel.js";

class TeamController {
  // get team
  static async getTeam(req, res) {
    try {
      const team = await TeamModel.find();

      res.status(200).json({
        message: "Team retrieved successfully",
        data: team,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }

  // create team
  static async createTeam(req, res) {
    try {
      const { name, photo, designation, description } = req.body;

      if ((!name, !photo, !designation, !description)) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const team = await TeamModel.create({
        name,
        photo,
        designation,
        description,
      });

      res.status(200).json({
        message: "Team created successfully",
        data: team,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // update team
  static async updateTeam(req, res) {
    try {
      const { id, name, photo, designation, description } = req.body;

      if (!id) {
        return res.status(400).json({ message: "Id is required" });
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const existingTeam = await TeamModel.findById(id);
      if (!existingTeam) {
        return res.status(404).json({ message: "Team not found" });
      }

      // Update the document
      const updatedTeam = await TeamModel.findOneAndUpdate(
        { _id: id },
        {
          name,
          photo,
          designation,
          description,
        },
        { new: true, runValidators: true }
      );

      res.status(200).json({
        message: "Team updated successfully",
        data: updatedTeam,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //   delete team
  static async deleteTeam(req, res) {
    try {
      const { id } = req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await TeamModel.findOneAndDelete({ _id: id });

      res.status(200).json({
        message: "Team deleted successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default TeamController;
