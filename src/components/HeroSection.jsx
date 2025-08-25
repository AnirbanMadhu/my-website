import Tilt from "react-parallax-tilt";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I&apos;m</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Anirban
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Madhu
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            A passionate software engineer with a love for building
            innovative solutions. I specialize in creating seamless user
            experiences and robust backend systems. Let&apos;s bring your ideas to
            life together!
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
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
