import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import React, { useState, FormEvent } from "react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Click below to contact",
      href: "#contact-form",
      color: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Available upon request",
      href: "#contact-form",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gadag, Karnataka, India",
      href: "#",
      color: "text-accent",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@stackswift",
      href: "https://github.com/stackswift",
      color: "hover:text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/hafiza-jakkli-448471311/",
      color: "hover:text-secondary",
    },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const response = await fetch("https://formspree.io/f/manpzdvj", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("sent");
      e.currentTarget.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-primary/10"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(at 50% 50%, hsla(270,75%,65%,0.12) 0px, transparent 50%)`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Touch
              </span>
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
                    <div
                      className={`inline-flex p-4 rounded-full bg-gradient-to-br from-${contact.color.split("-")[1]}/10 to-${contact.color.split("-")[1]}/5 ${contact.color} mb-4 group-hover:scale-110 transition-transform`}
                    >
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
              <h3 className="text-2xl md:text-3xl font-bold">Ready to start a project?</h3>
              <p className="text-muted-foreground">
                Whether it's full-stack development, MERN Stack, or AI/ML projects, I'm always excited to collaborate on innovative ideas!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="group">
                  <a href="#contact-form" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Contact Me Securely
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Secure Contact Form */}
          <div id="contact-form" className="mt-16 max-w-lg mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full p-3 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" size="lg" className="w-full">
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Message Sent ✅"
                    : "Send Message"}
              </Button>
              {status === "error" && (
                <p className="text-red-500 text-center mt-2">Something went wrong. Try again.</p>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-16 flex justify-center gap-6">
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
