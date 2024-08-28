
import TimerCode from "@/codeRegistry/TimerCode";
import TimerComponent from "@/components/Timer";
import React from "react";

const Page = () => {
  return (
    <div className="w-screen mt-[4rem] flex flex-col justify-center items-center gap-[2rem] overflow-x-hidden">
      <div className="w-[100%] max-w-[40rem] h-[8rem] bg-backgroundOne rounded-[12px] border-special border-backgroundTwo">
        <TimerComponent />
      </div>

      <div className="max-w-[40rem] bg-backgroundOne rounded-[12px] border-special border-backgroundTwo p-4">
        {TimerCode}
      </div>
    </div>
  );
};

export default Page;
