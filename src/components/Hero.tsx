import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Multi-layered animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl animate-pulse"></div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `radial-gradient(at 40% 20%, hsla(270,75%,65%,0.15) 0px, transparent 50%),
                         radial-gradient(at 80% 0%, hsla(320,85%,65%,0.15) 0px, transparent 50%),
                         radial-gradient(at 0% 50%, hsla(200,80%,60%,0.15) 0px, transparent 50%),
                         radial-gradient(at 80% 50%, hsla(270,75%,65%,0.1) 0px, transparent 50%),
                         radial-gradient(at 0% 100%, hsla(320,85%,65%,0.15) 0px, transparent 50%),
                         radial-gradient(at 80% 100%, hsla(200,80%,60%,0.15) 0px, transparent 50%)`
      }}></div>

      {/* Dotted pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle, hsl(270 75% 65% / 0.1) 1px, transparent 1px)",
        backgroundSize: "50px 50px"
      }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                👋 Hello, I'm
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Hafiza Jakkli
            </h1>

            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Computer Science & GIS Student
              </h2>
              <p className="text-xl text-muted-foreground">
                Full Stack Developer | Cyber Security Enthusiast | AI Explorer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              B.Sc Computer Science & Geoinformatics • Final Year
              <br />
              Building innovative solutions at the intersection of technology and spatial intelligence
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="group">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button variant="outline" size="lg" className="group">
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                </a>
              </Button>
            </div>


            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/stackswift"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:shadow-glow"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/hafiza-jakkli-448471311/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:shadow-glow"
              >
                <Linkedin className="w-5 h-5" />

                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-75 blur-2xl group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-soft">
                <img
                  src={profileImage}
                  alt="Hafiza Jakkli"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
