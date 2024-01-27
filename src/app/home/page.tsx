"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Badge from "@/components/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Clock, HomeIcon } from "lucide-react";

function Home() {
  const router = useRouter();

  const handleRedirectClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="flex flex-col  bg-geo-dark px-8 pb-8  rounded-xl  pt-16 overflow-y-auto h-full items-center ">
      <div className=" flex flex-col w-3/5 gap-8 relative">
        <div className="flex justify-center">
          <h1 className="text-4xl font-medium text-center text-white">
            Enter a location. Watch the <br />
            magic happen
          </h1>
        </div>
        <div className="flex items-center justify-between gap-2 w-full">
          <Input
            type="input"
            placeholder="enter a location"
            className="bg-geo-grey border-0 outline-none text-white text-xl py-8 px-6 placeholder:text-slate-500"
          />
          <Button className="bg-geo-teal h-full text-lg">Create Map</Button>
        </div>

        <Card className=" bg-geo-dark border-geo-grey ">
          <CardHeader>
            <CardTitle className="text-white text-2xl font-medium">
              Critical locations near you
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between  ">
            <Card
              className=" flex w-full items-center relative  bg-geo-someotherfuckignshadeofgrey cursor-pointer hover:shadow-md border-geo-grey border-2 p-6 gap-4  "
              //   onClick={() => handleRedirectClick("/unknown")}
            >
              <div className="flex justify-between  h-full flex-col w-full gap-2 overflow-x-auto">
                <CardTitle className="text-white">
                  Anteatery Hills, Irvine
                </CardTitle>

                <div className="flex justify-start gap-4 text-sm font-medium items-center w-full ">
                  <Badge text="23 minutes">
                    <Clock></Clock>
                  </Badge>
                  <Badge
                    text="moderate risk"
                    bg="bg-yellow-600"
                    style="text-yellow-300"
                  >
                    <AlertTriangle fill="orange"></AlertTriangle>
                  </Badge>
                  <Badge text="28 homes at risk" bg="" style="">
                    <HomeIcon fill="orange"></HomeIcon>
                  </Badge>
                </div>
              </div>
              <Button className="bg-geo-light  text-lg">Launch</Button>
            </Card>
          </CardContent>
        </Card>
      </div>
      {/* <div className="container flex items-center justify-between">
        <Card>
          <CardContent className="flex items-center h-96">
            <button className="house-image-button"></button>
          </CardContent>
          <CardHeader>
            <CardTitle>6996 Petr Avenue, Irvine CA</CardTitle>
            <CardDescription className="flex items-center">
              <button className="warning-image-button"></button>
              <span className="ml-2">moderate risk</span>
            </CardDescription>
          </CardHeader>
          <CardFooter className="m-1">
            <Table>
              <TableBody>
                <TableRow className="shadow rounded-lg">
                  <TableCell className="font-medium">size</TableCell>
                  <TableCell className="text-right">240sqft</TableCell>
                </TableRow>
                <TableRow className="shadow rounded-lg">
                  <TableCell className="font-medium">type</TableCell>
                  <TableCell className="text-right">Townhouse</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardFooter>
        </Card>
      </div> */}
    </div>
  );
}

export default Home;
