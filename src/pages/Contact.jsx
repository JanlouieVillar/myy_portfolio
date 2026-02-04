import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="min-h-[calc(100vh-80px)] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
   
        <motion.div
          variants={item}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Interested in working together or have a question?
            Feel free to reach out — I’m always open to new opportunities
            and conversations.
          </p>
        </motion.div>

      
        <motion.div
          variants={container}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
        
          <motion.div
            variants={item}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-6">
              Contact Information
            </h2>

            <div className="space-y-5 text-gray-300">
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="font-medium">
                  villarjanlouie@email.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Viber</p>
                <p className="font-medium">
                  +63 928 225 4627
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">GitHub</p>
                <a
                  href="https://github.com/JanlouieVillar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  github.com/JanlouieVillar →
                </a>
              </div>
            </div>
          </motion.div>

      
          <motion.div
            variants={item}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-6">
              Send a Message
            </h2>

            <form className="space-y-4">
              <motion.input
                variants={item}
                type="text"
                placeholder="Your name"
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />

              <motion.input
                variants={item}
                type="email"
                placeholder="Your email"
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />

              <motion.textarea
                variants={item}
                rows="5"
                placeholder="Your message"
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
              />

              <motion.button
                variants={item}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-lg font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
