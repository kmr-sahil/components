"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Tab {
  title: string;
  value: string;
}

interface ICustomTabProps {
  tabs: Tab[];
  activeTab: string;
  defaultTab?: string;
}

const TabComponent: React.FC<ICustomTabProps> = (props) => {
  const { tabs, activeTab } = props;
  const [active, setActive] = useState(activeTab);

  return (
    <div className="relative bg-backgroundOne border-special border-backgroundThree rounded-[16px] flex gap-[1rem] justify-center items-center p-[8px]">
      {tabs.map((tab, index) => (
        <button
          key={tab.value}
          id={tab.value}
          className={`relative w-[7rem] text-center cursor-pointer px-4 py-2 rounded-[12px] ${
            active === tab.value ? "font-bold" : ""
          }`}
          onClick={() => setActive(tab.value)}
        >
          {/* Text should be on top of the indicator */}
          <span className="relative z-10">{tab.title}</span>
          {/* Active tab indicator */}
          {active === tab.value && (
            <motion.div
              layoutId="activeTabIndicator"
              className="absolute inset-0 bg-backgroundTwo rounded-[12px] z-0"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

// Usage of TabComponent with four tabs
const App = () => {
  const tabs: Tab[] = [
    { title: "Tab 1", value: "tab1" },
    { title: "Tab 2", value: "tab2" },
    { title: "Tab 3", value: "tab3" },
    { title: "Tab 4", value: "tab4" },
  ];

  return <TabComponent tabs={tabs} activeTab={tabs[0].value} />;
};

export default App;
