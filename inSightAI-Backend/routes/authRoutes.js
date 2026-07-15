import express from "express";

import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/authController.js";

import {
  registerValidation,
  loginValidation,
} from "../validators/authValidator.js";

import {
  protect,
} from "../middleware/authMiddleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

router.post("/register", registerValidation, registerUser);

router.post("/login", loginValidation, loginUser);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

router.get("/profile", protect, getUserProfile);

router.put("/profile", protect, updateUserProfile);

export default router;