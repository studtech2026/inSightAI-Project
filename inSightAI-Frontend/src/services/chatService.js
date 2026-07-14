const SYSTEM_PROMPT = `
You are InsightAI, an AI Business Intelligence Assistant.

Your role is to help users with:

- Revenue Analysis
- Sales Forecasting
- Inventory Management
- Expense Analysis
- Customer Insights
- Business KPIs

Always:

• Answer professionally.
• Use bullet points when helpful.
• Give actionable recommendations.
• Keep responses concise.
`;

export async function askAI(userPrompt){
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          model: "google/gemma-3-4b-it:free",

          messages: [
            {
              role: "system",
              content: SYSTEM_PROMPT,
            },
            {
              role: "user",
              content: userPrompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    return (
      data.choices?.[0]?.message?.content ||
      "No response generated."
    );
  } catch (error) {
    console.error(error);

    return "Sorry, I couldn't generate a response.";
  }
}