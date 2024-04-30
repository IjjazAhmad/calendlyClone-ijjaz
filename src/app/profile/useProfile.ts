"use client";
import { useState } from "react";
export const languages = ["english", "urdu", "punjabi", "roman"];
interface FormData {
  fullname: string;
  message: string;
  language: string;
  dateFormate: string;
  timeFormate: string;
  country: string;
  timeZone: string;
}
const initialState = {
  fullname: "",
  message: "",
  language: "",
  dateFormate: "",
  timeFormate: "",
  country: "",
  timeZone: "",
};

export const useProfile = () => {
  const [loading, setisLoading] = useState(false);
  const [state, setstate] = useState(initialState);
  const handelChange = (e: any) => {
    setstate((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setisLoading(true);
    console.log(state);

    setisLoading(false);
  };

  return {
    loading,
    state,
    handelChange,
    handleSubmit,
  };
};
