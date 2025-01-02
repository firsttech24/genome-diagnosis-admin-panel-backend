import mongoose from "mongoose";

const TeamSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  photo: { type: String, required: true, trim: true },
  designation: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
});

const TeamModel = mongoose.model("team", TeamSchema);

export default TeamModel;
