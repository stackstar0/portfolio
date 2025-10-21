import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hafizajakkli20579@gmail.com",
      href: "mailto:hafizajakkli20579@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9036782910",
      href: "tel:+919036782910",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gadag, Karnataka, India",
      href: "#",
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@stackswift",
      href: "https://github.com/stackswift",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/hafiza-jakkli-448471311/",
      color: "hover:text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Final section gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-primary/10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(at 50% 50%, hsla(270,75%,65%,0.12) 0px, transparent 50%)`
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate on exciting projects or discuss opportunities in tech!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-2 group animate-scale-in border-2 border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a href={contact.href} className="block">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-br from-${contact.color.split('-')[1]}/10 to-${contact.color.split('-')[1]}/5 ${contact.color} mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{contact.label}</h3>
                    <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
                  </a>
                </Card>
              );
            })}
          </div>

          {/* CTA Card */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2 border-primary/20 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to start a project?
              </h3>
              <p className="text-muted-foreground">
                Whether it's full-stack development, blockchain solutions, or AI/ML projects,
                I'm always excited to collaborate on innovative ideas!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="group">
                  <a href="mailto:hafizajakkli20579@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Send an Email
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/stackswift" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-5 h-5" />
                    View GitHub Profile
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-card transition-all ${social.color} group animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{social.label}</span>
                  <span className="text-xs text-muted-foreground">{social.value}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
