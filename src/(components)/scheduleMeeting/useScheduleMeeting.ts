import { useEffect, useState } from "react";
import { TileDisabledFunc } from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
type useScheduleMeetingProps = {
  days: String[];
  startHour: number;
  endHour: number;
};
export const useScheduleMeeting = ({
  days,
  startHour,
  endHour,
}: useScheduleMeetingProps) => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timeSlices, setTimeSlices] = useState<string[]>([]);
  const [value, onChange] = useState<Value>(new Date());
  console.log("🚀 ~ value:", value)
  const formatDate = (date: any) => {
    const options = { weekday: "long", month: "long", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  };
  const allowedDays = days;
  const handleButtonClick = (time: string) => {
    setSelectedTime(time);
  };
  const tileDisabled: TileDisabledFunc = ({ date, view }) => {
    if (view === "month") {
      if (date < new Date(new Date().setHours(0, 0, 0, 0))) {
        return true;
      }
    } else {
      if (date < new Date()) {
        return true;
      }
    }
    const dayName: string = date.toLocaleDateString("en-US", {
      weekday: "long",
    });
    return !allowedDays.includes(dayName);
  };
  const padZero = (num: number) => {
    return num < 10 ? num : num;
  };
  const generateSlices = (startHour: number, endHour: number) => {
    const slices: string[] = [];

    for (let hour = startHour; hour <= endHour; hour++) {
      slices.push(`${padZero(hour)}:00`);
      if (hour !== endHour) {
        slices.push(`${padZero(hour)}:30`);
      }
    }
    setTimeSlices(slices);
  };
  useEffect(() => {
    generateSlices(startHour, endHour);
  }, [startHour, endHour]);

  return {
    timeSlices,
    selectedTime,
    value,
    formatDate,
    onChange,
    allowedDays,
    handleButtonClick,
    tileDisabled,
  };
};
