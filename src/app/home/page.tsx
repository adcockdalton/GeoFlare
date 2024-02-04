"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  faClock,
  faHouse,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowUpRightIcon } from "lucide-react";

function Home() {
  //const router = useRouter();

  //const handleRedirectClick = (link: string) => {
  // router.push(link);
  //};

  return (
    <div
      className="flex flex-col  bg-geo-dark px-8 pb-8  rounded-xl  pt-16 overflow-y-auto h-full items-center "
      style={{ backgroundColor: "#14171A" }}
    >
      <div className=" flex flex-col w-3/5 gap-8 relative">
        <div className="flex justify-center">
          <h1 className="text-6xl font-medium text-center text-white">
            Enter a location. Watch the <br />
            magic happen
          </h1>
        </div>
        <div className="flex items-center justify-between gap-6 w-full">
          <Input
            type="input"
            placeholder="enter a location"
            className=" border-0 outline-none text-white text-xl py-10 px-6 placeholder:text-{rgba(255, 255, 255, .25)}"
            style={{ backgroundColor: "#1A1E20" }}
          />
          <Button className="bg-geo-teal h-full text-lg pl-7 pr-7">
            Create Map
          </Button>
        </div>

        <Card
          className="rounded-xl"
          style={{
            backgroundColor: "#14171A",
            border: "3px solid rgba(255, 255, 255, .1)",
          }}
        >
          <CardHeader>
            <CardTitle className="text-white text-2xl font-medium">
              Critical locations near you
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between  ">
            <Card
              className=" flex w-full items-center relative cursor-pointer hover:shadow-md border-geo-grey border-3 p-7 gap-8  "
              style={{
                backgroundColor: "#1C2125",
                border: "3px solid rgba(255, 255, 255, .1)",
              }}
              //   onClick={() => handleRedirectClick("/unknown")}
            >
              <div className="flex justify-between  h-full flex-col w-full gap-6 overflow-x-auto">
                <CardTitle className="text-white">
                  Anteatery Hills, Irvine
                </CardTitle>

                <div className="flex justify-start gap-4 text-sm font-medium items-center w-full ">
                  <div
                    className="tag items-center"
                    style={{ backgroundColor: "#3C3828", color: "#EEBB37" }}
                  >
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                    Moderate risk
                  </div>
                  <div
                    className="tag items-center"
                    style={{ backgroundColor: "", color: "#fff" }}
                  >
                    <FontAwesomeIcon icon={faClock} />
                    23 minutes
                  </div>
                  <div
                    className="tag items-center"
                    style={{ backgroundColor: "", color: "#fff" }}
                  >
                    <FontAwesomeIcon icon={faHouse} />
                    28 homes at risk
                  </div>
                </div>
              </div>
              <Link href="/map">
                <Button
                  className="  text-lg p-7"
                  style={{ backgroundColor: "#2A3139" }}
                >
                  Launch
                  <ArrowUpRightIcon />
                </Button>
              </Link>
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
