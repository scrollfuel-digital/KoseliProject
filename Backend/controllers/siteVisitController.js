import SiteVisit from "../models/SiteVisit.js";

// POST /api/site-visit — Save a new site visit request
export const createSiteVisit = async (req, res) => {
  try {
    const visit = await SiteVisit.create(req.body);
    res.status(201).json({ success: true, data: visit });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// GET /api/site-visit — Get all site visit requests
export const getAllSiteVisits = async (req, res) => {
  try {
    const visits = await SiteVisit.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: visits });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
