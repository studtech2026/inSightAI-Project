import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customerController.js";

const router = express.Router();

router.post("/", protect, createCustomer);

router.get("/", protect, getCustomers);

router.get("/:id", protect, getCustomerById);

router.put("/:id", protect, updateCustomer);

router.delete("/:id", protect, deleteCustomer);

export default router;