import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rocket } from "lucide-react";

function Strategies() {
  const actions = [
    {
      title: "Action 1",
      action: "Do something",
      image_url: "placeholder-image.jpg",
    },
    {
      title: "Action 2",
      action: "Do something else",
      image_url: "placeholder-image.jpg",
    },
  ];

  return (
    <div className="h-full text-geo-white bg-geo-grey p-8">
      <div className="text-4xl pb-8 pr-0 flex items-end">
        <div className="flex-col flex">
          <div>Immediate</div>
          <div>Strategies</div>
        </div>
        <div>
          <Rocket size={75} className="pl-0"></Rocket>
        </div>
      </div>
      <div className="content">
        <div className="space-y-4">
          {actions.map((action, index, image_url) => (
            <Action
              key={index}
              title={action.title}
              action={action.action}
              image_url={action.image_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type ActionProps = {
  title: string;
  action: string;
  image_url: string;
};

export function Action({ title, action, image_url }: ActionProps) {
  return (
    <Card className="w-full outline-geo-teal outline-2 outline border-none bg-geo-someotherfuckignshadeofgrey text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="text-slate-400">
              {action}
            </CardDescription>
          </div>
          <Button className="bg-geo-teal text-white text-lg">
            <p>Launch</p>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <img src={image_url} alt="Image" />
      </CardContent>
    </Card>
  );
}

export default Strategies;
