import mongoose from "mongoose";

const TestimonialsSchema = mongoose.Schema({
  userName: { type: String, required: true, trim: true },
  userPhoto: { type: String, required: true, trim: true },
  testimonial: { type: String, required: true, trim: true },
  designation: { type: String, required: true, trim: true },
  companyName: { type: String, required: true, trim: true },
});

const TestimonialsModel = mongoose.model("testimonial", TestimonialsSchema);

export default TestimonialsModel;
