// src/app/api/testimonials/route.js
export async function GET() {
  const testimonials = [
    {
      name: "Ali R.",
      role: "Team Lead",
      text: "Zana learns fast and writes clean code!",
    },
    {
      name: "Sara M.",
      role: "Designer",
      text: "Great collaboration and attention to detail.",
    },
    {
      name: "Reza K.",
      role: "Client",
      text: "Delivered on time with excellent UI.",
    },
  ];

  return Response.json(testimonials);
}
