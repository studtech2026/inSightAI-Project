export const pageVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },

  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.25,
    },
  },
};