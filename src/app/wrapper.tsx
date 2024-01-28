"use client";

import React from "react";
import { usePathname } from "next/navigation";
import SidebarButton from "@/components/sidebar-button";

interface Props {
  children: React.ReactNode;
}
function Wrapper(props: Props) {
  const path = usePathname();
  return path != "/" ? (
    <main className="flex w-full relative overflow-y-auto  h-screen">
      <div className=" flex w-16 bg-geo-black flex-col py-32 px-2 gap-4 items-center">
        {/* <Link href={"/home"}>
          <Image
            width={30}
            height={30}
            className="relative bottom-20"
            src="/logo2.svg"
            alt="home"
          ></Image>
        </Link> */}
        <SidebarButton
          selected={path == "/"}
          src="/logo2.svg"
          url=""
        ></SidebarButton>
        <SidebarButton
          selected={path == "/home"}
          src="/houseicon.svg"
          url="home"
        ></SidebarButton>
        <SidebarButton
          selected={path == "/map"}
          src="/map2.svg"
          url="map"
        ></SidebarButton>
      </div>
      <div className="flex flex-1 flex-col bg-geo-black pr-4 pb-4   relative">
        <div className="flex justify-between my-3">
          <h2 className="text-white  font-semibold ">
            Petr Avenue, Irvine California
          </h2>
          <h2 className="text-white font-semibold ">
            <span className="text-geo-teal">live</span> • 2:04:23 PM [PST]
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
