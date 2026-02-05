import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import emaLogo from "@/assets/ema-logo.avif";
import isoCertified from "@/assets/iso-certified.avif";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "#services" },
    { label: "News", href: "#news" },
    { label: "Photos", href: "#photos" },
    { label: "Updates", href: "#updates" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Seamlessly merged with theme */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <img 
                src={emaLogo} 
                alt="EMA Solutions" 
                className="w-full h-full object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(155deg)' }}
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-foreground font-display font-semibold text-sm md:text-base">Energy Market Analytics</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ISO Badge - Desktop with uploaded image */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50">
              <img 
                src={isoCertified} 
                alt="ISO 27001 Certified" 
                className="w-6 h-6 object-contain"
                style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(155deg) brightness(0.9)' }}
              />
              <span className="text-xs text-muted-foreground">27001 Certified</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                <img 
                  src={isoCertified} 
                  alt="ISO 27001 Certified" 
                  className="w-6 h-6 object-contain"
                  style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(155deg) brightness(0.9)' }}
                />
                <span className="text-xs text-muted-foreground">ISO/IEC 27001 Certified</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
