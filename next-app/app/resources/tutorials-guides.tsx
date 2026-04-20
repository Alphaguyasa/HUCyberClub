"use client";

import React from 'react';
import { Spectral } from 'next/font/google';
import { DestinationCard } from "@/components/card-21";

const spectral = Spectral({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const tutorials = [
  {
    imageUrl: "/images/re1.jpg",
    location: "Understanding Cybersecurity Fundamentals",
    flag: "",
    stats: "April 15, 2026",
    href: "#",
    themeColor: "220 70% 20%",
  },
  {
    imageUrl: "/images/res2.jpg",
    location: "Getting Started with Penetration Testing",
    flag: "",
    stats: "April 15, 2026",
    href: "#",
    themeColor: "150 50% 20%",
  },
  {
    imageUrl: "/images/res3.jpg",
    location: "Navigating the Cybersecurity Landscape",
    flag: "",
    stats: "April 15, 2026",
    href: "#",
    themeColor: "270 50% 25%",
  },
];

export default function TutorialsGuides() {
  return (
    <section id="resources" className={`w-full py-20 px-6 ${spectral.className}`} style={{ backgroundColor: '#FFFEF0' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: '36px', color: '#1D2023', fontWeight: 400 }}>
            In-Depth Tutorials and Guides
          </h2>
          <p style={{ fontSize: '18px', color: '#C9C73C' }}>
            Learn from industry experts with our comprehensive tutorials and guides.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-10 flex-wrap">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="w-full max-w-[320px] h-[450px]">
              <DestinationCard
                imageUrl={tutorial.imageUrl}
                location={tutorial.location}
                flag={tutorial.flag}
                stats={tutorial.stats}
                href={tutorial.href}
                themeColor={tutorial.themeColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
