export default function Skills() {
  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 75 },
    { name: "Next.js", level: 70 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Node.js", level: 60 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-44 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          My Skills
        </h1>

        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium text-gray-700">
                  {skill.name}
                </span>
                <span className="text-lg font-medium text-gray-700">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
