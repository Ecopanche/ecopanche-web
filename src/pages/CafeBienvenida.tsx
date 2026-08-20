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
import first from "@/assets/experiencias/cafebienvenida/cafebienvenida1.png";
import second from "@/assets/experiencias/cafebienvenida/cafebienvenida2.png";
import third from "@/assets/experiencias/cafebienvenida/cafebienvenida3.png";
import fourth from "@/assets/experiencias/cafebienvenida/cafebienvenida4.png";
import fifth from "@/assets/experiencias/cafebienvenida/cafebienvenida5.png";
import sixth from "@/assets/experiencias/cafebienvenida/cafebienvenida6.png";
import seventh from "@/assets/experiencias/cafebienvenida/escapada.png";

const experiencias = [
  {
    title: "Café La Bienvenida",
    images: [first, second, third, fourth, fifth, sixth],
  },
];

const CafeBienvenida = () => {
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
                      Café La Bienvenida
                    </h1>
                    <div className="flex items-center justify-center text-[#3A7303]">
                      <div className="flex text-center items-center gap-2">
                        <MapPin className="h-5 w-5 font-openSans text-[#3A7303]" />
                        <span className="text-lg font-openSans text-[#3A7303]">
                          El Ocaso, Cundinamarca
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
              <div className="w-full max-w-6xl mx-auto px-6 py-10 space-y-10">
                {/* Title */}
                <h2 className="text-2xl font-medium font-rubik text-[#3B4113]">
                  Descripción
                </h2>

                {/* Main Intro Paragraph */}
                <p className="text-[#3A7303] font-openSans leading-relaxed">
                  Vive una experiencia auténtica en el corazón cafetero de La
                  Esperanza, La Mesa (Cundinamarca). Este espacio invita a
                  conocer la cultura cafetera desde la voz y el trabajo de una
                  mujer caficultora de pequeña extensión, reconocida por la
                  calidad de su grano, sus premios y sellos de excelencia.
                  <br />
                  En Café de la Bienvenida podrás disfrutar de una selección de
                  bebidas artesanales preparadas con esmero, que exaltan los
                  sabores del café en diferentes presentaciones. También podrás
                  degustar su cerveza artesanal a base de café, una propuesta
                  que combina tradición e innovación.
                  <br />
                  Su sede principal se encuentra en la Inspección del Ocaso,
                  Zipacón, mientras que los cultivos están ubicados en la
                  Inspección de la Esperanza, La Mesa. Es un punto ideal de
                  descanso y encuentro para quienes recorren las rutas locales y
                  desean conectarse con el aroma, la historia y la pasión del
                  café colombiano.
                </p>

                {/* Image + Description Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <img
                    src={seventh}
                    alt="Experience"
                    className="rounded-[15px] col-span-1 w-full object-cover"
                  />

                  <p className="text-[#3A7303] col-span-2 font-openSans leading-relaxed">
                    Ubicada en la vereda La Pesquera, en la inspección de La
                    Esperanza, La Mesa (Cundinamarca), Finca Apulaima ofrece una
                    experiencia auténtica que combina producción artesanal,
                    identidad territorial y turismo comunitario.
                    <br />
                    Este proyecto familiar está liderado por sus propietarios,
                    quienes abren las puertas de su finca para compartir la
                    pasión y el conocimiento que hay detrás de cada taza de café
                    especial. Durante el recorrido, los visitantes podrán
                    conocer de cerca el proceso completo del café, desde el
                    cultivo, la recolección y el beneficio, hasta la tostión, la
                    cata y la preparación de diferentes variedades.
                    <br />
                    Finca Apulaima es más que un lugar; es una vivencia que
                    conecta el trabajo campesino con la historia, el aroma y la
                    esencia del café colombiano.
                  </p>
                </div>

                {/* Bottom Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1 - Importante */}
                  <div>
                    <div className="border border-[#D8D9D0] rounded-[15px] p-5 ">
                      <h3 className="font-semiBold text-[#3A7303] font-openSans mb-2">
                        Importante
                      </h3>
                      <p className="text-[#3A7303] font-openSans leading-relaxed">
                        Vive esta experiencia en alianza con nuestro operador
                        oficial Nación Panche Travel
                      </p>
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
                          <span className="font-openSans">
                            +57 302 370 4912
                          </span>
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

                  {/* Card 2 - La experiencia incluye */}
                  <div className="border border-[#D8D9D0] rounded-[15px] p-5 ">
                    <h3 className="font-semiBold text-[#3A7303] font-openSans mb-2">
                      La experiencia incluye:
                    </h3>
                    <ul className="text-[#3A7303] font-openSans leading-relaxed list-disc ml-4 space-y-1">
                      <li>Ruta cafetera guiada por los cultivos.</li>
                      <li>Demostración de beneficio y tostión artesanal.</li>
                      <li>Cata y degustación de cafés especiales...</li>
                      <li>Conocimiento sobre productos derivados del café.</li>
                      <li>Recorrido por el jardín...</li>
                      <li>Observación del proceso de renovación...</li>
                      <li>Ejercicios de estimulación sensorial...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full h-[360px] rounded-[15px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3861927122407!2d-74.42870562435918!3d4.702787895272254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f6584f3f297c9%3A0x9b892e8caf99d809!2sTIENDA%20DE%20CAF%C3%89%20LA%20BIENVENIDA!5e0!3m2!1sen!2sco!4v1763945918421!5m2!1sen!2sco"
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

export default CafeBienvenida;
