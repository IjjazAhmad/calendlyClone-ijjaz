import React from "react";
type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
};
export default function TextareaInput({
  label,
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
      <textarea
        className="px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
        style={{ outline: "none" }}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        rows={4}
      ></textarea>
    </>
  );
}
