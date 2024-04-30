"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/(components)/sidebar/Sidebar";
import Header from "@/(components)/header/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-2 2xl:p-8 bg-white-100 min-h-[90vh]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
