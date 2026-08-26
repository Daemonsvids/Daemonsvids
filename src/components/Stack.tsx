import { motion } from "motion/react";
import { content } from "../content";
import { 
  Camera, 
  MonitorPlay, 
  CheckCircle2, 
  Radio 
} from "lucide-react";
import { useState } from "react";

type GearCategory = "All" | "Cameras & Aerial" | "Color & Post-Production";

export function Stack() {
  const [activeTab, setActiveTab] = useState<GearCategory>("All");

  const gear = content.gear;

  const categories = [
    { id: "All" as GearCategory, label: "Full Kit (All)" },
    { id: "Cameras & Aerial" as GearCategory, label: "Cameras & Aerial" },
    { id: "Color & Post-Production" as GearCategory, label: "Post & Grading" },
  ];

  return (
    <section id="stack" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Background Video Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          src="/b596e442-db69-46d8-80bb-20424c031fac.MP4" 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>PRODUCTION SPECS & CINEMA KIT</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            The Gear & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">Tech Arsenal</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base">
            Engineered for high-intensity live sports, rapid turnaround octagon documentaries, and broadcast-grade cinematic commercial grading.
          </p>

          {/* Key Production Standard Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-red-400" /> DCI 4K 120FPS
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-amber-400" /> 10-Bit 4:2:2 ProRes
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-blue-400" /> ACEScc / S-Log3 Workflow
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 32-Bit Float Audio
            </span>
          </div>
        </motion.div>

        {/* Category Navigation Filter */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border whitespace-nowrap flex items-center gap-2 ${
                activeTab === cat.id
                  ? "bg-white text-black border-white shadow-lg shadow-white/10 scale-105"
                  : "bg-neutral-950/60 text-neutral-400 border-white/10 hover:bg-neutral-900 hover:text-white"
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Gear Breakdown Grids */}
        <div className="space-y-12">
          
          {/* Section 1: Cameras & Drone */}
          {(activeTab === "All" || activeTab === "Cameras & Aerial") && (
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white mb-6 uppercase tracking-wider font-mono">
                <Camera className="w-4 h-4 text-red-500" />
                <span>Cinema Bodies & Aerial Capture</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...gear.cameras, ...gear.aerial].map((cam, idx) => (
                  <motion.div
                    key={cam.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-6 rounded-2xl bg-neutral-950/70 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group hover:bg-neutral-900/60"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-semibold">
                          {cam.badge}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase">
                          {cam.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                        {cam.name}
                      </h3>

                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {cam.specs}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Field-Tested in MMA & Arena
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Post-Production & Color Science */}
          {(activeTab === "All" || activeTab === "Color & Post-Production") && (
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white mb-6 uppercase tracking-wider font-mono">
                <MonitorPlay className="w-4 h-4 text-amber-400" />
                <span>NLE Suite & Color Grading Workstation</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {gear.postProduction.map((tool, idx) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-6 rounded-2xl bg-neutral-950/70 border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between group hover:bg-neutral-900/60"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-semibold">
                          {tool.badge}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase">
                          {tool.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                        {tool.name}
                      </h3>

                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {tool.specs}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      Broadcast Delivery Standards
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

