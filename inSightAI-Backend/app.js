import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import exportRoutes from "./routes/exportRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import forecastRoutes from "./routes/forecastRoutes.js";

import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

import productRoutes from "./routes/productRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

/*
|--------------------------------------------------------------------------
| Global Middleware
|--------------------------------------------------------------------------
*/

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());



app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "InsightAI Backend Running 🚀",
  });
});

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

app.use("/api/auth", authRoutes);

app.use("/api/uploads", uploadRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/reports", reportRoutes);

app.use("/api/export", exportRoutes);

app.use("/api/notifications", notificationRoutes);

app.use("/api/search", searchRoutes);

app.use("/api/chat", aiRoutes);

app.use("/api/forecast", forecastRoutes);

app.use("/api/products", productRoutes);

app.use("/api/customers", customerRoutes);

app.use("/api/inventory", inventoryRoutes);

app.use("/api/expenses", expenseRoutes);

app.use("/api/user", userRoutes);

/*
|--------------------------------------------------------------------------
| 404 Handler
|--------------------------------------------------------------------------
*/

app.use(notFound);

/*
|--------------------------------------------------------------------------
| Global Error Handler
|--------------------------------------------------------------------------
*/

app.use(errorHandler);

export default app;
