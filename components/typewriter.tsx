"use client";
import Typewriter from "react-ts-typewriter";
import { Laptop } from "lucide-react";
export default function myComponent() {
  return (
    <div>
      <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/3">
        <Laptop size={250} strokeWidth={0.6}></Laptop>
      </div>
      <p className="absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-2/3 text-xl w-3/4 text-center">
        <Typewriter
          speed={40}
          delay={1000}
          text="Making a difference through code."
        />
      </p>
    </div>
  );
}
