import {
  Navbar,
  StarBackground,
  GradientBlobsSimple,
  FloatingShapes,
  HeroSection,
  AboutSection,
  SkillsSection,
  ServicesSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "@/components";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Background Effects - Amazing Light Mode Gradients */}
      <GradientBlobsSimple />
      <StarBackground />
      <FloatingShapes />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
