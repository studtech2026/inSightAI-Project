import express from "express";

import upload from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";

import {
  uploadFile,
  getUploads,
  getUploadById,
  deleteUpload,
} from "../controllers/uploadController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Upload Routes
|--------------------------------------------------------------------------
*/

// Upload CSV / Excel
router.post("/", protect, upload.single("file"), uploadFile);

// Get Upload History
router.get("/", protect, getUploads);

// Get Upload By ID
router.get("/:id", protect, getUploadById);

// Delete Upload
router.delete("/:id", protect, deleteUpload);

export default router;