import { delay, easeIn, easeOut } from "framer-motion";

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const MenuTransition = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const titleAnimRev = {
  hidden: { y: -200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 3 },
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      //delay: 1,
    },
  },
};

export const photoAnimSmall = {
  hidden: { scale: 0.7, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      delay: 1,
    },
  },
};

export const photoAnimation = {
  hidden: { scale: 1, opacity: 0, x: -100 },
  show: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      //delay: 1,
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1 } },
};

export const slider = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const leftToRight = {
  hidden: {
    opacity: 0,
    x: -200,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1.4,
    transition: { duration: 1.75, ease: "easeOut" },
  },
};

export const sliderCon = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const scrollRevealSmall = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const scrollRevealLate = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 1.5,
    },
  },
};

export const scrollRevealLeft = {
  hidden: { opacity: 0, transition: { duration: 0.5 }, x: -130 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const scrollRevealRight = {
  hidden: { opacity: 0, x: 130 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const paragraphReaveal = {
  hidden: { opacity: 0, scale: 1, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
};

export const upDown = {
  hidden: { opacity: 0, y: 100 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.05 * index,
    },
  }),
  hoverStart: {
    scale: 1.2,
    transition: { duration: 0.5 },
  },
  hoverEnd: {
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const fadingContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

export const movingUp = {
  hidden: { opacity: 0, y: 100 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.1 * index,
      easeIn,
    },
  }),
};

export const horiEleReveal = {
  hidden: { opacity: 0, x: 0 },
  show: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      delay: 0.1 * index,
      // ease: easeOut,
    },
  }),
};

export const horiEleRevealDelay = {
  hidden: { opacity: 0, x: 0 },
  show: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5 * index,
      // ease: easeOut,
    },
  }),
};

export const none = {
  hidden: {},
  show: {},
};
