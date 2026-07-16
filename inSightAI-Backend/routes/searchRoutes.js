import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import { globalSearch } from "../controllers/searchController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Search Routes
|--------------------------------------------------------------------------
*/

// Global Search
// Example:
// GET /api/search?q=customer
router.get("/", protect, globalSearch);

export default router;