import { MapPin, Mail, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import emaLogo from "@/assets/ema-logo.avif";
import isoCertified from "@/assets/iso-certified.avif";

const Footer = () => {
  const services = [
    { name: "P-STAT", href: "/p-stat" },
    { name: "P-OPT", href: "/p-opt" },
    { name: "Derivatives", href: "/derivatives" },
    { name: "Price Forecasting", href: "/price-forecasting" },
    { name: "Load Forecasting", href: "/load-forecasting" },
    { name: "RE Forecasting", href: "/re-forecasting" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
    { name: "PowerMarkets.in", href: "https://powermarkets.in", external: true },
  ];

  return (
    <footer id="contact" className="bg-background border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={emaLogo} 
                alt="EMA Solutions" 
                className="w-10 h-10 object-contain"
                style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(155deg)' }}
              />
              <span className="font-display font-semibold text-foreground">EMA Solutions</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              South Asia's leading predictive analytics & trade automation provider for the power sector.
            </p>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50 inline-flex">
              <img 
                src={isoCertified} 
                alt="ISO 27001 Certified" 
                className="w-6 h-6 object-contain"
                style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(155deg) brightness(0.9)' }}
              />
              <span className="text-xs text-muted-foreground">ISO/IEC 27001 Certified</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Products & Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  44, 2nd Floor, Regal Building,<br />
                  Connaught Place,<br />
                  New Delhi – 110001
                </span>
              </li>
              <li>
                <a
                  href="mailto:info@powermarkets.in"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  info@powermarkets.in
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/emasolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  Follow us on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} EMA Solutions Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
