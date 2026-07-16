import Product from "../../models/Product.js";
import Customer from "../../models/Customer.js";
import Inventory from "../../models/Inventory.js";
import Expense from "../../models/Expense.js";

export async function dashboardAI(userId) {
  const products =
    await Product.countDocuments({
      userId,
    });

  const customers =
    await Customer.countDocuments({
      userId,
    });

  const inventory =
    await Inventory.countDocuments({
      userId,
    });

  const expenses =
    await Expense.find({
      userId,
    });

  const totalExpense =
    expenses.reduce(
      (sum, e) =>
        sum + e.amount,
      0
    );

  return `📊 Business Dashboard

📦 Products : ${products}

👥 Customers : ${customers}

📦 Inventory Items : ${inventory}

💰 Expenses

₹${totalExpense}

Business Health

🟢 Good

Recommendation

Continue monitoring inventory and business expenses regularly.`;
}