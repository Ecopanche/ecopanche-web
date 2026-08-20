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
import pointer from "@/assets/ponterIcon.svg";
import contact from "@/assets/contactIcon.svg";

import NavbarWhite from "@/components/NavbarWhite";
import first from "@/assets/experiencias/tukui/tukui1.png";
import second from "@/assets/experiencias/tukui/tukui2.png";
import third from "@/assets/experiencias/tukui/tukui3.png";
import fourth from "@/assets/experiencias/tukui/tukui4.png";
import fifth from "@/assets/experiencias/tukui/tukui5.png";
import sixth from "@/assets/experiencias/tukui/tukui6.png";
import abejas from "@/assets/experiencias/tukui/santuarioAbejas.png";
import birds from "@/assets/experiencias/tukui/avistamientoaves.png";

const experiencias = [
  {
    title: "Tukui",
    images: [first, second, third, fourth, fifth, sixth],
  },
];

const TukuiExp = () => {
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
                      Tukui
                    </h1>
                    <div className="flex items-center text-[#3A7303]">
                      <div className="flex text-center items-center gap-2">
                        <MapPin className="h-5 w-5 font-openSans text-[#3A7303]" />
                        <span className="text-lg font-openSans text-[#3A7303]">
                          Vereda Guayabal, sector dos caminos La mesa
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
              <section className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-[#3B4113] font-rubik font-medium text-2xl mb-8">
                  Actividades
                </h2>

                {/* --- 1. Santuario de Abejas --- */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-[#3A7303] font-semiBold font-openSans mb-2">
                      • Santuario de Abejas
                    </h3>
                    <p className="text-[#3A7303] leading-relaxed font-openSans">
                      ¡Descubre el mundo de las abejas! Sumérgete en una
                      experiencia única de educación ambiental, aprende sobre la
                      importancia de estas increíbles criaturas para nuestro
                      ecosistema. Disfruta de una emocionante cata de mieles,
                      donde podrás degustar una variedad de sabores únicos y
                      exquisitos.
                      <br />
                      <br />
                      Atractivos. Charla especies de abejas diversidad y
                      biología, cata y degustación de productos de colmena de
                      distintos ecosistemas colombianos, visita estaciones de
                      colmenas.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <img
                      src={abejas}
                      className="w-full h-auto rounded-[15px] object-cover"
                      alt="Santuario de Abejas"
                    />
                  </div>
                </div>

                {/* --- 2. Avistamiento de Aves --- */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="flex justify-center order-1 md:order-none">
                    <img
                      src={birds}
                      className="w-full h-auto rounded-[15px] object-cover"
                      alt="Avistamiento de aves"
                    />
                  </div>

                  <div>
                    <h3 className="text-[#3A7303] font-openSans font-semibold mb-2">
                      • Avistamiento De Aves.
                    </h3>
                    <p className="text-[#3A7303] leading-relaxed mb-4">
                      En esta experiencia vas a explorar los senderos para la
                      observación de aves más populares en nuestra región y
                      conocerás la variedad de especies y colores presentes en
                      nuestra avifauna, tiempo total de la experiencia 3 hrs.
                      Incluye. Acompañamiento de (1) guía especializado por
                      senderos, Binoculares, Guía de Aves, y póliza. No incluye
                      otros servicios no especificados.
                    </p>

                    {/* Info Card */}
                    <div className="bg-[#F9F9F6] border border-[#D8D9D0] rounded-[10px] p-4 max-w-xs">
                      <h4 className="text-[#3A7303] font-semibold font-openSans mb-1">
                        Importante
                      </h4>
                      <p className="text-[#3A7303] font-openSans text-sm leading-snug">
                        Vive esta experiencia en alianza con nuestro operador
                        oficial Nación Panche Travel
                      </p>
                    </div>
                  </div>
                </div>

                {/* --- 3. Caminos Reales de Anapoima --- */}
                <div className="grid md:grid-cols-1 gap-8">
                  <div>
                    <h3 className="text-[#3A7303] font-openSans font-semibold mb-2">
                      • Caminos Reales de Anapoima
                    </h3>
                    <p className="text-[#3A7303] font-openSans leading-relaxed">
                      Vive una jornada única en Anapoima, Cundinamarca, donde el
                      sol, el agua y la memoria se entrelazan en un recorrido
                      lleno de sabor, historia y paisajes encantadores. Esta
                      experiencia inicia con un desayuno tradicional en Sagu
                      amasijos y postres, un rincón gastronómico liderado por la
                      señora Janeth, portadora de tradición reconocida en el
                      Festival Gastronómico de Anapoima. Conoceremos su historia
                      familiar, su legado culinario y el significado profundo
                      detrás de los “Amasijos”, expresión viva de identidad
                      local.
                      <br />
                      <br />
                      Después, nos trasladaremos al parque principal, corazón
                      histórico del municipio, para una charla introductoria que
                      nos conectará con el pasado colonial, las rutas
                      ancestrales y la importancia de los Caminos Reales en la
                      historia de la región. Desde allí comenzaremos nuestra
                      caminata por el Camino del Río, un sendero que combina
                      tramos empedrados, naturaleza y relatos del territorio...
                    </p>
                  </div>
                </div>
              </section>
              <div className="w-full max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  {/* Card 1 — Contactanos */}
                  <div className="rounded-[15px] relative border p-5 border-[#D8D9D0] ">
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

                  {/* Card 2 — Ver hospedaje */}
                  <div className="rounded-[15px] relative border p-5 border-[#D8D9D0] ">
                    <div>
                      <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                        <span className="font-openSans">
                          Tukui también cuenta con Hospedaje para ti, ¿quieres
                          verlo?
                        </span>
                      </div>
                      <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                        <span className="font-openSans">
                          <NavLink to="/tukui">
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

                  {/* Card 3 — Incluye */}
                  <div className="border border-[#D8D9D0] rounded-[15px] p-6 ">
                    <h3 className="text-[#3A7303] font-medium font-openSans mb-2">
                      Incluye:
                    </h3>
                    <ul className="list-disc ml-4 text-[#3A7303] leading-relaxed space-y-1 font-openSans">
                      <li>Transporte ida y regreso</li>
                      <li>1 Desayuno típico</li>
                      <li>1 Almuerzo estilo fiambre</li>
                      <li>Ingreso a piscina</li>
                      <li>Seguro de viaje</li>
                      <li>
                        Guianza profesional con enfoque cultural y ambiental
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full h-[360px] rounded-[15px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6897147190157!2d-74.44224832435951!3d4.649320995325513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f6f62ede265b1%3A0xdd80138398e6386b!2zRmluY2EgVHVrdWkg8J-Smg!5e0!3m2!1sen!2sco!4v1763774035664!5m2!1sen!2sco"
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

export default TukuiExp;
