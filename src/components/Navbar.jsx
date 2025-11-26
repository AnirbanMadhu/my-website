import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";

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
                className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group hover:scale-110"
                data-text={item.name}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 rounded-full" />
                <span className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
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

      {/* Mobile menu overlay with Headless UI */}
      <Transition show={isMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[105] md:hidden" onClose={setIsMenuOpen}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-background" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full transform overflow-hidden transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                  <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-8 w-full min-h-screen">
                    {navItems.map((item, key) => (
                      <a
                        key={key}
                        href={item.href}
                        className={cn(
                          "text-3xl font-bold text-foreground hover:text-primary",
                          "transition-all duration-300 text-center",
                          "hover:scale-110 transform"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
