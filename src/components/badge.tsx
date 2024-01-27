import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  text?: string;
  bg?: string;
  children?: React.ReactNode;
  style?: string;
}
function Badge(props: BadgeProps) {
  return (
    <div className="flex justify-between text-sm font-medium items-center whitespace-nowrap">
      <div
        className={cn(
          "flex items-center gap-1 px-2 py-1 bg-geo-grey rounded-lg text-white",
          props.bg,
        )}
      >
        {props.children}
        <h4 className={`${props.style || "text-slate-400"}`}>
          {props.text || "text"}
        </h4>
      </div>
    </div>
  );
}

export default Badge;
