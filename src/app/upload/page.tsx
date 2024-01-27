"use client"
import * as React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function UploadPage() {
    const x = 5

    const router = useRouter()

    const handleRedirectClick = (link: string) => {
        router.push(link)
    }

    return (
        <div>
            <div className="flex justify-center my-12 text-4xl font-bold">
                <h1>Choose a Location</h1>
            </div>
            <div>
                <div className="container flex items-center justify-between">
                    <Input type="input location" placeholder="input location" />
                    <Button>
                        Launch
                    </Button>
                </div>
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
                    <CardContent className="flex items-end justify-center">
                    </CardContent>
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
                    <CardContent className="flex items-end justify-center">
                    </CardContent>
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
                    <CardContent className="flex items-end justify-center">
                    </CardContent>
                </Card>
            </div>

        </div>
    )

}




export default UploadPage