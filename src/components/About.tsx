import Image from "next/image";

export default function AboutComponent() {
  return (
    <main className="flex flex-col items-center">
      <div className="relative w-full h-60">
        <Image
          src="/assets/hero.jpg"
          alt="Imagem de Quem Somos"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black/50">
          <h1 className="text-4xl sm:text-6xl font-bold text-white uppercase">
            Quem Somos
          </h1>
        </div>
      </div>
      <section className="container mx-auto px-8 py-16 flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-3xl text-white font-bold mb-4">Nossa História</h2>
          <p className="text-lg leading-relaxed text-gray-200">
            A Missão Emanuel é uma comunidade de fé dedicada a glorificar a Deus
            e servir à nossa comunidade local. Fundada com o propósito de
            compartilhar o amor de Cristo, buscamos impactar vidas por meio do
            evangelho e de ações práticas. Nosso objetivo é construir uma
            comunidade que reflete o amor de Deus, promovendo esperança e
            transformação.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 mt-4">
            Com uma longa trajetória de serviço e dedicação, nossos cultos,
            eventos e ministérios são projetados para ajudar pessoas a encontrar
            restauração e propósito em Cristo. Junte-se a nós nesta caminhada de
            fé e crescimento espiritual.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/hero.jpg"
            alt="Imagem Sobre Nós"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>
    </main>
  );
}
