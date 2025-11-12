import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Particles from "@/components/Particles"; // ✅ Import the Particles
export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // ✉️ Send Email using EmailJS
    emailjs
      .send(
        "service_lszb8eo", // 🔹 Replace with your EmailJS Service ID
        "template_mcz3j65", // 🔹 Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "ZjTMyHD_sv-_6XF6d" // 🔹 Replace with your Public Key
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon!",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          toast({
            title: "Error",
            description: "Failed to send the message. Please try again.",
            variant: "destructive",
          });
        }
      );
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "helloworld01280128@gmail.com" },
    { icon: Phone, label: "Phone", value: "7995989510" },
    { icon: MapPin, label: "Location", value: "Meerpet, Hyderabad" },
  ];

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
            Get In <span className="text-primary neon-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-4 bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className="p-6 bg-card/50 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background/50 border-primary/30 focus:border-primary"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background/50 border-primary/30 focus:border-primary"
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background/50 border-primary/30 focus:border-primary min-h-[150px] resize-none"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold neon-glow"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
