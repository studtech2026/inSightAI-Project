import { useEffect, useState } from "react";

import PageHeader from "../../components/common/PageHeader";
import PageTransition from "../../components/common/PageTransition";
import PrimaryButton from "../../components/common/PrimaryButton";

import ForecastCard from "../../components/forecast/ForecastCard";
import ForecastRecommendation from "../../components/forecast/ForecastRecommendation";
import ConfidenceMeter from "../../components/forecast/ConfidenceMeter";

import forecastService from "../../services/forecastService";
import { forecastCards } from "../../data/forecastData";
import { showSuccess, showError } from "../../utils/toast";

export default function Forecast() {
  const [forecasts, setForecasts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadForecasts();
  }, []);

  const loadForecasts = async () => {
    try {
      const response = await forecastService.getForecasts();

      setForecasts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const generateForecast = async () => {
    try {
      setLoading(true);

      const response = await forecastService.createForecast();

      showSuccess(response.message);

      await loadForecasts();
    } catch (error) {
      showError(error.response?.data?.message || "Forecast generation failed.");
    } finally {
      setLoading(false);
    }
  };

  const cards =
    forecasts.length > 0
      ? forecasts.map((item, index) => ({
          id: index + 1,
          title:
            item.forecastType.charAt(0).toUpperCase() +
            item.forecastType.slice(1),
          value: item.predictedValue,
          change: `${item.confidence}% Confidence`,
          color: "text-violet-400",
        }))
      : forecastCards;

  return (
    <PageTransition>
      <PageHeader
        title="Forecast"
        subtitle="Predict future business performance using AI forecasts."
        action={
          <PrimaryButton onClick={generateForecast} disabled={loading}>
            {loading ? "Generating..." : "Generate Forecast"}
          </PrimaryButton>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => (
          <ForecastCard key={card.id} {...card} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ForecastRecommendation />

        <ConfidenceMeter
          confidence={forecasts.length ? forecasts[0].confidence : 94}
        />
      </div>
    </PageTransition>
  );
}
