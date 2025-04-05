import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapSection from "@/components/Map";
import Mission from "@/components/Mission";
import Notices from "@/components/Notices";
import Schedules from "@/components/Schedules";

export default function Home() {
  return (
    <div className=" justify-center md:justify-start min-h-screen flex flex-col bg-neutral-900">
      <Header />
      <Hero />
      <Schedules />
      <Mission />
      <MapSection />
      <Notices />
      <Footer />
    </div>
  );
}
