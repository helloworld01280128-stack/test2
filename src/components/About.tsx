import { User, Code, Heart, Award, EditIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import Particles from "@/components/Particles"; // ✅ Import the Particles component

export const About = () => {
  const interests = [
    { icon: Code, text: "Building innovative web applications" },
    { icon: Heart, text: "Creating beautiful user experiences" },
    { icon: Award, text: "Learning new technologies" },
    { icon: EditIcon, text: "Transforming raw footage into visual art." },
  ];

  return (
    <section className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center py-8 overflow-hidden">
      {/* ✅ Particle Background */}
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

      {/* ✅ Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About us <span className="text-primary neon-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Profile Icon */}
          <div className="flex justify-center fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-64 h-64 rounded-lg overflow-hidden border-2 border-primary/50 neon-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                  <User className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="space-y-6 fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">
                I am passionate about my work and dedicated to learning and improving my skills. 
                I focus on creating meaningful results through effort and creativity.
              </p>
              <p className="text-muted-foreground text-lg">
                I take pride in my work and handle challenges responsibly, without compromising on integrity or performance.
                I believe in continuous growth, accountability, and learning from every experience to become better each day.
              </p>
            </div>

            {/* Interests */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Interests & Passions</h3>
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <interest.icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-foreground">{interest.text}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
