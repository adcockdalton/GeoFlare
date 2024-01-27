import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
      <main className="flex h-full justify-center relative  bg-geo-grey"></main>
      <Link href="/upload">
        <Button className="flex gap-2 p-6 text-lg font-bold text-white bg-orange-500 rounded-full w-fit dark:text-black">
          <p>Get Started</p> <ArrowUpRightIcon />
        </Button>
      </Link>
    </div>
  );
}
