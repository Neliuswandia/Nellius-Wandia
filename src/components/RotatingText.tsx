import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface RotatingTextProps {
  texts: string[];
  mainClassName: string;
  staggerFrom?: string;
  initial?: any;
  animate?: any;
  exit?: any;
  staggerDuration?: number;
  splitLevelClassName?: string;
  transition?: any;
  rotationInterval?: number;
}

const RotatingText = ({
  texts,
  mainClassName,
  staggerFrom = "last",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  staggerDuration = 0.025,
  splitLevelClassName = "overflow-hidden",
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000
}: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const currentText = texts[currentIndex];
  const letters = currentText.split('');

  return (
    <div className={mainClassName}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="flex"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {letters.map((letter, index) => (
            <div key={index} className={splitLevelClassName}>
              <motion.span
                initial={initial}
                animate={animate}
                exit={exit}
                transition={{
                  ...transition,
                  delay: staggerFrom === "last" 
                    ? (letters.length - 1 - index) * staggerDuration
                    : index * staggerDuration
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;