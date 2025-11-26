import Marquee from "react-fast-marquee";
import PropTypes from "prop-types";
import { SiReact, SiNodedotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiDocker, SiKubernetes, SiFigma } from "react-icons/si";

export const MarqueeSection = ({ speed = 50, direction = "left", gradient = true }) => {
  const techStack = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  ];

  return (
    <div className="py-12 bg-background">
      <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
      <Marquee speed={speed} direction={direction} gradient={gradient} gradientColor="hsl(var(--background))">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="mx-8 flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="p-4 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Icon
                  size={48}
                  style={{ color: tech.color }}
                  className="transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

MarqueeSection.propTypes = {
  speed: PropTypes.number,
  direction: PropTypes.oneOf(["left", "right"]),
  gradient: PropTypes.bool,
};

// Testimonials Marquee Example
export const TestimonialsMarquee = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      text: "Outstanding work! Delivered beyond expectations.",
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Jane Smith",
      role: "Product Manager, StartupXYZ",
      text: "Professional, timely, and excellent quality.",
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Mike Johnson",
      role: "CTO, InnovateLabs",
      text: "A true expert in modern web development.",
      avatar: "/api/placeholder/60/60",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What Clients Say</h2>
        <Marquee speed={30} gradient={true} gradientColor="hsl(var(--background))">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="mx-4 w-[350px] bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
