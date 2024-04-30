import React from 'react'
type TimeSlotBtnProps={
  label: string;
  onClick: () => void;
}
export default function TimeSlotBtn({label,onClick}:TimeSlotBtnProps) {
  return (
    <button
    className=" text-primary font-bold text-[14px] border border-primaryII  rounded-[4px] mb-[10px] w-[208px] h-[52px]  focus:bg-primary focus:text-white-default"
    onClick={onClick}
  >{label}</button>
  )
}
