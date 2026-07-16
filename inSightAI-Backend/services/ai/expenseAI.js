import Expense from "../../models/Expense.js";

export async function expenseAI(userId) {
  const expenses = await Expense.find({
    userId,
  }).sort({
    expenseDate: -1,
  });

  if (!expenses.length) {
    return `💰 Expense Summary

No expenses found.`;
  }

  const totalExpense = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const highestExpense = expenses.reduce(
    (max, item) =>
      item.amount > max.amount
        ? item
        : max,
    expenses[0]
  );

  const latest = expenses
    .slice(0, 5)
    .map(
      (e) =>
        `• ${e.title} - ₹${e.amount}`
    )
    .join("\n");

  return `💰 Expense Summary

Total Expenses

₹${totalExpense}

Highest Expense

${highestExpense.title}

₹${highestExpense.amount}

Recent Expenses

${latest}`;
}   