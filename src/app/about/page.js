// src/app/about/page.js
import ScrollReveal from "@/components/ScrollReveal";
import {
  User,
  Heart,
  Target,
  Sparkles,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export const metadata = {
  title: "About | Zana",
  description: "About Me - Junior JavaScript Developer",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hi, I'm Zana
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Junior JavaScript Developer passionate about building beautiful,
              fast, and user-friendly web experiences.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Heart, label: "Passion", value: "100%" },
            { icon: Target, label: "Focus", value: "Daily" },
            { icon: Sparkles, label: "Creativity", value: "Always" },
            { icon: User, label: "Learning", value: "Non-stop" },
          ].map((stat, i) => (
            <ScrollReveal key={i}>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg">
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-purple-600 dark:text-purple-400" />
                <div className="text-3xl font-bold text-gray-800 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bio */}
        <ScrollReveal>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
              <div className="w-2 h-10 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-full"></div>
              My Journey
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I started coding in 2023 and instantly fell in love with
              JavaScript. From building simple websites to full-stack
              applications, every line of code teaches me something new.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm currently focused on{" "}
              <strong className="text-purple-600 dark:text-purple-400">
                React, Next.js, and Tailwind CSS
              </strong>{" "}
              — creating modern, performant, and pixel-perfect user interfaces.
            </p>
          </div>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Let's Connect
            </h3>
            <div className="flex justify-center gap-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: Twitter,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
                { icon: Mail, href: "mailto:zana@example.com", label: "Email" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-2xl hover:scale-110 hover:shadow-xl transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
