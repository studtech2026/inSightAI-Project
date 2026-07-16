import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  createForecast,
  getForecasts,
  getForecastById,
  deleteForecast,
} from "../controllers/forecastController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Forecast Routes
|--------------------------------------------------------------------------
*/

router.post("/", protect, createForecast);

router.get("/", protect, getForecasts);

router.get("/:id", protect, getForecastById);

router.delete("/:id", protect, deleteForecast);

export default router;