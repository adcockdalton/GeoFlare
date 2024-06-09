import React from "react";
import Properties from "@/components/property-panel";
import Strategies from "@/components/strategy-panel";

// UNUSED

function DashboardPage() {
  return (
    <div className=" overflow-y-clip h-full flex relative bg-geo-black pl-32 p-8 pb-0 rounded-xl flex-1">
      <div className=" bg-geo-white flex-1 pb-0 rounded-t-xl">
        <Properties />
      </div>
      <div className="w-[42%] pl-16 pb-0 rounded-t-xl">
        <Strategies />
      </div>
    </div>
  );
}

export default DashboardPage;
