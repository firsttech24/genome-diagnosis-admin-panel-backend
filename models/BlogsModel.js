import mongoose from "mongoose";

const BlogsSchema = mongoose.Schema({
  photo: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  editor: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
});

const BlogsModel = mongoose.model("blog", BlogsSchema);

export default BlogsModel;
