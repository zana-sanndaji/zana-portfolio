// src/app/projects/page.js
import ScrollReveal from "@/components/ScrollReveal";
import { Github, ExternalLink, Calendar } from "lucide-react";

export const metadata = {
  title: "Projects | Zana",
  description: "Portfolio Projects & Works",
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack online store with React, Node.js, Stripe payments",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Task Management App",
      desc: "Real-time collaborative to-do app with drag & drop",
      tech: ["Next.js", "Firebase", "Tailwind", "Framer Motion"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      desc: "Beautiful weather app with API integration and animations",
      tech: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Projects
          </h1>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={i}>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl w-full h-48 mb-6" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-xs font-medium text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
