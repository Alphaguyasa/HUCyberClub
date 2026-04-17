import React from 'react';
import InteractiveHero from "@/components/hero-section-nexus";
import ElegantCarousel from "@/components/elegant-carousel";
import TeamSection from "@/components/team";
import UpcomingEvents from "@/components/upcoming-events";
import { Component as Footer } from "@/components/footer-taped-design";

export default function Page() {
  return (
    <div>
      <InteractiveHero />
      <ElegantCarousel />
      <TeamSection />
      <UpcomingEvents />
      <Footer />
    </div>
  );
}
