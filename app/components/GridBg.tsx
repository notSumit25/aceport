"use client";
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function GridBackgroundDemo() {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I",
    },
    {
      text: "Am",
    },
    {
      text: "Sumit Garg",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-[50rem] w-full bg-black  bg-grid-white/[0.2]  relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <TypewriterEffectSmooth words={words} />
      </p>
    </div>
  );
}
