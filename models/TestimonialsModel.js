import mongoose from "mongoose";

const TestimonialsSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  photo: { type: String, required: true, trim: true },
  designation: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  comment: { type: String, required: true, trim: true },
});

const TestimonialsModel = mongoose.model("testimonial", TestimonialsSchema);

export default TestimonialsModel;
