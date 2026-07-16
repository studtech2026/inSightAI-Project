import Customer from "../../models/Customer.js";

export async function customerAI(userId) {
  const customers = await Customer.find({ userId })
    .sort({ createdAt: -1 });

  if (!customers.length) {
    return `👥 Customer Summary

No customers found.

Start by adding your first customer.`;
  }

  const total = customers.length;

  const active = customers.filter(
    (c) => c.status === "Active"
  ).length;

  const inactive = customers.filter(
    (c) => c.status === "Inactive"
  ).length;

  const totalSpent = customers.reduce(
    (sum, c) => sum + c.totalSpent,
    0
  );

  const totalOrders = customers.reduce(
    (sum, c) => sum + c.totalOrders,
    0
  );

  const latest = customers
    .slice(0, 5)
    .map(
      (c) =>
        `• ${c.name} (${c.email})`
    )
    .join("\n");

  return `👥 Customer Summary

Total Customers : ${total}

🟢 Active : ${active}
🔴 Inactive : ${inactive}

Total Orders : ${totalOrders}

Total Revenue :
₹${totalSpent}

Recent Customers

${latest}`;
}