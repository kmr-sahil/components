import TimerCode from "@/codeRegistry/TimerCode";
import Navbar from "@/components/Navbar";
import SelectComponent from "@/components/Select";
import TabComponent from "@/components/Tab";
import TimerComponent from "@/components/Timer";
import React from "react";

const Page = () => {
  const tabs = [
    { title: "Tab 1", value: "tab1" },
    { title: "Tab 2", value: "tab2" },
    { title: "Tab 3", value: "tab3" },
    { title: "Tab 4", value: "tab4" },
  ];

  const options = [
    { name: "Tab 1", value: "tab1" },
    { name: "Tab 2", value: "tab2" },
    { name: "Tab 3", value: "tab3" },
    { name: "Tab 4", value: "tab4" },
  ];

  return (
    <div className="w-[100%] mt-[4rem] flex flex-col justify-center items-center gap-[2rem]">
      <Navbar />
      <div className="w-[100%] max-w-[40rem] h-[8rem] bg-backgroundOne rounded-[12px] border-special border-backgroundTwo">
        <TimerComponent />
      </div>

      <div className="w-[100%] max-w-[40rem] h-[8rem] bg-backgroundOne rounded-[12px] border-special border-backgroundTwo flex justify-center items-center">
        <TabComponent tabs={tabs} activeTab={tabs[0].value} />
      </div>

      <div className="w-[100%] max-w-[40rem] h-[8rem] bg-backgroundOne rounded-[12px] border-special border-backgroundTwo flex justify-center items-center">
        <SelectComponent options={options} />
      </div>

      {/* <div className="max-w-[40rem] bg-backgroundOne rounded-[12px] border-special border-backgroundTwo p-4">
        {TimerCode}
      </div> */}
    </div>
  );
};

export default Page;
