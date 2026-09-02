import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { content } from "../content";
import { 
  ShoppingBag, 
  Play, 
  ExternalLink, 
  Instagram, 
  Crown, 
  Check, 
  Copy, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Maximize2,
  Sparkles,
  Film,
  Flame,
  Shirt
} from "lucide-react";

export function FashionMerch() {
  const reels = content.fashionMerchReels;
  const [selectedReelId, setSelectedReelId] = useState<string>(reels[0].id);
  const [activeTab, setActiveTab] = useState<"top3" | "all" | "store" | "main">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [modalReelId, setModalReelId] = useState<string | null>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);

  const activeReel = reels.find((r) => r.id === selectedReelId) || reels[0];
  const currentIndex = reels.findIndex((r) => r.id === selectedReelId);

  const filteredReels = reels.filter((reel) => {
    if (activeTab === "top3") return reel.isBest;
    if (activeTab === "store") return reel.account.includes("store");
    if (activeTab === "main") return !reel.account.includes("store");
    return true;
  });

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + reels.length) % reels.length;
    setSelectedReelId(reels[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % reels.length;
    setSelectedReelId(reels[nextIndex].id);
  };

  const scrollFilmstrip = (direction: "left" | "right") => {
    if (filmstripRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      filmstripRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="fashion-merch" className="py-20 relative bg-neutral-950 border-t border-b border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Compact Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 mb-3">
              <ShoppingBag className="w-3.5 h-3.5 text-red-400" />
              <span>Fashion & Merch Store Commercials</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Apparel & Merch <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-white">Showreel</span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
              High-converting vertical commercials and streetwear lookbooks crafted for OKTAGON Store and apparel campaigns.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-md self-start md:self-auto">
            {[
              { id: "all", label: `All (${reels.length})` },
              { id: "top3", label: "👑 Top 3 Picks" },
              { id: "store", label: "@oktagonmma_store" },
              { id: "main", label: "@oktagonmma" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* UNIFIED COMPACT CINEMA SUITE */}
        <div className="rounded-3xl bg-neutral-900/60 border border-white/10 p-6 sm:p-8 backdrop-blur-md shadow-2xl mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: 9:16 Vertical Cinema Player */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] relative rounded-3xl p-2.5 bg-black/60 border border-white/15 shadow-2xl group">
                
                {/* Embed Top Action Bar */}
                <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-neutral-900/80 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                      9:16 Cinema Player
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleCopyLink(activeReel.url, activeReel.id)}
                      className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="Copy Reel Link"
                    >
                      {copiedId === activeReel.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <a
                      href={activeReel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-md text-neutral-400 hover:text-pink-400 hover:bg-white/10 transition-colors"
                      title="Open on Instagram"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setModalReelId(activeReel.id)}
                      className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Vertical Video Embed */}
                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-inner">
                  <iframe
                    key={activeReel.id}
                    src={`https://www.instagram.com/reel/${activeReel.id}/embed/`}
                    title={activeReel.title}
                    className="w-full h-full border-0 absolute inset-0 bg-neutral-950"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    scrolling="no"
                  />
                </div>

                {/* Player Bottom Prev/Next Controls */}
                <div className="flex items-center justify-between mt-2.5 px-1">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-300 hover:text-white transition-all"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Prev</span>
                  </button>

                  <span className="text-[11px] font-mono text-neutral-400">
                    {currentIndex + 1} / {reels.length}
                  </span>

                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-300 hover:text-white transition-all"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Active Reel Metadata + Interactive Playlist Deck */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              
              {/* Active Item Details */}
              <div className="mb-6 p-6 rounded-2xl bg-black/40 border border-white/5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {activeReel.isBest && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      <Crown className="w-3 h-3 text-amber-400" />
                      Featured Pick #{activeReel.rank}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-500/10 text-pink-300 border border-pink-500/20">
                    <Instagram className="w-3 h-3 text-pink-400" />
                    {activeReel.account}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-neutral-300 border border-white/10">
                    {activeReel.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  {activeReel.title}
                </h3>

                <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                  {activeReel.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={activeReel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs font-bold transition-all shadow-md shadow-red-600/20"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Watch on Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href="https://www.instagram.com/oktagonmma_store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-red-400" />
                    <span>Visit @oktagonmma_store</span>
                  </a>
                </div>
              </div>

              {/* Scrollable Compact Playlist (All items unified) */}
              <div>
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-red-400" />
                    Commercial Tracklist ({filteredReels.length} Cuts)
                  </span>
                  <span className="text-[11px] text-neutral-500">Click any cut to play</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[250px] overflow-y-auto pr-1.5 custom-scrollbar">
                  {filteredReels.map((reel) => {
                    const isSelected = selectedReelId === reel.id;
                    return (
                      <button
                        key={reel.id}
                        onClick={() => setSelectedReelId(reel.id)}
                        className={`flex items-center justify-between p-2.5 rounded-xl text-left transition-all border ${
                          isSelected
                            ? "bg-red-950/50 border-red-500 text-white shadow-sm ring-1 ring-red-500/50"
                            : "bg-black/30 border-white/5 text-neutral-300 hover:bg-neutral-800/60 hover:border-white/15"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? "bg-red-500 text-white" : "bg-white/5 text-neutral-400"}`}>
                            <Play className="w-2.5 h-2.5 fill-current" />
                          </div>
                          <div className="truncate">
                            <p className="text-xs font-semibold truncate">{reel.title}</p>
                            <p className="text-[10px] text-neutral-500 truncate">{reel.account} • {reel.category}</p>
                          </div>
                        </div>

                        {reel.isBest && (
                          <Crown className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM HORIZONTAL FILMSTRIP CAROUSEL (Fast Visual Scroller) */}
        <div className="relative">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Quick Visual Filmstrip
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollFilmstrip("left")}
                className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white transition-colors"
                title="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollFilmstrip("right")}
                className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white transition-colors"
                title="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={filmstripRef}
            className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none snap-x scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reels.map((reel) => {
              const isSelected = selectedReelId === reel.id;
              return (
                <div
                  key={reel.id}
                  onClick={() => setSelectedReelId(reel.id)}
                  className={`snap-start shrink-0 w-48 p-3 rounded-2xl cursor-pointer transition-all duration-200 border ${
                    isSelected
                      ? "bg-neutral-900 border-red-500 ring-1 ring-red-500/50 shadow-lg shadow-red-500/10"
                      : "bg-neutral-900/50 border-white/10 hover:border-white/25 hover:bg-neutral-900"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-neutral-400 truncate">
                      {reel.account}
                    </span>
                    {reel.isBest && (
                      <Crown className="w-3 h-3 text-amber-400 shrink-0" />
                    )}
                  </div>

                  <div className="relative aspect-video rounded-xl bg-black/60 border border-white/5 mb-2 flex items-center justify-center overflow-hidden group">
                    <Instagram className="w-5 h-5 text-pink-500/80 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-1.5">
                      <span className="text-[9px] font-mono text-neutral-400">{reel.category}</span>
                      <Play className={`w-3 h-3 ${isSelected ? "text-red-400 fill-current" : "text-white"}`} />
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-white truncate">{reel.title}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {modalReelId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-[420px] aspect-[9/16] bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            >
              <button
                onClick={() => setModalReelId(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <iframe
                src={`https://www.instagram.com/reel/${modalReelId}/embed/`}
                title="Instagram Reel Modal"
                className="w-full h-full border-0 absolute inset-0 bg-black"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
                scrolling="no"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
