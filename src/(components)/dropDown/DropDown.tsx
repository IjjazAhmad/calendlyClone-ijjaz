import React from "react";
type DropsDownProps = {
  width: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  options: string[];
  defaultOption: string;
};
export default function DropDown({
  width,
  label,
  name,
  value,
  onChange,
  options,
  defaultOption,
}: DropsDownProps) {
  return (
    <>
      <span className="mr-3 text-black font-extrabold text-sm">{label}</span>
      <div className=" flex flex-wrap sm:flex-nowrap justify-between items-center gap-6">
        <div className={`relative ${width}`}>
          <select
            className="appearance-none w-full  border-gray-300 py-2 pl-3 pr-10 border border-borderClr-2 rounded-lg text-black font-normal text-[16px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
          >
            <option defaultValue={""}>{defaultOption}</option>
            {options.map((val, i) => {
              return (
                <option value={val} key={i}>
                  {val}
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
      </div>
    </>
  );
}
