import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", level: 95, icon: "🎨" },
  { name: "JavaScript", category: "frontend", level: 90, icon: "⚡" },
  { name: "React", category: "frontend", level: 92, icon: "⚛️" },
  { name: "Tailwind CSS", category: "frontend", level: 88, icon: "🎭" },
  { name: "Next.js", category: "frontend", level: 85, icon: "▲" },

  // Backend
  { name: "Node.js", category: "backend", level: 87, icon: "🟢" },
  { name: "Express", category: "backend", level: 85, icon: "🚀" },
  { name: "MongoDB", category: "backend", level: 82, icon: "🍃" },
  { name: "SQL", category: "backend", level: 80, icon: "📊" },
  { name: "Python", category: "backend", level: 78, icon: "🐍" },
  { name: "Java", category: "backend", level: 75, icon: "☕" },

  // Tools
  { name: "Git/GitHub", category: "tools", level: 90, icon: "🔧" },
  { name: "Docker", category: "tools", level: 80, icon: "🐳" },
  { name: "GoLang", category: "tools", level: 70, icon: "🔷" },
  { name: "VS Code", category: "tools", level: 95, icon: "💻" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full transition-all duration-300 capitalize font-medium",
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "bg-card border-2 border-border text-foreground hover:border-primary hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="gradient-border p-6 card-hover group relative overflow-hidden"
            >
              {/* Icon and Name */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl animate-float" style={{ animationDelay: `${key * 0.1}s` }}>
                  {skill.icon}
                </span>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    animation: 'slide-in-left 1s ease-out forwards',
                    animationDelay: `${key * 0.05}s`
                  }}
                />
              </div>

              {/* Level Indicator */}
              <div className="mt-2 text-right">
                <span className="text-xs font-medium text-primary">{skill.level}%</span>
              </div>

              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
