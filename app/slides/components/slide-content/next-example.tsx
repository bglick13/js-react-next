import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Color = "red" | "green" | "blue";

export function NextExample({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const color = searchParams?.color as Color;
  return (
    <div className={`bg-${color}-400 p-4 rounded-md`}>
      <h1 className="text-2xl font-bold">Next Example</h1>
      <div className="flex lg:flex-row flex-col gap-4 w-fit">
        <Button className="bg-red-400 p-4 rounded-md drop-shadow-md">
          <Link href={`/slides/6?color=red`}>Red</Link>
        </Button>
        <Button className="bg-green-400 p-4 rounded-md drop-shadow-md">
          <Link href={`/slides/6?color=green`}>Green</Link>
        </Button>
        <Button className="bg-blue-400 p-4 rounded-md drop-shadow-md">
          <Link href={`/slides/6?color=blue`}>Blue</Link>
        </Button>
      </div>
    </div>
  );
}
