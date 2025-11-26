import { useState } from "react";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { AnimatedText, AnimatedTextShowcase } from "../components/AnimatedText";
import { CarouselShowcase } from "../components/ModernCarousel";
import { MarqueeSection, TestimonialsMarquee } from "../components/MarqueeSection";
import { TimelineSection } from "../components/TimelineSection";
import { StatsSection } from "../components/AnimatedCounter";
import { FloatingCards } from "../components/FloatingElements";
import { ToastDemo } from "../components/ToastProvider";
import { TypeAnimation } from "react-type-animation";

export const ShowcasePage = () => {
  const [showParticles, setShowParticles] = useState(true);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Particles */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {showParticles && <ParticlesBackground />}

        <div className="relative z-10 container max-w-4xl mx-auto text-center space-y-8">
          <button
            onClick={() => setShowParticles(!showParticles)}
            className="mb-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90"
          >
            Toggle Particles: {showParticles ? "ON" : "OFF"}
          </button>

          <h1 className="text-5xl md:text-7xl font-bold">
            <AnimatedText type="highlight" color="#6366f1">
              UI Library Showcase
            </AnimatedText>
          </h1>

          <div className="text-2xl md:text-3xl text-primary min-h-[100px]">
            <TypeAnimation
              sequence={[
                "Beautiful Animations ✨",
                2000,
                "Stunning Effects 🎨",
                2000,
                "Professional Design 🚀",
                2000,
                "Modern UI Components 💎",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore all the amazing UI libraries integrated into this project.
            Each component is ready to use and fully customizable!
          </p>
        </div>
      </section>

      {/* Animated Text Examples */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <AnimatedText type="box" color="#8b5cf6">
              Animated Text Highlights
            </AnimatedText>
          </h2>
          <AnimatedTextShowcase />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <AnimatedText type="underline" color="#10b981">
              Impressive Stats
            </AnimatedText>
          </h2>
          <p className="text-muted-foreground">
            Numbers that count up as you scroll into view
          </p>
        </div>
        <StatsSection />
      </section>

      {/* Floating Cards */}
      <section className="py-20 bg-muted/30">
        <FloatingCards />
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-20">
        <MarqueeSection speed={50} />
      </section>

      {/* Carousel Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">
            <AnimatedText type="circle" color="#ec4899">
              3D Carousel
            </AnimatedText>
          </h2>
          <p className="text-muted-foreground">
            Swipe or drag to explore projects
          </p>
        </div>
        <CarouselShowcase />
      </section>

      {/* Testimonials Marquee */}
      <section className="py-20">
        <TestimonialsMarquee />
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <TimelineSection />
      </section>

      {/* Toast Notifications Demo */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            <AnimatedText type="highlight" color="#f59e0b">
              Toast Notifications
            </AnimatedText>
          </h2>
          <p className="text-muted-foreground mb-8">
            Beautiful, customizable toast notifications
          </p>
          <ToastDemo />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground">
            Check out <code className="px-2 py-1 bg-card rounded">UI_LIBRARIES_GUIDE.md</code> for
            detailed documentation on how to use all these components!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Back to Home
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
