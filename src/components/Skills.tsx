import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Blocks,
  Brain,
  Globe,
  Shield,
  Palette,
  Terminal
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "text-primary",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "UI/UX Design", "Framer Motion"]
    },
    {
      title: "Backend Development",
      icon: Terminal,
      color: "text-secondary",
      skills: ["Node.js", "Express.js", "Flask", "REST APIs", "Authentication", "JWT"]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "text-accent",
      skills: ["MongoDB", "MongoDB Atlas", "MySQL", "DBMS", "Data Modeling"]
    },
    {
      title: "Blockchain & Web3",
      icon: Blocks,
      color: "text-primary",
      skills: ["Solidity", "Rust", "Smart Contracts", "Sui", "zkEVM", "ZetaChain", "Aptos", "NFT dApps", "Omnichain"]
    },
    {
      title: "AI & Data Science",
      icon: Brain,
      color: "text-secondary",
      skills: ["Neural Networks", "Sentiment Analysis", "Python", "MATLAB", "Data Preprocessing"]
    },
    {
      title: "GIS & Spatial Analysis",
      icon: Globe,
      color: "text-accent",
      skills: ["Spatial Data", "Georeferencing", "Digitization", "Raster/Vector Analysis", "Map Visualization", "Data Collection"]
    },
    {
      title: "DevOps & Tools",
      icon: Palette,
      color: "text-primary",
      skills: ["Git", "GitHub", "VS Code", "Linux", "Docker"]
    },
    {
      title: "Security & Testing",
      icon: Shield,
      color: "text-secondary",
      skills: ["Cybersecurity", "Bug Bounty", "Web Security Testing", "Network Security"]
    }
  ];

  const languages = [
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Java", level: 85 },
    { name: "C", level: 75 },
    { name: "SQL", level: 80 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Bash/Shell", level: 70 },
    { name: "C++", level: 70 }
  ];


  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse toolkit spanning full-stack development, blockchain, AI, and spatial technologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group animate-scale-in border-2 border-border/50"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-${category.color.split('-')[1]}/10 to-${category.color.split('-')[1]}/5 ${category.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-sm bg-background rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Programming Languages Proficiency */}
          <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-2 border-primary/20">
            <h3 className="text-2xl font-semibold mb-8 text-center">Programming Languages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
