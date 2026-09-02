import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { content } from "../content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef<number>(0);

  const links = [
    { id: "home", name: "Home", href: "#home" },
    { id: "clients", name: "Clients", href: "#clients" },
    { id: "fashion-merch", name: "Fashion & Merch", href: "#fashion-merch" },
    { id: "projects", name: "Projects", href: "#projects" },
    { id: "stack", name: "Gear", href: "#stack" },
    { id: "experience", name: "Experience", href: "#experience" },
    { id: "contact", name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sectionIds = links.map((l) => l.id);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      // Detect scroll direction
      if (Math.abs(currentScrollY - lastScrollYRef.current) > 3) {
        setScrollDirection(currentScrollY > lastScrollYRef.current ? "down" : "up");
        lastScrollYRef.current = currentScrollY;
      }

      // Mark user as actively scrolling
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      // Determine active section based on scroll position
      const scrollPosition = currentScrollY + 220; // offset for header & comfortable trigger
      let currentActive = "home";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActive = id;
            break;
          }
        }
      }

      // If at the very bottom of the page, activate Contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentActive = "contact";
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-black/50 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home", "home")}
          className="flex items-center gap-2.5 group"
        >
          <motion.div
            animate={{ scale: isScrolling ? 0.95 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-white/50 transition-colors shrink-0 bg-neutral-800"
          >
            <img
              src="/josef-portrait.jpg"
              alt="Josef Schejbal"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <span className="text-lg font-bold tracking-tighter text-white group-hover:text-neutral-200 transition-colors">
            JS.
          </span>
        </a>

        {/* Desktop Interactive Nav (Interactive on Scroll) */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-1 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {links.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  animate={{
                    scale: isActive
                      ? isScrolling
                        ? 1.08
                        : 1.04
                      : isScrolling
                      ? 0.95
                      : 1,
                    opacity: isActive ? 1 : isScrolling ? 0.65 : 0.8,
                  }}
                  whileHover={{ scale: 1.08, opacity: 1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 380, damping: 24 }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "text-white font-bold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {/* Sliding Glowing Pill Indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600/30 via-amber-500/20 to-red-600/30 border border-white/20 shadow-[0_0_16px_rgba(239,68,68,0.25)] -z-10"
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-1.5 h-1.5 rounded-full bg-red-400 shadow-[0_0_6px_#ef4444]"
                      />
                    )}
                    {link.name}
                  </span>
                </motion.a>
              );
            })}
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
            className="text-neutral-400 hover:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-2 shadow-2xl"
          >
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white/10 text-white font-bold border border-white/15"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_8px_#ef4444]" />
                  )}
                </a>
              );
            })}
            <a
              href={content.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-3 mt-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-200"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Follow on Instagram (@daemonlive)</span>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

