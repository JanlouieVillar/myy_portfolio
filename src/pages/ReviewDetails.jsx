import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

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

export default function ReviewDetails() {
  const { id } = useParams();
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const review = reviews.find((r) => r.id == id);

  if (!review) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-24 text-center text-gray-500"
      >
        <p className="mb-4">Review not found.</p>
        <Link
          to="/"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          Go back →
        </Link>
      </motion.section>
    );
  }

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto py-24 px-6"
    >
      <motion.div
        variants={item}
        className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg"
      >

        <motion.h2
          variants={item}
          className="text-2xl font-bold mb-4"
        >
          {review.name}
        </motion.h2>


        <motion.p
          variants={item}
          className="text-gray-400 leading-relaxed"
        >
          {review.message}
        </motion.p>


        <motion.div
          variants={item}
          className="mt-8 text-sm"
        >
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            ← Back
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
