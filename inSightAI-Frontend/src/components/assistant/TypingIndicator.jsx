import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div
        className="
          rounded-2xl
          border
          border-app
          bg-surface
          px-5
          py-4
        "
      >
        <div className="flex gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="
                h-2
                w-2
                rounded-full
                bg-violet-500
              "
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: dot * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}