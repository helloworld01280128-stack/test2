import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Particles from "@/components/Particles"; // ✅ Import the Particle
const experiences = [
  
    {
  role: "Web Developer",
  company: "Self Learning / Personal Projects",
  duration: "2025 - Present",
  description:
    "Currently learning and building projects in frontend development with a strong focus on React, HTML, CSS, and JavaScript. Gaining experience in creating responsive, user-friendly interfaces and exploring backend development using Node.js and Express. Continuously improving skills through hands-on practice and real-world mini projects.",
},

  {
    role: "Mini Project Developer",
  company: "Diploma Academic Project",
  duration: "2022 - 2025",
  description:
    "Developed a mini project as part of diploma coursework. Worked on designing and coding both frontend and backend components. Gained hands-on experience in project planning, UI design, and integrating hardware/software systems.",

  },

];

export const Experience = () => {
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
            My <span className="text-primary neon-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-card/50 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover-lift hover:neon-glow fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{exp.role}</CardTitle>
                    <div className="flex flex-col gap-1">
                      <span className="text-muted-foreground font-medium">{exp.company}</span>
                      <span className="text-primary text-sm">{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{exp.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
