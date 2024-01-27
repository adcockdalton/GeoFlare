import React from 'react';
import { Rocket } from 'lucide-react';
import { Button } from "@/components/ui/button"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Url } from 'next/dist/shared/lib/router/router';


function Properties() {
    const properties = [
        { address: "123 Main St", owner: "John Doe", risks: "High proximity to at-risk vegetation", image_url: "placeholder-image.jpg" },
        { address: "456 Elm St", owner: "Jane Smith", risks: "Low proximity to clear roads", image_url: "placeholder-image.jpg" },
        // Add more property objects here
    ];

    return (
        <div className="h-full text-geo-grey bg-geo-white p-8">
            <div className="text-4xl pb-8">
                Properties at Risk
            </div>
            <div>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {properties.map((property, index) => (
                        <Property key={index} address={property.address} owner={property.owner} risks={property.risks} image_url={property.image_url} />
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

type PropertyProps = {
    address: string;
    owner: string;
    risks: string;
    image_url: string;
};

export function Property({ address, owner, risks, image_url }: PropertyProps) {
    return (
        <AccordionItem value={address} className="border-geo-grey">
            <AccordionTrigger>
                <span><b>{address}</b> - {owner}</span>
            </AccordionTrigger>
            <AccordionContent>
                <img src={image_url} alt="Image" />
            </AccordionContent>
            <div className="flex justify-between items-end"> {/* Change 'items-center' to 'items-end' */}
                <AccordionContent>
                    {risks}
                </AccordionContent>
                <AccordionContent>
                    <Button variant="destructive">Send Alert</Button>
                </AccordionContent>
            </div>
        </AccordionItem>
    )
};

export default Properties;
