"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SidebarButton from "@/components/sidebar-button";

interface Props {
  children: React.ReactNode;
}

function Wrapper(props: Props) {
  const path = usePathname();
  let currentTimeVal = getFormattedTime();
  const [currentTime, setCurrentTime] = useState(currentTimeVal); // Use prop value

  useEffect(() => {
    let animationFrameId: number;
    let isMounted = true;

    const updateTime = () => {
      if (isMounted) {
        setCurrentTime(getFormattedTime());
        animationFrameId = requestAnimationFrame(updateTime);
      }
    };

    if (typeof window !== "undefined") {
      animationFrameId = requestAnimationFrame(updateTime);
    }

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  function getFormattedTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  return path !== "/" ? (
    <main className="flex w-full relative overflow-y-auto  h-screen">
      <div className=" flex w-16 bg-geo-black flex-col py-32 px-2 gap-4 items-center">
        <SidebarButton
          selected={path === "/"}
          src="/logo2.svg"
          url=""
        ></SidebarButton>
        <SidebarButton
          selected={path === "/home"}
          src="/houseicon.svg"
          url="home"
        ></SidebarButton>
        <SidebarButton
          selected={path === "/map"}
          src="/map2.svg"
          url="map"
        ></SidebarButton>
      </div>
      <div className="flex flex-1 flex-col bg-geo-black pr-4 pb-4   relative">
        <div className="flex justify-between my-3">
          <h2 className="text-white  font-semibold text-lg ">
            Petr Avenue, Irvine California
          </h2>
          <h2 className="text-white font-semibold  text-lg">
            <div>
              {currentTime} [PST] • <span className="text-geo-teal">live</span>
            </div>
          </h2>
        </div>
        {props.children}
      </div>
    </main>
  ) : (
    props.children
  );
}

export default Wrapper;
