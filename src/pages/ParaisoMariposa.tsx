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
import first from "@/assets/experiencias/paraisomariposa/paraisomariposa1.png";
import second from "@/assets/experiencias/paraisomariposa/paraisomariposa2.png";
import third from "@/assets/experiencias/paraisomariposa/paraisomariposa3.png";
import fourth from "@/assets/experiencias/paraisomariposa/paraisomariposa4.png";
import fifth from "@/assets/experiencias/paraisomariposa/paraisomariposa5.png";
import sixth from "@/assets/experiencias/paraisomariposa/paraisomariposa6.png";

const experiencias = [
  {
    title: "Eco Parque Paraíso Mariposa",
    images: [first, second, third, fourth, fifth, sixth],
  },
];

const ParaisoMariposa = () => {
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
                      Eco Parque Paraíso Mariposa
                    </h1>
                    <div className="flex items-center text-[#3A7303]">
                      <div className="flex text-center items-center gap-2">
                        <MapPin className="h-5 w-5 font-openSans text-[#3A7303]" />
                        <span className="text-lg font-openSans text-[#3A7303]">
                          Vía la pesquera, inspección la esperanza, la Mesa
                          Cundinamarca
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
                      Paraíso Mariposa Ecoturismo es un espacio de conexión
                      espiritual y natural en La Mesa, Cundinamarca. Ofrece
                      experiencias conscientes como caminatas, rituales con los
                      elementos, baños en cascadas y círculos de fuego, todo
                      guiado por emprendedores locales. Su enfoque es sanar,
                      reconectar y transformar desde el corazón de la montaña.
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
                            Rituales con los elementos: tierra, agua, fuego y
                            aire para enraizar, soltar y transformar.
                          </li>
                        </ul>
                        <ul className="list-disc list-inside text-[#3A7303] font-openSans space-y-1">
                          <li>
                            Caminatas conscientes y baños naturales: en
                            cascadas, cuevas y senderos sagrados.
                          </li>
                        </ul>
                        <ul className="list-disc list-inside text-[#3A7303] font-openSans space-y-1">
                          <li>
                            Ceremonias de fuego y círculos de palabra: para
                            sanar, agradecer y reconectar.
                          </li>
                        </ul>
                        <ul className="list-disc list-inside text-[#3A7303] font-openSans space-y-1">
                          <li>
                            Experiencias guiadas por emprendedores locales: con
                            enfoque comunitario y espiritual.
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
                </div>
              </div>
              <div className="w-full h-[360px] rounded-[15px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.454955907318!2d-74.43162662435934!3d4.690728195284242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f6f257858e7b3%3A0x931a52a3d53a2299!2sParaiso%20Mariposa%20EcoTurismo!5e0!3m2!1sen!2sco!4v1763859894235!5m2!1sen!2sco"
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

export default ParaisoMariposa;
