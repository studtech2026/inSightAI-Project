const prompts = [
  "📈 Revenue",
  "📦 Inventory",
  "💰 Expenses",
  "👥 Customers",
];

export default function SuggestedPrompts({
  onSelect,
}) {
  return (
    <div
      className="
        flex
        gap-2
        overflow-x-auto
        border-b
        border-app
        bg-card
        px-5
        py-3
        scrollbar-hide
      "
    >
      {prompts.map((prompt) => (
        <button
          key={prompt}
          onClick={() => onSelect(prompt)}
          className="
            shrink-0
            whitespace-nowrap
            rounded-full
            border
            border-app
            bg-surface
            px-4
            py-2
            text-sm
            text-main
            transition
            hover:bg-card-hover
          "
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}