import { motion } from "framer-motion";

export default function ChatWindow({
  children,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        flex
        h-[78vh]
        min-h-[650px]
        max-h-[900px]
        w-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-app
        bg-card
        shadow-app
      "
    >
      {children}
    </motion.div>
  );
}