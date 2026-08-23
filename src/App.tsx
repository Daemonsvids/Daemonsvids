/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stack } from "./components/Stack";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30 selection:text-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
