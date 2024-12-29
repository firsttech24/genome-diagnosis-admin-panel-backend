import mongoose from "mongoose";

const EventsSchema = mongoose.Schema({
  photo: { type: String, required: true, trim: true },
  manager: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  contact: { type: String, required: true, trim: true },
  venue: { type: String, required: true, trim: true },
  time: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
});

const EventsModel = mongoose.model("event", EventsSchema);

export default EventsModel;
