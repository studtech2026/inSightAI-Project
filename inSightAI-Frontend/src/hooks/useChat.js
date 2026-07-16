import { useEffect, useState } from "react";

import aiService from "../services/aiService";

import { showError, showSuccess } from "../utils/toast";

let id = Date.now();

const getCurrentTime = () =>
  new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const welcomeMessage = {
  id: 1,
  sender: "assistant",
  time: getCurrentTime(),
  text: `👋 Hello!

I'm InsightAI.

I can help you with:

• Revenue Analysis
• Sales Insights
• Expense Tracking
• Inventory Management
• Customer Analytics
• Reports
• Forecasting

How can I help today?`,
};

export default function useChat() {
  const [messages, setMessages] = useState([welcomeMessage]);

  const [typing, setTyping] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const response = await aiService.getChatHistory();

      if (!response.data.length) return;

      const history = [];

      response.data.forEach((chat) => {
        history.push({
          id: id++,
          sender: "user",
          text: chat.question,
          time: new Date(chat.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });

        history.push({
          id: id++,
          sender: "assistant",
          text: chat.answer,
          time: new Date(chat.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
      });

      setMessages([welcomeMessage, ...history]);
    } catch {
      showError("Unable to load chat history.");
    }
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: id++,
      sender: "user",
      text,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

    try {
      const response = await aiService.sendMessage(text);

      const aiMessage = {
        id: id++,
        sender: "assistant",
        text: response.data.answer,
        time: getCurrentTime(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      showError("Failed to generate AI response.");
    } finally {
      setTyping(false);
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const clearChat = async () => {
    const clearChat = async () => {
      try {
        await aiService.clearChatHistory();

        showSuccess("Conversation cleared.");

        setMessages([welcomeMessage]);
      } catch {
        showError("Unable to clear conversation.");
      }
    };

    try {
      await aiService.clearChatHistory();

      showSuccess("Chat cleared.");

      setMessages([welcomeMessage]);
    } catch {
      showError("Unable to clear chat.");
    }
  };

  const exportChat = () => {
    const content = messages
      .map(
        (msg) =>
          `[${msg.time}] ${msg.sender.toUpperCase()}

${msg.text}
`,
      )
      .join("\n");

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "InsightAI-Conversation.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return {
    messages,
    typing,
    sendMessage,
    clearChat,
    exportChat,
  };
}
