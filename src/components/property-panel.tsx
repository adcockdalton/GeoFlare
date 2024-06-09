import React from "react";
import Image from "next/image";
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

// UNUSED

const properties = [
  {
    address: "123 Main Street",
    owner: "John Doe",
    risks: "High proximity to at-risk vegetation and fire-prone area",
    image_url:
      "https://cdn.discordapp.com/attachments/1201073140189646898/1201073173685338132/House.png",
  },
  {
    address: "456 Elmwood Drive",
    owner: "Jane Smith",
    risks: "Low proximity to clear roads and limited emergency access",
    image_url:
      "https://cdn.discordapp.com/attachments/1201073140189646898/1201073173685338132/House.png",
  },
  // Add more properties here
  {
    address: "789 Oakwood Avenue",
    owner: "Mike Johnson",
    risks: "Moderate proximity to fire zone and dense forest",
    image_url:
      "https://cdn.discordapp.com/attachments/1201073140189646898/1201073173685338132/House.png",
  },
  // Add more properties here
  {
    address: "654 Maple Avenue",
    owner: "David Wilson",
    risks: "Low proximity to clear roads and limited water supply",
    image_url:
      "https://cdn.discordapp.com/attachments/1201073140189646898/1201073173685338132/House.png",
  },
  // Add more properties here
  {
    address: "321 Silly Street",
    owner: "Robert Thompson",
    risks: "High proximity to at-risk vegetation and steep slopes",
    image_url:
      "https://cdn.discordapp.com/attachments/1201073140189646898/1201073173685338132/House.png",
  },
  // Add more properties here
  {
    address: "321 Happy Street",
    owner: "Mabel Thompson",
    risks: "High proximity to at-risk vegetation and steep slopes",
    image_url:
      "https://cdn.discordapp.com/attachments/1201073140189646898/1201073173685338132/House.png",
  },
  // Add more properties here
  {
    address: "321 Wonky Street",
    owner: "Clarisse Thompson",
    risks: "High proximity to at-risk vegetation and steep slopes",
    image_url:
      "https://cdn.discordapp.com/attachments/1201073140189646898/1201073173685338132/House.png",
  },
  // Add more properties here
  {
    address: "789 Pine Street",
    owner: "Michael Johnson",
    risks: "Moderate proximity to fire zone and dense forest",
    image_url:
      "https://cdn.discordapp.com/attachments/1201073140189646898/1201073173685338132/House.png",
  },
  // Add more properties here
  {
    address: "654 Cedar Avenue",
    owner: "Daniel Wilson",
    risks: "Low proximity to clear roads and limited water supply",
    image_url:
      "https://cdn.discordapp.com/attachments/1201073140189646898/1201073173685338132/House.png",
  },
  // Add more properties here
  {
    address: "321 Oak Street",
    owner: "William Thompson",
    risks: "High proximity to at-risk vegetation and steep slopes",
    image_url:
      "https://cdn.discordapp.com/attachments/1201073140189646898/1201073173685338132/House.png",
  },
  // Add more properties here
  {
    address: "321 Elm Street",
    owner: "Olivia Thompson",
    risks: "High proximity to at-risk vegetation and steep slopes",
    image_url:
      "https://cdn.discordapp.com/attachments/1201073140189646898/1201073173685338132/House.png",
  },
  // Add more properties here
  {
    address: "321 Maple Street",
    owner: "Sophia Thompson",
    risks: "High proximity to at-risk vegetation and steep slopes",
    image_url:
      "https://cdn.discordapp.com/attachments/1201073140189646898/1201073173685338132/House.png",
  },
];

function Properties() {
  return (
    <div className="h-full text-geo-grey bg-geo-white p-8 pb-0 rounded-xl">
      <div className="text-6xl pb-2 rounded-xl">Properties at Risk</div>
      <svg width="400" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 10 Q50 0,100 10 Q150 20,200 10 Q250 0,300 10 Q350 20,400 10"
          stroke="#12BADF"
          stroke-width="4"
          fill="none"
        />
      </svg>
      <ScrollArea className=" h-full">
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
        <span className="text-lg">
          <b>{address}</b> - {owner}
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <Image src={image_url} alt="Image" />
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
