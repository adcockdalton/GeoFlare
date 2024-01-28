"use client";

import React, { useMemo } from "react";
// import type { NextPage } from "next";
// import styles from "../styles/Home.module.css";
import Badge from "@/components/badge";
import ChatBot from "@/components/chat/chatbot";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { Loader } from "@googlemaps/js-api-loader";
import {
  CircleF,
  GoogleMap,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { Route } from "lucide-react";

function Map() {
  const libraries: ("places" | "drawing" | "geometry" | "visualization")[] = [
    "places",
  ];
  const mapCenter = useMemo(() => ({ lat: 33.739755, lng: -117.751285 }), []);
  const house1Center = useMemo(
    () => ({ lat: 33.73753232504521, lng: -117.75110662338541 }),
    [],
  );

  const house2Center = useMemo(
    () => ({ lat: 33.73921856606024, lng: -117.7532953058211 }),
    [],
  );

  const schoolCenter = useMemo(
    () => ({ lat: 33.73397237402972, lng: -117.75041997787818 }),
    [],
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      mapTypeId: "satellite",
      clickableIcons: true,
      scrollwheel: false,
    }),
    [],
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <main className="flex bg-geo-grey px-8 pb-8  rounded-xl  pt-16 overflow-y-auto h-full gap-4 w-full relative overflow-none">
      <ChatBot />
      <div className="rounded-xl ">
        <GoogleMap
          options={mapOptions}
          zoom={15}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.SATELLITE}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          onLoad={() => console.log("Map Component Loaded...")}
        >
          <MarkerF
            position={mapCenter}
            onLoad={() => console.log("Marker Loaded")}
          />

          <MarkerF
            position={house1Center}
            onLoad={() => console.log("Marker Loaded")}
          />

          <MarkerF
            position={house2Center}
            onLoad={() => console.log("Marker Loaded")}
          />

          <MarkerF
            position={schoolCenter}
            onLoad={() => console.log("Marker Loaded")}
          />
          {[1000, 2200].map((radius, idx) => {
            return (
              <CircleF
                key={idx}
                center={mapCenter}
                radius={radius}
                onLoad={() => console.log("Circle Load...")}
                options={{
                  fillColor: radius > 1000 ? "green" : "red",
                  strokeColor: radius > 1000 ? "green" : "red",
                  strokeOpacity: 0.8,
                }}
              />
            );
          })}
        </GoogleMap>
      </div>
      <div className="relative flex h-min">
        <Card className="bg-geo-black border-none">
          <CardContent className="flex items-center h-48">
            <button className="flex house-image-button"></button>
          </CardContent>
          <CardHeader>
            <CardTitle className="flex w-40 text-white">
              6996 Petr Avenue, Irvine CA
            </CardTitle>
            <CardDescription className="flex items-center">
              <button className="warning-image-button"></button>
              <span className="ml-2 text-yellow">moderate risk</span>
            </CardDescription>
          </CardHeader>
          <CardFooter className=" flex m-1">
            <Table className="flex text-white">
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
      <div className="relative flex h-min">
        <Card className="bg-geo-black border-none">
          <CardHeader>
            <Badge text="Risk rating"></Badge>
            <CardTitle className="text-white">Moderate Risk</CardTitle>
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
                <TableRow className="shadow rounded-lg text-white">
                  <TableCell className="font-medium">harsh</TableCell>
                  <TableCell className="font-medium">24km</TableCell>
                  <TableCell className="font-medium">4min</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardFooter>
        </Card>
      </div>
      <Button
        className="flex gap-2 py-8 px-4 text-white absolute text-xl bg-geo-teal bottom-8 right-8"
        // onClick={() => uploadFile()}
      >
        <Route></Route>Generate Optimal Route
      </Button>
    </main>
  );
}

export default Map;
