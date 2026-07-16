import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
} from "../controllers/expenseController.js";

const router = express.Router();

router.post("/", protect, createExpense);

router.get("/", protect, getExpenses);

router.get("/:id", protect, getExpenseById);

router.put("/:id", protect, updateExpense);

router.delete("/:id", protect, deleteExpense);

export default router;