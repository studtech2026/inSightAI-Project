import ApiResponse from "../utils/ApiResponse.js";

const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err);

  const statusCode = err.statusCode || 500;

  const message =
    err.message || "Internal Server Error";

  return ApiResponse.error(
    res,
    statusCode,
    message,
    err.errors || []
  );
};

export default errorHandler;