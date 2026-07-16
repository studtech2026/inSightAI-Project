import Card from "../common/Card";

export default function AboutCard() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-main">
        About InsightAI
      </h2>

      <div className="space-y-4 text-secondary">
        <div className="flex justify-between border-b border-app pb-3">
          <span>Application</span>

          <span className="font-medium text-main">
            InsightAI
          </span>
        </div>

        <div className="flex justify-between border-b border-app pb-3">
          <span>Version</span>

          <span className="font-medium text-main">
            1.0.0
          </span>
        </div>

        <div className="flex justify-between border-b border-app pb-3">
          <span>Backend</span>

          <span className="font-medium text-main">
            Node.js + Express
          </span>
        </div>

        <div className="flex justify-between border-b border-app pb-3">
          <span>Frontend</span>

          <span className="font-medium text-main">
            React + Vite
          </span>
        </div>

        <div className="flex justify-between border-b border-app pb-3">
          <span>Database</span>

          <span className="font-medium text-main">
            MongoDB
          </span>
        </div>

        <div className="flex justify-between">
          <span>Project</span>

          <span className="font-medium text-main">
            IBM InsightAI
          </span>
        </div>
      </div>
    </Card>
  );
}