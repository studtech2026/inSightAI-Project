import { Bot } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex gap-4">
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-violet-600
          to-blue-600
          text-white
          shadow-lg
        "
      >
        <Bot size={20} />
      </div>

      <div
        className="
          rounded-2xl
          rounded-bl-md
          border
          border-app
          bg-card
          px-5
          py-4
          shadow-sm
        "
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-violet-500">
          InsightAI
        </p>

        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-violet-500"></span>

          <span
            className="h-2.5 w-2.5 animate-bounce rounded-full bg-violet-500"
            style={{
              animationDelay: "150ms",
            }}
          ></span>

          <span
            className="h-2.5 w-2.5 animate-bounce rounded-full bg-violet-500"
            style={{
              animationDelay: "300ms",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
}