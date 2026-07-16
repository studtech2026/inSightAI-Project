import { motion } from "framer-motion";
import {
  Bot,
  TrendingUp,
  Package,
  DollarSign,
  Users,
  BarChart3,
  FileText,
  Brain,
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
  {
    icon: BarChart3,
    title: "Business Analytics",
    prompt: "Show business analytics",
  },
  {
    icon: FileText,
    title: "Generate Reports",
    prompt: "Generate reports",
  },
  {
    icon: Brain,
    title: "Business Forecast",
    prompt: "Predict next month's revenue",
  },
];

export default function WelcomeScreen({
  onSelect,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        flex
        flex-1
        flex-col
        items-center
        justify-center
        px-8
        py-10
      "
    >
      <div
        className="
          flex
          h-24
          w-24
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
          size={42}
          className="text-white"
        />
      </div>

      <h2 className="mt-6 text-3xl font-bold text-main">
        Welcome to InsightAI
      </h2>

      <p className="mt-3 max-w-2xl text-center text-secondary">
        Your Business Intelligence Assistant.
        Ask questions about sales,
        customers, inventory,
        reports, forecasts and
        business performance.
      </p>

      <div
        className="
          mt-10
          grid
          w-full
          max-w-5xl
          grid-cols-1
          gap-4
          md:grid-cols-2
          xl:grid-cols-3
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
                rounded-2xl
                border
                border-app
                bg-surface
                p-5
                text-left
                transition-all
                hover:-translate-y-1
                hover:border-violet-500
                hover:shadow-lg
              "
            >
              <div
                className="
                  mb-4
                  flex
                  h-12
                  w-12
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

              <h3 className="font-semibold text-main">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-secondary">
                Click to ask InsightAI
              </p>
            </button>
          );
        })}
      </div>

      <p className="mt-10 text-sm text-secondary">
        Example:
        <span className="ml-2 text-violet-500">
          "How can I increase my sales?"
        </span>
      </p>
    </motion.div>
  );
}