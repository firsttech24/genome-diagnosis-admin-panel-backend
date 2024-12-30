import mongoose from "mongoose";

import ContactUsDetailsModel from "../models/ContactUsDetailsModel.js";

class ContactUsDetailsController {
  // get contact us details
  static async getContactUsDetails(req, res) {
    try {
      let contactUsDetails = await ContactUsDetailsModel.findOne();

      // create contact us details if no data is there
      if (contactUsDetails === null) {
        const name = "Genome Diagnosis";
        const email = "genomediagnosis@gmail.com";
        const message = "Gomti Nagar Lucknow 226010";

        contactUsDetails = new ContactUsDetailsModel({
          name,
          email,
          message,
        });
        await contactUsDetails.save();
      }
      res.status(200).json({
        message: "Contact us details retrieved successfully.",
        contactUsDetails,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // update contact us details
  static async updateContactUsDetails(req, res) {
    try {
      const { id, name, email, message } = req.body;

      if (!id) {
        res.status(400).json({ message: "Id is required" });
        return;
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const contactUsDetails = await ContactUsDetailsModel.findOneAndUpdate(
        { _id: id },
        { name, email, message },
        { new: true, runValidators: true }
      );

      res.status(200).json({
        message: "Contact details updated successfully",
        data: contactUsDetails,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default ContactUsDetailsController;
