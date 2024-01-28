import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type PropertyProps = {
  address: string;
  owner: string;
  risks: string;
  image_url: string;
};

const properties = [
  {
    address: "123 Main St",
    owner: "John Doe",
    risks: "High proximity to at-risk vegetation",
    image_url: "placeholder-image.jpg",
  },
  {
    address: "456 Elmwawd St",
    owner: "Jane Smith",
    risks: "Low proximity to clear roads",
    image_url: "placeholder-image.jpg",
  },
  {
    address: "123 Maiawdn St",
    owner: "John Doe",
    risks: "High proximity to at-risk vegetation",
    image_url: "placeholder-image.jpg",
  },
  {
    address: "456 Ewmawd St",
    owner: "Jane Smith",
    risks: "Low proximity to clear roads",
    image_url: "placeholder-image.jpg",
  },
  {
    address: "123 Maiawdn St",
    owner: "John Doe",
    risks: "High proximity to at-risk vegetation",
    image_url: "placeholder-image.jpg",
  },
  {
    address: "456 Elawdm St",
    owner: "Jane Smith",
    risks: "Low proximity to clear roads",
    image_url: "placeholder-image.jpg",
  },
  {
    address: "123 awdMaiawdn St",
    owner: "John Doe",
    risks: "High proximity to at-risk vegetation",
    image_url: "placeholder-image.jpg",
  },
  {
    address: "456 Elaawwdm St",
    owner: "Jane Smith",
    risks: "Low proximity to clear roads",
    image_url: "placeholder-image.jpg",
  },
  {
    address: "123 Mainawdawd St",
    owner: "John Doe",
    risks: "High proximity to at-risk vegetation",
    image_url: "placeholder-image.jpg",
  },
  {
    address: "456 Elawdaawdm St",
    owner: "Jane Smith",
    risks: "Low proximity to clear roads",
    image_url: "placeholder-image.jpg",
  },
  {
    address: "123 Mawdawdin St",
    owner: "John Doe",
    risks: "High proximity to at-risk vegetation",
    image_url: "placeholder-image.jpg",
  },
  {
    address: "456 Elaawdwdm St",
    owner: "Jane Smith",
    risks: "Low proximity to clear roads",
    image_url: "placeholder-image.jpg",
  },
  {
    address: "789 Oaawdk Ave",
    owner: "Mike Johnson",
    risks: "Moderate proximity to fire zone",
    image_url: "placeholder-image.jpg",
  },
];

function Properties() {
  return (
    <div className="h-full text-geo-grey bg-geo-white p-8 rounded-xl">
      <div className="text-4xl pb-2 rounded-xl">Properties at Risk</div>
      <svg width="400" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 10 Q50 0,100 10 Q150 20,200 10 Q250 0,300 10 Q350 20,400 10"
          stroke="#12BADF"
          stroke-width="4"
          fill="none"
        />
      </svg>
      <ScrollArea className="h-full">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {properties.map((property, index) => (
            <Property
              key={index}
              address={property.address}
              owner={property.owner}
              risks={property.risks}
              image_url={property.image_url}
            />
          ))}
        </Accordion>
      </ScrollArea>
    </div>
  );
}

export function Property({ address, owner, risks, image_url }: PropertyProps) {
  return (
    <AccordionItem value={address} className="border-geo-grey">
      <AccordionTrigger>
        <span>
          <b>{address}</b> - {owner}
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <img src={image_url} alt="Image" />
      </AccordionContent>
      <div className="flex justify-between items-end">
        {" "}
        {/* Change 'items-center' to 'items-end' */}
        <AccordionContent>{risks}</AccordionContent>
        <AccordionContent>
          <Button variant="destructive">Send Alert</Button>
        </AccordionContent>
      </div>
    </AccordionItem>
  );
}

export default Properties;
