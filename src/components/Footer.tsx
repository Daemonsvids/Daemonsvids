import { content } from "../content";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black text-center">
      <p className="text-neutral-500 text-sm">
        © {new Date().getFullYear()} {content.hero.name}. All rights reserved.
      </p>
    </footer>
  );
}
