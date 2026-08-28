import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { content } from "../content";
import { Sparkles, Trophy, Video, CheckCircle2, ArrowUpRight, Play, X, ExternalLink } from "lucide-react";

// Crisp SVG Logos for each client with distinct branding
export function ClientLogo({ id, className = "w-8 h-8", active = false }: { id: string; className?: string; active?: boolean }) {
  switch (id) {
    case "oktagon-mma":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <polygon
            points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
          />
          <polygon
            points="34,16 66,16 84,34 84,66 66,84 34,84 16,66 16,34"
            fill="currentColor"
            opacity="0.15"
          />
          <text
            x="50"
            y="48"
            fontSize="14"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Impact, sans-serif"
            letterSpacing="1"
            fill="currentColor"
          >
            OKTAGON
          </text>
          <text
            x="50"
            y="66"
            fontSize="16"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Impact, sans-serif"
            letterSpacing="2"
            fill="#f59e0b"
          >
            MMA
          </text>
        </svg>
      );

    case "resttpowered":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <rect width="100" height="100" rx="20" fill="currentColor" opacity="0.08" />
          {/* Headset arc */}
          <path
            d="M24 50 C 24 28, 76 28, 76 50"
            fill="none"
            stroke="#a855f7"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Earcups */}
          <rect x="18" y="44" width="10" height="20" rx="4" fill="#a855f7" />
          <rect x="72" y="44" width="10" height="20" rx="4" fill="#a855f7" />
          {/* Flame / Lightning R */}
          <path
            d="M40 38 L54 38 C 60 38, 64 42, 64 47 C 64 52, 60 55, 54 55 L46 55 L46 68 L40 68 Z M46 44 L46 50 L53 50 C 56 50, 58 48, 58 47 C 58 45, 56 44, 53 44 Z"
            fill="#ffffff"
          />
          <path
            d="M52 53 L62 68 L54 68 L46 55 Z"
            fill="#ec4899"
          />
          <text
            x="50"
            y="88"
            fontSize="10"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            letterSpacing="1.5"
            fill="#a855f7"
          >
            RESTT
          </text>
        </svg>
      );

    case "freezecz":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <rect width="100" height="100" rx="20" fill="currentColor" opacity="0.08" />
          {/* Ice Crystal / Frost Blade */}
          <polygon points="50,14 62,38 50,62 38,38" fill="#38bdf8" />
          <polygon points="50,26 74,48 50,70 26,48" fill="none" stroke="#7dd3fc" strokeWidth="3" />
          <line x1="50" y1="12" x2="50" y2="72" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <line x1="22" y1="42" x2="78" y2="42" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <text
            x="50"
            y="90"
            fontSize="11"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            letterSpacing="2"
            fill="#38bdf8"
          >
            FREEZE
          </text>
        </svg>
      );

    case "trick2g":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <rect width="100" height="100" rx="20" fill="currentColor" opacity="0.08" />
          {/* D Gates Crown / 2G Monogram */}
          <path
            d="M26 34 L38 22 L50 32 L62 22 L74 34 L70 54 L30 54 Z"
            fill="#3b82f6"
          />
          <circle cx="38" cy="20" r="3" fill="#eab308" />
          <circle cx="50" cy="16" r="3.5" fill="#eab308" />
          <circle cx="62" cy="20" r="3" fill="#eab308" />
          <text
            x="50"
            y="50"
            fontSize="16"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            letterSpacing="-1"
            fill="#ffffff"
          >
            2G
          </text>
          <text
            x="50"
            y="74"
            fontSize="11"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Impact, sans-serif"
            letterSpacing="2"
            fill="#eab308"
          >
            TRICK2G
          </text>
          <text
            x="50"
            y="88"
            fontSize="8"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            letterSpacing="1.5"
            fill="currentColor"
          >
            D GATES
          </text>
        </svg>
      );

    case "anniebot":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <rect width="100" height="100" rx="20" fill="currentColor" opacity="0.08" />
          {/* Tibbers Fireball & Bear Ears */}
          <circle cx="34" cy="28" r="8" fill="#f97316" opacity="0.7" />
          <circle cx="66" cy="28" r="8" fill="#f97316" opacity="0.7" />
          <circle cx="50" cy="46" r="24" fill="#ef4444" />
          {/* Flame Center */}
          <path
            d="M50 26 C 56 36, 62 42, 58 52 C 54 60, 44 60, 42 52 C 40 44, 46 36, 50 26 Z"
            fill="#fbbf24"
          />
          <text
            x="50"
            y="82"
            fontSize="10"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            letterSpacing="1"
            fill="#f97316"
          >
            ANNIE BOT
          </text>
          <text
            x="50"
            y="94"
            fontSize="8"
            fontWeight="700"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            letterSpacing="1"
            fill="currentColor"
          >
            CHALLENGER
          </text>
        </svg>
      );

    case "rooniecz":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <rect width="100" height="100" rx="20" fill="currentColor" opacity="0.08" />
          {/* Dumbbell & Strength Wings */}
          <rect x="24" y="44" width="52" height="6" rx="3" fill="#ffffff" />
          <rect x="18" y="34" width="8" height="26" rx="3" fill="#ef4444" />
          <rect x="12" y="38" width="6" height="18" rx="2" fill="#ef4444" opacity="0.8" />
          <rect x="74" y="34" width="8" height="26" rx="3" fill="#ef4444" />
          <rect x="82" y="38" width="6" height="18" rx="2" fill="#ef4444" opacity="0.8" />
          <text
            x="50"
            y="76"
            fontSize="12"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            letterSpacing="1.5"
            fill="#ffffff"
          >
            ROONIE
          </text>
          <text
            x="50"
            y="90"
            fontSize="8.5"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            letterSpacing="2"
            fill="#ef4444"
          >
            FITNESS
          </text>
        </svg>
      );

    case "kudy-bezi-zajic":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <rect width="100" height="100" rx="20" fill="currentColor" opacity="0.08" />
          {/* Stylized Running Hare / Rabbit Ears with Podcast Wave */}
          <path
            d="M36 44 C 32 30, 24 16, 32 14 C 40 12, 42 28, 44 38"
            fill="none"
            stroke="#84cc16"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M48 40 C 48 24, 48 12, 58 12 C 68 12, 60 26, 56 38"
            fill="none"
            stroke="#84cc16"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Hare Head & Muzzle */}
          <path
            d="M34 44 C 42 42, 58 40, 68 48 C 76 54, 76 60, 68 62 C 58 64, 46 62, 38 56 Z"
            fill="#84cc16"
          />
          {/* Eye */}
          <circle cx="58" cy="50" r="2.5" fill="#000" />
          {/* Podcast Soundwaves */}
          <path d="M78 44 C 82 48, 82 56, 78 60" fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M84 40 C 90 46, 90 64, 84 70" fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          <text
            x="50"
            y="82"
            fontSize="8"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            letterSpacing="1"
            fill="currentColor"
          >
            KUDY BĚŽÍ
          </text>
          <text
            x="50"
            y="94"
            fontSize="10.5"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            letterSpacing="1"
            fill="#84cc16"
          >
            ZAJÍC
          </text>
        </svg>
      );

    case "prima-ftv":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="6" opacity="0.4" />
          <path
            d="M25 50 C 25 35, 38 24, 52 24 C 64 24, 75 33, 75 46 C 75 60, 62 70, 48 70 L 32 70 L 32 30"
            fill="none"
            stroke="#f97316"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="50"
            y="88"
            fontSize="11"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            letterSpacing="2"
            fill="currentColor"
          >
            FTV PRIMA
          </text>
        </svg>
      );

    case "fattypillow":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <circle cx="50" cy="46" r="34" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.3" />
          {/* Crown */}
          <path
            d="M26 55 L32 32 L44 44 L50 24 L56 44 L68 32 L74 55 Z"
            fill="#a855f7"
          />
          <circle cx="32" cy="28" r="3" fill="#ec4899" />
          <circle cx="50" cy="20" r="3" fill="#eab308" />
          <circle cx="68" cy="28" r="3" fill="#ec4899" />
          <text
            x="50"
            y="84"
            fontSize="10"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            letterSpacing="1"
            fill="currentColor"
          >
            FATTYPILLOW
          </text>
        </svg>
      );

    case "hopi-cup":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <path
            d="M30 26 L70 26 L64 54 C 61 64, 39 64, 36 54 Z"
            fill="none"
            stroke="#10b981"
            strokeWidth="5"
          />
          {/* Handles */}
          <path d="M30 32 C 18 34, 18 46, 31 48" fill="none" stroke="#10b981" strokeWidth="4" />
          <path d="M70 32 C 82 34, 82 46, 69 48" fill="none" stroke="#10b981" strokeWidth="4" />
          {/* Stem & Base */}
          <rect x="47" y="60" width="6" height="12" fill="#10b981" />
          <rect x="36" y="72" width="28" height="5" rx="2" fill="#10b981" />
          <text
            x="50"
            y="92"
            fontSize="11"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            letterSpacing="1"
            fill="currentColor"
          >
            HOPI CUP
          </text>
        </svg>
      );

    case "jirka-kral":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <rect width="100" height="100" rx="20" fill="currentColor" opacity="0.08" />
          <text
            x="50"
            y="55"
            fontSize="36"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            letterSpacing="-2"
            fill="#38bdf8"
          >
            JK
          </text>
          <text
            x="50"
            y="80"
            fontSize="10"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            letterSpacing="1.5"
            fill="currentColor"
          >
            JIRKA KRÁL
          </text>
        </svg>
      );

    case "housebox":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          {/* Isometric Cube */}
          <path d="M50 20 L80 36 L50 52 L20 36 Z" fill="#6366f1" />
          <path d="M20 36 L50 52 L50 78 L20 62 Z" fill="#4f46e5" />
          <path d="M80 36 L50 52 L50 78 L80 62 Z" fill="#4338ca" />
          <text
            x="50"
            y="94"
            fontSize="10"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            letterSpacing="1"
            fill="currentColor"
          >
            HOUSEBOX
          </text>
        </svg>
      );

    case "vladavideos":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <circle cx="50" cy="46" r="32" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.2" />
          <path
            d="M32 30 L50 64 L68 30 L58 30 L50 48 L42 30 Z"
            fill="#ef4444"
          />
          <text
            x="50"
            y="88"
            fontSize="9"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            letterSpacing="1"
            fill="currentColor"
          >
            VLADAVIDEOS
          </text>
        </svg>
      );

    case "jitka-novackova":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <circle cx="50" cy="44" r="34" fill="none" stroke="#f472b6" strokeWidth="2" strokeDasharray="4 3" />
          <text
            x="50"
            y="52"
            fontSize="28"
            fontWeight="300"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontStyle="italic"
            letterSpacing="1"
            fill="#f472b6"
          >
            JN
          </text>
          <text
            x="50"
            y="88"
            fontSize="9"
            fontWeight="700"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            letterSpacing="1.5"
            fill="currentColor"
          >
            JITKA NOVÁČKOVÁ
          </text>
        </svg>
      );

    case "daemons-vids":
    default:
      return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor">
          <rect width="100" height="100" rx="20" fill="#000" stroke="#27272a" strokeWidth="3" />
          {/* Devil Horns + Play Icon */}
          <path
            d="M32 28 C 30 18, 22 14, 20 12 C 22 24, 28 32, 34 36"
            fill="none"
            stroke="#ef4444"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M68 28 C 70 18, 78 14, 80 12 C 78 24, 72 32, 66 36"
            fill="none"
            stroke="#ef4444"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polygon points="40,35 70,52 40,69" fill="#ffffff" />
          <text
            x="50"
            y="88"
            fontSize="10"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            letterSpacing="1"
            fill="#ef4444"
          >
            DAEMONS VIDS
          </text>
        </svg>
      );
  }
}

