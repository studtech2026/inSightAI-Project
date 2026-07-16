import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  getProfile,
  updateProfile,
  changePassword,
} from "../controllers/userController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/profile",
  protect,
  getProfile
);

router.put(
  "/profile",
  protect,
  updateProfile
);

router.put(
  "/password",
  protect,
  changePassword
);

export default router;