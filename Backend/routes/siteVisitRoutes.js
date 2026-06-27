import express from "express";
import { createSiteVisit, getAllSiteVisits } from "../controllers/siteVisitController.js";

const router = express.Router();

// POST   /api/site-visit  → save new request
router.post("/", createSiteVisit);

// GET    /api/site-visit  → get all requests
router.get("/", getAllSiteVisits);

export default router;
