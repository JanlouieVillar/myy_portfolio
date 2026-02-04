import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-lg font-semibold tracking-wide cursor-pointer"
        >
          Louie<span className="text-blue-500">.</span>
        </motion.h1>

        <div className="flex gap-6 relative">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="relative text-sm tracking-wide text-slate-300 hover:text-blue-400 transition-colors"
            >
              {({ isActive }) => (
                <>
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.name}
                  </motion.span>

                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400 rounded"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
