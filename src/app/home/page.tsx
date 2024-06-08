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

/**
 * Renders the Home component.
 *
 * This component displays a form where users can enter a location and create a map.
 * It also shows a list of critical locations near the user, along with their risk level, time, and number of homes at risk.
 *
 * @returns The rendered Home component.
 */
function Home() {
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
            >
              <div className="flex justify-between  h-full flex-col w-full gap-6 overflow-x-auto">
                <CardTitle className="text-white">
                  Orchard Hills, Irvine, CA
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
                    735 homes at risk
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
          <CardContent className="flex items-center justify-between  ">
            <Card
              className=" flex w-full items-center relative cursor-pointer hover:shadow-md border-geo-grey border-3 p-7 gap-8  "
              style={{
                backgroundColor: "#1C2125",
                border: "3px solid rgba(255, 255, 255, .1)",
              }}
            >
              <div className="flex justify-between  h-full flex-col w-full gap-6 overflow-x-auto">
                <CardTitle className="text-white">
                  Temple City Park, Irvine, CA
                </CardTitle>

                <div className="flex justify-start gap-4 text-sm font-medium items-center w-full ">
                  <div
                    className="tag items-center"
                    style={{ backgroundColor: "#8a877e", color: "#f2cb66" }}
                  >
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                    Low risk
                  </div>
                  <div
                    className="tag items-center"
                    style={{ backgroundColor: "", color: "#fff" }}
                  >
                    <FontAwesomeIcon icon={faClock} />
                    65 minutes
                  </div>
                  <div
                    className="tag items-center"
                    style={{ backgroundColor: "", color: "#fff" }}
                  >
                    <FontAwesomeIcon icon={faHouse} />5 homes at risk
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
    </div>
  );
}

export default Home;
