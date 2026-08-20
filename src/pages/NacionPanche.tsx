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
import first from "@/assets/experiencias/nacionpanche/nacionpanche1.png";
import second from "@/assets/experiencias/nacionpanche/nacionpanche2.png";
import third from "@/assets/experiencias/nacionpanche/nacionpanche3.png";
import fourth from "@/assets/experiencias/nacionpanche/nacionpanche4.png";
import fifth from "@/assets/experiencias/nacionpanche/nacionpanche5.png";
import sixth from "@/assets/experiencias/nacionpanche/nacionpanche6.png";
import seventh from "@/assets/experiencias/nacionpanche/escapada.png";

const experiencias = [
  {
    title: "Nación Panche Travel",
    images: [first, second, third, fourth, fifth, sixth],
  },
];

const NacionPanche = () => {
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
                      Nación Panche Travel
                    </h1>
                    <div className="flex items-center justify-center text-[#3A7303]">
                      <div className="flex text-center items-center gap-2">
                        <MapPin className="h-5 w-5 font-openSans text-[#3A7303]" />
                        <span className="text-lg font-openSans text-[#3A7303]">
                          Provincia del Tequendama
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
                {/* ---------------- DESCRIPCIÓN ---------------- */}
                <h2 className="text-[#3B4113] font-medium font-rubik text-2xl mb-4">
                  Descripción
                </h2>
                <p className="text-[#3A7303] font-openSans leading-relaxed">
                  Nación Panche Travel es un colectivo cultural y operador
                  oficial de las experiencias de turismo de AsoEcopanche. Sus
                  tours conectan a los visitantes con la memoria viva del
                  territorio. Su oferta turística abarca caminatas, guías y
                  guianzas especializadas en diferentes idiomas; aviturismo,
                  arte rupestre, paseos ferroviarios, visita a ecoparques, tours
                  de café, y visitas a proyectos rurales del Tequendama. Además,
                  promueve talleres de patrimonio, eventos culturales, viajes
                  nacionales que amplían la comprensión del turismo cultural y
                  de naturaleza, grupos de vigías del patrimonio, y semilleros
                  de jóvenes guías.
                  <br />
                  <br />
                  En Nación Panche Travel, cada experiencia representa una
                  invitación a conocer, caminar y conectar con la esencia de la
                  identidad Panche y de la Provincia del Tequendama.
                </p>

                {/* ---------------- ACTIVIDADES ---------------- */}

                <div className="grid md:grid-cols-2 gap-10 mt-16 mb-16">
                  {/* LEFT column */}
                  <div>
                    <h2 className="text-[#3B4113] font-rubik font-medium text-2xl mb-4">
                      Actividades
                    </h2>
                    <h3 className="text-[#3A7303] font-medium font-openSans mb-2">
                      • Paseo Ferroviario
                    </h3>

                    <p className="text-[#3A7303] font-openSans leading-relaxed mb-4">
                      Recorrido sobre rieles, una actividad que combina
                      patrimonio, naturaleza y memoria ferroviaria en el corazón
                      del municipio de La Mesa, Cundinamarca...
                    </p>

                    <h4 className="text-[#3A7303] font-openSans font-medium mb-2">
                      La actividad incluye:
                    </h4>

                    <ul className="list-disc list-inside text-[#3A7303] font-openSans space-y-1 leading-relaxed">
                      <li>
                        Acompañamiento de guías locales y vigías del patrimonio.
                      </li>
                      <li>
                        Contextualización histórica sobre el ferrocarril y el
                        territorio.
                      </li>
                      <li>
                        Recorrido sobre rieles (4 km) y caminata guiada (20
                        min).
                      </li>
                      <li>Seguro de asistencia y medidas de seguridad.</li>
                      <li>Registro fotográfico básico del recorrido.</li>
                      <li>
                        Aporte al proyecto comunitario de reactivación
                        ferroviaria.
                      </li>
                    </ul>
                  </div>

                  {/* RIGHT column: info card */}
                  <div className="w-full">
                    <div className=" gap-10 mb-16">
                      <div className="relative">
                        <img
                          src={seventh}
                          className="rounded-[15px] w-full object-cover"
                          alt="Escapadita"
                        />
                      </div>
                    </div>
                    <div className=" border border-[#D8D9D0] rounded-[15px] p-5 max-w-xs ml-auto">
                      <h4 className="text-[#3A7303] font-openSans font-semibold mb-2">
                        Importante
                      </h4>
                      <p className="text-[#3A7303] font-openSans text-sm leading-snug">
                        Vive esta experiencia en alianza con nuestro operador
                        oficial Nación Panche Travel
                      </p>
                    </div>
                  </div>
                </div>

                {/* ---------------- CONTACT CARDS ---------------- */}
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Contact card */}
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

                  {/* Info card */}
                  <div className=" border flex justify-center items-center border-[#D8D9D0] rounded-[15px] p-6">
                    <p className="text-[#3A7303] font-openSans text-sm leading-relaxed">
                      <strong>Disponibilidad:</strong> sábados, domingos y
                      festivos
                      <br />
                      <strong>Horarios:</strong> 9:00 a.m. a 2:00 p.m.
                      <br />
                      <strong>Punto de encuentro:</strong> Inspección de El
                      Ocaso, límites con la inspección de La Esperanza –
                      municipio de La Mesa, Cundinamarca.
                    </p>
                  </div>
                </div>
              </section>
              <div className="w-full h-[360px] rounded-[15px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.1833097842912!2d-74.4273025112533!3d4.7062149988172015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f65571e8a56c7%3A0x216b76759d761845!2sEl%20Ocaso%2C%20Zipac%C3%B3n%2C%20Cundinamarca!5e0!3m2!1sen!2sco!4v1763942267529!5m2!1sen!2sco"
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

export default NacionPanche;
