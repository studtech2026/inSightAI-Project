import PageHeader from "../../components/common/PageHeader";
import ForecastCard from "../../components/forecast/ForecastCard";
import ForecastRecommendation from "../../components/forecast/ForecastRecommendation";
import ConfidenceMeter from "../../components/forecast/ConfidenceMeter";
import PrimaryButton from "../../components/common/PrimaryButton";
import { forecastCards } from "../../data/forecastData";
import PageTransition from "../../components/common/PageTransition";

export default function Forecast() {
  return (
    <PageTransition>

      <PageHeader
        title="Expenses"
        subtitle="Track business expenses and spending patterns."
        action={
          <PrimaryButton>
            + Add Expense
          </PrimaryButton>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {forecastCards.map((card) => (
          <ForecastCard
            key={card.id}
            {...card}
          />
        ))}

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <ForecastRecommendation />

        <ConfidenceMeter />

      </div>

   </PageTransition>
  );
}