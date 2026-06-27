import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Import routes
import siteVisitRoutes from "./routes/siteVisitRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────
app.use(cors());           // Allow requests from the frontend
app.use(express.json());   // Parse JSON request body

// ── Database Connection ───────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ── Routes ────────────────────────────────────────────────
// All site visit URLs → /api/site-visit
app.use("/api/site-visit", siteVisitRoutes);

// All contact URLs → /api/contact
app.use("/api/contact", contactRoutes);

// ── Start Server ──────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
