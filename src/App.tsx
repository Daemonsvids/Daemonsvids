import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FashionMerch } from "./components/FashionMerch";
import { Clients } from "./components/Clients";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-50 selection:bg-white/30 selection:text-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Clients />
        <FashionMerch />
        <Projects />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

