import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  createInventory,
  getInventories,
  getInventoryById,
  updateInventory,
  deleteInventory,
} from "../controllers/inventoryController.js";

const router = express.Router();

router.post("/", protect, createInventory);

router.get("/", protect, getInventories);

router.get("/:id", protect, getInventoryById);

router.put("/:id", protect, updateInventory);

router.delete("/:id", protect, deleteInventory);

export default router;