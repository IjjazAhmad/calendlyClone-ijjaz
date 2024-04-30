"use client";
import DefaultLayout from "@/(components)/layouts/DefaultLayout";
import Image from "next/image";
import React from "react";
import { user } from "../../../public/images";
import PrimaryBtn from "@/(components)/button/PrimaryBtn";
import Input from "@/(components)/formInputs/Input";
import TextareaInput from "@/(components)/formInputs/TextareaInput";
import DropDown from "@/(components)/dropDown/DropDown";
import { useProfile } from "./useProfile";
export const languages = ["english", "urdu", "punjabi", "roman"];
export default function Profile() {
  const { loading, state, handelChange, handleSubmit } = useProfile();
  return (
    <DefaultLayout>
      <form className="w-[100%] sm:w-[75%]">
        <p className="text-lightBlack font-semibold text-3xl mb-4">
          account details
        </p>
        <p className="text-black font-bold text-5xl mb-7">Profile</p>
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-12 mb-5">
          <Image
            className=" h-32 w-32 rounded-full ring-2 ring-white"
            src={user}
            alt=""
          />
          <div className="text-center sm:text-start">
            <button className="text-black font-normal text-lg bg-white-default border-2 border-black rounded-[40px]  px-[17px] py-[11px] mb-2">
              Upload picture
            </button>
            <p className="text-lightBlack font-normal text-lg">
              JPG, GIF or PNG Max size of 5MB
            </p>
          </div>
        </div>
        <div>
          <div className="mb-7">
            <Input
              label={"Name"}
              type={"text"}
              name={"fullname"}
              value={state.fullname}
              onChange={handelChange}
              placeholder={""}
            />
          </div>
          <div className="mb-7">
            <TextareaInput
              label={"Welcome message"}
              name={"message"}
              value={state.message}
              onChange={handelChange}
              placeholder={"Type message here."}
            />
          </div>
          <div className="mb-7">
            <DropDown
              width={"w-full"}
              label={"Language"}
              name={"language"}
              value={state.language}
              onChange={handelChange}
              options={languages}
              defaultOption={"Choose language formate"}
            />
          </div>

          <div className=" flex flex-wrap sm:flex-nowrap justify-between items-center gap-6 mb-7">
            <div className="w-full">
              <DropDown
                width={"w-full"}
                label={"Date Formate"}
                name={"dateFormate"}
                value={state.dateFormate}
                onChange={handelChange}
                options={languages}
                defaultOption={"Choose date formate"}
              />
            </div>
            <div className="w-full">
              <DropDown
                width={"w-full"}
                label={"Time Formate"}
                name={"timeFormate"}
                value={state.timeFormate}
                onChange={handelChange}
                options={languages}
                defaultOption={"Choose time formate"}
              />
            </div>
          </div>
          <div className="mb-7">
            <DropDown
              width={"w-full"}
              label={"Country"}
              name={"country"}
              value={state.country}
              onChange={handelChange}
              options={languages}
              defaultOption={"Choose country"}
            />
          </div>
          <DropDown
            width={"w-full"}
            label={"Time Zone"}
            name={"timeZone"}
            value={state.timeZone}
            onChange={handelChange}
            options={languages}
            defaultOption={"Choose time zone"}
          />
          <div className="w-[70%] sm:w-[440px] mt-7">
            <PrimaryBtn
              loading={loading}
              onClick={handleSubmit}
              label="Update"
            />
          </div>
        </div>
      </form>
    </DefaultLayout>
  );
}
