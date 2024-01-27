import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Route, SendHorizontal } from "lucide-react";

function Map() {
  return (
    <main className="flex bg-geo-grey px-8 pb-8  rounded-xl  pt-16 overflow-y-auto h-full">
      <div className="flex flex-col bg-geo-black border-none  w-[25rem] py-4  relative rounded-e-xl rounded-bl-xl">
        <CardTitle className="absolute -top-9 p-2 bg-geo-dark text-white text-sm font-medium px-8 rounded-t-lg">
          Live Chat
        </CardTitle>
        <CardContent className="flex flex-col h-full justify-between py-0">
          <ScrollArea className="h-full">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <Avatar className="bg-slate-400 w-6 h-6 rounded-full"> </Avatar>
                <span className="text-lg text-white font-light">you</span>
              </div>
              <h2 className="w-full text-white bg-geo-light p-4 rounded-xl text-lg">
                how can i save the homes around this region?
              </h2>
              <div className="flex gap-2 items-center">
                <Avatar className="bg-slate-400 w-6 h-6 rounded-full"> </Avatar>
                <span className="text-lg text-white font-light">
                  strategist
                </span>
              </div>
              <div className="w-full flex flex-col text-white bg-geo-grey p-4 rounded-xl text-lg gap-6">
                <h1 className="text-xl font-semibold">
                  Immediate Strategies to Deploy
                </h1>
                <div className="flex flex-col gap-4">
                  <Card className="outline-geo-teal outline-2 outline border-none bg-geo-someotherfuckignshadeofgrey p-4">
                    <h2 className="text-white font-medium">
                      Launch support for Fighter Company A
                    </h2>
                    <CardContent className="flex p-0 flex-col gap-2 items-center">
                      <div className="flex justify-between text-sm font-medium items-center w-full">
                        <h4 className="text-slate-400">launch time</h4>
                        <div className="flex items-center gap-1 px-2 py-1 bg-geo-light rounded-lg text-white">
                          <Clock></Clock>
                          <h4>23 minutes</h4>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm font-medium items-center w-full">
                        <h4 className="text-slate-400">difficulty</h4>
                        <div className="flex items-center gap-1 px-2 py-1 bg-geo-light rounded-lg text-white">
                          <h4>hard</h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-none outline-geo-light outline-2 outline bg-geo-someotherfuckignshadeofgrey p-4 filter brightness-50">
                    <h2 className="text-white font-medium">
                      Launch support for Fighter Company A
                    </h2>
                    <CardContent className="flex p-0">
                      <div className="flex justify-between text-sm font-medium items-center w-full">
                        <h4 className="text-slate-400">launch time</h4>
                        <div className="flex items-center gap-1 px-2 py-1 bg-geo-light rounded-lg text-white">
                          <Clock></Clock>
                          <h4>23 minutes</h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Button className="bg-geo-teal text-white text-lg py-6">
                  Hand off to Chief
                </Button>
              </div>
            </div>
          </ScrollArea>
          <div className="flex gap-2">
            <Input
              className="gap-4 text-geo-white rounded-lg bg-geo-grey border-none text-lg py-6 placeholder-gray-800"
              placeholder="ask for assistance..."
            ></Input>
            <Button className="bg-geo-teal p-1 rounded-lg h-full aspect-square  ">
              <SendHorizontal></SendHorizontal>
            </Button>
          </div>
        </CardContent>
      </div>
      <div className="relative container flex items-center justify-between">
        <Card>
          <CardContent className="flex items-center h-48">
            <button className="flex house-image-button"></button>
          </CardContent>
          <CardHeader>
            <CardTitle className="flex w-40">6996 Petr Avenue, Irvine CA</CardTitle>
            <CardDescription className="flex items-center">
              <button className="warning-image-button"></button>
              <span className="ml-2">moderate risk</span>
            </CardDescription>
          </CardHeader>
          <CardFooter className=" flex m-1">
            <Table className="flex">
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
      <div className="container relative flex items-center justify-between p-4">
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
      </div>
      <Button className="flex gap-2 py-8 px-4 text-white absolute text-xl bg-geo-teal bottom-8 right-8">
        <Route></Route>Generate Optimal Route
      </Button>
    </main>
  );
}

export default Map;
