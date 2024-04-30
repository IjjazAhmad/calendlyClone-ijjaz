"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { getSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { setAvailabilityFun } from "@/store/slices/availability";
export const daysName: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

type hoursType = {
  startHour: number;
  endHour: number;
};

const initialState: hoursType = {
  startHour: 0,
  endHour: 0,
};
export const useSetAvailability = () => {
  const [state, setstate] = useState(initialState);
  const [days, setDays] = useState<string[]>([]);
  const [loading, setisLoading] = useState(false);
  const [id, setId] = useState<string | undefined>("");
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    getueser();
  }, []);
  const getueser = async () => {
    const session = await getSession();
    const id = session?.user?.id;
    setId(id);
  };
  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setstate((s) => ({ ...s, [e.target.name]: parseInt(e.target.value) }));
    
  };
  const handleDays = (e: React.ChangeEvent<HTMLInputElement>) => {
    const day = e.target.name;
    if (e.target.checked) {
      setDays([...days, day]);
    } else {
      setDays(days.filter((item) => item !== day));
    }
  };
  const handelSubmit = async () => {
    const { startHour, endHour } = state;
    if (startHour == endHour) {
      return toast.error("Ending hour same as starting hour");
    }
    if (!days) {
      return toast.error("Plz select day");
    }
    setisLoading(true);
    await dispatch(setAvailabilityFun({ startHour, endHour,days,id }) as any);
    try {
      setisLoading(false);
      router.push("/");
    } catch (error) {
      setisLoading(false);
    }
  };

  return {
    loading,
    handelChange,
    handleDays,
    handelSubmit,
  };
};
