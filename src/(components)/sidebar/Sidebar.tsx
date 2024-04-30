"use client";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  adminCenter,
  analytics,
  arrowClose,
  clock,
  events,
  logo,
  plus,
} from "../../../public/images";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-[260px]  flex-col  bg-white-default duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between  bg-white-default">
        <Link href="/" className="py-[20px] ps-[20px] pe-[71px]">
          <Image width={132} height={32} src={logo} alt="Logo" priority />
        </Link>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block pe-7"
        >
          <Image width={16} height={16} src={arrowClose} alt="close" priority />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear bg-white">
        <nav className=" px-2">
          <div>
            <Link
              href={"#"}
              className="flex items-center justify-center bg-primary text-white-default w-full rounded-[40px] px-[11px] py-[17px] my-[10px] text-center"
            >
              <Image width={16} height={16} src={plus} alt="+" priority />
              Create
            </Link>
            <div className="relative h-[78vh] flex flex-col justify-between">
              <ul className=" flex flex-col">
                <li>
                  <Link
                    href="/"
                    className={`group relative flex items-center gap-5 rounded-lg px-4 py-2 font-bold text-sm text-black duration-300 ease-in-out hover:bg-gray hover:text-primary ${
                      pathname.includes("about") && "bg-gray "
                    }`}
                  >
                    <Image
                      width={16}
                      height={16}
                      src={events}
                      alt="+"
                      priority
                    />
                    Scheduled events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/analytics"
                    className={`group relative flex items-center gap-5 rounded-lg px-4 py-2 font-bold text-sm text-black duration-300 ease-in-out hover:bg-gray hover:text-primary ${
                      pathname.includes("settings") && "bg-gray text-primary"
                    }`}
                  >
                    <Image
                      width={16}
                      height={16}
                      src={analytics}
                      alt="+"
                      priority
                    />
                    Analytics
                  </Link>
                </li>
              </ul>
              <ul className="bottom-0">
                <li>
                  <Link
                    href="/setavailability"
                    className={`group relative flex items-center gap-5 rounded-lg px-4 py-2 font-bold text-sm text-black duration-300 ease-in-out hover:bg-gray hover:text-primary ${
                      pathname.includes("availability") && "bg-gray "
                    }`}
                  >
                    <Image
                      width={16}
                      height={16}
                      src={clock}
                      alt="+"
                      priority
                    />
                    Availability
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`group relative flex items-center gap-5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out hover:bg-gray hover:text-primary ${
                      pathname.includes("#") && "bg-gray text-primary"
                    }`}
                  >
                    <Image
                      width={16}
                      height={16}
                      src={adminCenter}
                      alt="+"
                      priority
                    />
                    Admin center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
