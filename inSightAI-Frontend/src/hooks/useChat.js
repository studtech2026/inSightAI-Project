import { useEffect, useState } from "react";
import { generateResponse } from "../utils/mockAIResponses";

const STORAGE_KEY = "insightai-chat";

let id = Date.now();

const getCurrentTime = () =>
  new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const getInitialMessages = () => {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  return [
    {
      id: 1,
      sender: "assistant",
      time: getCurrentTime(),
      text: `👋 Hello!

I'm InsightAI.

I can help you analyze:

• Revenue
• Sales
• Inventory
• Customers
• Expenses
• Forecasts
• Business KPIs

How can I help today?`,
    },
  ];
};

export default function useChat() {
  const [messages, setMessages] = useState(getInitialMessages);

  const [typing, setTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(messages)
    );
  }, [messages]);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: id++,
      sender: "user",
      text: text.trim(),
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    setTimeout(() => {
      const aiMessage = {
        id: id++,
        sender: "assistant",
        text: generateResponse(text),
        time: getCurrentTime(),
      };

      setMessages((prev) => [...prev, aiMessage]);

      setTyping(false);
    }, 1200);
  };

  const clearChat = () => {
    if (!window.confirm("Clear the entire conversation?")) {
      return;
    }

    const welcome = [
      {
        id: Date.now(),
        sender: "assistant",
        time: getCurrentTime(),
        text: `👋 Hello!

I'm InsightAI.

Ask me anything about your business.

Examples:

• Revenue Analysis
• Inventory Report
• Customer Insights
• Expense Report
• Forecast`,
      },
    ];

    localStorage.removeItem(STORAGE_KEY);

    setMessages(welcome);
  };

  const exportChat = () => {
    const content = messages
      .map(
        (msg) =>
          `[${msg.time}] ${msg.sender.toUpperCase()}\n${msg.text}\n`
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