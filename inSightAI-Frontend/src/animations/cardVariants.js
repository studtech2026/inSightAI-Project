export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },

  hover: {
    y: -6,
    transition: {
      duration: 0.2,
    },
  },
};