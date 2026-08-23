import { motion } from "motion/react";
import { content } from "../content";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/b5935e44-d11c-4327-bfc4-477df406ae6a.MP4" 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-neutral-400 max-w-2xl">
            A decade of shaping visual narratives for international audiences.
          </p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/10">
          {content.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-neutral-950 text-neutral-500 group-hover:text-white group-hover:border-white/50 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 rounded-full bg-current" />
              </div>
              
              {/* Content Box */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-neutral-900/50 border border-white/10 group-hover:bg-neutral-900 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <h3 className="font-bold text-xl text-white">{exp.title}</h3>
                  <time className="font-mono text-sm text-neutral-400 shrink-0">
                    {exp.period}
                  </time>
                </div>
                <div className="text-sm font-medium text-neutral-300 mb-4">{exp.company}</div>
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-neutral-400 text-sm leading-relaxed flex items-start">
                      <span className="text-white mr-2 mt-1 shrink-0">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
