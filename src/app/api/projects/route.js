// src/app/api/projects/route.js
export async function GET() {
  const projects = [
    {
      title: "Personal Portfolio",
      desc: "Modern portfolio with animations and dark mode.",
      img: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600",
      link: "/projects/portfolio",
    },
    {
      title: "Todo App",
      desc: "Drag & drop, filters, and smooth UX.",
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600",
      link: "/projects/todo",
    },
  ];

  return Response.json(projects);
}
