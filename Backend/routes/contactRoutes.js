import express from "express";
import { createContact, getAllContacts } from "../controllers/contactController.js";

const router = express.Router();

// POST   /api/contact  → save new message
router.post("/", createContact);

// GET    /api/contact  → get all messages
router.get("/", getAllContacts);

export default router;
