import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
      className="
        relative
        w-12
        h-12
        rounded-xl
        border
        border-app
        bg-card
        shadow-app
        flex
        items-center
        justify-center
        overflow-hidden
        transition
        hover:scale-105
        active:scale-95
      "
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{
              rotate: -90,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              rotate: 90,
              opacity: 0,
              scale: 0.5,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Moon
              size={20}
              className="text-violet-400"
            />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{
              rotate: 90,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              rotate: -90,
              opacity: 0,
              scale: 0.5,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Sun
              size={20}
              className="text-amber-500"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}