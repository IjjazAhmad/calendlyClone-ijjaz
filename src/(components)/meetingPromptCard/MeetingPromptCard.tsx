import Image from "next/image";
import React from "react";
import { arrowRight } from "../../../public/images";
type MeetingPromptCardProps = {
  name: string | string[];
  onClick: () => void;
};
export default function MeetingPromptCard({
  name,
  onClick,
}: MeetingPromptCardProps) {
  return (
    <div className="border border-borderClr-1 shadow-2 rounded-md w-[95%] h-[80vh] sm:max-w-[1060px]  mt-[66px] mb-[30px]">
      <div className="flex justify-center  text-center mb-16">
        <div className="w-[95%] sm:w-[27%] ">
          <p className="text-lightBlack font-bold text-xl my-7">{name}</p>
          <p className="text-lightBlack font-normal text-[14px] items-center ">
            Welcome to my scheduling page. Please follow the instructions to add
            an event to my calendar.
          </p>
        </div>
      </div>
      <button
        onClick={onClick}
        className="flex justify-between flex-wrap border-t border-borderClr-2 m-3 p-3 pt-10 w-auto h-52 sm:w-[40%] hover:bg-zinc-200 hover:ease-in-out duration-300 "
      >
        <div className="flex flex-nowrap">
          <div className="bg-orange-400 rounded-full w-8 h-8"></div>
          <p className="text-black font-bold text-xl ms-2">30 Minute Meeting</p>
        </div>
        <div>
          <Image src={arrowRight} alt=".." width={30} />
        </div>
      </button>
    </div>
  );
}
