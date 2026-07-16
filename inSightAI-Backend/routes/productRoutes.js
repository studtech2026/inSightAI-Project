import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/", protect, createProduct);

router.get("/", protect, getProducts);

router.get("/:id", protect, getProductById);

router.put("/:id", protect, updateProduct);

router.delete("/:id", protect, deleteProduct);

export default router;