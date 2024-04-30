"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { URL } from "@/constants/siteUrl";
import MeetingPromptCard from "@/(components)/meetingPromptCard/MeetingPromptCard";
import ScheduleMeeting from "@/(components)/scheduleMeeting/ScheduleMeeting";
type availabilityProps = {
  id: String;
  startHour: number;
  endHour: number;
  days: String[];
  userId: string;
  createdAt: String;
  updateAt: String;
  user: {
    fullname:string,
    email:string,
  };
};
const initialState: availabilityProps = {
  id: "",
  startHour: 0,
  endHour: 0,
  days: [""],
  userId: "",
  createdAt: "",
  updateAt: "",
  user: {
    fullname:"" ,
    email:"",
  },
};
export default function page() {
  const [loading, setisLoading] = useState(false);
  const [paramUserAvailability, setParamUserAvailability] =
    useState(initialState);
  const path = useParams();
  const id: any = path.id;
  const Router = useRouter();
  const onSubmit = async () => {
    try {
      const response = await axios.get(`${URL}/api/availability`);
      const data = response.data.data;
      const userAvailabarr = await data.filter(
        (value: any) => value.userId == id
      );
      const userAvailabObj = userAvailabarr[0];
      setParamUserAvailability(userAvailabObj);
      setisLoading(true);
    } catch (error: AxiosError | any) {
      console.log(error);
      toast.error(`${error?.response?.data.message}`);
      setisLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center flex-col w-full">
      {!loading ? (
        <MeetingPromptCard name={path.id} onClick={onSubmit} />
      ) : (
        <ScheduleMeeting
          days={paramUserAvailability.days}
          endHour={paramUserAvailability.endHour}
          startHour={paramUserAvailability.startHour}
          fullname={paramUserAvailability.user.fullname}
          hostEmail={paramUserAvailability.user.email}
          path={id}
        />
      )}
    </div>
  );
}
