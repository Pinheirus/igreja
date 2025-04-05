"use client";

import Floating, { FloatingElement } from "@/components/fancy/parallax-floating";
import Image from "next/image";

export default function FancyParallax() {
  return (
    <section className="relative text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold z-10 relative mb-8">fancy.</h1>
      <button className="relative z-10 px-6 py-2 bg-white text-black rounded-full font-medium">
        Download
      </button>
      <Floating>
        <FloatingElement depth={0.5}>
          <Image
            src="/assets/hero.jpg"
            alt="Image 1"
            width={150}
            height={150}
            className="absolute top-10 left-10 rounded-lg"
          />
        </FloatingElement>
        <FloatingElement depth={1}>
          <Image
            src="/assets/hero.jpg"
            alt="Image 2"
            width={200}
            height={200}
            className="absolute top-1/4 left-1/3 rounded-lg"
          />
        </FloatingElement>
        <FloatingElement depth={1.5}>
          <Image
            src="/assets/hero.jpg"
            alt="Image 3"
            width={250}
            height={250}
            className="absolute top-1/3 left-2/3 rounded-lg"
          />
        </FloatingElement>
        <FloatingElement depth={2}>
          <Image
            src="/assets/hero.jpg"
            alt="Image 4"
            width={150}
            height={150}
            className="absolute bottom-10 left-1/4 rounded-lg"
          />
        </FloatingElement>
        <FloatingElement depth={2.5}>
          <Image
            src="/assets/hero.jpg"
            alt="Image 5"
            width={180}
            height={180}
            className="absolute bottom-1/4 right-1/3 rounded-lg"
          />
        </FloatingElement>
        <FloatingElement depth={3}>
          <Image
            src="/assets/hero.jpg"
            alt="Image 6"
            width={200}
            height={200}
            className="absolute top-1/4 right-10 rounded-lg"
          />
        </FloatingElement>
      </Floating>
    </section>
  );
}
