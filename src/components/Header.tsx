import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tighter text-white">
          JS.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
