"use client";

import { useState, useEffect } from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import VerticalCutReveal from "@/components/fancy/vertical-cut-reveal";
import { AnimatedHeaderLink } from "@/components/animations/AnimatedHeaderLink";


export default function Footer() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messages = [
    "Seja bem-vindo à Missao",
    "Juntos para glorificar a Deus",
    "Transformando vidas",
    "Participe de nossos cultos",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto text-center">
        <div
          className="flex items-center justify-start text-3xl md:text-7xl font-bold text-white uppercase mb-6"
          style={{ minHeight: "90px" }}
        >
          <VerticalCutReveal key={currentMessage}>
            {messages[currentMessage]}
          </VerticalCutReveal>
        </div>

        <div className="flex flex-col justify-between py-8 md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 mb-6">
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <Youtube size={24} />
            </a>
          </div>

          <nav>
            <NavigationMenu>
              <NavigationMenuList className="text-gray-500 text-sm uppercase font-medium tracking-wide flex space-x-8">
                <NavigationMenuItem>
                  <AnimatedHeaderLink
                    href="#home"
                    className="text-gray-500"
                  >
                    Início
                  </AnimatedHeaderLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <AnimatedHeaderLink
                    href="#about"
                    className="text-gray-500"
                  >
                    Sobre Nós
                  </AnimatedHeaderLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <AnimatedHeaderLink
                    href="#cultos"
                    className="text-gray-500"
                  >
                    Cultos
                  </AnimatedHeaderLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <AnimatedHeaderLink
                    href="#eventos"
                    className="text-gray-500"
                  >
                    Eventos
                  </AnimatedHeaderLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <AnimatedHeaderLink
                    href="#contato"
                    className="text-gray-500"
                  >
                    Contato
                  </AnimatedHeaderLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="text-xs text-gray-500 text-start">
          &copy; {new Date().getFullYear()} Missão Emanuel. Todos os direitos
          reservados. <span className="text-gray-400"> | Powered by ShadCN</span>
        </div>
      </div>
    </footer>
  );
}
