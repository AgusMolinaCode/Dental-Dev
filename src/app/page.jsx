import Hero from "./components/Sections/Hero";
import Reservas from "./components/Sections/Reservas";
import Servicios from "./components/Sections/Servicios";
import Slider from "./components/Sections/Slider";
import Reseñas from "./components/Sections/Reseñas";
import Profesionales from "./components/Sections/Profesionales";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Reservas />
      <Servicios />
      <Slider />
      <Reseñas />
      <Profesionales />
      <Contact />
      <Footer />
    </div>
  );
}
