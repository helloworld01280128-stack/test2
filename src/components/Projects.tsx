import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Particles from "@/components/Particles"; // ✅ Import the Particle
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart management, payment integration, and order tracking.",
    tags: ["React", "Node.js", "MongoDB"],
    codeLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team collaboration features.",
    tags: ["TypeScript", "React", "Firebase"],
    codeLink: "https://github.com/yourusername/task-app",
    liveLink: "https://task-app-demo.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website with dark mode, animations, and contact form.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    codeLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://yourportfolio.vercel.app",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather information dashboard with location search and 7-day forecast.",
    tags: ["JavaScript", "API", "Chart.js"],
    codeLink: "https://github.com/yourusername/weather-dashboard",
    liveLink: "https://weather-dashboard-demo.vercel.app",
  },
  {
    title: "Social Media App",
    description:
      "Social networking platform with posts, comments, likes, and user profiles.",
    tags: ["React", "Redux", "Express"],
    codeLink: "https://github.com/yourusername/social-app",
    liveLink: "https://social-app-demo.vercel.app",
  },
  {
    title: "Fitness Tracker",
    description:
      "Track workouts, calories, and fitness goals with progress visualization.",
    tags: ["React Native", "Firebase", "Charts"],
    codeLink: "https://github.com/yourusername/fitness-tracker",
    liveLink: "https://fitness-tracker-demo.vercel.app",
  },
];

export const Projects = () => {
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
        {/* Section Title */}
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary neon-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 border-2 border-primary/20 hover:border-primary transition-all duration-300 hover-lift hover:neon-glow fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Number Background */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/20">
                  {index + 1}
                </div>
              </div>

              {/* Project Content */}
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className={`flex-1 border-primary/50 hover:border-primary hover:bg-primary/10 ${
                      !project.codeLink ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() =>
                      project.codeLink && window.open(project.codeLink, "_blank")
                    }
                    disabled={!project.codeLink}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className={`flex-1 border-primary/50 hover:border-primary hover:bg-primary/10 ${
                      !project.liveLink ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() =>
                      project.liveLink && window.open(project.liveLink, "_blank")
                    }
                    disabled={!project.liveLink}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
