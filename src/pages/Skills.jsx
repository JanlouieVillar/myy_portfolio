export default function Skills() {
  const skills = [
    { name: "HTML & CSS", description: "Semantic, responsive, and accessible layouts." },
    { name: "JavaScript", description: "Dynamic UI behavior and logic handling." },
    { name: "React", description: "Component-based single-page applications." },
    { name: "Tailwind CSS", description: "Utility-first styling for rapid UI development." },
    { name: "Git & GitHub", description: "Version control and collaboration." },
    { name: "REST APIs", description: "Consuming and integrating backend services." },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-14">Skills & Tools</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:-translate-y-1 hover:border-blue-500/40 transition"
          >
            <h3 className="font-semibold mb-2">{skill.name}</h3>
            <p className="text-sm text-gray-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
