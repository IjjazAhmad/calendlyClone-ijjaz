"use client";
import React from "react";
import { logo, progressbar, shape, speaker } from "../../../public/images";
import Image from "next/image";
import PrimaryBtn from "@/(components)/button/PrimaryBtn";
import TimeDropDown from "@/(components)/dropDown/TimeDropDown";
import { useSetAvailability } from "./useSetAvailability";

export const daysName: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function SetAvailability() {
  const { loading, handelChange, handleDays, handelSubmit } =
    useSetAvailability();
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Image
        src={logo}
        alt="Logo"
        className="w-[182px] h-[48px] mt-[12px] mb-[40px]"
      />
      <form className="border border-borderClr-1 shadow-2 rounded-md w-[95%] sm:w-[645px]">
        <div className="flex justify-between items-center border-b border-borderClr-1">
          <div className="mx-6 my-8">
            <p className="text-black font-bold text-[18px] mb-6">
              Set your availability
            </p>
            <p className="text-black font-normal text-[14px]">
              Let Calendly know when you're typically available to accept
              meetings.
            </p>
          </div>
          <Image src={shape} alt="..." className="w-[185px] h-[162px]" />
        </div>
        <div className="mx-6 mb-6 mt-8">
          <p className="text-black font-bold text-sm">Available hours</p>
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-7 mb-7 w-full">
            <TimeDropDown
              name="startHour"
              defaultOption="start hour"
              onChange={handelChange}
            />
            <TimeDropDown
              name="endHour"
              defaultOption="end hour"
              onChange={handelChange}
            />
          </div>
          <div className="mt-5">
            <p className="text-black font-bold text-sm">Available days</p>

            <div className="flex flex-wrap border-y border-l border-borderClr-1 rounded-md mt-2">
              {daysName.map((item, i) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center border-r border-borderClr-1"
                    key={i}
                  >
                    <input
                      type="checkbox"
                      name={item}
                      className="w-4 h-4 my-2 mx-[34px] border border-borderClr-2 rounded-lg text-black font-normal text-[16px]"
                      style={{ outline: "none" }}
                      onChange={(e) => handleDays(e)}
                    />
                    <label className="text-black font-normal text-[11px] mb-2">
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center mt-14">
            <Image src={speaker} alt="..." className="w-4 h-4" />
            <p className="text-black font-normal text-[14px] ms-2">
              Don't worry! You'll be able to further customize your availability
              later on.
            </p>
          </div>
        </div>
      </form>
      <div className="flex justify-between items-center mt-14 w-[95%] sm:w-[645px]">
        <Image src={progressbar} alt="..." className="w-[100px] h-[10px]" />
        <div className="flex justify-end items-center gap-1">
          <button className="text-black bg-white border-none px-[17px] py-[11px]">
            Set up later
          </button>
          <PrimaryBtn
            loading={loading}
            onClick={handelSubmit}
            label="Set Now"
          />
        </div>
      </div>
    </div>
  );
}
