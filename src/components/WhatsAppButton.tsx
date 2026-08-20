import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface WhatsAppButtonProps {
  variant?: "floating" | "inline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

const WhatsAppButton = ({ variant = "inline", size = "default", className = "" }: WhatsAppButtonProps) => {
  const phoneNumber = "573001234567"; // Reemplazar con el número real de WhatsApp
  const message = "Hola, me gustaría obtener más información sobre EcoPanche";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  if (variant === "floating") {
    return (
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${className}`}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      size={size}
      className={`bg-[#25D366] hover:bg-[#20BA5A] text-white font-inter font-medium gap-2 ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      Contactar por WhatsApp
    </Button>
  );
};

export default WhatsAppButton;
