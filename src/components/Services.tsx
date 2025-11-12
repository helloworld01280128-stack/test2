import { Code, Palette, Smartphone, Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Particles from "@/components/Particles"; // ✅ Import the Particle
const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive and performant web applications using modern technologies and best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces that provide exceptional user experiences.",
  },
  {
    icon: Smartphone,
    title: "Frontend Engineering",
    description: "Developing scalable frontend architectures with React, TypeScript, and modern frameworks.",
  },
  {
    icon: Brain,
    title: "AI Automation",
    description: "Implementing intelligent automation solutions to streamline workflows and increase efficiency.",
  },
];

export const Services = () => {
  return (
    <section className="py-12 min-h-[calc(100vh-8rem)] flex items-center">
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary neon-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/50 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover-lift hover:neon-glow fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-center text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
