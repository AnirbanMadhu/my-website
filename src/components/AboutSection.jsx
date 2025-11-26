import { Briefcase, Code, User } from "lucide-react";
import ReactTypingEffect from "react-typing-effect";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-gradient">
              <ReactTypingEffect
                text={[
                  "Passionate Web Developer",
                  "Creative UI/UX Designer",
                  "Tech Explorer & Innovator",
                ]}
                speed={80}
                eraseSpeed={50}
                eraseDelay={2000}
                typingDelay={300}
              />
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I specialize in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I&apos;m passionate about creating elegant solutions to complex
              problems, and I&apos;m constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                <div className="text-2xl font-bold text-secondary">3+</div>
                <div className="text-xs text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-xs text-muted-foreground">Skills</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button asChild size="lg" className="cosmic-button group">
                <a href="#contact">
                  <span className="flex items-center gap-2">
                    Get In Touch
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a href="/cv.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 opacity-0 animate-slide-in-right">
            <Card className="card-hover group relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 transition-transform duration-300 animate-float">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <CardTitle className="mb-2 group-hover:text-primary transition-colors">Web Development</CardTitle>
                    <CardDescription>
                      Creating responsive websites and web applications with
                      modern frameworks.
                    </CardDescription>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>

            <Card className="card-hover group relative overflow-hidden" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                    <User className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-left">
                    <CardTitle className="mb-2 group-hover:text-secondary transition-colors">UI/UX Design</CardTitle>
                    <CardDescription>
                      Designing intuitive user interfaces and seamless user
                      experiences.
                    </CardDescription>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-secondary/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>

            <Card className="card-hover group relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '1s' }}>
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <CardTitle className="mb-2 group-hover:text-accent transition-colors">Project Management</CardTitle>
                    <CardDescription>
                      Leading projects from conception to completion with agile
                      methodologies.
                    </CardDescription>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
