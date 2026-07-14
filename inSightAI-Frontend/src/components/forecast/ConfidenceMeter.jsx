import Card from "../common/Card";

export default function ConfidenceMeter() {
  return (
    <Card hover={false}>
      <h2 className="mb-6 text-xl font-semibold text-main">
        Prediction Confidence
      </h2>

      <div className="flex justify-center">
        <div
          className="
            flex
            h-40
            w-40
            items-center
            justify-center
            rounded-full
            border-[10px]
            border-violet-500
            bg-violet-500/5
          "
        >
          <div className="text-center">
            <h2 className="text-5xl font-bold text-main">
              94%
            </h2>

            <p className="mt-2 text-secondary">
              Confidence
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}