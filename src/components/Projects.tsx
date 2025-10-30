import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Government Services Portal – Janaseva",
      description: "Full-stack web application for Aadhaar, PAN, Voter ID, Income/Caste certificates, and Xerox services with comprehensive admin dashboard",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/stackswift/janaseva",
      category: "Full Stack"
    },
    {
      title: "E-Commerce Website Template",
      description: "Custom Aranoz template with responsive design, secure login modal, shopping cart, and modern UI/UX focusing on user experience",
      tech: ["React", "HTML5", "CSS3", "JavaScript", "UI/UX"],
      github: "https://github.com/stackswift",
      category: "Frontend"
    },
    {
      title: "Food Ordering Application",
      description: "MERN stack application featuring Stripe payment integration, real-time order tracking, and user authentication system",
      tech: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
      github: "https://github.com/stackstar0",
      category: "Full Stack"
    },
    {
      title: "Affinidi capstone",
      description: "Decentralized Developed a secure digital identity management system using blockchain principles to ensure user data privacy and authentication integrity. for minting and trading NFTs, built on Ethereum with Solidity smart contracts and Web3 integration",
      tech: ["Solidity", "Ethereum", "React", "Web3.js", "IPFS"],
      github: "https://github.com/stackswift",
      category: "Blockchain"
    },
    {
      title: "COVID-19 Sentiment Analysis",
      description: "Machine learning project analyzing social media sentiment during COVID-19 pandemic (2020-2021) using NLP and data visualization",
      tech: ["Python", "Jupyter", "Pandas", "NLP", "Data Analysis"],
      github: "https://github.com/stackswift/sentiment-analysis-for-covid-19-from-2020-2021",
      category: "AI/Data Science"
    },
    {
      title: "DotWeb Multipage Website",
      description: "DotWeb Project – Designed a fully responsive multipage website featuring dynamic navigation menus, hero carousel, animated UI sections, service cards, pricing modules, contact forms, and interactive user experience with WOW.js and custom JavaScript.",
      tech: ["Node.js", "Express", "MongoDB", "REST API"],
      category: "Backend"
    },
    {
      title: "Vibe-Commerce",
      description: "Vibe-Commerce Project – Designed a fully responsive multipage website featuring dynamic navigation menus, hero carousel, animated UI sections, service cards, pricing modules, contact forms, and interactive user experience with WOW.js and custom JavaScript.",
      tech: ["Node.js", "Express", "MongoDB", "REST API"],
      category: "Full Stack"
    },
    {
      title: "Bookit E-Commerce",
      description: "Bookit E-Commerce Project – Designed a fully responsive multipage website featuring dynamic navigation menus, hero carousel, animated UI sections, service cards, pricing modules, contact forms, and interactive user experience with WOW.js and custom JavaScript.",
      tech: ["Node.js", "Express", "MongoDB", "REST API"],
      category: "Full Stack"
    }
  ];

  const blockchainQuests = [
    "Built Omnichain contracts with ZetaChain for cross-chain communication",
    "Developed zkPass integration for privacy-preserving authentication",
    "Created programmable wallets on Sui blockchain with Move language",
    "Implemented NFT marketplaces on multiple chains (Ethereum, Aptos, Arbitrum)",
    "Built staking contracts with reward distribution mechanisms"
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Dynamic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-background to-accent/5"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(at 70% 20%, hsla(320,85%,65%,0.1) 0px, transparent 50%),
                         radial-gradient(at 30% 80%, hsla(200,80%,60%,0.1) 0px, transparent 50%)`
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of full-stack applications, blockchain dApps, and AI/ML implementations
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-2 group animate-scale-in border-2 border-border/50"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-muted rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Blockchain Achievements */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2 border-primary/20">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Blockchain & Web3 Achievements
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Completed 20+ StackUp quests involving smart contract development and blockchain integration
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {blockchainQuests.map((quest, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-2"></div>
                  <p className="text-sm text-muted-foreground">{quest}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* GitHub CTA */}
          <div className="text-center mt-12 animate-fade-in">
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/stackswift"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
