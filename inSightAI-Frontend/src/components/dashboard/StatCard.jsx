import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function StatCard({
  title,
  value,
  change = "",
  icon: Icon,
  positive = true,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-app
        bg-card
        p-6
        shadow-app
        transition-all
        duration-300
        hover:border-violet-500/40
        hover:shadow-xl
      "
    >
      {/* Gradient Top Border */}

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500" />

      <div className="flex items-start justify-between">
        {/* Left */}

        <div className="flex-1">
          <p className="text-sm font-medium text-secondary">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-main">
            {value}
          </h2>

          {change && (
            <div
              className={`
                mt-4
                inline-flex
                items-center
                gap-1
                rounded-full
                px-3
                py-1
                text-xs
                font-semibold
                ${
                  positive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }
              `}
            >
              {positive ? (
                <TrendingUp size={14} />
              ) : (
                <TrendingDown size={14} />
              )}

              {change}
            </div>
          )}
        </div>

        {/* Right */}

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-violet-500/10
            text-violet-600
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-6
          "
        >
          <Icon size={28} />
        </div>
      </div>

      {/* Bottom Decoration */}

      <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-app">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
      </div>
    </motion.div>
  );
}