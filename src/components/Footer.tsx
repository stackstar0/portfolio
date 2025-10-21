import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hafiza Jakkli. All rights reserved.
          </div>

          <div className="text-sm text-muted-foreground">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">
              Keep Learning, Keep Growing
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
