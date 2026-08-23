import { content } from "../content";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-slate-950 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} {content.hero.name}. All rights reserved.
      </p>
    </footer>
  );
}
