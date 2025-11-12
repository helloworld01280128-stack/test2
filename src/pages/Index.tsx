import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery"; // ✅ Correct import

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Hero onSectionChange={setActiveSection} />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "skills":
        return <Skills />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "certifications":
        return <Certifications />;
      case "gallery":
        return <Gallery />; // ✅ show gallery
      case "contact":
        return <Contact />;
      default:
        return <Hero onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <div className="pt-16 min-h-screen flex flex-col">
        <div key={activeSection} className="flex-1 fade-in-up">
          {renderSection()}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
