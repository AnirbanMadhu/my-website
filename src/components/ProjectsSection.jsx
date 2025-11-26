import { ArrowRight, ExternalLink, Github, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Streamify ",
    description: "Streamify, a MERN-based web application for video calling, live streaming, and real-time chat.",
    image: "/projects/streamify.jpg",
    tags: ["React", "TailwindCSS", "Socket.io","MERN"],
    demoUrl: "https://streamify-24np.onrender.com",
    githubUrl: "https://github.com/AnirbanMadhu/Streamify",
  },
  {
    id: 2,
    title: "AI powered Stock Analysis Tool",
    description:
      "AI powered Stock Analysis Tool with real-time data and insights.",
    image: "/projects/Stock.jpg",
    tags: ["React", "Python", "Machine Learning"],
    demoUrl: "https://stock-analyzer-mgnr.onrender.com",
    githubUrl: "https://github.com/AnirbanMadhu/Stock-Analyzer",
  },
  {
    id: 3,
    title: "Shop Management System",
    description:
      "A complete shop management solution featuring inventory control, billing, barcode scanning, and real-time business analytics.",
    image: "/projects/management_System.png",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Docker"],
    demoUrl: "https://sptradersandbuilders.cloud",
    githubUrl: "https://github.com/AnirbanMadhu/JCB-Parts-Shop",
  },

];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-gradient"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <Card
              key={key}
              className="group overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 card-elevated"
              style={{
                animation: `slide-in-up 0.6s ease-out ${key * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <div className="h-48 overflow-hidden relative bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="hover:scale-110 transition-all">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardFooter className="flex justify-between items-center gap-2">
                <div className="flex gap-2">
                  <Button asChild size="icon" variant="outline">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} />
                    </a>
                  </Button>
                  <Button asChild size="icon" variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={18} />
                    </a>
                  </Button>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedProject(project)}>
                      <Info size={16} className="mr-2" />
                      Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>{project.description}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img src={project.image} alt={project.title} className="w-full rounded-lg" />
                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <Badge key={index}>{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button asChild className="flex-1">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="mr-2" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="cosmic-button shimmer">
            <a href="https://github.com/AnirbanMadhu" target="_blank" rel="noopener noreferrer">
              Check My Github <ArrowRight size={16} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
