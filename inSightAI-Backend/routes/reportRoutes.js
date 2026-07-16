import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  createReport,
  getReports,
  getReportById,
  updateReport,
  deleteReport,
} from "../controllers/reportController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Report Routes
|--------------------------------------------------------------------------
*/

// Create Report
router.post("/", protect, createReport);

// Get All Reports
router.get("/", protect, getReports);

// Get Report By ID
router.get("/:id", protect, getReportById);

// Update Report
router.put("/:id", protect, updateReport);

// Delete Report
router.delete("/:id", protect, deleteReport);

export default router;