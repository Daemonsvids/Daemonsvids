import { motion, AnimatePresence } from "motion/react";
import { content } from "../content";
import { 
  ChevronDown, 
  Play, 
  Film, 
  Award, 
  Eye, 
  Clock, 
  Flame, 
  Zap,
  ExternalLink, 
  Youtube, 
  Layers 
} from "lucide-react";
import { useState } from "react";

interface ShowreelItem {
  id: string;
  category: "Action & MMA" | "Dynamic Sports Promo" | "Cinematic";
  title: string;
  subtitle: string;
  type: "youtube" | "mp4";
  youtubeId?: string;
  startSeconds?: number;
  videoUrl?: string;
  fps: string;
  codec: string;
  colorProfile: string;
  duration?: string;
  url: string;
}

const ACTION_MMA_VIDEOS: ShowreelItem[] = [
  {
    id: "mma-1",
    category: "Action & MMA",
    title: "OKTAGON Documentary Cut I",
    subtitle: "High-Stakes Narrative & Fight Camp",
    type: "youtube",
    youtubeId: "IsibXpKNLdk",
    startSeconds: 439,
    fps: "24 FPS",
    codec: "DCI 4K ProRes",
    colorProfile: "S-Log3 / DaVinci Resolve",
    duration: "Start @ 07:19",
    url: "https://www.youtube.com/watch?v=IsibXpKNLdk&t=439s",
  },
  {
    id: "mma-2",
    category: "Action & MMA",
    title: "OKTAGON Fight Spotlight II",
    subtitle: "Cinematic Staredowns & Arena Walkout",
    type: "youtube",
    youtubeId: "zfNUvNBEBxg",
    startSeconds: 13,
    fps: "60 FPS",
    codec: "4K 10-Bit 4:2:2",
    colorProfile: "ACEScc Film Look",
    duration: "Start @ 00:13",
    url: "https://www.youtube.com/watch?v=zfNUvNBEBxg&t=13s",
  },
  {
    id: "mma-3",
    category: "Action & MMA",
    title: "OKTAGON Hype & Teaser III",
    subtitle: "Fast-Paced Action & Sound Design",
    type: "youtube",
    youtubeId: "qlljZlvtMas",
    startSeconds: 3,
    fps: "120 FPS",
    codec: "RAW 4K 12-Bit",
    colorProfile: "Sony Venice Color",
    duration: "Start @ 00:03",
    url: "https://www.youtube.com/watch?v=qlljZlvtMas&t=3s",
  },
  {
    id: "mma-4",
    category: "Action & MMA",
    title: "Cesta na OKTAGON IV",
    subtitle: "Award-Winning Series & Fight Night",
    type: "youtube",
    youtubeId: "wbjh9Ah2XNQ",
    startSeconds: 493,
    fps: "24 FPS",
    codec: "ProRes 4444 XQ",
    colorProfile: "DaVinci Color Managed",
    duration: "Start @ 08:13",
    url: "https://www.youtube.com/watch?v=wbjh9Ah2XNQ&t=493s",
  },
];

const DYNAMIC_SPORTS_PROMO_VIDEOS: ShowreelItem[] = [
  {
    id: "promo-1",
    category: "Dynamic Sports Promo",
    title: "Sports Promo Cut I",
    subtitle: "High-Energy Athletic Power & Motion",
    type: "youtube",
    youtubeId: "x0hjIIDwkEM",
    startSeconds: 0,
    fps: "60 FPS",
    codec: "Vertical 4K HDR",
    colorProfile: "Rec.709 Vivid",
    duration: "YouTube Short",
    url: "https://www.youtube.com/shorts/x0hjIIDwkEM",
  },
  {
    id: "promo-2",
    category: "Dynamic Sports Promo",
    title: "Sports Promo Cut II",
    subtitle: "Intense Kinetic Action & Rhythm",
    type: "youtube",
    youtubeId: "7rF8yYFjNOk",
    startSeconds: 0,
    fps: "60 FPS",
    codec: "Vertical 4K HDR",
    colorProfile: "S-Log3 Cinematic",
    duration: "YouTube Short",
    url: "https://www.youtube.com/shorts/7rF8yYFjNOk",
  },
  {
    id: "promo-3",
    category: "Dynamic Sports Promo",
    title: "Sports Promo Cut III",
    subtitle: "Fast-Paced Sound Design & Pace",
    type: "youtube",
    youtubeId: "GjlKOWYpJyU",
    startSeconds: 0,
    fps: "120 FPS",
    codec: "Vertical 4K RAW",
    colorProfile: "ACEScc Film Look",
    duration: "YouTube Short",
    url: "https://www.youtube.com/shorts/GjlKOWYpJyU",
  },
  {
    id: "promo-4",
    category: "Dynamic Sports Promo",
    title: "Sports Promo Cut IV",
    subtitle: "Precision Speed & Training Drive",
    type: "youtube",
    youtubeId: "gNF5x6Xo9Bc",
    startSeconds: 0,
    fps: "60 FPS",
    codec: "Vertical 4K 10-Bit",
    colorProfile: "DaVinci Color Managed",
    duration: "YouTube Short",
    url: "http://youtube.com/shorts/gNF5x6Xo9Bc",
  },
  {
    id: "promo-5",
    category: "Dynamic Sports Promo",
    title: "Sports Promo Cut V",
    subtitle: "Cinematic Highlight & Impact",
    type: "youtube",
    youtubeId: "epiyMZ9yqWI",
    startSeconds: 0,
    fps: "60 FPS",
    codec: "Vertical 4K HDR",
    colorProfile: "Film Emulation Look",
    duration: "YouTube Short",
    url: "https://www.youtube.com/shorts/epiyMZ9yqWI",
  },
];

