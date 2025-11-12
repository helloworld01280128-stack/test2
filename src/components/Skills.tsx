import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import Particles from "@/components/Particles"; // ✅ Import the Particle
const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "Python", level: 82 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 78 },
  { name: ".Net", level: 79 },
  { name: "Tailwind CSS", level: 92 },
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 min-h-[calc(100vh-8rem)] flex items-center" ref={sectionRef}>
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
            My <span className="text-primary neon-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-semibold">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary neon-glow transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
