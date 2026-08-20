import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  MapPin,
  Users,
  Mail,
  Phone,
  Wifi,
  Coffee,
  Car,
  Utensils,
  Waves,
} from "lucide-react";
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
import hospedajeImage from "@/assets/hospedaje.jpg";

const hospedajes = [
  {
    id: "casa-del-bosque",
    name: "Casa del Bosque",
    description:
      "Cabaña ecológica rodeada de naturaleza, ideal para desconectar y reconectar",
    fullDescription:
      "Casa del Bosque es una cabaña ecológica diseñada para ofrecerte una experiencia única en medio de la naturaleza. Construida con materiales sostenibles y rodeada de bosque nativo, es el lugar perfecto para desconectar del estrés urbano y reconectar con la naturaleza y contigo mismo.",
    location: "San Antonio del Tequendama",
    images: [hospedajeImage, hospedajeImage, hospedajeImage, hospedajeImage],
    rating: 4.8,
    amenities: ["WiFi", "Desayuno", "Parqueadero", "Restaurante"],
    capacity: "2-4 personas",
    price: "Desde $180,000 COP/noche",
    contact: "info@casadelbosque.com",
    phone: "+57 310 123 4567",
  },
  {
    id: "refugio-verde",
    name: "Refugio Verde",
    description: "Hospedaje sostenible con vistas panorámicas a las montañas",
    fullDescription:
      "Refugio Verde es un hospedaje sostenible ubicado en las montañas del Tequendama, con vistas panorámicas espectaculares. Nuestras habitaciones han sido diseñadas con criterios de sostenibilidad y eficiencia energética, ofreciendo comodidad sin comprometer el medio ambiente.",
    location: "La Mesa",
    images: [hospedajeImage, hospedajeImage, hospedajeImage],
    rating: 4.9,
    amenities: ["WiFi", "Piscina", "Desayuno", "Parqueadero"],
    capacity: "2-6 personas",
    price: "Desde $220,000 COP/noche",
    contact: "contacto@refugioverde.com",
    phone: "+57 320 234 5678",
  },
  {
    id: "finca-el-descanso",
    name: "Finca El Descanso",
    description:
      "Experiencia rural auténtica en una finca tradicional colombiana",
    fullDescription:
      "Vive la auténtica experiencia rural colombiana en Finca El Descanso. Participa en actividades agrícolas, disfruta de comida típica preparada con productos de la finca, y relájate en espacios rodeados de cultivos de café y árboles frutales. Una experiencia educativa y relajante para toda la familia.",
    location: "Apulo",
    images: [
      hospedajeImage,
      hospedajeImage,
      hospedajeImage,
      hospedajeImage,
      hospedajeImage,
    ],
    rating: 4.7,
    amenities: ["Desayuno", "Parqueadero", "Restaurante"],
    capacity: "2-5 personas",
    price: "Desde $150,000 COP/noche",
    contact: "reservas@fincaeldescanso.com",
    phone: "+57 315 345 6789",
  },
];

const HospedajeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hospedaje = hospedajes.find((h) => h.id === id);

  if (!hospedaje) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Hospedaje no encontrado</h1>
          <Button onClick={() => navigate("/")}>Volver al inicio</Button>
        </div>
      </div>
    );
  }

  const icons: { [key: string]: any } = {
    WiFi: Wifi,
    Desayuno: Coffee,
    Parqueadero: Car,
    Restaurante: Utensils,
    Piscina: Waves,
  };

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
                {hospedaje.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${hospedaje.name} - Imagen ${index + 1}`}
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
                      {hospedaje.name}
                    </h1>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span className="text-lg">{hospedaje.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xl font-semibold">
                      {hospedaje.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-playfair font-semibold mb-3">
                  Descripción
                </h2>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {hospedaje.fullDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-playfair font-semibold mb-4">
                  Servicios
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {hospedaje.amenities.map((amenity, idx) => {
                    const Icon = icons[amenity] || Star;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-secondary px-4 py-3 rounded-lg"
                      >
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="font-inter">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold mb-2">
                      {hospedaje.price}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span className="font-inter">{hospedaje.capacity}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <h3 className="font-playfair font-semibold text-lg">
                      Contacto
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <a
                          href={`mailto:${hospedaje.contact}`}
                          className="font-inter hover:text-primary transition-colors"
                        >
                          {hospedaje.contact}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <a
                          href={`tel:${hospedaje.phone}`}
                          className="font-inter hover:text-primary transition-colors"
                        >
                          {hospedaje.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Reservar ahora
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

export default HospedajeDetail;
