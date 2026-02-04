import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto py-24 px-6"
    >
 
      <motion.h1
        variants={item}
        className="text-3xl font-bold mb-4"
      >
        About Me
      </motion.h1>

   
      <motion.div
        variants={item}
        className="w-20 h-1 bg-blue-500 mb-10 rounded"
      />


      <div className="space-y-6 text-gray-400 leading-relaxed">
        <motion.p variants={item}>
          Hi, I’m{" "}
          <span className="text-gray-200 font-medium">
            Jan-Louie Villar
          </span>
          , an aspiring Web Developer with a strong interest in building modern,
          responsive, and user-friendly web applications. I enjoy turning ideas
          and designs into functional products using clean and maintainable code.
        </motion.p>

        <motion.p variants={item}>
          My journey into web development started with curiosity about how
          websites work behind the scenes. Over time, that curiosity grew into
          hands-on experience building projects with{" "}
          <span className="text-gray-200">HTML</span>,{" "}
          <span className="text-gray-200">CSS</span>,{" "}
          <span className="text-gray-200">JavaScript</span>,{" "}
          <span className="text-gray-200">React</span>, and{" "}
          <span className="text-gray-200">Tailwind CSS</span>. I focus on creating
          interfaces that are not only visually appealing but also intuitive
          and accessible.
        </motion.p>

        <motion.p variants={item}>
          I enjoy learning new technologies, experimenting with UI ideas, and
          continuously improving my skills through personal projects and
          practice. I’m especially interested in front-end development, where
          design and logic come together to create meaningful user experiences.
        </motion.p>

        <motion.p variants={item}>
          I’m currently looking for opportunities to grow as a developer,
          collaborate with others, and contribute to real-world projects where
          I can continue learning while delivering value. I’m motivated,
          detail-oriented, and always open to feedback as a way to improve.
        </motion.p>
      </div>
    </motion.section>
  );
}
