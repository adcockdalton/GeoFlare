import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  url: string;
  selected: boolean;
}
function SidebarButton(props: Props) {
  return (
    <Link href={"/" + props.url}>
      <Image
        alt="sidebar button"
        priority
        width={50}
        height={50}
        className={
          "relative p-2 rounded-lg  aspect-square " +
          (props.selected ? "bg-geo-teal" : null)
        }
        src={props.src}
      ></Image>
    </Link>
  );
}

export default SidebarButton;
