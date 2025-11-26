import { useState } from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";

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
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="capitalize">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter((skill) => category === "all" || skill.category === category)
                  .map((skill, key) => (
                    <Card key={key} className="card-hover group relative overflow-hidden">
                      <CardContent className="p-6">
                        {/* Icon and Name */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl animate-float" style={{ animationDelay: `${key * 0.1}s` }}>
                              {skill.icon}
                            </span>
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                          </div>
                          <Badge variant="secondary">{skill.level}%</Badge>
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

                        {/* Shimmer Effect on Hover */}
                        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
