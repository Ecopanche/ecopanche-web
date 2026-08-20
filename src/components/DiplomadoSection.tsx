import bioculturalImage from "@/assets/biocultural-route.jpg";
import { GraduationCap, Sparkles } from "lucide-react";
import diplomadoImg from "@/assets/asociatividad/diplomado.png";

const DiplomadoSection = () => {
  const courses = [
    "Turismo Que Enamora: Excelencia En Servicio Al Cliente",
    "Digitaliza Tu Destino: Marketing Turístico En La Era Digital",
    "Ventas Que Conecta: Técnicas De Comercialización Turística",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="flex flex-col align-middle justify-center">
        <div className="items-center gap-3 bg-[#D8E2CD] px-6 py-2 rounded-full mb-6 w-fit m-auto">
          {/* <Sparkles className="h-5 w-5 text-accent" /> */}
          <span className="font-medium font-rubik text-[#3B4113]">
            Formación de Excelencia 2025
          </span>
        </div>

        <h2 className="text-4xl font-medium font-rubik mb-6 text-[#3B4113]">
          Nuestro diplomado y cursos
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-4">
              <h4 className="font-medium font-rubik text-lg text-[#3B4113]">
                Diplomado en Innovación y Estrategia Turística:
              </h4>
              <div className="flex items-start gap-3 rounded-lg p-1">
                <div className="bg-[#D8E2CD] text-[#3A7303] rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 font-medium font-rubik">
                  1
                </div>
                <p className="text-[#3A7303] pt-1">
                  Somos beneficiarios del Diplomado en Innovación y Estrategia
                  Turística: Marketing, IA y Sostenibilidad 2025 por la
                  Universidad Externado de Colombia
                </p>
              </div>
              <h4 className="font-medium font-rubik text-lg text-[#3B4113]">
                Cursos Especializados:
              </h4>
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg p-1"
                >
                  <div className="bg-[#D8E2CD] text-[#3A7303] rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 font-medium font-rubik">
                    {index + 1}
                  </div>
                  <p className="text-[#3A7303] pt-1">{course}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={diplomadoImg}
              alt="Ruta biocultural con café, aves y patrimonio"
              className="rounded-2xl shadow-xl w-[80%]"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#D8E2CD] text-[#3B4113] px-8 py-4 rounded-xl shadow-lg">
              <p className="font-medium font-rubik text-lg">
                Innovación Turística
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiplomadoSection;
