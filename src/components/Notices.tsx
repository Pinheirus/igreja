import { Volume2, PlayCircle } from "lucide-react";

export default function Notices() {
  return (
    <section className="flex flex-col items-center pb-32  text-gray-200">

        <h1 className="text-6xl text-center uppercase py-4 mb-8 font-sans font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            Nossas últimas transmissões
        </h1>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="p-4 bg-neutral-700 rounded-md shadow-md border border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <Volume2 size={20} className="text-blue-300" />
            <h2 className="text-xl font-semibold text-blue-300">
              Avisos da Semana
            </h2>
          </div>
          <div className="relative overflow-hidden rounded-md aspect-video">
            <iframe
              src="https://www.youtube.com/embed/luRXiPRcaNI"
              title="Avisos da Semana"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="p-4 bg-neutral-700 rounded-md shadow-md border border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <PlayCircle size={20} className="text-blue-300" />
            <h2 className="text-xl font-semibold text-blue-300">
              Último Culto
            </h2>
          </div>
          <div className="relative overflow-hidden rounded-md aspect-video">
            <iframe
              src="https://www.youtube.com/embed/ue9stwhSxAk"
              title="Último Culto"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
