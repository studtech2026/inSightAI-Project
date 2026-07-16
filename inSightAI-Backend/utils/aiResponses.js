const responses = {
  greeting: [
    "👋 Hello! I'm InsightAI Business Assistant. How can I help you today?",
    "Hi! Ask me anything about your business, products, customers, inventory, expenses, reports, or forecasts.",
    "Welcome back! I'm ready to help you analyze your business.",
  ],

  help: [
    `I can help you with:

• Products
• Customers
• Inventory
• Expenses
• Dashboard Summary
• Reports
• Forecasts
• Business Analytics

Try asking:
• Show my products
• Show expenses
• Customer summary
• Business dashboard`,
  ],

  revenue: [
    "Increasing repeat customers and improving average order value are effective ways to grow revenue.",
    "Monitor your monthly revenue trends to identify seasonal opportunities.",
    "Review your highest-performing products and invest more in those categories.",
  ],

  sales: [
    "Upselling and cross-selling can significantly increase sales.",
    "Analyze your best-selling products and focus marketing efforts on them.",
    "Offer limited-time discounts to increase customer conversions.",
  ],

  profit: [
    "Reducing unnecessary operational costs can improve profit margins.",
    "Focus on high-margin products rather than only high-volume sales.",
    "Track expenses regularly to maximize profitability.",
  ],

  marketing: [
    "Digital marketing campaigns with measurable ROI generally perform better.",
    "Social media and email marketing are effective for customer retention.",
    "Review campaign analytics before increasing your marketing budget.",
  ],

  forecast: [
    "Forecasting helps estimate future revenue and inventory requirements.",
    "Historical business data is the foundation of accurate forecasting.",
    "Review monthly trends to improve forecast accuracy.",
  ],

  reports: [
    "Business reports help identify growth opportunities and operational issues.",
    "Compare monthly reports to measure business performance.",
    "Generate reports regularly for better decision-making.",
  ],

  upload: [
    "Uploaded files can be used to generate reports and analyze business performance.",
    "Verify uploaded data before using it for business insights.",
  ],

  analytics: [
    "Business analytics helps identify trends and optimize decision-making.",
    "Review KPIs regularly to understand business performance.",
  ],

  notification: [
    "Notifications keep you informed about important business activities.",
    "Review notifications regularly to avoid missing critical updates.",
  ],

  thanks: [
    "You're welcome! Happy to help.",
    "Glad I could assist.",
    "Anytime! Feel free to ask another business question.",
  ],

  goodbye: [
    "Goodbye! Have a productive day.",
    "See you soon. Happy analyzing!",
    "Take care and keep growing your business.",
  ],

  unknown: [
    "I'm not sure I understood that. Try asking about your products, customers, inventory, expenses, dashboard, reports, or forecasts.",
    "I can help with business analytics, reports, customers, inventory, products, and expenses.",
    "Please rephrase your question or ask about your business data.",
  ],
};

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateAIResponse(question) {
  const query = question.toLowerCase();

  if (
    /(hello|hi|hey|good morning|good evening|good afternoon)/.test(query)
  )
    return random(responses.greeting);

  if (
    query.includes("help") ||
    query.includes("what can you do")
  )
    return random(responses.help);

  if (
    query.includes("revenue") ||
    query.includes("income")
  )
    return random(responses.revenue);

  if (
    query.includes("sale") ||
    query.includes("sales")
  )
    return random(responses.sales);

  if (
    query.includes("profit")
  )
    return random(responses.profit);

  if (
    query.includes("marketing") ||
    query.includes("advertisement")
  )
    return random(responses.marketing);

  if (
    query.includes("forecast") ||
    query.includes("prediction")
  )
    return random(responses.forecast);

  if (
    query.includes("report") ||
    query.includes("reports")
  )
    return random(responses.reports);

  if (
    query.includes("upload") ||
    query.includes("file")
  )
    return random(responses.upload);

  if (
    query.includes("analytics") ||
    query.includes("analysis")
  )
    return random(responses.analytics);

  if (
    query.includes("notification") ||
    query.includes("alert")
  )
    return random(responses.notification);

  if (
    query.includes("thank")
  )
    return random(responses.thanks);

  if (
    query.includes("bye") ||
    query.includes("goodbye")
  )
    return random(responses.goodbye);

  return random(responses.unknown);
}