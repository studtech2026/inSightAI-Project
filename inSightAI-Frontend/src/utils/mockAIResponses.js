const responses = {
  revenue: `📈 Revenue Analysis

• Revenue has increased consistently over the last six months.

• Peak revenue was recorded during May and June.

• Current growth trend indicates healthy business performance.

Recommendation:
Increase marketing campaigns during high-performing months to maximize ROI.`,

  sales: `📊 Sales Performance

• Sales remain stable with positive month-over-month growth.

• Top-selling products contribute significantly to overall revenue.

Recommendation:
Focus promotional campaigns on high-performing products.`,

  inventory: `📦 Inventory Analysis

• Inventory levels are sufficient for most products.

• Some fast-moving products are approaching low stock.

Recommendation:
Schedule restocking for high-demand products before inventory shortages occur.`,

  expenses: `💰 Expense Report

• Operating expenses remain within acceptable limits.

• Marketing expenses increased this month.

Recommendation:
Review recurring expenses to identify cost optimization opportunities.`,

  customers: `👥 Customer Insights

• Customer acquisition continues to improve.

• Returning customers account for a large percentage of revenue.

Recommendation:
Launch loyalty rewards to improve customer retention.`,

  forecast: `🤖 AI Forecast

• Revenue is expected to grow steadily over the next quarter.

• Customer engagement is likely to increase.

• Inventory demand will rise based on current trends.

Recommendation:
Prepare inventory and marketing campaigns for projected growth.`,

  analytics: `📊 Business Analytics

• Overall business performance is healthy.

• Revenue and customer growth are positively correlated.

Recommendation:
Continue monitoring KPIs and optimize underperforming areas.`,

  dashboard: `📈 Dashboard Summary

• Revenue is increasing.

• Expenses remain under control.

• Customer growth is positive.

Recommendation:
Maintain current strategy while monitoring inventory levels.`,
};

export function generateResponse(prompt) {
  const text = prompt.toLowerCase();

  if (text.includes("revenue")) return responses.revenue;

  if (text.includes("sale")) return responses.sales;

  if (text.includes("inventory") || text.includes("stock"))
    return responses.inventory;

  if (text.includes("expense") || text.includes("cost"))
    return responses.expenses;

  if (text.includes("customer"))
    return responses.customers;

  if (text.includes("forecast"))
    return responses.forecast;

  if (text.includes("analytics"))
    return responses.analytics;

  if (text.includes("dashboard"))
    return responses.dashboard;

  return `🤖 InsightAI

I understand your request.

Currently this project uses a smart offline AI engine for demonstration purposes.

You can ask about:

• Revenue
• Sales
• Inventory
• Customers
• Expenses
• Forecast
• Dashboard
• Analytics

I'll provide business-oriented recommendations accordingly.`;
}