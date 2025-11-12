import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Instagram, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCharacter from "@/assets/hero-character.png";
import Particles from "@/components/Particles";
import MeteorBackground from "@/components/MeteorBackground"; // 🌠 Add this line

const roles = ["Web Developer", "UI/UX Designer", "Frontend Engineer","Prompt Engineer"];

interface HeroProps {
  onSectionChange?: (section: string) => void;
}

export const Hero = ({ onSectionChange }: HeroProps) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === role) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? role.substring(0, displayText.length - 1)
            : role.substring(0, displayText.length + 1)
        );
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", external: true },
    { icon: Github, href: "https://github.com", label: "GitHub", external: true },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", external: true },
    { icon: Instagram, href: "https://www.instagram.com/iam__sriram_/", label: "Instagram", external: true },
    { icon: Mail, href: "contact", label: "Email", external: false },
    { icon: MessageCircle, href: "contact", label: "WhatsApp", external: false },
  ];

  return (
    <section className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center py-8 overflow-hidden">
      {/* 🌠 Meteor and Particle Backgrounds */}
      <MeteorBackground />
      <Particles
        particleColors={["#ff0000", "#ffffff", "#ff4d4d"]}
        particleCount={250}
        particleSpread={8}
        speed={0.15}
        particleBaseSize={80}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center md:justify-start fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative translate-x-8 md:translate-x-12">
              <div className="absolute inset-0 flex items-center justify-center translate-x-4">
                <div className="w-[400px] h-[400px] rounded-full bg-primary/30 blur-3xl glow-pulse" />
              </div>
              <div className="relative z-10">
                <img
                  src={heroCharacter}
                  alt="Sriram - Developer"
                  className="w-[400px] h-[400px] object-cover rounded-full border-4 border-primary/20"
                />
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="space-y-6 fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, It's <span className="text-primary neon-text">Sriram</span>
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground h-12 flex items-center">
              <span>I'm a </span>
              <span className="ml-2 text-primary font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="text-muted-foreground text-lg max-w-lg">
              I’m passionate about building modern, responsive websites and web applications.
              I focus on creating clean, user-friendly designs and writing efficient code to bring ideas to life.
              I’m always eager to learn new technologies and take on exciting challenges.
            </p>

            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 neon-glow"
                  onClick={() => {
                    if (social.external) window.open(social.href, "_blank");
                    else onSectionChange?.(social.href);
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>

            <div>
              <Button
                size="lg"
                className="border-2 border-primary bg-transparent hover:bg-primary hover:text-primary-foreground text-primary font-semibold px-8 py-6 text-lg neon-glow transition-all duration-300 hover:scale-105"
                onClick={() => onSectionChange?.("contact")}
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
