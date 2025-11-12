import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import Particles from "@/components/Particles"; // ✅ Import the Particle
const education = [
  {
    year: "2025 - NOW",
    degree: "Bachelor of Science in Computer Science",
    institution: "Keshav Memorial Institution Of Technology",
    description:
      "Focused on software engineering, web development, and artificial intelligence. Graduated with honors.",
  },
  {
    year: "2022 - 2025",
    degree: "Diploma in Computer Engineering",
    institution: "TRR College Of Technology",
    description: "Gained practical knowledge in programming, hardware, and software systems. Worked on multiple mini projects in IoT and web development.",
  },
  {
    year: "2010 - 2022",
    degree: "High School Diploma",
    institution: "Model High School",
    description: "Completed my schooling with a strong focus on mathematics, science, and computer fundamentals.",
  },
];

export const Education = () => {
  return (
    <section className="py-12 min-h-[calc(100vh-8rem)] flex items-center bg-secondary/20">
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
            My <span className="text-primary neon-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 neon-glow" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative fade-in-up ${
                  index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
                } md:w-1/2`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary neon-glow transform -translate-x-1/2" />

                <Card className="ml-16 md:ml-0 p-6 bg-card/50 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-primary text-sm font-semibold mb-1">{item.year}</div>
                      <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                      <h4 className="text-muted-foreground font-medium mb-3">{item.institution}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
