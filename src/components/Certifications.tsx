import { Card } from "@/components/ui/card";
import { Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development Primer",
      issuer: "Educative",
      date: "Aug 2025",
      category: "Full Stack"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS Labs",
      date: "Aug 2025",
      category: "Cloud"
    },
    {
      title: "Deloitte Technology Consulting Virtual Experience",
      issuer: "Deloitte (Forage)",
      date: "Aug 2025",
      category: "Professional Simulation"
    },
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      date: "Feb 2025",
      category: "Data Science"
    },
    {
      title: "Bug Bounty & Web Security Course",
      issuer: "Udemy",
      date: "Dec 2023",
      category: "Security Learning"
    },
    {
      title: "Complete Python Bootcamp: Zero to Hero",
      issuer: "Udemy",
      date: "Aug 2023",
      category: "Programming"
    },
    {
      title: "7 Days DevOps Boot Camp",
      issuer: "DevTown",
      date: "Dec 2023",
      category: "DevOps"
    },
    {
      title: "MongoDB Developer Course",
      issuer: "MongoDB University",
      date: "2025",
      category: "Database"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2025",
      category: "Cloud"
    },
    {
      title: "EKAIVA Hackathon",
      issuer: "Agamya Cyber Tech",
      date: "2025",
      category: "Cybersecurity,AI and blockchain"
    },
    {
      title: "TCS Cybersecurity Virtual Experience",
      issuer: "TCS (Forage)",
      date: "2025",
      category: "Cybersecurity Simulation"
    },
    {
      title: "Cybersecurity Virtual Experience",
      issuer: "Forage",
      date: "2025",
      category: "Cybersecurity Simulation"
    },
  ];

  const stats = [
    { label: "Total Certifications", value: "70+", suffix: "hours" },
    { label: "Platforms", value: "10+", suffix: "providers" },
    { label: "Focus Areas", value: "6", suffix: "domains" },
    { label: "Latest Cert", value: "2025", suffix: "ongoing" }
  ];

  const categories = ["Full Stack", "Cloud", "Security", "AI/ML", "Database", "DevOps"];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Gradient background with orbs */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Training</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning through industry-recognized certifications and professional training programs
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-soft transition-all hover:-translate-y-1 animate-scale-in border-2 border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-xs text-primary mt-1">{stat.suffix}</div>
              </Card>
            ))}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm font-medium border border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </span>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group animate-scale-in border-2 border-border/50"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {cert.category}
                  </span>
                </div>

                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Achievements */}
          <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Professional Development
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="animate-fade-in">
                <div className="text-2xl font-bold text-primary mb-2">20+</div>
                <p className="text-sm text-muted-foreground">StackUp Quests Completed</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-2xl font-bold text-secondary mb-2">3+</div>
                <p className="text-sm text-muted-foreground">Hackathons Participated</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-2xl font-bold text-accent mb-2">Continuous</div>
                <p className="text-sm text-muted-foreground">Learning & Upskilling</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
