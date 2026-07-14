import {
  useEffect,
  useRef,
} from "react";

import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import WelcomeScreen from "./WelcomeScreen";

export default function ChatMessages({
  messages,
  typing,
  onPromptSelect,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const showWelcome =
    messages.length === 1 &&
    messages[0].sender ===
      "assistant";

  if (showWelcome) {
    return (
      <div className="flex flex-1 flex-col overflow-hidden">
        <WelcomeScreen
          onSelect={onPromptSelect}
        />

        <div className="px-6 pb-6">
          <ChatMessage
            message={messages[0]}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        flex-1
        space-y-6
        overflow-y-auto
        px-5
        py-6
      "
    >
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
        />
      ))}

      {typing && (
        <div className="flex justify-start">
          <TypingIndicator />
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}