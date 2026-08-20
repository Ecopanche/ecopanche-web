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
import first from "@/assets/hospedajes/lapieta/lapieta1.png";
import second from "@/assets/hospedajes/lapieta/lapieta2.png";
import third from "@/assets/hospedajes/lapieta/lapieta3.png";
import fourth from "@/assets/hospedajes/lapieta/lapieta4.png";
import fifth from "@/assets/hospedajes/lapieta/lapieta5.png";
import sixth from "@/assets/hospedajes/lapieta/lapieta6.png";

const experiencias = [
  {
    title: "LaPieta",
    images: [first, second, third, fourth, fifth, sixth],
  },
];

const LaPieta = () => {
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
                      La Pietá
                    </h1>
                    <div className="flex items-center text-[#3A7303]">
                      <div className="flex text-center items-center gap-2">
                        <MapPin className="h-5 w-5 font-openSans text-[#3A7303]" />
                        <span className="text-lg font-openSans text-[#3A7303]">
                          Centro urbano de Cachipay, Cundinamarca. Calle 1 #
                          2-64.
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
                      Se presenta como un “lugar de encuentro con la naturaleza,
                      el espíritu y con la tierra”. Es un destino de turismo con
                      sentido, enfocado en lo eco-agro-artesanal y cultural,
                      ideal para quienes buscan descanso, conexión espiritual y
                      experiencias auténticas en el campo colombiano.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-2xl font-rubik text-[#3B4113] font-medium mb-2">
                      Nuestro Alojamiento
                    </h2>
                    <div>
                      <ul className="pl-6">
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Capacidad para 10 personas
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Espacios de descanso amplios
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Decoración rústica y acogedora
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Ambientes diseñados para la contemplación, la
                              conversación y la música
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Interiores con acabados en madera
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Áreas comunes con mesas, sillas y decoración
                              artesanal
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Exteriores rodeados de vegetación y caminos
                              rurales
                            </span>
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
                              Escucha de aves y contacto con la naturaleza
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Vinos artesanales
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Gastronomía campesina
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2380323946695!2d-74.44122751664952!3d4.728667982989744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f656184da44bf%3A0x18651e544634920d!2zTEEgUElFVMOA!5e0!3m2!1sen!2sco!4v1763771300557!5m2!1sen!2sco"
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

export default LaPieta;
