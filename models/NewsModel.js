import mongoose from "mongoose";

const NewsSchema = mongoose.Schema({
  photo: { type: String, required: true, trim: true },
  editor: { type: String, required: true, trim: true },
  headline: { type: String, required: true, trim: true },
  time: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
});

const NewsModel = mongoose.model("news", NewsSchema);

export default NewsModel;
