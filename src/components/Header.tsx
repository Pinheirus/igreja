import { AnimatedHeaderLink } from "@/components/animations/AnimatedHeaderLink";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center items-center py-4">
      <div className="container flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center text-white">
          <Image
            src="/assets/missao.svg"
            alt="Logo"
            width={80}
            height={80}
            priority
          />
          <h1 className="font-semibold text-wrap w-40 text-xl">
            Missão Emanuel Mundo Novo
          </h1>
        </div>
        <nav>
          <NavigationMenu>
            <NavigationMenuList className="text-white text-xl flex-wrap gap-8 flex items-center">
              <NavigationMenuItem>
                <AnimatedHeaderLink href="/about" className="text-white">
                  Sobre Nós
                </AnimatedHeaderLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <AnimatedHeaderLink
                  href="#eventos"
                  className="text-white"
                >
                  Eventos
                </AnimatedHeaderLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <AnimatedHeaderLink
                  href="#live"
                  className="text-white"
                >
                  Live
                </AnimatedHeaderLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
}
