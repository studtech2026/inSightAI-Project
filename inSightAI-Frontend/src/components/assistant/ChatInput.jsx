import { useEffect, useRef, useState } from "react";
import { SendHorizontal } from "lucide-react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleSend = () => {
    const message = text.trim();

    if (!message) return;

    onSend(message);

    setText("");

    textareaRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="
        border-t
        border-app
        bg-card
        p-5
      "
    >
      <div className="flex items-end gap-3">
        <div className="flex-1">
          <textarea
            ref={textareaRef}
            rows={2}
            maxLength={500}
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Ask InsightAI anything about your business..."
            className="
              w-full
              resize-none
              rounded-2xl
              border
              border-app
              bg-surface
              px-4
              py-3
              text-main
              placeholder:text-secondary
              outline-none
              transition
              focus:border-violet-500
            "
          />

          <div className="mt-2 flex items-center justify-between">
            <p className="text-xs text-secondary">
              Press{" "}
              <span className="text-violet-500">
                Enter
              </span>{" "}
              to send •{" "}
              <span className="text-violet-500">
                Shift + Enter
              </span>{" "}
              for a new line
            </p>

            <span
              className={`text-xs ${
                text.length > 450
                  ? "text-orange-500"
                  : "text-secondary"
              }`}
            >
              {text.length}/500
            </span>
          </div>
        </div>

        <button
          onClick={handleSend}
          disabled={!text.trim()}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-violet-600
            text-white
            transition
            hover:bg-violet-500
            disabled:cursor-not-allowed
            disabled:bg-slate-400
            disabled:opacity-60
          "
        >
          <SendHorizontal size={22} />
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-secondary">
        Powered by{" "}
        <span className="text-violet-500">
          InsightAI
        </span>{" "}
        • AI Business Intelligence Assistant
      </p>
    </div>
  );
}