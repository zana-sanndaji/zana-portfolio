// src/app/skills/page.js
import ScrollReveal from "@/components/ScrollReveal";
import { Code2, Database, Globe, Terminal } from "lucide-react";

export const metadata = {
  title: "Skills | Zana",
  description: "Technical Skills & Expertise",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Skills
          </h1>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Code2,
              title: "Frontend",
              skills: ["React", "Next.js", "Tailwind", "Framer Motion"],
            },
            {
              icon: Database,
              title: "Backend",
              skills: ["Node.js", "Express", "MongoDB", "Firebase"],
            },
            {
              icon: Globe,
              title: "Web Tech",
              skills: ["HTML/CSS", "JavaScript", "TypeScript", "REST API"],
            },
            {
              icon: Terminal,
              title: "Tools",
              skills: ["Git", "Vercel", "VS Code", "Figma"],
            },
          ].map((category, i) => (
            <ScrollReveal key={i}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-8 h-8 text-cyan-500" />
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 dark:from-cyan-400/20 dark:to-purple-400/20 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 border border-cyan-500/20"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
