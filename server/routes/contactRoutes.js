import express from "express";
import { submitContactForm } from "../controllers/contact/contactFormsubmission.js";

const router = express.Router();

// POST /api/contact
router.post("/", submitContactForm);

export default router;
