import { useState } from "react";

import PageHeader from "../../components/common/PageHeader";

import ChatWindow from "../../components/assistant/ChatWindow";
import ChatHeader from "../../components/assistant/ChatHeader";
import ChatMessages from "../../components/assistant/ChatMessages";
import ChatInput from "../../components/assistant/ChatInput";
import WelcomeScreen from "../../components/assistant/WelcomeScreen";
import ConfirmModal from "../../components/common/ConfirmModal";

import useChat from "../../hooks/useChat";

export default function AIAssistant() {
  const { messages, typing, sendMessage, clearChat, exportChat } = useChat();

  const [openClearModal, setOpenClearModal] = useState(false);

  const handleClear = async () => {
    await clearChat();

    setOpenClearModal(false);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="AI Business Assistant"
        subtitle="Ask questions about your business and receive intelligent insights."
      />

      <ChatWindow>
        <ChatHeader
          exportChat={exportChat}
          clearChat={() => setOpenClearModal(true)}
        />

        <div className="flex-1 overflow-y-auto p-6">
          {messages.length <= 1 ? (
            <WelcomeScreen onSelect={sendMessage} />
          ) : (
            <ChatMessages messages={messages} typing={typing} />
          )}
        </div>

        <ChatInput onSend={sendMessage} typing={typing} />
      </ChatWindow>

      <ConfirmModal
        open={openClearModal}
        title="Clear Conversation"
        message="Are you sure you want to clear the entire conversation? This action cannot be undone."
        confirmText="Clear Chat"
        confirmColor="red"
        onClose={() => setOpenClearModal(false)}
        onConfirm={handleClear}
      />
    </div>
  );
}
