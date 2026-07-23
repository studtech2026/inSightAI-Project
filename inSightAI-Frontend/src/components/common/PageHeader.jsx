import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle, action }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        flex
        flex-col
        gap-4
        md:flex-row
        md:items-center
        md:justify-between
      "
    >
      {/* Left */}
      <div className="flex-1 min-w-0">
        <h1
          className="
            text-2xl
            md:text-3xl
            font-bold
            text-main
            break-words
          "
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="
              mt-2
              text-sm
              md:text-base
              text-secondary
              break-words
            "
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Right */}
       {action && (
        <div
          className="
            w-full
            md:w-auto
            flex
            justify-start
            md:justify-end
            shrink-0
          "
        >
          {action}
        </div>
      )} 
    </motion.div>
  );
}