export function Clients() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedClient, setSelectedClient] = useState<string | null>("oktagon-mma");
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);

  const categories = [
    "All",
    "Combat Sports & Broadcast",
    "Top Creators & Streaming",
    "Esports & Gaming",
    "Podcasts & Media",
    "Television & Broadcasting",
    "Fitness & Brands",
  ];

  const filteredClients =
    activeCategory === "All"
      ? content.clients
      : content.clients.filter(
          (c) =>
            c.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
            (activeCategory.includes("Creators") && c.category.includes("Creators")) ||
            (activeCategory.includes("Combat") && c.category.includes("Combat")) ||
            (activeCategory.includes("Esports") && (c.category.includes("Esports") || c.category.includes("Gaming"))) ||
            (activeCategory.includes("Fitness") && (c.category.includes("Fitness") || c.category.includes("Tournaments") || c.category.includes("Brands"))) ||
            (activeCategory.includes("Podcasts") && (c.category.includes("Podcasts") || c.category.includes("Media")))
        );

  const activeClientData = content.clients.find((c) => c.id === selectedClient) || content.clients[0];

  const handleSelectClient = (id: string) => {
    setSelectedClient(id);
    setIsPlayingVideo(false);
  };

  return (
    <section id="clients" className="py-24 relative bg-neutral-950 border-t border-b border-white/5 overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Proven Track Record & Partnerships</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Clients & Past Collaborations
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Trusted by premier television networks, Europe's largest combat sports promotion, world-class athletic championships, and multi-million subscriber creators across Europe and North America.
          </p>
        </motion.div>

        {/* Infinite Logo Ribbon / Marquee Bar */}
        <div className="mb-16 relative">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 text-center mb-6">
            Featured Brand & Creator Network • Click Any Logo to Inspect
          </div>

          <div className="relative w-full overflow-hidden py-4 mask-gradient-x border-y border-white/5 bg-black/40 backdrop-blur-sm rounded-2xl">
            {/* Left/Right Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee gap-6 items-center">
              {/* Loop client logos twice for seamless infinite scroll */}
              {[...content.clients, ...content.clients].map((client, idx) => (
                <button
                  key={`${client.id}-${idx}`}
                  onClick={() => handleSelectClient(client.id)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all duration-300 group whitespace-nowrap ${
                    selectedClient === client.id
                      ? "bg-white/15 border-white/30 text-white shadow-lg shadow-white/5 scale-105"
                      : "bg-white/[0.03] border-white/5 text-neutral-400 hover:text-white hover:bg-white/[0.08] hover:border-white/15"
                  }`}
                >
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                    <ClientLogo id={client.id} className="w-7 h-7 transition-transform group-hover:scale-110" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-neutral-200 group-hover:text-white leading-tight">
                      {client.name}
                    </div>
                    <div className="text-[10px] text-neutral-500 font-mono">
                      {client.category.split("&")[0].trim()}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Deep-Dive Split: Active Client Feature + Logo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Focused Collaboration Spotlight */}
          <motion.div
            key={activeClientData.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-neutral-900/90 border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between min-h-[480px] shadow-2xl"
          >
            {/* Background image if available */}
            {activeClientData.image && (
              <div className="absolute inset-0 z-0">
                <img 
                  src={activeClientData.image} 
                  alt={activeClientData.name} 
                  className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/80 to-neutral-900/40" />
              </div>
            )}
            
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none z-0">
              <ClientLogo id={activeClientData.id} className="w-64 h-64" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-black border border-white/15 p-2.5 flex items-center justify-center shadow-md">
                  <ClientLogo id={activeClientData.id} className="w-full h-full" active />
                </div>
                <div className="flex items-center gap-2">
                  {activeClientData.youtubeId && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[11px] font-mono text-red-400">
                      <Play className="w-3 h-3 fill-red-400" />
                      <span>Video Ready</span>
                    </span>
                  )}
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-mono text-neutral-300">
                    {activeClientData.year}
                  </span>
                </div>
              </div>

              <div className="mb-2">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider font-mono">
                  {activeClientData.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {activeClientData.name}
                </h3>
                <p className="text-sm font-medium text-neutral-300 mt-1">
                  {activeClientData.role}
                </p>
              </div>

              {/* Embedded Video Showcase in Spotlight (if video available and requested) */}
              {activeClientData.youtubeId && (
                <div className="my-4">
                  {isPlayingVideo ? (
                    <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden bg-black border border-white/15 shadow-xl">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${activeClientData.youtubeId}?autoplay=1`}
                        title={activeClientData.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <button
                        onClick={() => setIsPlayingVideo(false)}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs flex items-center gap-1 border border-white/20 transition-all z-20"
                        title="Close player"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsPlayingVideo(true)}
                      className="w-full flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-red-950/40 via-neutral-900 to-black border border-red-500/30 hover:border-red-500/60 hover:bg-red-900/20 transition-all group text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform flex-shrink-0">
                          <Play className="w-4 h-4 fill-white translate-x-0.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-red-300 transition-colors">
                            Watch Collaboration Video
                          </div>
                          <div className="text-[10px] text-neutral-400 font-mono">
                            Embedded YouTube Showcase
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 group-hover:text-white transition-colors flex items-center gap-1">
                        Play <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  )}
                </div>
              )}

              {/* Key Highlight Banner */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/5 my-4 flex items-start gap-3">
                <Trophy className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-medium">
                  {activeClientData.highlight}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Key Deliverables & Scope</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed bg-white/[0.02] p-3 rounded-lg border border-white/5">
                  {activeClientData.deliverables}
                </p>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Direct Collaboration</span>
              </span>
              <a
                href="#projects"
                className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-amber-400 transition-colors"
              >
                <span>View all reels</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Full Client Grid with Filter Tabs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-white text-black font-bold shadow-sm"
                      : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid of All Client Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {filteredClients.map((client) => {
                const isSelected = selectedClient === client.id;
                return (
                  <motion.button
                    key={client.id}
                    id={`client-card-${client.id}`}
                    onClick={() => handleSelectClient(client.id)}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className={`text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[148px] group ${
                      isSelected
                        ? "bg-white/10 border-white/40 ring-2 ring-white/20 shadow-xl"
                        : "bg-neutral-900/60 border-white/5 hover:border-white/20 hover:bg-neutral-900"
                    }`}
                  >
                    <div className="flex items-start justify-between w-full mb-3">
                      <div className="w-12 h-12 rounded-xl bg-black/60 border border-white/10 p-2 flex items-center justify-center group-hover:border-white/20 transition-colors">
                        <ClientLogo id={client.id} className="w-full h-full" active={isSelected} />
                      </div>
                      <div className="flex items-center gap-1">
                        {client.youtubeId && (
                          <span className="p-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20" title="Has attached video">
                            <Play className="w-2.5 h-2.5 fill-red-400" />
                          </span>
                        )}
                        {client.featured && (
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                            Top
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                        {client.name}
                      </h4>
                      <p className="text-[11px] text-neutral-400 truncate mt-0.5">
                        {client.role}
                      </p>
                    </div>

                    {/* Active Bottom Glow Accent */}
                    {isSelected && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-red-500 to-pink-500" />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5 text-center">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-lg font-black text-white font-mono">10B+</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">Cumulative Creator Views</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-lg font-black text-white font-mono">50+</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">Arena Spectacles Filmed</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-lg font-black text-white font-mono">100%</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">Rapid Turnaround Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

