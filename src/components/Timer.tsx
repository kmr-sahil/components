"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  ArrowsCounterClockwise,
  CaretLeft,
  PauseCircle,
  PlayCircle,
  Timer,
} from "@phosphor-icons/react";

const TimerComponent = () => {
  const [active, setActive] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0); // Time in seconds
  const [resetClicked, setResetClicked] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let id: string | number | NodeJS.Timeout | undefined;
    if (isRunning) {
      id = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 700);
    }

    return () => clearInterval(id);
  }, [isRunning]);

  useEffect(() => {
    if (active) {
      controls.start({
        width: "10.5rem",
        transition: { type: "spring", duration: 0.2, damping: 13 },
      });
      setIsRunning(true);
    } else {
      controls.start({
        width: "2.5rem",
        transition: { duration: 0.2 }, // Reduced or no damping effect when shrinking
      });
      //setIsRunning(false);
    }
  }, [active, controls]);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setResetClicked(true);
  };

  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      <motion.div
        className="p-2 rounded-xl bg-[#151515]"
        initial={{ scale: 1, opacity: 1, width: "2.5rem" }} // Set initial states
        animate={controls} // Use controls for animation
        layout // Ensures smooth transition between different layouts
      >
        <AnimatePresence mode="wait">
          {!active ? (
            <motion.div
              className="text-[#B4A5A5]"
              key="timer-icon"
              whileTap={{ scale: [1, 0.75, 1] }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Timer size={24} onClick={() => setActive(!active)} />
            </motion.div>
          ) : (
            <motion.div
              key="controls"
              className="flex items-center justify-center gap-[0.25rem] text-[#B4A5A5]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileTap={{ scale: [1, 0.5, 1] }}
                transition={{ duration: 0.2 }}
              >
                <CaretLeft size={18} onClick={() => setActive(!active)} />
              </motion.div>
              <AnimatePresence mode="wait">
                {isRunning ? (
                  <motion.div
                    key="pause"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <PauseCircle
                      size={18}
                      className="ml-[0.2rem] "
                      onClick={() => setIsRunning(!isRunning)}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="play"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <PlayCircle
                      size={18}
                      className="ml-[0.2rem] "
                      onClick={() => setIsRunning(!isRunning)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="w-[4.5rem] font-light mr-[0.05rem]">
                {String(Math.floor(time / 3600)).padStart(2, "0")}:
                {String(Math.floor((time % 3600) / 60)).padStart(2, "0")}:
                {String(time % 60).padStart(2, "0")}
              </span>
              <motion.div
                onClick={handleReset}
                animate={
                  resetClicked ? { scale: [1, 0.9, 1], rotate: 270 } : {}
                }
                transition={{ duration: 0.3 }}
                onAnimationComplete={() => setResetClicked(false)}
              >
                <ArrowsCounterClockwise size={17} onClick={handleReset} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TimerComponent;
