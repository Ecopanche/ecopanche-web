import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import experienciaImage from "@/assets/experiencia.jpg";

const experiencias = [
  {
    id: "caminata-ecologica",
    name: "Caminata Ecológica",
    description:
      "Recorrido guiado por senderos naturales con avistamiento de aves",
    fullDescription:
      "Disfruta de una experiencia única en la naturaleza con nuestra caminata ecológica guiada. Recorre senderos rodeados de vegetación nativa mientras aprendes sobre la flora y fauna local. Nuestros guías expertos te ayudarán a identificar diferentes especies de aves y te compartirán conocimientos sobre el ecosistema del Tequendama. Ideal para amantes de la naturaleza y la fotografía.",
    duration: "4 horas",
    images: [experienciaImage, experienciaImage, experienciaImage],
    rating: 5.0,
    included: ["Guía experto", "Binoculares", "Refrigerio", "Seguro"],
    difficulty: "Media",
    price: "Desde $80,000 COP/persona",
    location: "Salto del Tequendama",
  },
  {
    id: "tour-del-cafe",
    name: "Tour del Café",
    description: "Conoce el proceso del café desde el cultivo hasta la taza",
    fullDescription:
      "Sumérgete en la cultura cafetera colombiana con nuestro tour completo del café. Visita una finca cafetera tradicional, aprende sobre el proceso de cultivo, cosecha, beneficio y tostado del café. Participa activamente en la recolección de granos y disfruta de una cata profesional de diferentes variedades de café. Incluye almuerzo típico y productos de café para llevar.",
    duration: "3 horas",
    images: [
      experienciaImage,
      experienciaImage,
      experienciaImage,
      experienciaImage,
    ],
    rating: 4.9,
    included: [
      "Guía especializado",
      "Cata de café",
      "Almuerzo",
      "Muestra de café",
    ],
    difficulty: "Baja",
    price: "Desde $95,000 COP/persona",
    location: "Finca El Café",
  },
  {
    id: "cascadas-y-naturaleza",
    name: "Cascadas y Naturaleza",
    description: "Aventura a las cascadas más hermosas de la región",
    fullDescription:
      "Embárcate en una aventura inolvidable visitando las cascadas más espectaculares de la región del Tequendama. Esta experiencia incluye caminatas por senderos naturales, baño en pozos de agua cristalina y la oportunidad de conectar profundamente con la naturaleza. Nuestros guías te llevarán a lugares escondidos que pocos conocen. Incluye almuerzo tipo picnic y equipo de seguridad.",
    duration: "6 horas",
    images: [
      experienciaImage,
      experienciaImage,
      experienciaImage,
      experienciaImage,
      experienciaImage,
    ],
    rating: 4.8,
    included: [
      "Guía experto",
      "Almuerzo picnic",
      "Equipo de seguridad",
      "Transporte interno",
    ],
    difficulty: "Alta",
    price: "Desde $120,000 COP/persona",
    location: "Cascadas del Tequendama",
  },
];

const ExperienciaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const experiencia = experiencias.find((e) => e.id === id);

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
      <Navbar />
      <WhatsAppButton variant="floating" />

      <div className="pt-20">
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
                        alt={`${experiencia.name} - Imagen ${index + 1}`}
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
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-playfair font-bold text-foreground mb-2">
                      {experiencia.name}
                    </h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span className="text-lg">{experiencia.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <span className="text-lg">{experiencia.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xl font-semibold">
                      {experiencia.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-playfair font-semibold mb-3">
                  Descripción
                </h2>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {experiencia.fullDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-playfair font-semibold mb-4">
                  Qué incluye
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {experiencia.included.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-secondary px-4 py-3 rounded-lg"
                    >
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span className="font-inter">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-playfair font-semibold text-lg mb-2">
                  Nivel de dificultad
                </h3>
                <p className="text-muted-foreground font-inter">
                  {experiencia.difficulty}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold mb-2">
                      {experiencia.price}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="font-inter">
                        Duración: {experiencia.duration}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <h3 className="font-playfair font-semibold text-lg">
                      Información
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground font-inter">
                      <p>• Salidas diarias con reserva previa</p>
                      <p>• Grupos máximo de 8 personas</p>
                      <p>• Cancelación gratuita 24h antes</p>
                      <p>• Equipo de seguridad incluido</p>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Reservar experiencia
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExperienciaDetail;
