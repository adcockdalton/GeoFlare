"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function UploadPage() {
  const router = useRouter();

  const handleRedirectClick = (link: string) => {
    router.push(link);
  };

  return (
    <div>
      <div className="flex justify-center my-12 text-4xl font-bold">
        <h1>Choose a Location</h1>
      </div>
      <div>
        <div className="container flex items-center justify-between">
          <Input type="input location" placeholder="input location" />
          <Button>Launch</Button>
        </div>
      </div>
      <div>
        <div className="container flex items-center justify-between p-4">
          <Card
            className="w-full relative h-[22rem] bg-gray-100 cursor-pointer hover:shadow-md dark:text-black dark:brightness-90 p-2"
            onClick={() => handleRedirectClick("/unknown")}
          >
            <CardHeader>
              <CardTitle>fire location</CardTitle>
              <CardDescription className="font-medium line-clamp-none md:line-clamp-1 xl:line-clamp-none text-md">
                fire information and location (melissa)
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-end justify-center"></CardContent>
          </Card>
        </div>

        <div className="container flex items-center justify-between p-4">
          <Card
            className="w-full relative h-[22rem] bg-gray-100 cursor-pointer hover:shadow-md dark:text-black dark:brightness-90 p-2"
            onClick={() => handleRedirectClick("/unknown")}
          >
            <CardHeader>
              <CardTitle>fire location</CardTitle>
              <CardDescription className="font-medium line-clamp-none md:line-clamp-1 xl:line-clamp-none text-md">
                fire information and location (melissa)
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-end justify-center"></CardContent>
          </Card>
        </div>

        <div className="container flex items-center justify-between p-4">
          <Card
            className="w-full relative h-[22rem] bg-gray-100 cursor-pointer hover:shadow-md dark:text-black dark:brightness-90 p-2"
            onClick={() => handleRedirectClick("/unknown")}
          >
            <CardHeader>
              <CardTitle>fire location</CardTitle>
              <CardDescription className="font-medium line-clamp-none md:line-clamp-1 xl:line-clamp-none text-md">
                fire information and location (melissa)
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-end justify-center"></CardContent>
          </Card>
        </div>
      </div>

      <div className="container flex items-center justify-between">
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
      </div>

      <div className="container flex items-center justify-between p-4">
        <Card>
          <CardContent className="flex items-center h-12">
            <p> Risk rating</p>
          </CardContent>
          <CardHeader>
            <CardTitle>Moderate Risk</CardTitle>
          </CardHeader>
          <CardFooter className="m-1">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold custom-text-color">
                    weather
                  </TableHead>
                  <TableHead className="font-bold custom-text-color">
                    distance from fire
                  </TableHead>
                  <TableHead className="font-bold custom-text-color">
                    time
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="shadow rounded-lg">
                  <TableCell className="font-medium">harsh</TableCell>
                  <TableCell className="font-medium">24km</TableCell>
                  <TableCell className="font-medium">4min</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardFooter>
        </Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default UploadPage;
