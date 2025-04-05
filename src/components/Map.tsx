export default function MapSection() {
    return (
      <section className="flex flex-col items-center pb-32">
        <h1 className="text-6xl text-center uppercase py-4 mb-8 font-sans font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
        Nossa Localização
        </h1>
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14586.83933412682!2d-54.2808831!3d-23.935327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948b4d2d9d0274a5%3A0x1121925f1adab0c1!2sIgreja%20Missao%20Emanuel!5e0!3m2!1spt-BR!2sbr!4v1737497487576!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa - Igreja Missão Emanuel"
          ></iframe>
        </div>
      </section>
    );
  }
  