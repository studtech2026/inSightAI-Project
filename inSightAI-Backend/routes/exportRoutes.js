import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  exportCSV,
  exportExcel,
  exportPDF,
} from "../controllers/exportController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Export Routes
|--------------------------------------------------------------------------
*/

// Export CSV
router.get("/csv", protect, exportCSV);

// Export Excel
router.get("/excel", protect, exportExcel);

// Export PDF
router.get("/pdf", protect, exportPDF);

export default router;