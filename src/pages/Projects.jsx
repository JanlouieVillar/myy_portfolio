import { motion } from "framer-motion";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.png";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
        Projects
      </motion.h1>

   
      <motion.div
        variants={container}
        className="grid md:grid-cols-2 gap-10"
      >
        {projects.map((project) => (
          <motion.a
            key={project.name}
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/40 transition"
          >
         
            <div className="h-52 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.name}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
            </div>

        
            <div className="p-6">
              <h3 className="font-semibold mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-400">
                {project.description}
              </p>

              <motion.span
                className="inline-block mt-4 text-blue-400 text-sm"
                whileHover={{ x: 4 }}
              >
                View on GitHub →
              </motion.span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}
