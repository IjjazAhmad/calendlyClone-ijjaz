import React from "react";
import Image from "next/image";
import SignupForm from "../../../(components)/signupForm/SignupForm";
import { logo } from "../../../../public/images";

export default function Signup() {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Image src={logo} alt="Logo" className="w-[182px] h-[48px] mt-[51px]" />
      <p className="my-[9px] font-bold text-[20px] text-center">
        Sign up with Calendly for <br /> free
      </p>
      <SignupForm />
    </div>
  );
}
