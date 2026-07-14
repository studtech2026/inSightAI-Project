import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  TrendingUp,
  Package,
  DollarSign,
  Users,
} from "lucide-react";

const prompts = [
  {
    icon: TrendingUp,
    title: "Revenue Analysis",
    prompt: "Analyze my revenue",
  },
  {
    icon: Package,
    title: "Inventory Status",
    prompt: "Show inventory status",
  },
  {
    icon: DollarSign,
    title: "Expense Report",
    prompt: "Generate expense report",
  },
  {
    icon: Users,
    title: "Customer Insights",
    prompt: "Show customer insights",
  },
];

export default function WelcomeScreen({
  onSelect,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        flex
        flex-col
        items-center
        justify-center
        px-6
        py-12
        text-center
      "
    >
      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-violet-600
          to-blue-600
          shadow-xl
        "
      >
        <Bot
          size={38}
          className="text-white"
        />
      </div>

      <div className="mt-6 flex items-center gap-2">
        <h2 className="text-3xl font-bold text-main">
          Welcome to InsightAI
        </h2>

        <Sparkles
          size={22}
          className="text-violet-500"
        />
      </div>

      <p className="mt-3 max-w-2xl text-secondary">
        Your AI-powered Business Intelligence Assistant.
        Ask questions about revenue, expenses,
        inventory, customers and forecasts to
        receive intelligent business insights.
      </p>

      <div
        className="
          mt-10
          grid
          w-full
          max-w-3xl
          grid-cols-1
          gap-4
          md:grid-cols-2
        "
      >
        {prompts.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              onClick={() =>
                onSelect(item.prompt)
              }
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-app
                bg-surface
                p-5
                text-left
                transition
                hover:bg-card-hover
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-600
                "
              >
                <Icon
                  size={22}
                  className="text-white"
                />
              </div>

              <div>
                <h3 className="font-semibold text-main">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-secondary">
                  Click to ask InsightAI
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <p className="mt-10 text-sm text-secondary">
        Try asking:
        <span className="text-violet-500">
          {" "}
          "How can I increase my profit?"
        </span>
      </p>
    </motion.div>
  );
}