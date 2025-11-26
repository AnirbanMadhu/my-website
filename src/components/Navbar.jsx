import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-[100] transition-all duration-300",
          isScrolled
            ? "py-3 glass-effect-strong shadow-lg"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold flex items-center space-x-2 group"
            href="#hero"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="relative z-10">
              <span className="text-gradient font-bold">Anirban&apos;s</span>{" "}
              <span className="text-foreground">Portfolio</span>
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="relative text-foreground/80 hover:text-primary transition-colors duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* mobile nav */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-foreground relative z-[110] hover:text-primary transition-colors"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 z-[105] md:hidden",
            "bg-background min-h-screen w-full",
            "flex items-center justify-center",
            "animate-in fade-in duration-300"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-8 w-full">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "text-3xl font-bold text-foreground hover:text-primary",
                  "transition-all duration-300 text-center",
                  "hover:scale-110 transform",
                  "animate-in slide-in-from-top-4 fade-in"
                )}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: `${key * 75}ms`,
                  animationFillMode: "backwards"
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
