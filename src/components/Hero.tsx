import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-tequendama.jpg";
import WhatsAppButton from "./WhatsAppButton";
import { NavLink } from "./NavLink";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-rubik font-bold text-white mb-6 animate-fade-in">
          Bienvenido a EcoPanche
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-openSans max-w-3xl mx-auto animate-fade-in">
          Experiencias de bienestar en contacto con la naturaleza, la ruralidad
          y la identidad local del Tequendama
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          {/* <WhatsAppButton size="lg" className="px-8 py-6 text-lg" /> */}
          <NavLink to="/asociactividad">
            <Button
              size="lg"
              // onClick={() => scrollToSection("oferta")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-rubik font-medium px-8 py-6 text-lg"
            >
              Asociatividad
            </Button>
          </NavLink>

          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("oferta")}
            className="border-2 border-white text-[#3A7303] hover:bg-white hover:text-primary font-rubik font-medium px-8 py-6 text-lg"
          >
            Hospedajes y Experiencias
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("quienes-somos")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  );
};

export default Hero;
