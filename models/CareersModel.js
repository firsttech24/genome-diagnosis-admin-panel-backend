import mongoose from "mongoose";

const CareersSchema = mongoose.Schema({
  photo: { type: String, required: true, trim: true },
  designation: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  experience: { type: String, required: true, trim: true },
  salary: { type: String, required: true, trim: true },
  skills: [{ type: String, required: true, trim: true }],
  qualification: { type: String, required: true, trim: true },
});

const CareersModel = mongoose.model("career", CareersSchema);

export default CareersModel;
