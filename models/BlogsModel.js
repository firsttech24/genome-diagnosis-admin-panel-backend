import mongoose from "mongoose";

const BlogsSchema = mongoose.Schema({
  photo: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  designation: { type: String, required: true, trim: true },
  testimonial: { type: String, required: true, trim: true },
});

const BlogsModel = mongoose.model("blog", BlogsSchema);

export default BlogsModel;

/* 
  photo,
  name,
  editor,
  description,
*/