const OTHER_REELS: ShowreelItem[] = [
  {
    id: "cinematic-yt-1",
    category: "Cinematic",
    title: "Cinematic B-Roll Showcase I",
    subtitle: "Atmospheric Visuals, Lighting & Mood",
    type: "youtube",
    youtubeId: "OQLb5ubt4Wk",
    startSeconds: 0,
    fps: "24 FPS",
    codec: "DCI 4K ProRes",
    colorProfile: "DaVinci Resolve Film Print",
    duration: "4K Video",
    url: "https://www.youtube.com/watch?v=OQLb5ubt4Wk",
  },
  {
    id: "cinematic-yt-2",
    category: "Cinematic",
    title: "Cinematic B-Roll Showcase II",
    subtitle: "Narrative Tone, Visual Depth & Color",
    type: "youtube",
    youtubeId: "rftPJ3-nlmU",
    startSeconds: 0,
    fps: "24 FPS",
    codec: "4K 10-Bit ProRes",
    colorProfile: "S-Log3 / Film Emulation",
    duration: "4K Video",
    url: "https://www.youtube.com/watch?v=rftPJ3-nlmU",
  },
];

const ALL_REELS = [...ACTION_MMA_VIDEOS, ...DYNAMIC_SPORTS_PROMO_VIDEOS, ...OTHER_REELS];

const METRICS = [
  {
    label: "Editing Mastery",
    value: "20,000+ Hrs",
    icon: Clock,
    desc: "7,000+ Videos on my belt",
  },
  {
    label: "Global Reach",
    value: "10B+ Views",
    icon: Eye,
    desc: "Across YouTube & Digital Media",
  },
  {
    label: "Recognition",
    value: "Video of the Year",
    icon: Award,
    desc: "Cesta na OKTAGON Series",
  },
];

