import { ArrowRight, ExternalLink, Github } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {projects.map((project, key) => (
            <div
              key={key}
              className="group card-gradient-border card-elevated relative overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{
                transformStyle: 'preserve-3d',
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
                  onError={(e) => {
                    console.error(`Failed to load image: ${project.image}`);
                    e.target.style.display = 'none';
                  }}
                  onLoad={(e) => {
                    console.log(`Successfully loaded: ${project.image}`);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  View Projects
                </div>
              </div>
              <div className="p-6 bg-card relative">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 text-primary border border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300 cursor-default shimmer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-secondary group-hover:from-primary group-hover:via-secondary group-hover:to-accent transition-all duration-500">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 icon-glow hover:scale-110 hover:rotate-3"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-gradient-to-r from-secondary/10 to-accent/10 hover:from-secondary hover:to-accent hover:text-white transition-all duration-300 icon-glow hover:scale-110 hover:-rotate-3"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 shimmer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AnirbanMadhu"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
