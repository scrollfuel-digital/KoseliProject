import mongoose from "mongoose";

const siteVisitSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    address: { type: String, required: true },
    projectTitle: { type: String },
    projectLocation: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("SiteVisit", siteVisitSchema);
