import { motion } from "motion/react";
import { Menu, X, Instagram } from "lucide-react";
import { useState } from "react";
import { content } from "../content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Clients", href: "#clients" },
    { name: "Projects", href: "#projects" },
    { name: "Gear", href: "#stack" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-white/50 transition-colors shrink-0 bg-neutral-800">
            <img
              src="/josef-portrait.jpg"
              alt="Josef Schejbal"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-lg font-bold tracking-tighter text-white group-hover:text-neutral-200 transition-colors">
            JS.
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href={content.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-pink-500/40 hover:bg-pink-500/10 transition-all"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>@daemonlive</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={content.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
          </a>
          <button
            className="text-neutral-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-neutral-950 border-b border-white/5 p-6 flex flex-col gap-4 shadow-2xl"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={content.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-4 py-2.5 mt-2 rounded-xl bg-white/5 border border-white/10 text-sm font-mono text-neutral-200"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>Follow on Instagram (@daemonlive)</span>
          </a>
        </motion.nav>
      )}
    </header>
  );
}
