import React from "react";
const timeAm:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const timePm:number[] = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
type TimeDropDownProps = {
  name: string;
  defaultOption: string;
  onChange: (e:React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function TimeDropDown({
  onChange,
  name,
  defaultOption,
}: TimeDropDownProps) {
  return (
    <>
      <div className="relative w-full">
        <select
          className="appearance-none w-full  border-gray-300 py-2 pl-3 pr-10 border border-borderClr-2 rounded-lg text-black font-normal text-[16px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
          name={name}
          // value={value}
          onChange={onChange}
        >
          <option value={0}>{defaultOption}</option>
          {timeAm.map((value, i) => {
            return (
              <option key={i} value={value}>
                
                {value}:00 am
              </option>
            );
          })}
          {timePm.map((value, i) => {
            return (
              <option key={i} value={value}>
                {value - 12}:00 pm
              </option>
            );
          })}
        </select>
        <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </div>
    </>
  );
}
