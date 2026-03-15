import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HeroRotatingWord = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words?.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [words?.length]);

  if (!words?.length) return null;

  return (
    <span className="inline-flex min-w-[120px] md:min-w-[160px] xl:min-w-[260px] items-center align-middle">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="inline-block whitespace-nowrap text-blue-500 font-medium"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default HeroRotatingWord;