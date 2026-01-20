import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const WHATSAPP_COMMUNITY_LINK = "https://chat.whatsapp.com/HiQh3q5HY2F4r4nPuzIiFP";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#benefits", label: "Benefits" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#services", label: "Services" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-navy-900 font-bold text-lg">H</span>
            </div>
            <span
              className={`font-bold text-lg transition-colors ${
                isScrolled ? "text-foreground" : "text-cream-50"
              }`}
            >
              Hosts Who Build
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-gold-500 ${
                  isScrolled ? "text-foreground" : "text-cream-50"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button variant="gold" size="sm" asChild>
              <a href={WHATSAPP_COMMUNITY_LINK} target="_blank" rel="noopener noreferrer">
                Join Community
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-cream-50"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4 bg-card rounded-xl p-4 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-foreground hover:text-gold-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gold" asChild className="w-full">
                <a href={WHATSAPP_COMMUNITY_LINK} target="_blank" rel="noopener noreferrer">
                  Join Community
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
