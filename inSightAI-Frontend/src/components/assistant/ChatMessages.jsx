import { useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

export default function ChatMessages({ messages, typing }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  return (
    <div className="space-y-6">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}

      {typing && <TypingIndicator />}

      <div ref={bottomRef} />
    </div>
  );
}
