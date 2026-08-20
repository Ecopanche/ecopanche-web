import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
  Leaf,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import logoWhite from "@/assets/Logo-Ecopanche_H5 1.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#3A7303] from-primary to-primary/90 text-primary-foreground">
      <div className="container-custom px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoWhite} className="w-[187px]" alt="Eco Panche" />
            </div>
            <p className="text-primary-foreground/80 font-openSans text-sm leading-relaxed mb-6">
              Turismo sostenible y regenerativo.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                asChild
              >
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                asChild
              >
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                asChild
              >
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-rubik font-medium text-lg mb-6 flex items-center gap-2">
              <span className="h-px w-8 bg-primary-foreground/40"></span>
              Enlaces
            </h3>
            <ul className="space-y-3">
              {["inicio", "Quiénes", "oferta", "contacto"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 text-sm capitalize flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 group-hover:w-4 font-rubik bg-primary-foreground transition-all duration-200"></span>
                    {link.replace("-", " ")}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="font-rubik font-medium text-lg mb-6 flex items-center gap-2">
              <span className="h-px w-8 font-rubik font-medium bg-primary-foreground/40"></span>
              Horarios
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <div className="text-sm">
                  <p className="font-openSans text-primary-foreground mb-1">
                    Atención al cliente
                  </p>
                  <p>
                    Lunes a Viernes
                    <br />
                    8:00 AM - 6:00 PM
                  </p>
                  <p className="mt-2">
                    Sábados
                    <br />
                    9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-primary-foreground/70 font-inter text-sm">
            © {new Date().getFullYear()} EcoPanche. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Política de Privacidad
            </button>
            <button className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Términos y Condiciones
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
