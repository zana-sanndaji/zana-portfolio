"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import Slider from "react-slick";
import { Download } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

// CSS imports — مسیر درست
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    setMounted(true);
    const token = localStorage.getItem("token");
    if (token) fetchUser(token);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const fetchData = async () => {
      try {
        const [projRes, skillRes, testiRes] = await Promise.all([
          fetch("/api/projects"),
          fetch("/api/skills"),
          fetch("/api/testimonials"),
        ]);
        const [projData, skillData, testiData] = await Promise.all([
          projRes.json(),
          skillRes.json(),
          testiRes.json(),
        ]);
        setProjects(projData);
        setSkills(skillData);
        setTestimonials(testiData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [mounted]);

  useEffect(() => {
    if (!mounted || skills.length === 0) return;
    const cards = document.querySelectorAll(".tilt-card");
    VanillaTilt.init(cards, {
      max: 10,
      speed: 300,
      glare: true,
      "max-glare": 0.2,
    });
  }, [mounted, skills]);

  const fetchUser = async (token) => {
    try {
      const res = await fetch("/api/auth", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
        setMessage(`Welcome back, ${data.name}!`);
      }
    } catch (error) {}
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name, action: "register" }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      setUser(data.user);
      setMessage(`Welcome, ${data.user.name}!`);
      setEmail("");
      setPassword("");
      setName("");
    } else {
      setMessage(data.error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, action: "login" }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      setUser(data.user);
      setMessage(`Welcome back, ${data.user.name}!`);
      setEmail("");
      setPassword("");
    } else {
      setMessage(data.error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setMessage("Logged out.");
    setTimeout(() => setMessage(""), 3000);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="min-h-screen">
      {message && (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-pulse text-sm font-medium">
          {message}
        </div>
      )}

      {/* Hero */}
      <ScrollReveal>
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 opacity-40 animate-gradient-xy"></div>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" />
            <div className="absolute top-18 right-0 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animation-delay-2000" />
            <div className="absolute bottom-0 left-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animation-delay-4000" />
          </motion.div>

          {mounted && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-70"
                  initial={{ x: Math.random() * window.innerWidth, y: -10 }}
                  animate={{
                    y: window.innerHeight + 10,
                    x: Math.random() * window.innerWidth,
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center max-w-5xl mx-auto"
          >
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {"Zana".split("").map((l, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 80, rotateX: -180 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.8,
                      ease: "backOut",
                    }}
                    className="inline-block"
                  >
                    {l}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl sm:text-2xl text-white mb-8"
            >
              <span className="inline-block animate-pulse">
                Junior JavaScript Developer
              </span>
              <span className="block text-sm mt-2 text-cyan-200">
                React • Next.js • Tailwind • Framer Motion
              </span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="/zana-resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                <Download className="w-6 h-6" /> Download Resume
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg backdrop-blur-sm hover:bg-white/10"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal>
        <section
          id="skills"
          className="py-20 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              My Expertise
            </motion.h2>
            {skills.length === 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 h-40 rounded-2xl animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="tilt-card group bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-default"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-16 h-16 mb-5 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-2xl font-bold text-white shadow-lg`}
                      >
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {skill.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-12"
            >
              What People Say
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <Slider {...settings}>
                {testimonials.map((t, i) => (
                  <div key={i} className="p-6 text-center">
                    <p className="text-lg italic mb-6 text-gray-700 dark:text-gray-300">
                      {t.text}
                    </p>
                    <p className="font-bold text-purple-600 dark:text-purple-400">
                      {t.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t.role}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Projects */}
      <ScrollReveal>
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, i) => (
                <motion.a
                  key={i}
                  href={project.link}
                  className="group block bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {project.desc}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="text-center mt-12">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium shadow-lg"
              >
                View All Projects
              </motion.a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Register */}
      <ScrollReveal>
        {!user && (
          <section className="py-20 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
              >
                Join My Network
              </motion.h2>
              <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <form onSubmit={handleRegister} className="space-y-6">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </ScrollReveal>

      {/* Login */}
      <ScrollReveal>
        {!user && (
          <section id="login" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
              >
                Welcome Back
              </motion.h2>
              <div className="max-w-md mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <form onSubmit={handleLogin} className="space-y-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </ScrollReveal>

      {/* User Panel */}
      <ScrollReveal>
        {" "}
        {user && (
          <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-2">
                  Welcome, {user.name}!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {user.email}
                </p>
                <button
                  onClick={handleLogout}
                  className="px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700"
                >
                  Logout
                </button>
              </motion.div>
            </div>
          </section>
        )}
      </ScrollReveal>
    </div>
  );
}
