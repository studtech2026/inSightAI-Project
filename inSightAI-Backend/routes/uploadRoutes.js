import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

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

router.post("/", protect, upload.single("file"), uploadFile);

router.get("/", protect, getUploads);

router.get("/:id", protect, getUploadById);

router.delete("/:id", protect, deleteUpload);

export default router;
