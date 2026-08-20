import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, TrendingUp, Users } from "lucide-react";
import img1 from "@/assets/asociatividad/ganadoresconvocatorias.png";

const FondoEmprenderSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Formalización Institucional",
      description: "Fortalecimiento de Asoecopanche como entidad",
    },
    {
      icon: Users,
      title: "Modelo Asociativo",
      description: "Cooperación entre actores turísticos comunitarios",
    },
    {
      icon: Target,
      title: "Experiencias Integradas",
      description: "Conexión con autenticidad local y naturaleza",
    },
    {
      icon: TrendingUp,
      title: "Formación Técnica",
      description: "Gestión, emprendimiento y marketing con SENA",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#D8E2CD] text-[#3B4113] font-rubik px-6 py-2 rounded-full mb-4 font-medium">
            Reconocimiento Nacional
          </div>
          <h2 className="text-4xl font-medium font-rubik mb-6 text-foreground">
            Ganadores Convocatoria Nacional Fondo Emprender
          </h2>
          <p className="text-xl font-openSans text-[#3A7303] max-w-3xl mx-auto">
            Convocatoria No. 112 Economía Campesina 1C - SENA y Unidades
            Tecnológicas de Santander (UTS)
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 mb-12 shadow-lg">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-primary text-primary-foreground p-3 rounded-lg">
              <Award className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-2 font-rubik text-[#3B4113]">
                Contrato de Cooperación Empresarial No. 1448 DEFE-2023
              </h3>
              <p className=" font-openSans text-[#3A7303]">
                ID del Plan de Negocio: 101353 CREAR ESP Asociación Ecopanche
              </p>
            </div>
          </div>

          <p className="text-lg text-[#3A7303] font-openSans mb-6 leading-relaxed">
            El proyecto tuvo como objeto financiar la iniciativa empresarial de
            la Asociación, con esfuerzos destinados a fortalecer nuestro modelo
            asociativo, mejorar nuestro equipamiento, fortalecer la promoción de
            la oferta de nuestros asociados y consolidar la red de prestadores
            locales vinculados en los servicios de asociados y aliados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                  <achievement.icon className="h-6 w-6" />
                </div>
                <h4 className="font-medium font-rubik text-[#3B4113] text-lg mb-2">
                  {achievement.title}
                </h4>
                <p className="text-muted-foreground font-openSans text-[#3A7303]">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center align-middle flex-wrap">
          <div className="min-w-[366px] max-w-[546px]">
            <img src={img1} alt="Ecopanche Ganadores Convicatorias" />
          </div>
          <p className="text-lg text-pretty self-center font-openSans text-[#3A7303] max-w-[43rem] mx-auto leading-relaxed">
            Este proceso marcó un punto de partida para nuestra historia como
            asociación. Representa no solo un impulso económico, sino también el{" "}
            <strong>reconocimiento al valor del trabajo colaborativo</strong>,
            el compromiso territorial y la capacidad del turismo comunitario
            para transformar realidades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FondoEmprenderSection;
