import mongoose from "mongoose";

const PartnersSchema = mongoose.Schema({
  partnerName: { type: String, required: true, trim: true },
  partnerLogo: { type: String, required: true, trim: true },
});

const PartnersModel = mongoose.model("partner", PartnersSchema);

export default PartnersModel;
