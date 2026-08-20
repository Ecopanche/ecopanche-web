import { useNavigate } from "react-router-dom";
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
import first from "@/assets/hospedajes/refugiomirador/refugio1.png";
import second from "@/assets/hospedajes/refugiomirador/refugio2.png";
import third from "@/assets/hospedajes/refugiomirador/refugio3.png";
import fourth from "@/assets/hospedajes/refugiomirador/refugio4.png";
import fifth from "@/assets/hospedajes/refugiomirador/refugio5.png";
import sixth from "@/assets/hospedajes/refugiomirador/refugio6.png";

const experiencias = [
  {
    title: "Refugio Miradores Del Ocaso",
    images: [first, second, third, fourth, fifth, sixth],
  },
];

const RefugioMiradores = () => {
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
                      Refugio Miradores Del Ocaso
                    </h1>
                    <div className="flex items-center text-[#3A7303]">
                      <div className="flex text-center items-center gap-2">
                        <MapPin className="h-5 w-5 font-openSans text-[#3A7303]" />
                        <span className="text-lg font-openSans text-[#3A7303]">
                          Vereda Anatoli, municipio de La Mesa, Cundinamarca.
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
                      es un glamping campestre que ofrece una experiencia de
                      conexión con el entorno natural de Zipacón. Está diseñado
                      para escapadas románticas o familiares, con vistas
                      privilegiadas y un ambiente tranquilo rodeado de bosque y
                      montaña.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-2xl font-rubik text-[#3B4113] font-medium mb-2">
                      Nuestro Glamping
                    </h2>
                    <div>
                      <ul className="pl-6">
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Camas dobles o extragrandes en estructuras tipo
                              domo o cabaña
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Baño privado o compartido, según la unidad
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Decoración rústica y acogedora, con elementos
                              naturales
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Iluminación ambiental y posiblemente terraza o
                              mirador
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">Wifi gratis</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="rounded-[15px] relative border p-5 border-[#D8D9D0]">
                    <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#3A7303] flex items-center justify-center">
                      {/* <MousePointerClick className="w-2 h-2" /> */}
                      <img src={pointer} alt="icon" className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl  text-[#3B4113] font-rubik font-medium mb-3">
                      Adicionales
                    </h2>
                    <div>
                      <div className="flex items-center mb-1 text-[#3A7303] font-openSans font-medium ">
                        <span className="font-openSans">Actividades</span>
                      </div>
                      <ul className="pl-6">
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Caminatas ecológicas
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Observación de aves
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Fogatas nocturnas
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Desayunos campestres
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Espacios para relajación y lectura
                            </span>
                          </div>
                        </li>
                      </ul>
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
                        <span className="font-openSans">+57 302 370 4912 </span>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3776521021837!2d-74.41090002435926!3d4.704283595270723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f6fba7a9fedb3%3A0x2bd7358b70f6d0e0!2sRefugio%20Mirador%20del%20Ocaso!5e0!3m2!1sen!2sco!4v1763769826380!5m2!1sen!2sco"
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

export default RefugioMiradores;
