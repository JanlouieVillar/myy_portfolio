import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100">
      <Navbar />

      <main className="px-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<PageWrapper><Home /></PageWrapper>}
            />
            <Route
              path="/about"
              element={<PageWrapper><About /></PageWrapper>}
            />
            <Route
              path="/skills"
              element={<PageWrapper><Skills /></PageWrapper>}
            />
            <Route
              path="/projects"
              element={<PageWrapper><Projects /></PageWrapper>}
            />
            <Route
              path="/contact"
              element={<PageWrapper><Contact /></PageWrapper>}
            />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
