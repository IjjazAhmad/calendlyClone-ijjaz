import React from "react";
type InputProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
};
export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <>
      <label htmlFor={name} className="text-black font-extrabold text-sm">
        {label}{" "}
      </label>
      <input
        className="px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
        style={{ outline: "none" }}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
      />
    </>
  );
}
