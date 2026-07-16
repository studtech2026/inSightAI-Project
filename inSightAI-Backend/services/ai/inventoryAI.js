import Inventory from "../../models/Inventory.js";

export async function inventoryAI(userId) {
  const inventory = await Inventory.find({
    userId,
  }).sort({
    createdAt: -1,
  });

  if (!inventory.length) {
    return `📦 Inventory Summary

Inventory is empty.`;
  }

  const total = inventory.length;

  const inStock = inventory.filter(
    (i) => i.status === "In Stock"
  ).length;

  const lowStock = inventory.filter(
    (i) => i.status === "Low Stock"
  ).length;

  const outOfStock = inventory.filter(
    (i) => i.status === "Out of Stock"
  ).length;

  const latest = inventory
    .slice(0, 5)
    .map(
      (i) =>
        `• ${i.productName} (${i.quantity})`
    )
    .join("\n");

  return `📦 Inventory Summary

Items : ${total}

✅ In Stock : ${inStock}
⚠️ Low Stock : ${lowStock}
❌ Out of Stock : ${outOfStock}

Recent Inventory

${latest}`;
}