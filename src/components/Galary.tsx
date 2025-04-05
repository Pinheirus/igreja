import Image from "next/image";

export default function ModernGallery() {
    const images = [
        "/assets/hero.jpg",
        "/assets/hero.jpg", 
        "/assets/hero.jpg", 
        "/assets/hero.jpg", 
        "/assets/hero.jpg", 
        "/assets/hero.jpg", 
        "/assets/hero.jpg", 
        "/assets/hero.jpg"
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-center mb-12 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    Nossa Galeria
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:h-[900px] gap-8">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-lg"
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <h2 className="text-xl font-bold tracking-wider uppercase">
                                    Imagem {index + 1}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
