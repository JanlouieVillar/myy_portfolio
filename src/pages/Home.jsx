import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="min-h-[calc(100vh-80px)] flex items-center justify-center"
    >
      <motion.div
        variants={item}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="max-w-xl w-full text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-10 shadow-xl"
      >
     
        <motion.div
          variants={item}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-32 h-32 mx-auto rounded-xl overflow-hidden border border-slate-700 mb-6"
        >
          <img
            src={profilePic}
            alt="Jan-Louie Villar"
            className="w-full h-full object-cover"
          />
        </motion.div>

  
        <motion.h1
          variants={item}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          Jan-Louie Villar
        </motion.h1>


        <motion.p
          variants={item}
          className="text-blue-400 mb-4"
        >
          Aspiring Web Developer
        </motion.p>

     
        <motion.p
          variants={item}
          className="text-gray-400 leading-relaxed text-sm md:text-base"
        >
          I build modern, responsive web applications with a focus on clean UI,
          usability, and maintainable code. I enjoy learning new technologies
          and turning ideas into real products.
        </motion.p>

      
        <motion.div
          variants={item}
          className="mt-8 text-sm text-gray-500"
        >
          Explore my work 
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
