import { motion } from "motion/react";
import { content } from "../content";
import { 
  Award, 
  Eye, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Languages, 
  CheckCircle2, 
  Flame, 
  Clapperboard,
  Sparkles,
  Layers,
  Instagram,
  ExternalLink,
  Camera,
  Clock,
  Video
} from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          src="/b5935e44-d11c-4327-bfc4-477df406ae6a.MP4" 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/30 via-black to-black" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono mb-4">
            <Clapperboard className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD & PRODUCTION LEADERSHIP</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            A Decade of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">Visual Impact</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base">
            From directing multi-camera arena broadcasts with 20,000+ spectators to scaling digital networks past 10 Billion views.
          </p>
        </motion.div>

        {/* Director Profile Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 p-6 sm:p-8 rounded-3xl bg-neutral-950/85 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Picture Column */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-neutral-900">
                  <img
                    src="/josef-portrait.jpg"
                    alt="Josef Schejbal - Video Director & Editor"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Viewfinder badge overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-white font-bold tracking-wider">JOSEF SCHEJBAL</span>
                    <span className="px-2 py-0.5 rounded bg-black/60 text-red-400 border border-red-500/30 text-[10px]">
                      DIRECTOR
                    </span>
                  </div>
                </div>

                {/* Ambient photo border glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-neutral-500/20 rounded-2xl blur-sm -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Bio & Philosophy Column */}
            <div className="md:col-span-8 flex flex-col justify-center text-left">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-semibold text-white">
                  Lead Editor • Cameraman • Director
                </span>
                <span className="flex items-center gap-1 text-xs text-neutral-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-red-400" /> Prague, CZ & Worldwide
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Josef Schejbal
              </h3>

              {/* Highlights Pill Badges */}
              <div className="flex flex-wrap items-center gap-2 my-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 text-red-400" />
                  <span>20,000+ Hours of Editing</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-neutral-200 text-xs font-semibold">
                  <Video className="w-3.5 h-3.5 text-neutral-300" />
                  <span>7,000+ Videos on my belt</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-neutral-200 text-xs font-semibold">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>10B+ Global Views</span>
                </div>
              </div>

              {/* Personal Philosophy Quote */}
              <div className="relative pl-4 border-l-2 border-red-500 my-2">
                <p className="text-sm sm:text-base text-neutral-200 italic leading-relaxed">
                  "{content.hero.personalNote}"
                </p>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
                With over <strong className="text-white font-semibold">20,000+ hours of editing</strong> and more than <strong className="text-white font-semibold">7,000 videos</strong> on my belt across a decade behind the camera and in the editing suite, I combine technical precision in high-speed cinematography, pacing psychology, and cinematic color management to deliver visuals that resonate with millions.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-white/10">
                <a
                  href="https://www.instagram.com/p/C_r2GxVMJaW/?img_index=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-semibold transition-all group"
                >
                  <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                  <span>View Post on Instagram (@daemonlive)</span>
                  <ExternalLink className="w-3 h-3 text-pink-400/70" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-all"
                >
                  <Briefcase className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Book for Production</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Career Stat Milestones Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-16"
        >
          {content.milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-950/70 border border-white/10 hover:border-white/20 transition-all text-center flex flex-col justify-center items-center group"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-red-400 transition-colors">
                {m.value}
              </div>
              <div className="text-xs font-bold text-neutral-200 mt-1">{m.label}</div>
              <div className="text-[11px] text-neutral-500 font-mono mt-0.5">{m.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Detailed Experience Timeline */}
        <div className="space-y-10 relative mb-20 before:absolute before:inset-0 before:left-4 md:before:left-1/2 md:before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-red-500/50 before:via-white/15 before:to-transparent">
          {content.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative flex flex-col md:flex-row md:items-start group"
            >
              {/* Timeline center node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-black text-white group-hover:border-red-500 group-hover:scale-110 transition-all shadow-lg z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              </div>
              
              {/* Timeline Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}`}>
                <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 group-hover:border-white/25 hover:bg-neutral-900/80 transition-all">
                  
                  {/* Top Bar: Badge & Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-red-400">
                      {exp.badge}
                    </span>
                    <time className="font-mono text-xs text-neutral-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      {exp.period}
                    </time>
                  </div>

                  {/* Title & Company */}
                  <h3 className="font-bold text-xl text-white mb-1 group-hover:text-red-400 transition-colors">
                    {exp.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 mb-4 font-medium">
                    <span className="text-neutral-300 font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-neutral-400 font-mono text-[11px]">
                      <MapPin className="w-3 h-3 text-neutral-500" /> {exp.location}
                    </span>
                  </div>

                  {/* Highlight Banner if present */}
                  {exp.highlight && (
                    <div className="mb-4 p-3 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center gap-2 text-xs font-semibold text-amber-300">
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{exp.highlight}</span>
                    </div>
                  )}

                  {/* Optional Project/Experience Image Showcase */}
                  {exp.image && (
                    <div className="mb-4 relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all">
                      <img 
                        src={exp.image} 
                        alt={`${exp.company} - ${exp.title}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-neutral-400 text-xs leading-relaxed flex items-start">
                        <span className="text-red-400 mr-2 mt-0.5 shrink-0">▸</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bento Grid: Core Disciplines & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Core Directorial Disciplines (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 rounded-3xl bg-neutral-950/80 border border-white/10"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-6 uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span>Core Directorial & Production Competencies</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.coreDisciplines.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Language Credentials (Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white mb-6 uppercase tracking-wider font-mono">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Background & Languages</span>
              </div>

              {/* Education info */}
              <div className="mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-xs font-bold text-white">{content.education.field}</div>
                <div className="text-[11px] text-neutral-400 mt-1">{content.education.focus}</div>
              </div>

              {/* Languages */}
              <div>
                <div className="text-xs font-bold text-neutral-300 mb-3 flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Working Languages</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {content.languages.map((lang) => (
                    <div key={lang.name} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-red-400">{lang.code}</span>
                      <span className="text-xs text-white font-medium">{lang.name}</span>
                      <span className="text-[10px] text-neutral-400 font-mono">({lang.level})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-neutral-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Available for International Commercial & Arena Bookings
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

