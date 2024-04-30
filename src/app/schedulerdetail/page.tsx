"use client";
import Image from "next/image";
import React from "react";
import {
  arrowLeft,
  calender,
  calendly,
  clock,
  world,
} from "../../../public/images";
import Link from "next/link";
import MeetingConfirm from "../../(components)/meetingConfirm/MeetingConfirm";
import PrimaryBtn from "@/(components)/button/PrimaryBtn";
import { useSchedulerDetail } from "./useSchedulerDetail";
export default function SchedulerDetail() {
  const {
    confirm,
    loading,
    state,
    selectedTime,
    selectedDate,
    fullname,
    id,
    handelChange,
    handleSubmit,
  } = useSchedulerDetail();

  return (
    <div className="flex flex-wrap justify-center items-center flex-col w-full">
      {!confirm ? (
        <div className="relative flex   border border-borderClr-1 shadow-2 rounded-md w-[95%] h-[90vh] sm:max-w-[1060px] sm:h-[700px] mt-[66px] mb-[30px]">
          <Image
            src={calendly}
            alt="..."
            className="w-[105px] h-[105px] absolute top-0 right-0"
          />
          <div className="w-[35%] border-r border-borderClr-1 p-8">
            <Link href={`schedulemeeting/${id}`}>
              {" "}
              <Image
                src={arrowLeft}
                alt="..."
                className="w-9 h-9 mr-1 border border-borderClr-1 rounded-full mb-4"
              />
            </Link>
            <p className="text-lightBlack font-semibold text-[14px] ">
              {fullname}
            </p>
            <p className="text-black font-black text-2xl mb-4">
              30 Minute Meeting
            </p>
            <p className="text-lightBlack font-bold text-[14px] mb-2 flex items-center">
              <Image src={clock} alt=".." className="w-5 h-5 mr-1" />
              30 min
            </p>
            <p className="text-lightBlack font-bold text-[14px] mb-2 flex items-center ">
              <Image src={calender} alt="..." className="w-5 h-5 mr-1" />
              {selectedTime} , {selectedDate}
            </p>
            <p className="text-lightBlack font-bold text-[14px] mb-2 flex items-center ">
              <Image src={world} alt="..." className="w-5 h-5 mr-1" /> Pakistan,
              Maldives Time
            </p>
          </div>
          <div className="w-[65%]">
            <p className="text-black font-bold text-[17px] mt-7 mb-5 ml-8 ">
              Enter Details
            </p>
            <form className="px-[33px] py-[33px]  w-[95%] sm:w-[440px] ">
              <div className="mb-[12px]">
                <label
                  className="text-black font-bold text-sm"
                  htmlFor="fullName"
                >
                  Name*
                </label>
                <input
                  className="px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]"
                  style={{ outline: "none" }}
                  type="text"
                  name="schedulerName"
                  value={state.schedulerName}
                  onChange={(e) => handelChange(e)}
                  placeholder=""
                />
              </div>
              <div className="mb-[12px]">
                <label htmlFor="email" className="text-black font-bold text-sm">
                  Email*
                </label>
                <input
                  type="email"
                  name="schedulerEmail"
                  value={state.schedulerEmail}
                  className="px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]"
                  style={{ outline: "none" }}
                  onChange={(e) => handelChange(e)}
                  placeholder=""
                />
              </div>
              <div className="mb-[14px]">
                <label className="text-black font-bold text-sm">
                  Plz share anythings that will help prepare for your meeting
                </label>
                <textarea
                  name="description"
                  value={state.description}
                  className="px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]"
                  style={{ outline: "none" }}
                  onChange={(e) => handelChange(e)}
                  placeholder=""
                />
              </div>
              <p className="font-normal  text-[14px] mb-[14px]">
                By proceeding. you confirm that you have read and agree to{" "}
                <span className="text-primary">
                  Calendly Terms of Use and Privacy Notice.
                </span>{" "}
              </p>
              <PrimaryBtn
                loading={loading}
                onClick={handleSubmit}
                label="Set Now"
              />
            </form>
          </div>
        </div>
      ) : (
        <MeetingConfirm selectedTime={selectedTime} selectedDate={selectedDate} fullname={fullname} />
      )}
    </div>
  );
}
