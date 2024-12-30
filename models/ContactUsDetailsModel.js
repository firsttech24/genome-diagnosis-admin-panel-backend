import mongoose from "mongoose";

const ContactUsDetailsSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
});

const ContactUsDetailsModel = mongoose.model(
  "contact_us_details",
  ContactUsDetailsSchema
);

export default ContactUsDetailsModel;
