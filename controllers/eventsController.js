import mongoose from "mongoose";
import EventsModel from "../models/EventsModel.js";

class EventsController {
  // get events
  static async getEvents(req, res) {
    try {
      const events = await EventsModel.find();

      res.status(200).json({
        message: "Events retrieved successfully",
        data: events,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // create event
  static async createEvent(req, res) {
    try {
      const { photo, manager, email, contact, venue, time, description } =
        req.body;

      if (
        !photo ||
        !manager ||
        !email ||
        !contact ||
        !venue ||
        !time ||
        !description
      ) {
        res.status(400).json({ message: "All fields are required" });
        return;
      }

      const newEvent = await EventsModel.create({
        photo,
        manager,
        email,
        contact,
        venue,
        time,
        description,
      });

      res.status(200).json({
        message: "Event created successfully",
        data: newEvent,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // update event
  static async updateEvent(req, res) {
    try {
      const { id, photo, manager, email, contact, venue, time, description } =
        req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await EventsModel.findOneAndUpdate(
        { _id: id },
        {
          photo,
          manager,
          email,
          contact,
          venue,
          time,
          description,
        },
        { new: true, runValidators: true }
      );

      res.status(400).json({
        message: "Event updated successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // delete event
  static async deleteEvent(req, res) {
    try {
      const { id } = req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await EventsModel.findOneAndDelete({ _id: id });

      if (!result) {
        return res.status(404).json({ message: "Event not found" });
      }

      res.status(200).json({
        message: "Event deleted successfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default EventsController;
