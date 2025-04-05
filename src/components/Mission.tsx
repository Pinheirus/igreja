import Image from "next/image";

export default function Mission() {
  return (
    <section className="flex flex-col justify-center items-center pt-32 pb-16 mb-12 sm:mb-16">
      <div className="container grid sm:grid-cols-2 gap-8">
        <div className="bg-slate-950 p-6 sm:p-8 rounded-xl">
          <p className="mb-4 text-sky-100 uppercase tracking-widest text-sm">
            nossos propositos
          </p>
          <h2 className="mb-8 font-serif text-balance text-sky-300 text-3xl sm:text-4xl lg:text-5xl capitalize">
            5 propositos
          </h2>

          {[
            {
              title: "Adoração",
              description:
                'Deus é espírito, e é necessário que os seus adoradores o adorem em espírito e em verdade". (João 4:24)',
            },
            {
              title: "Comunhão",
              description:
                "Sejam bondosos e compassivos uns para com os outros, perdoando-se mutuamente, assim como Deus os perdoou em Cristo. (Efésios 4:32)",
            },
            {
              title: "Discupulado",
              description:
                'Com isso todos saberão que vocês são meus discípulos, se vocês se amarem uns aos outros". (João 13:35)',
            },
            {
              title: "Serviço",
              description:
                "Quem me serve precisa seguir-me; e, onde estou, o meu servo também estará. Aquele que me serve, meu Pai o honrará. (João 12:26)",
            },
            {
              title: "Evangelismo",
              description:
                'Então ouvi a voz do Senhor, conclamando: "Quem enviarei? Quem irá por nós?" E eu respondi: Eis-me aqui. Envia-me! (Isaías 6:8)',
            },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-sky-400 hover:before:w-10 before:transition-[width]">
                {item.title}
              </h3>
              <p className="mb-8 text-balance text-gray-400 pl-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="group relative cursor-pointer overflow-hidden rounded-xl h-full">
            <Image
              src="/assets/img-culto-01.jpg"
              alt="Adoração"
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover:scale-110"
              priority
            />
            <div className="absolute flex items-end p-4 inset-0 bg-gradient-to-t from-sky-950/80 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-white">Adoração</span>
            </div>
          </div>

          <div className="group row-span-2 relative cursor-pointer overflow-hidden rounded-xl h-full">
            <Image
              src="/assets/img-culto-02.jpg"
              alt="Comunhão"
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover:scale-110"
              priority
            />
            <div className="absolute flex items-end p-4 inset-0 bg-gradient-to-t from-sky-950/80 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-white">Comunhão</span>
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden rounded-xl h-full">
            <Image
              src="/assets/img-culto-03.jpg"
              alt="Discupulado"
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover:scale-110"
              priority
            />
            <div className="absolute flex items-end p-4 inset-0 bg-gradient-to-t from-sky-950/80 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-white">Discupulado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
