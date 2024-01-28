import React from "react";
import Properties from "@/components/property-panel";
import Strategies from "@/components/strategy-panel";

function DashboardPage() {
  return (
    <div className=" flex relative bg-geo-grey p-8 pb-0 rounded-t-xl flex-1">
      <div className="bg-geo-white flex-1 rounded-t-xl">
        <Properties />
      </div>
      <div className="w-1/3">
        <Strategies />
      </div>
    </div>
  );
}

export default DashboardPage;
