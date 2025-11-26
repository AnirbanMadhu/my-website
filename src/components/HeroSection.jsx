import Tilt from "react-parallax-tilt";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { ParticlesBackground } from "./ParticlesBackground";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      <div className="container max-w-4xl mx-auto text-center z-10">
        {/* Parallax Tilt Image */}
        <div className="flex justify-center mb-8">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#ffffff"
            glarePosition="all"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={250}
          >
            <img
              src="/profile.webp"
              alt="Anirban Madhu"
              className="w-44 h-44 md:w-52 md:h-52 rounded-full border-4 border-white bg-white shadow-2xl ring-4 ring-primary object-cover"
              style={{
                imageRendering: "auto",
                transform: "translateZ(0)",
              }}
            />
          </Tilt>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <Badge variant="outline" className="animate-bounce-in px-4 py-2 text-sm glow-pulse backdrop-blur-sm">
              ✨ Open for Opportunities
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight relative perspective-1000">
            <span className="opacity-0 animate-fade-in inline-block hover:scale-110 transition-transform cursor-default">Hi, I&apos;m&nbsp;</span>
            <span className="opacity-0 animate-bounce-in inline-block hover:animate-[swing_1s_ease-in-out] cursor-default" style={{ animationDelay: '0.2s' }}>
              <span className="text-primary drop-shadow-lg text-shimmer">Anirban&nbsp;</span>
            </span>
            <span className="opacity-0 animate-scale-in inline-block hover:rotate-3 transition-transform cursor-default" style={{ animationDelay: '0.4s' }}>
              <span className="text-gradient font-extrabold drop-shadow-2xl neon-glow">Madhu</span>
            </span>
          </h1>

          <div className="text-xl md:text-2xl font-semibold text-primary min-h-[80px] opacity-0 animate-fade-in-delay-3">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Specialist",
                2000,
                "UI/UX Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            A passionate software engineer with a love for building
            innovative solutions. I specialize in creating seamless user
            experiences and robust backend systems. Let&apos;s bring your ideas to
            life together!
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg" className="cosmic-button ripple-container group relative overflow-hidden hover:shadow-2xl hover:scale-110 transition-all duration-300">
              <a href="#projects" className="flex items-center gap-2">
                <span className="relative z-10">View My Work</span>
                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 hover:border-primary">
              <a href="#contact" className="flex items-center gap-2">
                <span>Contact Me</span>
                <span className="inline-block group-hover:rotate-12 transition-transform">✉️</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};
