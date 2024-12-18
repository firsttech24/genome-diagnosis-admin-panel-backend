import mongoose from "mongoose";

const CareersSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  thumbnailImage: { type: String, required: true, trim: true },
  requirements: [{ type: String, required: true, trim: true }],
});

const CareersModel = mongoose.model("careers", CareersSchema);

export default CareersModel;
