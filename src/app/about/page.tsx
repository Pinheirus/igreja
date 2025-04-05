import AboutComponent from "@/components/About";
import Footer from "@/components/Footer";
import ModernGallery from "@/components/Galary";
import Header from "@/components/Header";


export default function About() {
  return (

    <div className=" justify-center md:justify-start min-h-screen flex flex-col bg-neutral-900">
      <Header />
      <AboutComponent />
      <ModernGallery />
      <Footer />
    </div>

  );
}
