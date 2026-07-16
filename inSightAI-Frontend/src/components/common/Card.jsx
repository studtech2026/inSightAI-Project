import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  hover = true,
  style = {},
}) {
  return (
    <motion.div
      style={style}
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.01,
            }
          : undefined
      }
      transition={{
        duration: 0.2,
      }}
      className={`
        w-full
        rounded-2xl
        border
        border-app
        bg-card
        shadow-app
        p-4
        md:p-6
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
