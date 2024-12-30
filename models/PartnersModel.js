import mongoose from "mongoose";

const PartnersSchema = mongoose.Schema({
  photo: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  timeline: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
});

const PartnersModel = mongoose.model("partner", PartnersSchema);

export default PartnersModel;
