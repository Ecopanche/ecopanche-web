import { NavLink, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "@/components/Footer";
import contact from "@/assets/contactIcon.svg";

import NavbarWhite from "@/components/NavbarWhite";
import first from "@/assets/experiencias/realmonte/realmonte1.png";
import second from "@/assets/experiencias/realmonte/realmonte2.png";
import third from "@/assets/experiencias/realmonte/realmonte3.png";
import fourth from "@/assets/experiencias/realmonte/realmonte4.png";
import fifth from "@/assets/experiencias/realmonte/realmonte5.png";
import sixth from "@/assets/experiencias/realmonte/realmonte6.png";

const experiencias = [
  {
    title: "Real Monte",
    images: [first, second, third, fourth, fifth, sixth],
  },
];

const RealMonteExp = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const experiencia = experiencias[0];

  if (!experiencia) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Experiencia no encontrada</h1>
          <Button onClick={() => navigate("/")}>Volver al inicio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavbarWhite />
      {/* <WhatsAppButton variant="floating" /> */}

      <div>
        <div className="container-custom py-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/#oferta")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>

          {/* Carousel */}
          <div className="mb-8">
            <Carousel className="w-full">
              <CarouselContent>
                {experiencia.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${experiencia.title} - Imagen ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Content */}
          <div className="grid pl-8 pr-8 gap-8">
            <div className=" space-y-6">
              <div>
                <div className="flex items-center justify-center mb-4">
                  <div className="text-center ">
                    <h1 className="text-4xl font-rubik font-bold text-[#3B4113] mb-2">
                      Real Monte
                    </h1>
                    <div className="flex items-center text-[#3A7303]">
                      <div className="flex text-center items-center gap-2">
                        <MapPin className="h-5 w-5 font-openSans text-[#3A7303]" />
                        <span className="text-lg font-openSans text-[#3A7303]">
                          Inspección La Esperanza, municipio de La Mesa,
                          Cundinamarca. Limita con El Ocaso, Zipacón, y está
                          ubicado al lado del río Apulo.
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xl font-semibold">
                      {experiencia.rating}
                    </span>
                  </div> */}
                </div>
              </div>
              <div className="grid lg:grid-cols-5 md:gap-8 sm:gap-4 lg:gap-16 pt-8 pb-12">
                <div className="lg:col-span-3">
                  <div>
                    <h2 className="text-2xl text-[#3B4113] font-rubik font-medium mb-3">
                      Descripción
                    </h2>
                    <p className="text-[#3A7303] font-openSans leading-relaxed">
                      es un destino de ecoturismo ubicado en El Ocaso,
                      Cundinamarca, que ofrece vivencias diseñadas para
                      reconectar con la naturaleza, el cuerpo y el espíritu. Más
                      que un hospedaje, es un espacio de transformación personal
                      y conexión profunda con el entorno. Las actividades
                      combinan rituales ancestrales, bienestar, contemplación y
                      gastronomía campesina, todo en un entorno montañoso y
                      verde.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-2xl font-rubik text-[#3B4113] font-medium mb-2">
                      Actividades
                    </h2>
                    {/* First row: Pardo + Amazilia (grid 2 columns) */}
                    <div className=" gap-12">
                      <div>
                        <ul className="list-disc list-inside text-[#3A7303] font-openSans space-y-1">
                          <li>
                            Masajes relajantes: al aire libre junto al río o en
                            espacios privados, acompañados por sonidos
                            naturales.
                          </li>
                        </ul>
                        <ul className="list-disc list-inside text-[#3A7303] font-openSans space-y-1">
                          <li>
                            Ritual “Despertar del Guerrero”: caminata
                            consciente, respiración guiada, inmersión en hielo,
                            círculo de fuego y símbolo de honra.
                          </li>
                        </ul>
                        <ul className="list-disc list-inside text-[#3A7303] font-openSans space-y-1">
                          <li>
                            Ritual “Despertar del Amor”: dos días de conexión
                            espiritual, caminatas, rituales con los elementos,
                            alimentación consciente, inmersión en agua y fuego,
                            y círculo de palabra en pareja.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="rounded-[15px] relative border p-5 border-[#D8D9D0]">
                    <div>
                      <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                        <span className="font-openSans font-medium">
                          Importante
                        </span>
                      </div>
                      <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                        <span className="font-openSans">
                          Vive esta experiencia en alianza con nuestro operador
                          oficial Nación Panche Travel
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[15px] relative border p-5 border-[#D8D9D0] mt-16">
                    <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#3A7303] flex items-center justify-center">
                      {/* <MousePoopenSansClick className="w-2 h-2" /> */}
                      <img src={contact} alt="icon" className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl  text-[#3B4113] font-rubik font-medium mb-3">
                      Contáctanos
                    </h2>
                    <div>
                      <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                        <span className="font-openSans font-medium">
                          Teléfonos
                        </span>
                      </div>
                      <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                        <span className="font-openSans">+57 302 370 4912</span>
                      </div>
                      <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                        <span className="font-openSans font-medium">
                          Instagram:
                        </span>
                      </div>
                      <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                        <span className="font-openSans">@ecopanche</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[15px] relative border p-5 border-[#D8D9D0] mt-16">
                    <div>
                      <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                        <span className="font-openSans">
                          Real Monte también cuenta con Hospedaje para ti,
                          ¿quieres verlo?
                        </span>
                      </div>
                      <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                        <span className="font-openSans">
                          <NavLink to="/real-monte">
                            <Button
                              size="lg"
                              // onClick={() => scrollToSection("oferta")}
                              className="bg-primary hover:bg-primary/90 text-primary-foreground font-rubik font-medium px-8 py-6 text-lg"
                            >
                              Ver hospedaje
                            </Button>
                          </NavLink>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[360px] rounded-[15px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3785989718!2d-74.42649092435924!3d4.704117795270897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f6fed7d501819%3A0xd5ae6b92ae453e38!2sFinca%20Real%20Monte!5e0!3m2!1sen!2sco!4v1763859451043!5m2!1sen!2sco"
                  // width="600"
                  // height="450"
                  className="w-full h-full border-0"
                  // style="border:0;"
                  // allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Sidebar */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RealMonteExp;
