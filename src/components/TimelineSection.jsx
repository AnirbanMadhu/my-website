import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

export const TimelineSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      date: "2023 - Present",
      icon: <Briefcase />,
      iconBg: "#6366f1",
      description:
        "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      date: "2021 - 2023",
      icon: <Code />,
      iconBg: "#3b82f6",
      description:
        "Developed and maintained multiple client projects. Specialized in MERN stack development and RESTful API design.",
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      date: "2020 - 2021",
      icon: <Code />,
      iconBg: "#8b5cf6",
      description:
        "Created responsive and interactive user interfaces. Worked with React, Vue.js, and modern CSS frameworks.",
    },
    {
      title: "Bachelor of Computer Science",
      company: "University Name",
      date: "2016 - 2020",
      icon: <GraduationCap />,
      iconBg: "#10b981",
      description:
        "Graduated with honors. Focused on software engineering, algorithms, and web technologies.",
    },
    {
      title: "First Web Project",
      company: "Freelance",
      date: "2019",
      icon: <Award />,
      iconBg: "#f59e0b",
      description:
        "Built my first commercial website for a local business. This sparked my passion for web development.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experience & Education
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My journey in the world of software development
        </p>

        <VerticalTimeline lineColor="hsl(var(--border))">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              iconStyle={{
                background: experience.iconBg,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={experience.icon}
              contentStyle={{
                background: "hsl(var(--card))",
                color: "hsl(var(--card-foreground))",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                border: "1px solid hsl(var(--border))",
              }}
              contentArrowStyle={{
                borderRight: "7px solid hsl(var(--border))",
              }}
            >
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <h4 className="text-lg text-primary font-medium mb-2">
                {experience.company}
              </h4>
              <p className="text-muted-foreground">{experience.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
