import { BrainCircuit } from "lucide-react";

import Card from "../common/Card";

export default function ForecastRecommendation() {
  return (
    <Card hover={false}>
      <div className="mb-5 flex items-center gap-3">
        <BrainCircuit
          size={30}
          className="text-violet-500"
        />

        <h2 className="text-xl font-semibold text-main">
          AI Recommendation
        </h2>
      </div>

      <div className="space-y-4 text-secondary">
        <p>• Increase inventory of Product X by 20%.</p>

        <p>
          • Reduce marketing spend on low-performing
          campaigns.
        </p>

        <p>
          • Focus on premium customers for higher
          profit margins.
        </p>

        <p>
          • Revenue is expected to increase by 14%
          next month.
        </p>
      </div>
    </Card>
  );
}