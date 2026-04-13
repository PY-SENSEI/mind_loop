/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SearchChangedSection } from "./components/SearchChangedSection";
import { MissionSection } from "./components/MissionSection";
import { SolutionSection } from "./components/SolutionSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground/20">
      <Navbar />
      <HeroSection />
      <SearchChangedSection />
      <MissionSection />
      <SolutionSection />
      <CTASection />
      <Footer />
    </main>
  );
}
