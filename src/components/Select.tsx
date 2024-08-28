"use client";
import { CaretDown } from "@phosphor-icons/react";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  name: string;
  icon?: JSX.Element;
  value: string;
}

interface ISelectCompProps {
  options: Option[];
  default?: string;
}

const SelectComponent: React.FC<ISelectCompProps> = ({
  options,
  default: defaultOption,
}) => {
  const [activeOption, setActiveOption] = useState(
    defaultOption || options[0]?.name
  );
  const [toggle, setToggle] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Option) => {
    setActiveOption(option.name);
    setToggle(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-col" ref={selectRef}>
      <button
        onClick={() => setToggle(!toggle)}
        className="relative w-[14rem] py-2 px-6 rounded-[12px] bg-backgroundOne border-special border-backgroundThree text-textOne flex items-center justify-between z-20"
      >
        <span>{activeOption}</span>
        <CaretDown size={16} className="text-textOne" />
      </button>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, height: 0, x: "20px", y: "-20px" }}
            animate={{ opacity: 1, height: "auto", x: "0px", y: "0px" }}
            exit={{ opacity: 0, height: 0, }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-[100%] left-0 w-full bg-backgroundOne border-special border-backgroundThree rounded-[12px] mt-[8px] p-[6px] shadow-md z-10 overflow-hidden"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className={`flex items-center px-4 py-2 w-full text-textOne ${
                  option.name === activeOption
                    ? "bg-backgroundThree"
                    : "hover:bg-backgroundTwo"
                } rounded-[8px]`}
              >
                {option.icon && <span className="mr-2">{option.icon}</span>}
                {option.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectComponent;
