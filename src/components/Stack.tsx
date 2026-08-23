import { motion } from "motion/react";
import { content } from "../content";
import { MonitorPlay, Camera, Lightbulb } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  MonitorPlay: <MonitorPlay className="w-8 h-8" />,
  Camera: <Camera className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />,
};

export function Stack() {
  return (
    <section id="stack" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Stack</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My toolkit for bringing ideas to life through precision, speed, and vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400 mb-6 border border-white/10">
                {icons[skill.icon]}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
