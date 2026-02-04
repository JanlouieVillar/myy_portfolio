import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.png";

export default function Projects() {
  const projects = [
    {
      name: "Pizza Order Menu",
      description: "Dynamic pizza ordering form with real-time pricing.",
      github: "https://github.com/JanlouieVillar/pizza-order-form",
      image: project1,
    },
    {
      name: "Gun Blog",
      description: "Responsive blog platform for articles and updates.",
      github: "https://github.com/JanlouieVillar/blogger",
      image: project2,
    },
    {
      name: "Gunstore",
      description: "E-commerce style product browsing application.",
      github: "https://github.com/JasperValdez/FINALS",
      image: project3,
    },
    {
      name: "Speedpics",
      description: "React image search app using API queries.",
      github: "https://github.com/JanlouieVillar/Image_Search_Exam",
      image: project4,
    },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-14">Projects</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map(project => (
          <a
            key={project.name}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/40 transition"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-400">{project.description}</p>
              <span className="inline-block mt-4 text-blue-400 text-sm">
                View on GitHub →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