export function Hero() {
  const [activeReelIndex, setActiveReelIndex] = useState(0); // Default to first Action & MMA video
  const [activeCategory, setActiveCategory] = useState<"Action & MMA" | "Dynamic Sports Promo" | "Cinematic">("Action & MMA");

  const activeReel = ALL_REELS[activeReelIndex] || ACTION_MMA_VIDEOS[0];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black"
    >
      {/* Ambient Video Header Background (First 15 seconds loop of OLSzwax93SE, positioned high on HomePage) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 w-full h-[120%] -translate-y-10 sm:-translate-y-20 scale-[1.35] sm:scale-[1.2] origin-top">
          <iframe
            src="https://www.youtube-nocookie.com/embed/OLSzwax93SE?autoplay=1&mute=1&controls=0&loop=1&playlist=OLSzwax93SE&start=0&end=15&playsinline=1&enablejsapi=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&modestbranding=1"
            title="Background Visual Loop"
            className="w-full h-full object-cover pointer-events-none opacity-40 grayscale contrast-125"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            tabIndex={-1}
          />
        </div>
        {/* Layered cinematic vignettes and gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black" />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] bg-neutral-700/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Text & Intro Column */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/[0.07] border border-white/10 text-neutral-200 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                {content.hero.titles.join(" • ")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.08]"
            >
              Crafting High-Impact <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                Visual Stories.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="max-w-xl text-base sm:text-lg text-neutral-400 mb-8 leading-relaxed font-light"
            >
              {content.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-4 w-full sm:w-auto justify-center lg:justify-start mb-10"
            >
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="px-7 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all shadow-lg hover:shadow-white/10 text-center flex items-center justify-center gap-2 text-sm"
              >
                <Film className="w-4 h-4" />
                Explore Projects
              </a>
              <a
                href="#contact"
                id="hero-contact-btn"
                className="px-7 py-3.5 rounded-full bg-white/5 text-white font-semibold border border-white/15 hover:bg-white/10 transition-all text-center text-sm backdrop-blur-sm"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Career Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-3 gap-3 sm:gap-4 w-full pt-6 border-t border-white/10"
            >
              {METRICS.map((metric) => {
                const IconComponent = metric.icon;
                return (
                  <div 
                    key={metric.label}
                    className="flex flex-col p-3 rounded-2xl bg-white/[0.03] border border-white/5"
                  >
                    <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                      <IconComponent className="w-3.5 h-3.5 text-neutral-300" />
                      <span className="text-[11px] font-medium tracking-wider uppercase truncate">{metric.label}</span>
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-white tracking-tight">{metric.value}</span>
                    <span className="text-[10px] text-neutral-500 line-clamp-1 mt-0.5">{metric.desc}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Cinematic Director's Monitor / Interactive Showreel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-6 w-full flex flex-col"
          >
            {/* Monitor Chassis */}
            <div className="relative rounded-3xl bg-neutral-950/90 border border-white/15 shadow-2xl backdrop-blur-xl overflow-hidden p-3.5 sm:p-4">
              
              {/* Top Viewfinder Bar */}
              <div className="flex items-center justify-between mb-3 px-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/30 px-2 py-0.5 rounded-full text-red-400 font-semibold tracking-wider text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    SHOWREEL
                  </div>
                  <span className="text-neutral-300 font-bold tracking-wider">{activeReel.category}</span>
                </div>

                <div className="flex items-center gap-2 text-neutral-400 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300 font-medium font-mono">
                    {activeReel.fps}
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300 font-medium font-mono">
                    {activeReel.codec}
                  </span>
                </div>
              </div>

              {/* Viewport Screen */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 group shadow-inner">
                {activeReel.type === "youtube" && activeReel.youtubeId ? (
                  <iframe
                    key={`${activeReel.youtubeId}-${activeReel.startSeconds}`}
                    src={`https://www.youtube-nocookie.com/embed/${activeReel.youtubeId}?autoplay=1&start=${activeReel.startSeconds || 0}&rel=0&modestbranding=1`}
                    title={activeReel.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0 absolute inset-0"
                  />
                ) : (
                  <video
                    key={activeReel.videoUrl}
                    src={activeReel.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Viewfinder crosshairs for non-iframe or ambient overlay */}
                {activeReel.type === "mp4" && (
                  <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <div className="w-4 h-4 border-t-2 border-l-2 border-white/40" />
                      <div className="w-4 h-4 border-t-2 border-r-2 border-white/40" />
                    </div>
                    <div className="self-center w-6 h-6 flex items-center justify-center opacity-30">
                      <div className="w-full h-[1px] bg-white absolute" />
                      <div className="h-full w-[1px] bg-white absolute" />
                    </div>
                    <div className="flex justify-between">
                      <div className="w-4 h-4 border-b-2 border-l-2 border-white/40" />
                      <div className="w-4 h-4 border-b-2 border-r-2 border-white/40" />
                    </div>
                  </div>
                )}
              </div>

              {/* Active Cut Info Bar */}
              <div className="mt-3 px-2 flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <div className="text-sm font-semibold text-white truncate flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    {activeReel.title}
                  </div>
                  <div className="text-xs text-neutral-400 truncate">
                    {activeReel.subtitle} • <span className="text-neutral-500 font-mono">{activeReel.duration}</span>
                  </div>
                </div>

                {activeReel.url && activeReel.url !== "#" && (
                  <a
                    href={activeReel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1.5 transition-all shrink-0 border border-white/10"
                    title="Watch on YouTube"
                  >
                    <Youtube className="w-3.5 h-3.5 text-red-500" />
                    <span className="hidden sm:inline">YouTube</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                )}
              </div>

              {/* Showreel Category Tabs & Clip Switcher */}
              <div className="mt-3.5 pt-3 border-t border-white/10">
                {/* Category Switcher Tabs */}
                <div className="flex items-center gap-1.5 mb-2.5 overflow-x-auto pb-1 scrollbar-none">
                  <button
                    onClick={() => {
                      setActiveCategory("Action & MMA");
                      setActiveReelIndex(0);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                      activeCategory === "Action & MMA"
                        ? "bg-red-500/20 text-red-300 border border-red-500/40"
                        : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    <Flame className="w-3 h-3 text-red-500" />
                    <span>Action & MMA (4)</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveCategory("Dynamic Sports Promo");
                      setActiveReelIndex(4);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                      activeCategory === "Dynamic Sports Promo"
                        ? "bg-amber-400/20 text-amber-300 border border-amber-400/40"
                        : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>Dynamic Sports Promo (5)</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveCategory("Cinematic");
                      setActiveReelIndex(9);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                      activeCategory === "Cinematic"
                        ? "bg-white/20 text-white border border-white/40"
                        : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    <Film className="w-3 h-3 text-neutral-300" />
                    <span>Cinematic B-Roll (2)</span>
                  </button>
                </div>
                
                {/* Action & MMA 4 Clips Grid */}
                {activeCategory === "Action & MMA" && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {ACTION_MMA_VIDEOS.map((reel) => {
                      const originalIndex = ALL_REELS.findIndex((r) => r.id === reel.id);
                      const isActive = originalIndex === activeReelIndex;
                      return (
                        <button
                          key={reel.id}
                          id={`hero-mma-clip-${reel.id}`}
                          onClick={() => setActiveReelIndex(originalIndex)}
                          className={`text-left p-2 rounded-xl border transition-all relative overflow-hidden flex flex-col justify-between ${
                            isActive
                              ? "bg-red-500/15 border-red-500/50 text-white shadow-sm ring-1 ring-red-500/30"
                              : "bg-white/[0.03] border-white/5 text-neutral-400 hover:bg-white/[0.08] hover:text-neutral-200"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5 w-full">
                            <span className={`text-[10px] font-mono font-bold ${isActive ? "text-red-400" : "text-neutral-500"}`}>
                              {reel.duration?.replace("Start @ ", "")}
                            </span>
                            <span className="p-1 rounded bg-black/40 text-neutral-300">
                              <Play className={`w-2.5 h-2.5 ${isActive ? "text-red-400 fill-red-400" : "text-neutral-400"}`} />
                            </span>
                          </div>
                          
                          <div className="text-[11px] font-semibold truncate leading-tight w-full">
                            {reel.title.replace("OKTAGON ", "")}
                          </div>
                          <div className="text-[9px] text-neutral-500 truncate w-full font-mono mt-0.5">
                            {reel.fps} • {reel.colorProfile.split(" / ")[0]}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Dynamic Sports Promo 5 Clips Grid */}
                {activeCategory === "Dynamic Sports Promo" && (
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                    {DYNAMIC_SPORTS_PROMO_VIDEOS.map((reel, idx) => {
                      const originalIndex = ALL_REELS.findIndex((r) => r.id === reel.id);
                      const isActive = originalIndex === activeReelIndex;
                      return (
                        <button
                          key={reel.id}
                          id={`hero-promo-clip-${reel.id}`}
                          onClick={() => setActiveReelIndex(originalIndex)}
                          className={`text-left p-2 rounded-xl border transition-all relative overflow-hidden flex flex-col justify-between ${
                            isActive
                              ? "bg-amber-400/15 border-amber-400/60 text-white shadow-sm ring-1 ring-amber-400/30"
                              : "bg-white/[0.03] border-white/5 text-neutral-400 hover:bg-white/[0.08] hover:text-neutral-200"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1 w-full">
                            <span className={`text-[10px] font-mono font-bold ${isActive ? "text-amber-400" : "text-neutral-500"}`}>
                              0{idx + 1}
                            </span>
                            <span className="p-1 rounded bg-black/40 text-neutral-300">
                              <Play className={`w-2 h-2 ${isActive ? "text-amber-400 fill-amber-400" : "text-neutral-400"}`} />
                            </span>
                          </div>
                          
                          <div className="text-[11px] font-semibold truncate leading-tight w-full">
                            {reel.title}
                          </div>
                          <div className="text-[9px] text-neutral-500 truncate w-full font-mono mt-0.5">
                            {reel.fps}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Cinematic Cuts Grid */}
                {activeCategory === "Cinematic" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {OTHER_REELS.map((reel) => {
                      const originalIndex = ALL_REELS.findIndex((r) => r.id === reel.id);
                      const isActive = originalIndex === activeReelIndex;
                      return (
                        <button
                          key={reel.id}
                          onClick={() => setActiveReelIndex(originalIndex)}
                          className={`p-2.5 rounded-xl border transition-all text-left flex items-center justify-between ${
                            isActive
                              ? "bg-white/20 border-white/40 text-white font-semibold"
                              : "bg-white/5 border-white/5 text-neutral-400 hover:bg-white/10 hover:text-neutral-200"
                          }`}
                        >
                          <div>
                            <div className="text-xs font-semibold">{reel.title}</div>
                            <div className="text-[10px] text-neutral-400">{reel.subtitle}</div>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-neutral-300">
                            {reel.fps}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center"
      >
        <a href="#stack" id="hero-scroll-down" className="text-neutral-500 hover:text-white transition-colors">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}


