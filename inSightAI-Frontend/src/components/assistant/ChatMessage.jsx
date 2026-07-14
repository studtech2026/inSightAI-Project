import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  User,
  Copy,
  Check,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ChatMessage({
  message,
}) {
  const [copied, setCopied] = useState(false);

  const isUser =
    message.sender === "user";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        message.text
      );

      setCopied(true);

      toast.success("Copied to clipboard");

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      toast.error("Unable to copy");
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`flex gap-3 ${
        isUser
          ? "justify-end"
          : "justify-start"
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
            rounded-xl
            bg-gradient-to-br
            from-violet-600
            to-blue-600
            shadow-lg
          "
        >
          <Bot
            size={20}
            className="text-white"
          />
        </div>
      )}

      <div
        className={`flex max-w-[80%] flex-col ${
          isUser
            ? "items-end"
            : "items-start"
        }`}
      >
        <div
          className={`rounded-2xl px-5 py-4 leading-7 whitespace-pre-wrap shadow-sm ${
            isUser
              ? "rounded-br-md bg-violet-600 text-white"
              : "rounded-bl-md border border-app bg-surface text-main"
          }`}
        >
          {message.text}
        </div>

        <div className="mt-2 flex items-center gap-3 px-2">
          <span className="text-xs text-secondary">
            {message.time}
          </span>

          {!isUser && (
            <button
              onClick={handleCopy}
              className="
                flex
                items-center
                gap-1
                text-xs
                text-secondary
                transition
                hover:text-violet-500
              "
            >
              {copied ? (
                <>
                  <Check size={14} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={14} />
                  Copy
                </>
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
            rounded-xl
            bg-surface
            border
            border-app
          "
        >
          <User
            size={20}
            className="text-main"
          />
        </div>
      )}
    </motion.div>
  );
}