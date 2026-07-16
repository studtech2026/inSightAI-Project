import Card from "./Card";
import PrimaryButton from "./PrimaryButton";

export default function EmptyState({
  icon: Icon,
  title,
  description,
  buttonText,
  onClick,
}) {
  return (
    <Card
      hover={false}
      className="
        flex
        min-h-[420px]
        flex-col
        items-center
        justify-center
        text-center
      "
    >
      {Icon && (
        <div
          className="
            mb-6
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-violet-500/10
          "
        >
          <Icon size={38} className="text-violet-500" />
        </div>
      )}

      <h2 className="text-2xl font-semibold text-main">{title}</h2>

      <p className="mt-3 max-w-md text-secondary">{description}</p>

      {buttonText && (
        <div className="mt-8">
          <PrimaryButton onClick={onClick}>{buttonText}</PrimaryButton>
        </div>
      )}
    </Card>
  );
}
