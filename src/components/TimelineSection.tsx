import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import img1 from "@/assets/asociatividad/proceso.png";

interface Course {
  name: string;
  description: string;
}

interface Section {
  title: string;
  instructors?: string;
  content: string;
}

interface Milestone {
  year: string;
  title: string;
  instructor?: string;
  subtitle?: string;
  description?: string;
  courses?: Course[];
  sections?: Section[];
}

const TimelineSection = () => {
  const milestones: Milestone[] = [
    {
      year: "2023-2024",
      title: "Ruta Emprendedora CampeSENA",
      instructor: "Guillermo Rodríguez García",
      courses: [
        {
          name: "Comportamiento Emprendedor",
          description:
            "Fortalecimiento de competencias personales y empresariales necesarias para consolidar las iniciativas productivas y prepararlas para su puesta en marcha con mayores probabilidades de éxito",
        },
        {
          name: "Generación de Ideas para un Negocio Innovador",
          description:
            "Estructuración del proyecto Ruta Biocultural: Café, Aves y Patrimonio, integrando experiencias de agroturismo, aviturismo y patrimonio cultural. Bases conceptuales del actual Cluster Turístico Ecopanche",
        },
        {
          name: "Formulación de Plan de Negocios",
          description:
            "Diseño técnico y financiero del proyecto, acreditado y postulado a la convocatoria del SENA para la entrega de kits productivos. El proyecto fue viabilizado y recibió equipamiento clave para fortalecer la operación de Ecopanche",
        },
      ],
    },
    {
      year: "2024",
      title: "Consolidación y Fondo Emprender",
      subtitle: "Semillero de la Convocatoria de Economía Campesina",
      description:
        "Los proyectos desarrollados en la Ruta Emprendedora CampeSENA se consolidaron como el semillero de la Convocatoria de Economía Campesina de Fondo Emprender.",
      sections: [
        {
          title: "Direccionamiento ante el SENA",
          content:
            "Se adelantaron gestiones ante el Centro de Desarrollo Empresarial del SENA Centro de la Tecnología del Diseño y la Productividad Empresarial, donde el proyecto fue direccionado y asignado al orientador Paulo César Herrera. Bajo su acompañamiento, se realizaron las actividades de ajuste, acreditación y postulación del plan de negocios, logrando su viabilización y priorización dentro de la convocatoria del Fondo Emprender para asociaciones.",
        },
        {
          title: "Formación Continua",
          instructors: "Guillermo Rodríguez y Nicolás Sánchez Lizaraldo",
          content:
            "Nuevas ofertas de formación en emprendimiento, innovación y marketing digital. Implementación de estrategias para la promoción, transformación digital y posicionamiento competitivo del destino.",
        },
        {
          title: "Certificación en Guianza Turística",
          instructors: "Javier Patiño",
          content:
            "Certificación de competencias en guianza turística, con acompañamiento continuo durante la ejecución de Fondo Emprender.",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium mb-6 font-rubik text-[#3B4113]">
            Continuidad del Proceso Formativo
          </h2>
          <p className="text-xl font-openSans text-[#3A7303] max-w-3xl mx-auto">
            Un camino de aprendizaje continuo y crecimiento colectivo
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== milestones.length - 1 && (
                <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-primary/30" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-2">
                <div className="bg-primary rounded-full p-1">
                  <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {/* <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full font-bold">
                      {milestone.year}
                    </span> */}
                    <h3 className="text-2xl font-medium font-rubik text-[#3B4113] ">
                      {milestone.title}
                    </h3>
                  </div>

                  {milestone.subtitle && (
                    <p className="text-lg font-semibold font-openSans text-[#3A7303] mb-3">
                      {milestone.subtitle}
                    </p>
                  )}

                  {milestone.instructor && (
                    <p className="text-sm font-openSans text-[#3A7303] mb-4">
                      <strong>Instructor:</strong> {milestone.instructor}
                    </p>
                  )}

                  {milestone.description && (
                    <p className=" leading-relaxed font-openSans text-[#3A7303] mb-4">
                      {milestone.description}
                    </p>
                  )}

                  {milestone.sections && (
                    <div className="space-y-6 mt-6">
                      {milestone.sections.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="bg-muted/40 rounded-lg p-5 border-l-4 border-primary"
                        >
                          <h4 className="font-medium font-rubik text-[#3B4113] text-lg mb-3 ">
                            {section.title}
                          </h4>
                          {section.instructors && (
                            <p className="text-sm font-openSans text-[#3A7303] mb-2">
                              <strong>Instructores:</strong>{" "}
                              {section.instructors}
                            </p>
                          )}
                          <p className="font-openSans text-[#3A7303] leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {milestone.courses && milestone.courses.length > 0 && (
                    <div className="space-y-4 mt-4">
                      {milestone.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="bg-muted/50 rounded-lg p-4"
                        >
                          <h4 className="font-medium font-rubik text-[#3B4113] text-lg mb-2 ">
                            {course.name}
                          </h4>
                          <p className=" font-openSans text-[#3A7303]">
                            {course.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-12 flex gap-4 justify-center align-middle flex-wrap">
          <div className="min-w-[366px] max-w-[546px]">
            <img src={img1} alt="Ecopanche Ganadores Convicatorias" />
          </div>
          <p className="text-lg  self-center font-openSans text-[#3A7303] max-w-[43rem] leading-relaxed">
            Estas acciones formativas demuestran el{" "}
            <strong>
              compromiso de Asoecopanche con la educación como motor de
              desarrollo
            </strong>
            , impulsando la mejora continua de los servicios turísticos y
            fortaleciendo el tejido humano y rural que da vida a las ofertas de
            nuestros asociados y aliados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
