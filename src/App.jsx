import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useEffect, useRef, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();
  const particlesRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-100 bg-[#0a0c17]">

      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-60"
          animate={{ x: ["-20%", "80%"], y: ["0%", "60%"] }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 25, ease: "linear" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-cyan-400 rounded-full mix-blend-overlay filter blur-3xl opacity-50"
          animate={{ x: ["100%", "-40%"], y: ["0%", "50%"] }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 35, ease: "linear" }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-pink-400 rounded-full mix-blend-overlay filter blur-2xl opacity-40"
          animate={{ x: ["-50%", "70%"], y: ["-30%", "60%"] }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 30, ease: "linear" }}
        />
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        ref={particlesRef}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 120, density: { enable: true, area: 1200 } },
            color: { value: ["#ffffff", "#00ffff", "#ff88ff"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.7,
              random: { enable: true, minimumValue: 0.3 },
              anim: { enable: true, speed: 0.8, opacity_min: 0.2, sync: false },
            },
            size: { value: 3, random: { enable: true, minimumValue: 1.5 } },
            links: {
              enable: true,
              distance: 150,
              color: "#8888ff",
              opacity: 0.25,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.8,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
              trail: { enable: true, fillColor: "#0a0c17", length: 10 },
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
            shadow: {
              enable: true,
              color: "#ffffff",
              blur: 8,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 160, links: { opacity: 0.5 } },
              push: { quantity: 6 },
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{ transform: `translateY(${scrollY * 0.03}px)` }}
      />

      <Navbar className="relative z-20" />

      <main className="relative z-20 px-6 pt-24 max-w-7xl mx-auto space-y-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

    </div>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="rounded-3xl bg-[#0a0c17]/60 p-12 shadow-2xl backdrop-blur-xl border border-[#ffffff]/20 hover:scale-105 hover:shadow-3xl transition-all duration-500"
    >
      {children}
    </motion.div>
  );
}
