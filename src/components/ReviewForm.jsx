import { useState } from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function ReviewForm({ onAdd }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function submit(e) {
    e.preventDefault();
    onAdd({ id: Date.now(), name, message });
    setName("");
    setMessage("");
  }

  return (
    <motion.form
      initial="hidden"
      animate="visible"
      onSubmit={submit}
      className="bg-slate-900 border border-slate-800 rounded-xl p-6"
    >
    
      <motion.input
        variants={item}
        className="w-full mb-3 p-3 bg-slate-950 border border-slate-800 rounded-lg
                   focus:outline-none focus:border-blue-500 transition"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

    
      <motion.textarea
        variants={item}
        rows="4"
        className="w-full mb-4 p-3 bg-slate-950 border border-slate-800 rounded-lg
                   focus:outline-none focus:border-blue-500 transition resize-none"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

     
      <motion.button
        variants={item}
        whileTap={{ scale: 0.96 }}
        className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded font-medium"
      >
        Submit
      </motion.button>
    </motion.form>
  );
}
