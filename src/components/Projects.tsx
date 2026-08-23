import { motion } from "motion/react";
import { content } from "../content";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-slate-950">
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of high-impact visual storytelling across sports, gaming, and commercial industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                    {project.role}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
