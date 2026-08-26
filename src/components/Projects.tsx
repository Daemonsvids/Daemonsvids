import { motion } from "motion/react";
import { content } from "../content";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
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
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-neutral-950 border border-white/5 hover:border-white/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/50 transition-all duration-500" />
              
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm font-medium text-black bg-white px-3 py-1 rounded-full">
                    {project.role}
                  </span>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full text-neutral-500 hover:text-white transition-colors"
                      title="Open project"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                  )}
                </div>
                
                {project.youtubeId && (
                  <div className="mb-6 relative w-full pt-[56.25%] rounded-xl overflow-hidden bg-neutral-900 border border-white/10">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${project.youtubeId}`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {project.instagramUrl && (
                  <div className="mb-6 relative w-full h-[400px] rounded-xl overflow-hidden bg-neutral-900 border border-white/10">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full border-0"
                      src={project.instagramUrl}
                      title={project.title}
                      allow="autoplay; encrypted-media; fullscreen"
                      allowFullScreen
                      scrolling="no"
                    ></iframe>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-neutral-300 mb-4 group-hover:text-white transition-all">
                  {project.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
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
