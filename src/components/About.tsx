import { Users, Target, Heart, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Bienestar",
      description:
        "Experiencias que conectan a las personas con la naturaleza y consigo mismas",
    },
    {
      icon: Globe,
      title: "Sostenibilidad",
      description:
        "Turismo responsable que protege y regenera nuestro entorno natural",
    },
    {
      icon: Users,
      title: "Comunidad",
      description:
        "Fortalecimiento de los actores locales y la identidad regional",
    },
    {
      icon: Target,
      title: "Competitividad",
      description: "Desarrollo estratégico del sector turístico del Tequendama",
    },
  ];

  return (
    <section id="quienes-somos" className="section-padding bg-card">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-rubik font-bold text-foreground mb-6">
            Quiénes Somos
          </h2>
          <p className="text-lg text-muted-foreground font-monserrat leading-relaxed">
            EcoPanche es una estrategia de desarrollo socioeconómico que integra
            diversos actores locales del sector turístico en la región del
            Tequendama, Colombia. Nuestra misión es ofrecer experiencias de
            bienestar en contacto con la naturaleza, la ruralidad y la identidad
            local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg smooth-transition group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-rubik font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-openSans text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#D8E2CD] rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-rubik font-bold text-foreground mb-6 text-center">
            Nuestros Actores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="h-3 w-3 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-rubik font-semibold text-foreground mb-2">
                  Prestadores de Servicios Turísticos
                </h4>
                <p className="text-muted-foreground font-openSans text-sm">
                  Hospedajes, restaurantes y operadores de experiencias locales
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-3 w-3 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-rubik font-semibold text-foreground mb-2">
                  Comunidad Local
                </h4>
                <p className="text-muted-foreground font-openSans text-sm">
                  Habitantes y emprendedores de la región del Tequendama
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-3 w-3 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-rubik font-semibold text-foreground mb-2">
                  Instituciones Educativas
                </h4>
                <p className="text-muted-foreground font-openSans text-sm">
                  Universidades y centros de formación en turismo sostenible
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-3 w-3 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-rubik font-semibold text-foreground mb-2">
                  Entidades Gubernamentales
                </h4>
                <p className="text-muted-foreground font-openSans text-sm">
                  Aliados estratégicos en el desarrollo regional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
