import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full mt-12 border-t border-border bg-card px-4 py-8 relative">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Anirban Madhu.co. All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};