import Card from "../common/Card";

export default function SettingsCard({
  title,
  description,
  children,
}) {
  return (
    <Card hover={false}>
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-main">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm text-secondary">
            {description}
          </p>
        )}
      </div>

      {children}
    </Card>
  );
}