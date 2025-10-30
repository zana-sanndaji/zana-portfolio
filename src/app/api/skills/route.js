// src/app/api/skills/route.js
export async function GET() {
  const skills = [
    { name: "JavaScript", icon: "JS", desc: "ES6+, Async/Await, DOM" },
    { name: "React", icon: "R", desc: "Hooks, Context, Performance" },
    { name: "Next.js", icon: "N", desc: "SSR, API Routes, App Router" },
    { name: "Tailwind CSS", icon: "T", desc: "Responsive, Dark Mode, JIT" },
  ];

  return Response.json(skills);
}
