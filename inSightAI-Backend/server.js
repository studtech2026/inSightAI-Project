import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";



// dotenv.config();

import path from "path";

dotenv.config({
  path: path.resolve(".env"),
});

// console.log("Loaded PORT:", process.env.PORT);
// console.log("Loaded GEMINI:", process.env.GEMINI_API_KEY);

const PORT = process.env.PORT || 5000;



const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log("--------------------------------");
      console.log(`🚀 Server running on port ${PORT}`);
      console.log("--------------------------------");
    });
  } catch (error) {
    console.error("Server failed to start.");
  }
};

startServer();