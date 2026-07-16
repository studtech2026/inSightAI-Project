import Product from "../../models/Product.js";

export async function productAI(userId) {
  const products = await Product.find({ userId })
    .sort({ createdAt: -1 });

  if (!products.length) {
    return `📦 Product Summary

No products found.

Start by adding your first product from the Products page.`;
  }

  const total = products.length;

  const inStock = products.filter(
    (p) => p.status === "In Stock"
  ).length;

  const lowStock = products.filter(
    (p) => p.status === "Low Stock"
  ).length;

  const outOfStock = products.filter(
    (p) => p.status === "Out of Stock"
  ).length;

  const averagePrice = Math.round(
    products.reduce(
      (sum, item) => sum + item.price,
      0
    ) / total
  );

  const latestProducts = products
    .slice(0, 5)
    .map(
      (product) =>
        `• ${product.name} (₹${product.price})`
    )
    .join("\n");

  return `📦 Product Summary

Total Products : ${total}

Average Price : ₹${averagePrice}

Stock Status

✅ In Stock : ${inStock}
⚠️ Low Stock : ${lowStock}
❌ Out of Stock : ${outOfStock}

Latest Products

${latestProducts}

Recommendation

${
  lowStock > 0 || outOfStock > 0
    ? "Restock low inventory products."
    : "Inventory levels look healthy."
}`;
}