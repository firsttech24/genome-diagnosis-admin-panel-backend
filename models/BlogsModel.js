import mongoose from "mongoose";

const BlogsSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  thumbnailImage: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
});

const BlogsModel = mongoose.model("blog", BlogsSchema);

export default BlogsModel;
