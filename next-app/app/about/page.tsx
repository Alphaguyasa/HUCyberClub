"use client";

import { useEffect, useState } from "react";
import OurMission from "./our-mission";
import KeyObjectives from "./key-objectives";
import MeetOurTeam from "./meet-our-team";
import { Component as Footer } from "@/components/footer-taped-design";
import Navbar from "@/components/navbar";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative ${spectral.className}`}>
      <Navbar activeItem="About" transparent={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <img src="/images/hu-back.jpg" alt="Haramaya University" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="mb-6" style={{ fontSize: 'clamp(24px, 4vw, 42px)', color: '#ffffff', fontWeight: 400 }}>
            Welcome to the Haramaya University Cyber Security Club
          </h1>
          <p style={{ fontSize: 'clamp(14px, 2vw, 18px)', color: '#f0f0f0', fontWeight: 300 }}>
            Empowering the next generation of cybersecurity professionals
          </p>
        </div>
      </section>

      <OurMission />
      <KeyObjectives />
      <MeetOurTeam />
      <Footer />
    </div>
  );
}
