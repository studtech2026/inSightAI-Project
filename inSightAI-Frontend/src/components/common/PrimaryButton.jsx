import { motion } from "framer-motion";

export default function PrimaryButton({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{
        scale: disabled ? 1 : 0.96,
      }}
      whileHover={{
        scale: disabled ? 1 : 1.03,
      }}
      transition={{
        duration: 0.15,
      }}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-5
        py-2.5
        font-medium
        text-white
        bg-violet-600
        hover:bg-violet-500
        active:bg-violet-700
        shadow-lg
        shadow-violet-600/20
        transition-all
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-60
        disabled:hover:bg-violet-600
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
