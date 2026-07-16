import Forecast from "../models/Forecast.js";
import ApiError from "../utils/ApiError.js";

class ForecastService {
  /**
   * Create Forecast
   */
  async createForecast(userId, forecastData) {
    const predictions = [
      {
        forecastType: "revenue",
        currentValue: 245000,
        predictedValue: 279300,
        confidence: 94,
        period: "Next Month",
      },
      {
        forecastType: "sales",
        currentValue: 312,
        predictedValue: 355,
        confidence: 91,
        period: "Next Month",
      },
      {
        forecastType: "customers",
        currentValue: 128,
        predictedValue: 151,
        confidence: 89,
        period: "Next Month",
      },
      {
        forecastType: "inventory",
        currentValue: 56,
        predictedValue: 68,
        confidence: 92,
        period: "Next Month",
      },
    ];

    await Forecast.deleteMany({ userId });

    const forecasts = await Forecast.insertMany(
      predictions.map((item) => ({
        userId,
        ...item,
      })),
    );

    return forecasts;
  }

  /**
   * Get Forecast History
   */
  async getForecasts(userId) {
    return await Forecast.find({ userId }).sort({
      createdAt: -1,
    });
  }

  /**
   * Get Forecast By ID
   */
  async getForecastById(forecastId, userId) {
    const forecast = await Forecast.findOne({
      _id: forecastId,
      userId,
    });

    if (!forecast) {
      throw new ApiError(404, "Forecast not found.");
    }

    return forecast;
  }

  /**
   * Delete Forecast
   */
  async deleteForecast(forecastId, userId) {
    const forecast = await Forecast.findOneAndDelete({
      _id: forecastId,
      userId,
    });

    if (!forecast) {
      throw new ApiError(404, "Forecast not found.");
    }

    return null;
  }
}

export default new ForecastService();
