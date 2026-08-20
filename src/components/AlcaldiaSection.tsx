import { Card, CardContent } from "@/components/ui/card";
import { Building2, Handshake, MapPin, Users } from "lucide-react";
import img1 from "@/assets/asociatividad/alianza.png";

const AlcaldiaSection = () => {
  const activities = [
    "Ferias de emprendimiento y economía local",
    "Ferias de café y gastronomía regional",
    "Vitrinas turísticas y culturales",
    "Espacios de fortalecimiento a las mujeres líderes rurales",
    "Actividades de fortalecimiento del turismo sostenible",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-[#D8E2CD] px-6 py-2 rounded-full mb-4">
            {/* <Handshake className="h-5 w-5" /> */}
            <span className="font-medium font-rubik text-[#3B4113]">
              Reconocimiento nacional
            </span>
          </div>
          <h2 className="text-4xl font-medium mb-6 text-[#3B4113] font-rubik">
            Alianza Institucional con la Alcaldía de La Mesa
          </h2>
          <p className="text-xl font-openSans text-[#3A7303] max-w-3xl mx-auto">
            Articulación permanente con la Secretaría de Desarrollo Económico y
            Turismo
          </p>
        </div>

        <div className=" mx-auto mb-12">
          <Card className="bg-[#F2F0E9] shadow-lg border-none">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="h-8 w-8 text-[#3A7303] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-medium font-rubik text-[#3B4113] mb-3 ">
                    Punto de Información Turística (PIT)
                  </h3>
                  <p className="text-lg font-openSans text-[#3A7303] leading-relaxed">
                    Contamos con presencia en el PIT ubicado en las
                    instalaciones de la Alcaldía, un espacio abierto al público
                    donde los visitantes pueden conocer y acceder a los
                    servicios y experiencias de nuestros asociados. Este punto
                    se ha convertido en una{" "}
                    <strong>vitrina que refleja la colaboración</strong> entre
                    el sector público y comunitario para visibilizar la oferta
                    turística local.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-[#F2F0E9] border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-6 w-6 text-[#3A7303]" />
                <h4 className="text-xl font-medium font-rubik text-[#3B4113]">
                  Apoyo Institucional
                </h4>
              </div>
              <p className="font-openSans text-[#3A7303] leading-relaxed">
                La Alcaldía, mediante su Programa de Emprendimiento y Turismo,
                ha sido un aliado estratégico en el crecimiento de Asoecopanche,
                brindando acompañamiento técnico, promoción y espacios de
                participación.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#F2F0E9] border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-[#3A7303]" />
                <h4 className="text-xl font-medium font-rubik text-[#3B4113]">
                  Compromiso Municipal
                </h4>
              </div>
              <p className="font-openSans text-[#3A7303] leading-relaxed">
                Este apoyo reafirma el compromiso de la administración municipal
                con el desarrollo turístico responsable, el impulso al
                emprendimiento local y la consolidación del turismo comunitario.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#F2F0E9]  rounded-2xl p-8">
          <h4 className="text-2xl font-medium font-rubik mb-6 text-center text-[#3B4113]">
            Eventos y Actividades
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#3A7303] flex-shrink-0 mt-1" />
                <p className="text-[#3A7303] font-openSans">{activity}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex gap-4 justify-center align-middle flex-wrap">
          <div className="min-w-[366px] max-w-[546px]">
            <img src={img1} alt="Ecopanche Ganadores Convicatorias" />
          </div>
          <p className="text-lg  self-center font-openSans text-[#3A7303] max-w-[43rem] leading-relaxed">
            La articulación entre Asoecopanche y la Alcaldía Municipal es
            ejemplo de cómo las políticas locales pueden potenciar redes
            ciudadanas, generar oportunidades económicas y posicionar a{" "}
            <strong>
              La Mesa como un destino que apuesta por su gente, su territorio y
              su patrimonio
            </strong>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default AlcaldiaSection;
