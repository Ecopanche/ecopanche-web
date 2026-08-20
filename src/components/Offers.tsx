import { useNavigate } from "react-router-dom";
import { ArrowRight, ExternalLink, MapPin, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import realMonteImg from "@/assets/home/hospedajes/realMonteImg.png";
import tukuiImg from "@/assets/home/hospedajes/tukuiImg.png";
import realismoMagicoImg from "@/assets/home/hospedajes/realismoMagicoImg.png";
import cabanasLosAndesImg from "@/assets/home/hospedajes/cabanasLosAndesImg.png";
import laPietaImg from "@/assets/home/hospedajes/laPietaImg.png";
import bahktiImg from "@/assets/home/hospedajes/bahktiImg.png";
import colombiaMiCasaImg from "@/assets/home/hospedajes/colombiaMiCasaImg.png";
import refugioMiradoresOcasoImg from "@/assets/home/hospedajes/refugioMiradoresOcasoImg.png";

import nacionPancheTravelImg from "@/assets/home/experiencias/nacionPancheTravelImg.png";
import realMonteExpImg from "@/assets/home/experiencias/realMonteImg.png";
import cafeLaBienvenidaImg from "@/assets/home/experiencias/cafeLaBienvenidaImg.png";
import tukuiExpImg from "@/assets/home/experiencias/tukuiImg.png";
import ecoParaisoMariposaImg from "@/assets/home/experiencias/ecoParaisoMariposaImg.png";
import restauranteTrenDelSazonImg from "@/assets/home/experiencias/restauranteTrenDelSazonImg.png";
import cascadaSaltoMonjasImg from "@/assets/home/experiencias/cascadaSaltoMonjasImg.png";

const Offers = () => {
  const navigate = useNavigate();

  const hospedajes = [
    {
      title: "Real Monte",
      location:
        "Inspección La Esperanza, municipio de La Mesa, Cundinamarca. Limita con El Ocaso, Zipacón y está ubicado al lado del río Apulo.",
      description: "Vibra la naturaleza siente el Ecoturismo.",
      imageName: realMonteImg,
      url: "/real-monte",
    },
    {
      title: "Tukui",
      location: "Vereda Guayabal, sector dos caminos, La Mesa, Cundinamarca.",
      description: "Birding y posada campestre.",
      imageName: tukuiImg,
      url: "/tukui",
    },
    {
      title: "Realismo Mágico",
      location:
        "Finca Catalina, La Esperanza - El Ocaso, La Mesa, Cundinamarca.",
      description:
        "Experiencia mágica entre naturaleza, atardeceres y misticismo ancestral.",
      imageName: realismoMagicoImg,
      url: "/realismo-magico",
    },
    {
      title: "Cabañas Los Andes",
      location: "Vereda Florián, La Mesa (ruta La Gran Vía–Cachipay).",
      description: "¡Escapa a la naturaleza en nuestras cabañas de ensueño!",
      imageName: cabanasLosAndesImg,
      url: "/cabanas-andes",
    },
    {
      title: "La Pietá",
      location: "Centro urbano de Cachipay, Cundinamarca. Calle 1 # 2-64.",
      description:
        "Turismo con sentido EcoAgroArtesanal y cultural con alojamiento rural.",
      imageName: laPietaImg,
      url: "/la-pieta",
    },
    {
      title: "Bahkti",
      location: "Vereda El Progreso - Aguas Regadas, Cachipay, Cundinamarca.",
      description:
        "Disfruta de un hospedaje rural petfriendly y zonas comunes.",
      imageName: bahktiImg,
      url: "/bahkti",
    },
    {
      title: "Colombia Mi Casa",
      location: "Vereda Guayabal, sector dos caminos, La Mesa, Cundinamarca.",
      description:
        "Sal de la rutina de la ciudad y regálate un tiempo de calidad y descanso.",
      imageName: colombiaMiCasaImg,
      url: "/colombia-mi-casa",
    },
    {
      title: "Refugio Miradores del Ocaso",
      location: "Vereda Anatolí, municipio de La Mesa, Cundinamarca.",
      description: "Disfruta de la naturaleza, nuestros domos y habitaciones.",
      imageName: refugioMiradoresOcasoImg,
      url: "/refugio-miradores-del-ocaso",
    },
  ];

  const experiencias = [
    {
      title: "Nación Panche Travel",
      location: "Provincia del Tequendama",
      description:
        "Tours personalizados y viajes con guías especializados y experiencias en patrimonio, cultura y naturaleza.",
      imageName: nacionPancheTravelImg,
      url: "/nacion-panche",
    },
    {
      title: "Real Monte",
      location:
        "Inspección La Esperanza, municipio de La Mesa, Cundinamarca. Limita con El Ocaso, Zipacón, y está ubicado al lado del río Apulo.",
      description: "Actividades diseñadas para reconectar con lo esencial.",
      imageName: realMonteExpImg,
      url: "/real-monte-experiencia",
    },
    {
      title: "Café La Bienvenida",
      location: "El Ocaso, Cundinamarca",
      description:
        "Mujer caficultora comprometida con café, de calidad e identidad local.",
      imageName: cafeLaBienvenidaImg,
      url: "/cafe-bienvenida",
    },
    {
      title: "Tukui",
      location: "Vereda Guayabal, sector dos caminos, La Mesa Cundinamarca",
      description: "Senderos ecológicos, avistamiento de colibríes y aves.",
      imageName: tukuiExpImg,
      url: "/tukui-experiencia",
    },
    {
      title: "Eco Parque Paraíso Mariposa",
      location:
        "Vía la pesquera, inspección La Esperanza, La Mesa Cundinamarca",
      description:
        "Caminatas ecológicas, recorridos guiados por la naturaleza.",
      imageName: ecoParaisoMariposaImg,
      url: "/paraiso-mariposa",
    },
    {
      title: "Restaurante El Tren del Sazón",
      location: "Zipacón, Cundinamarca",
      description:
        "Un lugar acogedor para disfrutar en familia, rodeado de naturaleza y tradición.",
      imageName: restauranteTrenDelSazonImg,
      url: "/restaurante-tren-sazon",
    },
    {
      title: "Cascada Salto de las Monjas",
      location: "Inspección de La Esperanza, municipio de La Mesa",
      description: "Tesoro natural e histórico: el Salto de las Monjas.",
      imageName: cascadaSaltoMonjasImg,
      url: "/cascada-salto-monjas",
    },
  ];

  return (
    <section id="oferta" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-rubik font-medium text-foreground mb-4">
            Nuestra Oferta
          </h2>
          <p className="text-lg text-muted-foreground font-openSans max-w-2xl mx-auto">
            Descubre nuestros hospedajes y experiencias diseñadas para
            conectarte con la naturaleza
          </p>
        </div>

        <Tabs defaultValue="hospedajes" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="hospedajes" className="font-inter">
              Hospedajes
            </TabsTrigger>
            <TabsTrigger value="experiencias" className="font-inter">
              Experiencias
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hospedajes" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hospedajes.map((hospedaje, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl smooth-transition group cursor-pointer"
                  onClick={() => navigate(`${hospedaje.url}`)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={hospedaje.imageName}
                      alt={hospedaje.title}
                      className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                    />
                    {/* <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">
                        {hospedaje.rating}
                      </span>
                    </div> */}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-rubik font-medium text-foreground">
                      {hospedaje.title}
                    </CardTitle>
                    <CardDescription className="flex font-openSans items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {hospedaje.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-openSans text-sm mb-4">
                      {hospedaje.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary text-[#3B4113] font-rubik group-hover:text-primary-foreground smooth-transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`${hospedaje.url}`);
                      }}
                    >
                      Ver más
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experiencias" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiencias.map((experiencia, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl smooth-transition group cursor-pointer"
                  onClick={() => navigate(`${experiencia.url}`)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={experiencia.imageName}
                      alt={experiencia.title}
                      className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                    />
                    {/* <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">
                        {experiencia.rating}
                      </span>
                    </div> */}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-rubik font-medium text-foreground">
                      {experiencia.title}
                    </CardTitle>
                    <CardDescription className="flex font-openSans items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 min-w-4 self-start" />
                      {experiencia.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground  font-openSans text-sm mb-4">
                      {experiencia.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground font-rubik smooth-transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`${experiencia.url}`);
                      }}
                    >
                      Ver más
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Offers;
