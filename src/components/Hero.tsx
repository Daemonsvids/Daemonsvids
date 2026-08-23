import { motion } from "motion/react";
import { content } from "../content";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black"
    >
      {/* Background Banner */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/ba2ecbcc-9773-4110-b4ca-87131adca303.MP4" 
          autoPlay
          loop
          muted
          playsInline
          poster="/banner.jpeg"
          className="w-full h-full object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium tracking-widest uppercase mb-6">
                {content.hero.titles.join(" • ")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1.1]"
            >
              Crafting Visual <br className="hidden md:block" />
              <span className="text-neutral-500">
                Masterpieces.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="max-w-xl text-lg md:text-xl text-neutral-400 mb-12 leading-relaxed"
            >
              {content.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors text-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-transparent text-white font-semibold border border-white/20 hover:bg-white/10 transition-colors text-center"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex-1 w-full max-w-md lg:max-w-none relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative group bg-neutral-900">
               <img 
                  src="/IMG_3289.JPG" 
                  alt="Josef Schejbal" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
               />
               <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
            </div>
          </motion.div>
          
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center hidden lg:flex"
      >
        <a href="#stack" className="text-neutral-600 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
