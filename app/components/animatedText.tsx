import { motion } from "framer-motion";

const text = "HandHeld*".split("");

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: {
    y: -4,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function AnimatedText() {
  return (
    <motion.div
      className="flex text-6xl lg:text-[10rem] font-bold text-white z-10"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      {text.map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className={char === "*" ? "text-amber-400" : ""}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
