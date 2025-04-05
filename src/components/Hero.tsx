"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import VerticalCutReveal from "@/components/fancy/vertical-cut-reveal";

export default function Hero() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messages = [
    "Uma Igreja com Propósito",
    "Servindo a Deus e à Comunidade",
    "Transformando Vidas para Cristo",
    "Uma Missão de Esperança",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <main className="flex justify-center items-center relative z-0">
      <div className="relative container px-8 pb-8 h-[700px] pt-64 bg-gradient-to-t from-black/40 text-white rounded-2xl overflow-hidden max-sm:px-4 max-sm:pt-12">
        <Image
          src="/assets/hero.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 size-full object-cover -z-10"
        />
        <div className="relative z-10 bg-black/60 rounded-xl flex flex-col items-center gap-2 p-4 mb-8 sm:gap-8 sm:items-center sm:py-1 sm:pl-4 sm:pr-1 sm:bg-black/40 sm:inline-flex sm:flex-row sm:rounded-full">
          <h2 className="text-xl py-2 px-4 font-bold uppercase bg-gradient-to-r from-pink-400 via-red-400 to-blue-400 bg-clip-text text-transparent">
            2025 o ano da Frutificação
          </h2>
        </div>
        <div
          className="absolute top-1/2 left-8 transform text-left max-w-3xl text-3xl sm:text-5xl font-serif"
          style={{ minHeight: "80px" }}
        >
          <VerticalCutReveal key={currentMessage}>
            {messages[currentMessage]}
          </VerticalCutReveal>
        </div>
        <div className="absolute bottom-8 right-8 flex items-center gap-4 text-sm sm:text-base">
          <Image
            src="/assets/missao.svg"
            alt="Logo da Igreja"
            width={100}
            height={40}
            className="w-20"
          />
          <span>|</span>
          <p className="text-white">Comunidade Local</p>
        </div>
      </div>
    </main>
  );
}
