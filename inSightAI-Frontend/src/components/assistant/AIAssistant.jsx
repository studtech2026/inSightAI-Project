import PageHeader from "../../components/common/PageHeader";

import ChatWindow from "../../components/assistant/ChatWindow";
import ChatHeader from "../../components/assistant/ChatHeader";
import ChatMessages from "../../components/assistant/ChatMessages";
import ChatInput from "../../components/assistant/ChatInput";
import WelcomeScreen from "../../components/assistant/WelcomeScreen";

import useChat from "../../hooks/useChat";

export default function AIAssistant() {
  const { messages, typing, sendMessage, clearChat, exportChat } = useChat();

  return (
    <div className="space-y-8">
      <PageHeader
        title="AI Business Assistant"
        subtitle="Ask questions about your business and receive intelligent insights."
      />

      <ChatWindow>
        <ChatHeader clearChat={clearChat} exportChat={exportChat} />

        {messages.length <= 1 ? (
          <WelcomeScreen onSelect={sendMessage} />
        ) : (
          <ChatMessages messages={messages} typing={typing} />
        )}

        <ChatInput onSend={sendMessage} typing={typing} />
      </ChatWindow>
    </div>
  );
}
