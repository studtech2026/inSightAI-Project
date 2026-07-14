import Card from "../common/Card";

export default function AuthCard({
  children,
}) {
  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-background
        px-4
      "
    >
      <Card
        hover={false}
        className="w-full max-w-md"
      >
        {children}
      </Card>
    </div>
  );
}