import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import logo from "@/assets/ecopanche-logo-color.png";

const navigationLinks = [
  { name: "Inicio", href: "/" },
  { name: "Quiénes somos", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Contacto", href: "/contact" },
];

export const NavbarWhite = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Ecopanche" className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium no-underline"
                activeClassName="font-bold underline"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-accent hover:bg-accent/80 rounded-2xl"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6 text-accent-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigationLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-primary transition-colors font-medium text-lg no-underline"
                      activeClassName="font-bold underline"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarWhite;
