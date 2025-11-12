import { Award, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Particles from "@/components/Particles";

const certifications = [
  {
    title: "Diploma Project Certification",
    issuer: "TRR College Of Technology",
    date: "2025",
    description:
      "Received certification for successfully completing a diploma mini project. Gained practical experience in software development and teamwork.",
    link: "/certificates/head.jpg", // 🔗 Replace with your actual certificate link
  },
  {
    title: "Web Development Certification",
    issuer: "FreeCodeCamp",
    date: "2025",
    description:
      "Completed certification in web development covering HTML, CSS, JavaScript, and responsive design. Built multiple small projects to strengthen frontend skills.",
    link: "https://example.com/webdev-certificate", // 🔗 Replace with your actual certificate link
  },
];

export const Certifications = () => {
  return (
    <section className="py-12 min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
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

      {/* Section Title */}
      <div className="text-center mb-10 fade-in-up relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-primary neon-text">Certifications</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-5xl w-full px-4 relative z-10">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            className="bg-card/50 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover-lift hover:neon-glow fade-in-up w-full md:w-[420px]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2 font-semibold">
                    {cert.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{cert.issuer}</span>
                  </div>
                  <div className="text-primary text-sm mt-1 font-medium">
                    {cert.date}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <CardDescription className="text-muted-foreground text-base leading-relaxed">
                {cert.description}
              </CardDescription>

              {/* ✅ View Certificate Button */}
              <Button
                asChild
                variant="outline"
                className="w-full border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2 text-primary" />
                  View Certificate
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
