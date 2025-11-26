import Tilt from "react-parallax-tilt";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { ParticlesBackground } from "./ParticlesBackground";

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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight relative">
            <span className="opacity-0 animate-fade-in inline-block">Hi, I&apos;m</span>
            <span className="opacity-0 animate-bounce-in inline-block" style={{ animationDelay: '0.2s' }}>
              {" "}
              <span className="text-primary drop-shadow-lg">
                Anirban
              </span>
            </span>
            <span className="opacity-0 animate-scale-in inline-block" style={{ animationDelay: '0.4s' }}>
              {" "}
              <span className="text-gradient font-extrabold drop-shadow-2xl">
                Madhu
              </span>
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
