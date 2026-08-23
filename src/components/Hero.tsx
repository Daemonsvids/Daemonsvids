import { motion } from "motion/react";
import { content } from "../content";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium tracking-wide mb-6">
              {content.hero.titles.join(" • ")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-tight"
          >
            Crafting Visual <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Masterpieces.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-2xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed"
          >
            {content.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center"
      >
        <a href="#stack" className="text-slate-500 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
