// Example: just saving in DB for now
import Contact from "../../models/contactModel.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, phone, email, occupation, message } = req.body;

    if (!name || !phone || !email || !occupation || !message) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    // Save into DB
    const contact = new Contact({ name, phone, email, occupation, message });
    await contact.save();

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};
