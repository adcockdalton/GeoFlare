"use client";

import React, {
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Badge from "@/components/badge";
import Chat from "@/components/chat/chat";
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
import {
  CircleF,
  GoogleMap,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  child,
  get,
  getDatabase,
  push,
  ref,
  set,
  update,
} from "firebase/database";
import { motion } from "framer-motion";
import { Route } from "lucide-react";
import { animated, easings, useSpring } from "react-spring";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "geoflare.firebaseapp.com",
  databaseURL: "https://geoflare-default-rtdb.firebaseio.com",
  projectId: "geoflare",
  storageBucket: "geoflare.appspot.com",
  messagingSenderId: "149802851296",
  appId: "1:149802851296:web:c86016fe23157afa5b6985",
  measurementId: "G-HKFQSQM52X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const missionRef = ref(database, "mission");

const AnimatedCircle = animated(CircleF);

async function convertImageToBase64(url: string): Promise<string> {
  // Fetch the image
  const response = await fetch(url);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
function Map() {
  const [base64Image, setBase64Image] = useState("");
  const [image, setImage] = useState("");
  const [rad, setRad] = useState(10);
  const [boxes, setBoxes] = useState([]);
  const ref = useRef<any>();
  const imageUrl =
    "https://maps.googleapis.com/maps/api/staticmap?center=Golden%Gate%Bridge&zoom=17&size=500x500&key=AIzaSyCWNp13sfV5NkyDvm_81lWnT4CvChjw9sM";

  useEffect(() => {
    convertImageToBase64(imageUrl)
      .then((base64) => {
        setBase64Image(base64);
        console.log(base64);
      })
      .catch((error) => console.error(error));
  }, []);

  const mapCenter = useMemo(
    () => ({ lat: 33.74503670122371, lng: -117.74688633807939 }),
    [],
  );

  const house2Center = useMemo(
    () => ({ lat: 33.73921856606024, lng: -117.7532953058211 }),
    [],
  );

  const house3Center = useMemo(
    () => ({ lat: 33.740958, lng: -117.743388 }),
    [],
  );

  const house4Center = useMemo(
    () => ({ lat: 33.74174935389506, lng: -117.7380577830899 }),
    [],
  );

  const house5Center = useMemo(
    () => ({ lat: 33.74015345684956, lng: -117.73795506714471 }),
    [],
  );
  const house6Center = useMemo(
    () => ({ lat: 33.752066, lng: -117.747864 }),
    [],
  );

  const house7Center = useMemo(() => ({ lat: 33.747891, lng: -117.75333 }), []);

  const house8Center = useMemo(
    () => ({ lat: 33.737464774134956, lng: -117.74992465648853 }),
    [],
  );

  const schoolCenter = useMemo(
    () => ({ lat: 33.73397237402972, lng: -117.75041997787818 }),

    [],
  );

  // const mapCenter = useMemo(
  //   () => ({ lat: 34.26298363160121, lng: -116.88495070901917 }),

  //   [],
  // );
  async function getCV() {
    const resp = await axios.get(
      `/api/inference?center=${mapCenter.lat},${mapCenter.lng}&zoom=20`,
    );
    console.log(resp.data);
    setImage("data:image/png;base64," + resp.data.image);
    setBoxes(resp.data.boxes);
  }

  const [showGroundView, setShowGroundView] = useState(false);

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
  });
  const pulsateAnimation = useSpring({
    from: { radius: 300 },
    to: { radius: 1000 },
    config: {
      duration: 2000,
      easing: easings.easeInOutCirc,
    },
    onChange(result) {
      setRad(result.value.radius);
    },
    loop: true,

    // reverse: true,
  });

  // showGroundView
  const handleMarkerClick = () => {
    console.log("Card clicked");
    setShowGroundView((showGroundView) => !showGroundView);
  };

  const getImage = () => {
    console.log("image received");
    // <img src="https://maps.googleapis.com/maps/api/staticmap?center=59.914002,10.737944&zoom=15&size=400x400&key=AIzaSyCWNp13sfV5NkyDvm_81lWnT4CvChjw9sM">
  };
  const uploadScreenshot = async () => {};

  const [missions, setMissions] = useState<any[]>([]);

  useEffect(() => {
    getMissions();
  }, [missions]);

  function getMissions() {
    get(missionRef).then((snapshot) => {
      const updatedMissions: any[] = [];
      snapshot.forEach((childSnapshot) => {
        updatedMissions.push(childSnapshot.val());
      });
      setMissions(updatedMissions);
    });
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <main className="flex bg-geo-grey px-8 pb-8  rounded-xl  pt-16 overflow-y-auto h-full justify-between w-full relative overflow-none">
      <div className="flex gap-4">
        {/* <div>{base64Image && <img src={base64Image} alt="Map" />}</div> */}

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
              icon={{
                url: "firesymbol_blue.svg",
                scaledSize: new google.maps.Size(33, 33),
              }}
            />
            <MarkerF
              position={schoolCenter}
              onLoad={() => console.log("Marker Loaded")}
              icon={{
                url: "house_1.svg",
                scaledSize: new google.maps.Size(66, 66),
              }}
            />
            <MarkerF
              position={house3Center}
              onLoad={() => console.log("Marker Loaded")}
              icon={{
                url: "house_1.svg",
                scaledSize: new google.maps.Size(66, 66),
              }}
            />
            <MarkerF
              position={house4Center}
              onLoad={() => console.log("Marker Loaded")}
              icon={{
                url: "house_1.svg",
                scaledSize: new google.maps.Size(66, 66),
              }}
            />
            <MarkerF
              position={house5Center}
              onLoad={() => console.log("Marker Loaded")}
              icon={{
                url: "house_1.svg",
                scaledSize: new google.maps.Size(66, 66),
              }}
              onClick={handleMarkerClick}
            />
            <MarkerF
              position={house6Center}
              onLoad={() => console.log("Marker Loaded")}
              icon={{
                url: "house_1.svg",
                scaledSize: new google.maps.Size(66, 66),
              }}
            />
            <MarkerF
              position={house7Center}
              onLoad={() => console.log("Marker Loaded")}
              icon={{
                url: "house_1.svg",
                scaledSize: new google.maps.Size(66, 66),
              }}
              title="Hello World!"
            />

            <AnimatedCircle
              center={mapCenter}
              radius={rad}
              onLoad={() => console.log("Circle Load...")}
              options={{
                fillColor: pulsateAnimation.radius
                  .to((radius) => (radius > 2500 ? "green" : "dodgerblue"))
                  .get(),
                fillOpacity: 0.6,
                strokeColor: pulsateAnimation.radius
                  .to((radius) => (radius > 2500 ? "green" : "dodgerblue"))
                  .get(),
                strokeOpacity: 0.6,
              }}
            />
          </GoogleMap>
        </div>
        <Chat />
        {showGroundView && (
          <Card className="bg-geo-black border-none rounded-tl-none relative flex flex-col h-min">
            <CardTitle className="absolute -top-9 p-2 bg-geo-dark text-white text-sm font-medium px-8 rounded-t-lg">
              ground view
            </CardTitle>
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
            <CardFooter className=" flex">
              <Table className="flex text-white">
                <TableBody className="w-full">
                  <TableRow className="shadow   flex justify-between">
                    <TableCell className="font-medium">size</TableCell>
                    <TableCell className="text-right">240sqft</TableCell>
                  </TableRow>
                  <TableRow className="shadow rounded-lg flex justify-between">
                    <TableCell className="font-medium">type</TableCell>
                    <TableCell className="text-right">Townhouse</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardFooter>
          </Card>
        )}
      </div>
      <div className="relative flex h-min max-w-[40rem]  ">
        <Card className="bg-geo-black border-none max-h-[30vh] overflow-y-auto">
          <CardHeader className="py-4">
            <CardTitle className="text-white">Missions List</CardTitle>
          </CardHeader>
          <CardFooter className="m-1">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hover:text-geo-black text-geo-teal font-bold custom-text-color">
                    Missions
                  </TableHead>
                  <TableHead className="hover:text-geo-black font-bold custom-text-color">
                    Difficulty
                  </TableHead>
                  <TableHead className="hover:text-geo-black font-bold custom-text-color">
                    Time
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {missions.map((mission) => (
                  <TableRow
                    key={mission.suggestion}
                    className="shadow rounded-lg text-white"
                  >
                    <TableCell className="font-medium">
                      {mission.suggestion}
                    </TableCell>
                    <TableCell className="font-medium">
                      {mission.difficulty}
                    </TableCell>
                    <TableCell className="font-medium">
                      {mission.launch_time}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardFooter>
        </Card>
      </div>
      <div className="absolute bottom-56 right-8">
        <CardTitle className="absolute -top-9 py-2 bg-geo-dark text-white text-sm font-medium px-8 rounded-t-xl">
          fauna detection
        </CardTitle>
        {image && (
          <motion.div
            className="w-[30rem] h-[30rem] relative outline-2 outline rounded-xl rounded-t-lg overflow-clip"
            animate={{ y: 0, opacity: 100 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img
              src={image}
              width="1920"
              height="1080"
              className="z-50 shadow-2xl  outline-geo-teal   aspect-square w-full h-full  right-8 bottom-52  ring-black filter  rounded-tl-none  "
              alt="Map"
              ref={ref}
            />
            {boxes?.map((box) => (
              <div
                className="hover:opacity-50 transition-opacity duration-300 ease-in-out cursor-pointer filter brightness-200"
                style={{
                  zIndex: 100,
                  position: "absolute",
                  top: (box[1] / 640) * ref?.current?.height,
                  left: (box[0] / 640) * ref?.current?.width,
                  width: (box[2] / 640) * ref?.current?.width,
                  height: (box[3] / 640) * ref?.current?.height,
                  border: "4px solid dodgerblue",
                  backgroundColor: "rgba(255,255,255,0.4)",
                }}
              ></div>
            ))}
          </motion.div>
        )}
      </div>
      <Button
        className="flex gap-2 py-8 px-4 text-white absolute text-xl bg-geo-teal bottom-8 right-8"
        // onClick={() => uploadFile()}
      >
        <Route></Route>Generate Optimal Route
      </Button>
      <Button
        className="flex gap-2 py-8 px-4 text-white absolute text-xl bg-red-500 my-6 bottom-20 right-8"
        onClick={() => getCV()}
      >
        Analyze Fire
      </Button>
    </main>
  );
}

export default Map;
