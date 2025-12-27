import { GraduationCap, BookOpen, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "B.Sc in Computer Science & Geoinformatics from MGRDPR University",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "70+ hours of certifications from AWS, MongoDB, NVIDIA, and more",
      color: "text-secondary"
    },
    {
      icon: Target,
      title: "Career Focus",
      description: "Full Stack Development, Blockchain, AI, and Cybersecurity",
      color: "text-accent"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-secondary/5"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(at 20% 30%, hsla(270,75%,65%,0.08) 0px, transparent 50%),
                         radial-gradient(at 80% 70%, hsla(320,85%,65%,0.08) 0px, transparent 50%)`
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate developer combining computer science expertise with spatial intelligence
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Story */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  I'm a final-year B.Sc student specializing in <span className="text-primary font-medium">Computer Science and Geoinformatics</span>, 
                  building a unique skillset that bridges software development with spatial data analysis.
                </p>
                <p>
                  My journey encompasses a wide spectrum of modern technologies—from building full-stack web applications 
                  to developing smart contracts on blockchain platforms, from training neural networks to analyzing spatial data patterns.
                </p>
                <p>
                  With hands-on experience in <span className="text-secondary font-medium">React, Node.js, MongoDB</span>, and emerging 
                  technologies like <span className="text-accent font-medium">Solidity, and AI/ML frameworks</span>, I'm passionate 
                  about exploring impactful solutions that solve real-world problems.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex gap-4">
                      <div className={`flex-shrink-0 ${highlight.color}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                        <p className="text-muted-foreground text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Key Areas */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <h3 className="text-2xl font-semibold mb-6 text-center">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Full Stack Development", value: "React, Node.js, MongoDB" },
                { label: "Web3 Concepts", value: "Solidity Basics, Smart Contracts" },
                { label: "AI Fundamentals", value: "ML Concepts, Python Data Science" },
                { label: "GIS & Spatial Analysis", value: "Geospatial Data, Mapping" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="text-center space-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-sm">{item.label}</h4>
                  <p className="text-xs text-muted-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
