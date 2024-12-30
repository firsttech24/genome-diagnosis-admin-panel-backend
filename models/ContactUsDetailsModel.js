import mongoose from "mongoose";

const ContactUsDetailsSchema = mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: (value) => {
        return /^\+?\d{10,15}$/.test(value);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
});

const ContactUsDetailsModel = mongoose.model(
  "contact_us_details",
  ContactUsDetailsSchema
);

export default ContactUsDetailsModel;

/* 
    name: "",
    email: "",
    message: "",

*/
