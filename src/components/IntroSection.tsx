import communityImage from "@/assets/asociatividad/hero.png";
import enaImage from "@/assets/asociatividad/logoemprender.png";

const IntroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-medium font-rubik mb-6 text-[#3A7303]">
              Introducción
            </h2>
            <div className="space-y-4 text-lg text-[#3A7303] leading-relaxed font-openSans">
              <p>
                Enfoque Asociativo y Proyectos de Gobernanza. En la Asociación
                Turística Ecopanche creemos en el turismo como una herramienta
                de transformación territorial. Nuestro modelo se fundamenta en
                la asociatividad comunitaria, donde cada aliado y asociado es
                parte activa de la cadena de valor local. Esta red viva
                convierte cada experiencia turística en un acto de cooperación,
                sostenibilidad y bienestar colectivo para La Mesa y la Provincia
                del Tequendama. Desde nuestros estatutos, hemos definido como
                misión trabajar por consolidar una gobernanza colaborativa,
                basada en la participación activa, la tran.
              </p>
            </div>
          </div>
          <div className="gap-2 flex flex-col">
            <div>
              <div className="rounded-2xl max-w-[90%] overflow-hidden">
                <img
                  src={enaImage}
                  alt="Cooperación comunitaria en la Asociación Ecopanche"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl max-w-[90%] overflow-hidden shadow-lg">
                <img
                  src={communityImage}
                  alt="Cooperación comunitaria en la Asociación Ecopanche"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#D8E2CD] text-[#3B4113] px-8 py-4 rounded-xl shadow-lg">
                <p className="font-medium font-rubik text-lg">
                  Trabajo Colaborativo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
