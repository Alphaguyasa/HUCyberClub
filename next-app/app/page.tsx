import React from 'react';
import InteractiveHero from "@/components/hero-section-nexus";
import ElegantCarousel from "@/components/elegant-carousel";
import TeamSection from "@/components/team";

export default function Page() {
  return (
    <div>
      <InteractiveHero />
      <ElegantCarousel />
      <TeamSection />
    </div>
  );
}
