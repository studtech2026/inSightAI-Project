import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  positive = true,
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        rounded-2xl
        border
        border-app
        bg-card
        shadow-app
        p-6
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-secondary">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-main">
            {value}
          </h2>

          <p
            className={`mt-3 text-sm font-medium ${
              positive
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {change}
          </p>
        </div>

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-violet-600/10
            text-violet-500
          "
        >
          <Icon size={28} />
        </div>
      </div>
    </motion.div>
  );
}