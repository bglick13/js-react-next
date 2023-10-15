"use client";
import React from "react";

type Color = "red" | "green" | "blue";

export function ReactExample() {
  const [color, setColor] = React.useState<Color>("red");

  return (
    <div className={`bg-${color}-400 p-4 rounded-md`}>
      <h1 className="text-2xl font-bold">React Example</h1>
      <div className="flex lg:flex-row flex-col gap-4 w-fit">
        <button
          className="bg-red-400 p-4 rounded-md drop-shadow-md"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-green-400 p-4 rounded-md drop-shadow-md"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="bg-blue-400 p-4 rounded-md drop-shadow-md"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
      </div>
    </div>
  );
}
