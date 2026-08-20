import trainingImage from "@/assets/asociatividad/asistenciaSena.png";
import { BookOpen, Lightbulb, Users2 } from "lucide-react";

const SenaFormationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-[#3B4113] font-rubik mb-6 text-foreground">
            Formación y Asistencia Técnica con SENA
          </h2>
          <p className="text-xl font-openSans text-muted-foreground max-w-3xl text-[#3A7303] mx-auto">
            El conocimiento como base del progreso comunitario
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img
              src={trainingImage}
              alt="Formación SENA en turismo rural"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <p className="text-lg font-openSans text-[#3A7303] leading-relaxed">
              En Asoecopanche creemos que el conocimiento es la base del
              progreso comunitario. Por ello, una de nuestras líneas
              estratégicas más importantes ha sido la{" "}
              <strong>formación y asistencia técnica</strong> en gestión,
              innovación y sostenibilidad, desarrollada en alianza con el{" "}
              <strong>SENA Regional Girardot</strong>.
            </p>

            <div className="flex items-start gap-4 bg-muted/50 p-6 rounded-xl">
              <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium font-rubik text-[#3B4113] text-lg mb-2">
                  Fortalecimiento de Capacidades
                </h4>
                <p className="text-muted-foreground font-openSans text-[#3A7303]">
                  Nuestros asociados y aliados han fortalecido sus capacidades
                  para ofrecer servicios turísticos de calidad.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-muted/50 p-6 rounded-xl">
              <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium text-lg mb-2 font-rubik text-[#3B4113]">
                  Cultura de Aprendizaje
                </h4>
                <p className="text-muted-foreground font-openSans text-[#3A7303]">
                  Consolidamos una cultura de aprendizaje continuo, donde la
                  cualificación y la cooperación son pilares fundamentales.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F2F0E9]  rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <Users2 className="h-10 w-10 text-[#3A7303]" />
            <h3 className="text-3xl font-medium font-rubik text-[#3B4113]">
              Cluster Turístico Ecopanche
            </h3>
          </div>

          <div className="space-y-4 text-lg font-openSans text-[#3A7303] leading-relaxed">
            <p>
              Del curso{" "}
              <strong>
                "Emprendedor en Prestación de Servicios de Alojamientos Rurales"
              </strong>
              , bajo el liderazgo de la instructora{" "}
              <strong>Mónica Alejandra Bedoya</strong> del Programa SER – SENA
              Emprende Rural, nació una de nuestras experiencias más
              significativas. Los participantes desarrollaron un proyecto
              colectivo que dio origen al{" "}
              <strong>Cluster Turístico Ecopanche</strong>, una red colaborativa
              que integra a los emprendimientos locales con el propósito de
              fortalecer los vínculos territoriales y empoderar el alojamiento
              rural desarrollado durante 2023 y 2024.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SenaFormationSection;
