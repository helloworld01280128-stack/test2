import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", section: "home" },
  { name: "About", section: "about" },
  { name: "Services", section: "services" },
  { name: "Skills", section: "skills" },
  { name: "Education", section: "education" },
  { name: "Experience", section: "experience" },
  { name: "Gallery", section: "gallery" },
  { name: "Projects", section: "projects" },
  { name: "Certifications", section: "certifications" },
  { name: "Contact", section: "contact" },

];

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setIsMobileMenuOpen(false);
    onSectionChange(section);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold">
            <span className="text-primary neon-text">SRIRAM</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.section)}
                className={`relative text-sm font-light transition-colors hover:text-primary group ${
                  activeSection === item.section ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.section
                      ? "w-full neon-glow"
                      : "w-0 group-hover:w-full group-hover:neon-glow"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 fade-in-up">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.section)}
                className={`block w-full text-left px-4 py-3 text-sm transition-colors hover:bg-primary/10 ${
                  activeSection === item.section ? "text-primary bg-primary/5" : "text-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
