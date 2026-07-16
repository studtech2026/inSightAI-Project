import { Bot, User, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function ChatMessage({ message }) {
  const isUser = message.sender === "user";

  const [copied, setCopied] = useState(false);

  const copyMessage = async () => {
    await navigator.clipboard.writeText(message.text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div
      className={`flex gap-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div
          className="
            flex
            h-11
            w-11
            shrink-0
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
      )}

      <div
        className={`
          group
          relative
          max-w-[75%]
          rounded-2xl
          px-5
          py-4
          shadow-sm
          transition
          ${
            isUser
              ? "rounded-br-md bg-violet-600 text-white"
              : "rounded-bl-md border border-app bg-card text-main"
          }
        `}
      >
        {!isUser && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-violet-500">
            InsightAI
          </p>
        )}

        <p className="whitespace-pre-wrap leading-7">
          {message.text}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span
            className={`text-xs ${
              isUser
                ? "text-violet-100"
                : "text-secondary"
            }`}
          >
            {message.time}
          </span>

          {!isUser && (
            <button
              onClick={copyMessage}
              className="
                opacity-0
                transition
                group-hover:opacity-100
              "
            >
              {copied ? (
                <Check
                  size={16}
                  className="text-green-500"
                />
              ) : (
                <Copy
                  size={16}
                  className="text-secondary"
                />
              )}
            </button>
          )}
        </div>
      </div>

      {isUser && (
        <div
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-white
            shadow-lg
          "
        >
          <User size={20} />
        </div>
      )}
    </div>
  );
}