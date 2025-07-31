import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Backend Skills
  { name: "C#", category: "Backend" },
  { name: "C++", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Redis", category: "Backend" },
  { name: "API Security", category: "Backend" },
  { name: "Unit Testing", category: "Backend" },

  //Database Skills
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },

  // Frontend Skills
  { name: "HTML/CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  // Tools & Technologies
  { name: "Git/GitHub", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Swagger", category: "Tools" },
  { name: "Figma", category: "Tools" },
];

const categories = ["all", "Backend", "Database", "Frontend", "Tools"];
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative ">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory == category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/10 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-gray-500">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
