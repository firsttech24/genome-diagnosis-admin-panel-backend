import mongoose from "mongoose";

const TeamSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  designation: { type: String, required: true, trim: true },
  userPhoto: { type: String, required: true, trim: true },
  socialMediaLinks: {
    insta: { type: String, trim: true },
    facebook: { type: String, trim: true },
    x: { type: String, trim: true },
    linkedin: { type: String, trim: true },
  },
});

const TeamModel = mongoose.model("team", TeamSchema);

export default TeamModel;

/* 

  const form = {
    photo : "",
    name : "",
    designation : "",
    description: "",
  };
*/
