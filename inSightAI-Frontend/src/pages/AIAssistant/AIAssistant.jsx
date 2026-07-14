import PageHeader from "../../components/common/PageHeader";

import ChatWindow from "../../components/assistant/ChatWindow";
import ChatHeader from "../../components/assistant/ChatHeader";
import ChatMessages from "../../components/assistant/ChatMessages";
import ChatInput from "../../components/assistant/ChatInput";
import SuggestedPrompts from "../../components/assistant/SuggestedPrompts";

import useChat from "../../hooks/useChat";

export default function AIAssistant() {
  const {
    messages,
    typing,
    sendMessage,
    clearChat,
    exportChat,
  } = useChat();

  return (
    <div className="space-y-8">
      <PageHeader
        title="AI Assistant"
        subtitle="Ask business questions and receive AI-powered insights."
      />

      <ChatWindow>
        <ChatHeader
          clearChat={clearChat}
          exportChat={exportChat}
        />

        {messages.length <= 1 && (
          <SuggestedPrompts
            onSelect={sendMessage}
          />
        )}

        <ChatMessages
          messages={messages}
          typing={typing}
          onPromptSelect={sendMessage}
        />

        <ChatInput
          onSend={sendMessage}
        />
      </ChatWindow>
    </div>
  );
}