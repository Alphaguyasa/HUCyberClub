"use client";

import React, { useState } from 'react';
import { Spectral } from 'next/font/google';
import { ImageSwiper } from "@/components/image-swiper";

const spectral = Spectral({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const missions = [
  {
    title: "Education and Awareness",
    description: "We aim to provide comprehensive training and resources to enhance knowledge in cybersecurity, ensuring our members are well-equipped to face modern threats.",
  },
  {
    title: "Community Engagement",
    description: "We believe in the power of collaboration, fostering a supportive environment where members can learn, share, and grow together.",
  },
  {
    title: "Hands-On Practice",
    description: "Through CTF competitions, workshops, and real-world simulations, we ensure our members gain practical experience in ethical hacking, network defense, and digital forensics.",
  },
];

const imageUrls = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=800&fit=crop&q=80,https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop&q=80,https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=800&fit=crop&q=80";

export default function OurMission() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalMissions = missions.length;

  const handleSwipe = () => {
    setActiveIndex(prev => (prev + 1) % totalMissions);
  };

  return (
    <section className={`w-full py-20 px-6 ${spectral.className}`} style={{ backgroundColor: '#FFFEF0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Single layout: swiper + text */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Swiper */}
          <div className="flex-shrink-0 relative">
            <ImageSwiper
              images={imageUrls}
              cardWidth={420}
              cardHeight={540}
              onSwipe={handleSwipe}
            />
            {/* Swipe hint */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 text-white px-4 py-2 rounded-full pointer-events-none" style={{ fontSize: '13px' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Swipe to explore
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Text Content - changes with active index */}
          <div className="flex-1 text-center md:text-left">
            <p className="mb-3 font-medium" style={{ fontSize: '15px', color: '#C9C73C' }}>
              {activeIndex + 1} / {missions.length}
            </p>
            <h3
              key={activeIndex}
              className="mb-6 transition-all duration-500"
              style={{ fontSize: '36px', color: '#1D2023', fontWeight: 400 }}
            >
              {missions[activeIndex].title}
            </h3>
            <p
              key={`desc-${activeIndex}`}
              className="leading-relaxed mb-8 transition-all duration-500"
              style={{ fontSize: '18px', color: '#454545' }}
            >
              {missions[activeIndex].description}
            </p>

            {/* Dot indicators */}
            <div className="flex gap-3 justify-center md:justify-start">
              {missions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: i === activeIndex ? '#C9C73C' : '#1D2023', opacity: i === activeIndex ? 1 : 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
