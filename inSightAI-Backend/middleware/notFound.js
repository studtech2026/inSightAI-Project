import ApiError from "../utils/ApiError.js";

const notFound = (req, res, next) => {
  next(
    new ApiError(
      404,
      `Route Not Found - ${req.originalUrl}`
    )
  );
};

export default notFound;