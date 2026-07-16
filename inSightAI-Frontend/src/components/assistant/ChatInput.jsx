import { useEffect, useRef, useState } from "react";
import { SendHorizontal } from "lucide-react";

export default function ChatInput({
  onSend,
  typing = false,
}) {
  const [text, setText] = useState("");

  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleSend = () => {
    const message = text.trim();

    if (!message || typing) return;

    onSend(message);

    setText("");

    textareaRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();

      handleSend();
    }
  };

  return (
    <div className="border-t border-app bg-card p-5">
      <div
        className="
          rounded-2xl
          border
          border-app
          bg-surface
          transition
          focus-within:border-violet-500
          focus-within:ring-2
          focus-within:ring-violet-500/20
        "
      >
        <textarea
          ref={textareaRef}
          rows={3}
          maxLength={500}
          disabled={typing}
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder={
            typing
              ? "InsightAI is thinking..."
              : "Ask InsightAI anything about your business..."
          }
          className="
            w-full
            resize-none
            bg-transparent
            px-5
            pt-4
            text-main
            placeholder:text-secondary
            outline-none
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        />

        <div
          className="
            flex
            items-center
            justify-between
            px-4
            pb-4
            pt-2
          "
        >
          <div className="text-xs text-secondary">
            Press{" "}
            <span className="text-violet-500">
              Enter
            </span>{" "}
            to send
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`text-xs ${
                text.length > 450
                  ? "text-orange-500"
                  : "text-secondary"
              }`}
            >
              {text.length}/500
            </span>

            <button
              onClick={handleSend}
              disabled={
                !text.trim() || typing
              }
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-blue-600
                text-white
                shadow-md
                transition-all
                duration-200
                hover:scale-105
                hover:shadow-lg
                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:scale-100
              "
            >
              <SendHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-secondary">
        InsightAI Business Assistant
      </p>
    </div>
  );
}