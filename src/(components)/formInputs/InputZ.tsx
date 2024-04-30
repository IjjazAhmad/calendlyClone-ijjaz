import React from "react";
import { UseFormRegister, FieldValues, FieldError } from "react-hook-form";

interface InputProps {
  label: string;
  register: UseFormRegister<FieldValues>;
  placeholder: string;
  type: string;
  fieldName: string;
  errors: FieldError | undefined;
  message: string | undefined;
}

const InputZ: React.FC<InputProps> = ({
  label,
  register,
  placeholder,
  type,
  fieldName,
  errors,
  message,
}) => {
  return (
    <>
      <label className="text-black font-bold text-sm" htmlFor={fieldName}>
        {label}
      </label>
      <input
        className="px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]"
        style={{ outline: "none" }}
        {...register(fieldName)}
        placeholder={placeholder}
        type={type}
      />
      {errors && message && (
        <p className="text-danger text-[10px] font-bold">{message}</p>
      )}
    </>
  );
};

export default InputZ;
