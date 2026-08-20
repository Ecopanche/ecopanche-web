import AlcaldiaSection from "@/components/AlcaldiaSection";
import DiplomadoSection from "@/components/DiplomadoSection";
import FondoEmprenderSection from "@/components/FondoEmprenderSection";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import NavbarWhite from "@/components/NavbarWhite";
import SenaFormationSection from "@/components/SenaFormationSection";
import TimelineSection from "@/components/TimelineSection";

const Asociactividad = () => {
  return (
    <div className="min-h-screen">
      <NavbarWhite />
      <IntroSection />
      <FondoEmprenderSection />
      <SenaFormationSection />
      <TimelineSection />
      <AlcaldiaSection />
      <DiplomadoSection />
      <Footer />
    </div>
  );
};

export default Asociactividad;
