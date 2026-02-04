import { NavLink } from "react-router-dom";

export default function Navbar() {
  const base =
    "text-sm tracking-wide hover:text-blue-400 transition-colors";
  const active = "text-blue-400";

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wide">
          Louie<span className="text-blue-500">.</span>
        </h1>

        <div className="flex gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? active : base}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? active : base}>About</NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? active : base}>Skills</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? active : base}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? active : base}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
