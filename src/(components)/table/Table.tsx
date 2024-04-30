"use client";
import { meeting } from "@/constants/types/allTypes";
import { getUserFun } from "@/store/slices/user";
import { RootState } from "@/store/store";
import { getSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const event = ["Events", "Availability"];
type Props = {
  name: string;
  path: string;
};
export default function Table({ name, path }: Props) {
  const meeting = useSelector((state: RootState) => state.user.meeting);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUserData = async () => {
      const id = await handleClick();
      if (id) {
        dispatch(getUserFun(id) as any);
      }
    };

    fetchUserData();
  }, []);

  const handleClick = async () => {
    const session = await getSession();
    const id = session?.user?.id;
    return id;
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <div className="w-full">
            <Link
              href={path}
              className="appearance-none   border-gray-300 py-2 px-3  border border-borderClr-2 rounded-lg text-black font-normal text-[16px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
            >
              {name}
            </Link>
          </div>
        </div>
        <div>
          <p className="mt-1 text-sm text-gray-700 float-end">
            Display {meeting.length} of {meeting.length} availability
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-borderClr-1 md:rounded-lg">
              <table className="min-w-full divide-y divide-borderClr-1">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      <span className="font-extrabold text-xl">
                        Events detail
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-borderClr-1 bg-white">
                  {meeting.map((val: meeting, i) => {
                    return (
                      <tr>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-bold text-gray-900">
                                {val.selectedTime}
                              </div>
                              <div className="text-sm text-gray-700">
                                {val.selectedDate}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm font-bold text-gray-900">
                            {val.schedulerName}
                          </div>
                          <div className="text-sm text-gray-900 ">
                            Event Type 30 minute meeting
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            1 host 
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <a href="#" className="text-gray-700">
                            Detail
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
