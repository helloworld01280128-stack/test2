import CircularGallery from "@/components/CircularGallery";
import Particles from "@/components/Particles";


export const Gallery = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
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
      
      {/* Heading */}
               
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary neon-text">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </div>

      {/* Circular Gallery Animation */}
      <div
        style={{ height: "600px", position: "relative", width: "100%" }}
        className="flex justify-center items-center"
      >
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>

    </section>
  );
};
