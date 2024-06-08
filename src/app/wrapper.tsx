'use client'
import React, { useEffect, useState } from "react";
import { usePathname }                from "next/navigation";
import SidebarButton                  from "@/components/sidebar-button";

/** 
 *  Define the Props interface that specifies the type of the props object that the Wrapper component receives
 *  which is a children prop of type React.ReactNode
*/
interface Props {
  children: React.ReactNode;
}

/**
 * Renders a wrapper component that includes a sidebar and content area.
 *
 * @param {Props} props - The component props.
 * @returns {JSX.Element} The rendered wrapper component.
 */
function Wrapper(props: Props) {
  const path = usePathname();
  const [currentTime, setCurrentTime] = useState("");

  // useEffect hook is used to perform side effects in functional components
  // It runs after the component has rendered and whenever its dependencies change
  useEffect(() => {
    // Check if the code is running in a browser environment
    // Set the initial value of currentTime state by calling the getFormattedTime function
    if (typeof window !== "undefined") {
      setCurrentTime(getFormattedTime());
    }

    // Start an interval that updates the currentTime state every second
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  //the empty array [] as the second argument to useEffect ensures that the effect runs only once after the component mounts
  //this is because the effect does not depend on any state or props, so it does not need to re-run when they change




  // Format the current time as HH:MM:SS
  /**
   * Returns the current time in a formatted string.
   *
   * @returns A string representing the current time in the format "HH:MM:SS".
   */
  function getFormattedTime() {
    const date    = new Date();
    const hours   = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  // Render the wrapper component
  return path !== "/" ? (
    <main className="flex w-full relative overflow-y-auto  h-screen">
      {/* Sidebar */}
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
      {/* Content Area */}
      <div className="flex flex-1 flex-col bg-geo-black pr-4 pb-4   relative">
        <div className="flex justify-between my-3">
          {/* Location */}
          <h2 className="text-white  font-semibold text-lg ">
            Petr Avenue, Irvine, California
          </h2>
          {/* Current Time */}
          <h2 className="text-white font-semibold  text-lg">
            <div>
              {currentTime} [PDT] • <span className="text-geo-teal">live</span>
            </div>
          </h2>
        </div>
        {/* Render the children components */}
        {props.children}
      </div>
    </main>
  ) : (
    // Render only the children components when the path is "/", which is the home page.
    props.children
    //these children components are the components that are wrapped by the Wrapper component, such as the DashboardPage component and the MapPage component
  );
}

export default Wrapper;
// The Wrapper component is a higher-order component that wraps other components to provide a common layout structure.