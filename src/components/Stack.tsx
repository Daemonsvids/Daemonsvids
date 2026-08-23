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
    <section id="stack" className="py-24 relative overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/b596e442-db69-46d8-80bb-20424c031fac.MP4" 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Gear</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
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
              className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:bg-neutral-900 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10">
                {icons[skill.icon]}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mr-3" />
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
