import ContactUsDetailsModel from "../models/ContactUsDetailsModel.js";

class ContactUsDetailsController {
  // get contact us details
  static async getContactUsDetails(req, res) {
    try {
      let contactUsDetails = await ContactUsDetailsModel.findOne();

      // create contact us details if no data is there
      if (contactUsDetails === null) {
        const phoneNumber = "1800000000";
        const address = "Gomti Nagar Lucknow 226010Address";
        contactUsDetails = new ContactUsDetailsModel({
          phoneNumber,
          address,
        });
        await contactUsDetails.save();
        console.log("Contact us details created successfully");
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
      const { id, phoneNumber, address } = req.body;

      const contactUsDetails = await ContactUsDetailsModel.findOneAndUpdate(
        { _id: id },
        { phoneNumber, address },
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
