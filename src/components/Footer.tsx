import { content } from "../content";
import { Instagram, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-black text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} {content.hero.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={content.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400 hover:text-white hover:border-white/20 transition-all font-mono"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>@daemonlive</span>
          </a>
          <a
            href={`mailto:${content.contact.email}`}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`https://${content.contact.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all"
            aria-label="Website"
          >
            <Globe className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
