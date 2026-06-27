import mongoose from "mongoose";

// This model stores messages from the Contact Us page
const contactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phone:    { type: String, required: true },
    email:    { type: String, required: true },
    plotSize: { type: String, required: true },
    message:  { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
