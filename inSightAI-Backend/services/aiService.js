import ChatHistory from "../models/ChatHistory.js";

import { generateAIResponse } from "../utils/aiResponses.js";

import { productAI } from "./ai/productAI.js";
import { customerAI } from "./ai/customerAI.js";
import { inventoryAI } from "./ai/inventoryAI.js";
import { expenseAI } from "./ai/expenseAI.js";
import { dashboardAI } from "./ai/dashboardAI.js";

class AIService {
  async chat(userId, question) {
    const query = question.toLowerCase();

    let answer;

    /* ---------------------------------------------------------- */
    /* Products */
    /* ---------------------------------------------------------- */

    if (
      query.includes("product") ||
      query.includes("products")
    ) {
      answer = await productAI(userId);
    }

    /* ---------------------------------------------------------- */
    /* Customers */
    /* ---------------------------------------------------------- */

    else if (
      query.includes("customer") ||
      query.includes("customers")
    ) {
      answer = await customerAI(userId);
    }

    /* ---------------------------------------------------------- */
    /* Inventory */
    /* ---------------------------------------------------------- */

    else if (
      query.includes("inventory") ||
      query.includes("stock")
    ) {
      answer = await inventoryAI(userId);
    }

    /* ---------------------------------------------------------- */
    /* Expenses */
    /* ---------------------------------------------------------- */

    else if (
      query.includes("expense") ||
      query.includes("expenses")
    ) {
      answer = await expenseAI(userId);
    }

    /* ---------------------------------------------------------- */
    /* Dashboard */
    /* ---------------------------------------------------------- */

    else if (
      query.includes("dashboard") ||
      query.includes("summary") ||
      query.includes("business")
    ) {
      answer = await dashboardAI(userId);
    }

    /* ---------------------------------------------------------- */
    /* Default AI */
    /* ---------------------------------------------------------- */

    else {
      answer = generateAIResponse(question);
    }

    const chat = await ChatHistory.create({
      userId,
      question,
      answer,
      model: "InsightAI Business Assistant",
      tokens: answer.length,
    });

    return {
      id: chat._id,
      question: chat.question,
      answer: chat.answer,
      model: chat.model,
      createdAt: chat.createdAt,
    };
  }

  async getChatHistory(userId) {
    return await ChatHistory.find({
      userId,
    }).sort({
      createdAt: 1,
    });
  }

  async clearChatHistory(userId) {
    await ChatHistory.deleteMany({
      userId,
    });

    return null;
  }
}

export default new AIService();