import React from "react";
type btnType = {
  label: string;
  loading: boolean;
  onClick: () => void;
};
export default function PrimaryBtn({ loading, onClick, label }: btnType) {
  return (
    <>
      {loading ? (
        <button
          type="button"
          className=" text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]"
          disabled
        >
          loading...
        </button>
      ) : (
        <button
          type="submit"
          onClick={onClick}
          className="  text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]  "
        >
          {label}
        </button>
      )}
    </>
  );
}
