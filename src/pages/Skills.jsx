import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

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
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="py-24 max-w-6xl mx-auto px-6"
    >

      <motion.h1
        variants={item}
        className="text-3xl font-bold text-center mb-14"
      >
        Skills & Tools
      </motion.h1>


      <motion.div
        variants={container}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition"
          >
            <h3 className="font-semibold mb-2">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-400">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
