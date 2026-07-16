import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  chat,
  getChatHistory,
  clearChatHistory,
} from "../controllers/aiController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| AI Routes
|--------------------------------------------------------------------------
*/

// AI Chat
router.post("/", protect, chat);

// Chat History
router.get("/history", protect, getChatHistory);

// Clear Chat History
router.delete("/history", protect, clearChatHistory);

export default router;