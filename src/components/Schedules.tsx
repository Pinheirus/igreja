import { Button } from "@/components/ui/button";

export default function Schedules() {
  return (
    <main className="flex flex-col justify-center items-center pt-32">
      <h1 className="text-6xl uppercase font-sans font-bold bg-gradient-to-r from-pink-400 via red-400 to-blue-400 bg-clip-text text-transparent">
        Cultos
      </h1>

      <div className="text-white pt-20">
        <h1 className="text-2xl font-semibold text-emerald-300 tracking-wider ">
          CULTO DE DOMINGO
        </h1>
        <h2 className="text-xl pt-4 justify-center flex text-neutral-200">
          DOMINGO | 19H
        </h2>
      </div>

      <div className="text-white pt-20">
        <h1 className="text-2xl font-semibold text-emerald-300 tracking-wider ">
          TERÇA PROFÉTICA
        </h1>
        <h2 className="text-xl pt-4 justify-center flex text-neutral-200">
          TERÇA | 19H30
        </h2>
      </div>

      <div className="text-white pt-20">
        <h1 className="text-2xl font-semibold text-emerald-300 tracking-wider ">
          SABADO JOVEM
        </h1>
        <h2 className="text-xl pt-4 justify-center flex text-neutral-200">
          SABADO | 19H
        </h2>
      </div>

      <Button className="mt-12 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500 text-neutral-900 font-bold uppercase tracking-wide shadow-lg hover:from-emerald-400 hover:to-emerald-600 hover:shadow-xl transition-all duration-300">
        Veja Online
      </Button>
    </main>
  );
}
