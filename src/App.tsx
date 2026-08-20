import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HospedajeDetail from "./pages/HospedajeDetail";
import ExperienciaDetail from "./pages/ExperienciaDetail";
import NotFound from "./pages/NotFound";
import Asociactividad from "./pages/Asociactividad";
import CabanasAndes from "./pages/CabanasAndes";
import RefugioMiradores from "./pages/RefugioMiradores";
import ColombiaMiCasa from "./pages/ColombiaMiCasa";
import LaPieta from "./pages/LaPieta";
import Bahkti from "./pages/Bahkti";
import RealismoMagico from "./pages/RealismoMagico";
import Tukui from "./pages/Tukui";
import RealMonte from "./pages/RealMonte";
import RealMonteExp from "./pages/RealMonteExp";
import ParaisoMariposa from "./pages/ParaisoMariposa";
import RestauranteTren from "./pages/RestauranteTren";
import CascadaSalto from "./pages/SaltoMonjas";
import TukuiExp from "./pages/TukuiExp";
import NacionPanche from "./pages/NacionPanche";
import CafeBienvenida from "./pages/CafeBienvenida";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hospedaje/:id" element={<HospedajeDetail />} />
          <Route path="/experiencia/:id" element={<ExperienciaDetail />} />
          <Route path="/asociactividad" element={<Asociactividad />} />
          <Route path="/cabanas-andes" element={<CabanasAndes />} />
          <Route
            path="/refugio-miradores-del-ocaso"
            element={<RefugioMiradores />}
          />
          <Route path="/colombia-mi-casa" element={<ColombiaMiCasa />} />
          <Route path="/la-pieta" element={<LaPieta />} />
          <Route path="/bahkti" element={<Bahkti />} />
          <Route path="/realismo-magico" element={<RealismoMagico />} />
          <Route path="/tukui" element={<Tukui />} />
          <Route path="/tukui-experiencia" element={<TukuiExp />} />
          <Route path="/real-monte" element={<RealMonte />} />
          <Route path="/real-monte-experiencia" element={<RealMonteExp />} />
          <Route path="/paraiso-mariposa" element={<ParaisoMariposa />} />
          <Route path="/restaurante-tren-sazon" element={<RestauranteTren />} />
          <Route path="/cascada-salto-monjas" element={<CascadaSalto />} />
          <Route path="/nacion-panche" element={<NacionPanche />} />
          <Route path="/cafe-bienvenida" element={<CafeBienvenida />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
