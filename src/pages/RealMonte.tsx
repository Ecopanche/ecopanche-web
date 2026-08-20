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
import first from "@/assets/hospedajes/realmonte/realmonte1.png";
import second from "@/assets/hospedajes/realmonte/realmonte2.png";
import third from "@/assets/hospedajes/realmonte/realmonte3.png";
import fourth from "@/assets/hospedajes/realmonte/realmonte4.png";
import fifth from "@/assets/hospedajes/realmonte/realmonte5.png";
import sixth from "@/assets/hospedajes/realmonte/realmonte6.png";

const experiencias = [
  {
    title: "Real Monte",
    images: [first, second, third, fourth, fifth, sixth],
  },
];

const RealMonte = () => {
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
                      Finca Ecoturística Real Monte ubicada a hora y media de
                      Bogotá en el Ocaso cundinamarca te ofrecemos hospedaje en
                      cabañas de madera ubicadas en medio de la
                      naturaleza,pasadias, servicio de restaurante, parquedero y
                      mucho mas.
                    </p>
                    <p className="text-[#3A7303] font-medium font-openSans leading-relaxed">
                      "Vibra la naturaleza siente el Ecoturismo."
                    </p>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-2xl font-rubik text-[#3B4113] font-medium mb-2">
                      Nuestros Planes
                    </h2>
                    {/* First row: Pardo + Amazilia (grid 2 columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h3 className="text-[#3A7303] font-openSans font-medium mb-3">
                          Glamping Mirador del Silencio
                        </h3>
                        <ul className="list-disc list-inside text-[#3A7303] font-openSans space-y-1">
                          <li>
                            Cabaña glamping tipo alpino en madera y vidrio malla
                            catamaran, bluetooth, baño para pareja.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-[#3A7303] font-openSans font-medium mb-3">
                          La Rocabaña – pareja / 4 personas
                        </h3>
                        <ul className="list-disc list-inside text-[#3A7303] font-openSans space-y-1">
                          <li>
                            Cabaña en madera sobre una roca consta con 2 camas
                            dobles, baño, terraza con comedor,para pareja o
                            hasta 3 personas.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h3 className="text-[#3A7303] font-openSans font-medium mb-3">
                          Casa Verde – familiar (6 personas)
                        </h3>
                        <ul className="list-disc list-inside text-[#3A7303] font-openSans space-y-1">
                          <li>
                            Cabaña en bio construcción de 2 pisos 2 balcones 2
                            habitaciones consta de 1 cama doble, 1 camarote,
                            1cama sencilla, 1 sofacama, baño ,sala capacidad
                            hasta para 6 personas,zona wifi.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-[#3A7303] font-openSans font-medium mb-3">
                          La Celeste – (5 personas)
                        </h3>
                        <ul className="list-disc list-inside text-[#3A7303] font-openSans space-y-1">
                          <li>
                            Cabaña en madera en acomodación múltiple para maximo
                            5 personas consta de 1 camarote, 1cama sencilla 1
                            cama doble,baño televisión,zona wifi, balcón.
                          </li>
                        </ul>
                      </div>
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
                      {/* <div className="flex items-center mb-1 text-[#3A7303] font-openSans font-medium ">
                        <span className="font-openSans">Actividades</span>
                      </div> */}
                      <ul className="pl-6">
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Caminatas ecológicas, baños en cascadas y paseos
                              por la vía férrea.
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Rituales de transformación con fuego, hielo y
                              conexión espiritual.
                            </span>
                          </div>
                        </li>
                        <li className="list-disc text-[#3A7303]">
                          <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                            <span className="font-openSans">
                              Masajes relajantes al aire libre y experiencias de
                              bienestar.
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
                          Real Monte también cuenta con experiencias para ti,
                          ¿quieres verlas?
                        </span>
                      </div>
                      <div className="flex items-center mb-1 text-[#3A7303] font-openSans ">
                        <span className="font-openSans">
                          <NavLink to="/">
                            <Button
                              size="lg"
                              // onClick={() => scrollToSection("oferta")}
                              className="bg-primary hover:bg-primary/90 text-primary-foreground font-rubik font-medium px-8 py-6 text-lg"
                            >
                              Ver experiencias
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

export default RealMonte;
