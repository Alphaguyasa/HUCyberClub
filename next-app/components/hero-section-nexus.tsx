"use client";
import React, { useEffect, useState } from 'react';
import { Spectral } from 'next/font/google';
import Navbar from '@/components/navbar';

const spectral = Spectral({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function InteractiveHero() {
  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: 'rgb(80, 85, 92)' }}>
      <Navbar activeItem="Home" transparent={true} />

      {/* Hero Section */}
      <section id="main-content" className="w-full px-6 py-20 text-center min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Background Video - hidden on mobile for performance */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 hidden sm:block"
          aria-hidden="true"
        >
          <source src="/images/5377517-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        {/* Fallback background for mobile */}
        <div className="absolute inset-0 z-0 sm:hidden" style={{ backgroundColor: 'rgb(80, 85, 92)' }} />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }} />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Headlines */}
          <p className="uppercase tracking-widest mb-6 font-medium" style={{ color: '#ffffff', fontSize: 'clamp(14px, 2vw, 20px)' }}>
            Empowering Cyber Defenders
          </p>
          <h1 className="font-bold mb-8 leading-tight" style={{ color: '#ffffff', fontSize: 'clamp(28px, 5vw, 56px)' }}>
            Join Us in Securing the Digital World
          </h1>
          <p className="mx-auto mb-12 leading-relaxed" style={{ color: '#f0f0f0', fontSize: 'clamp(15px, 2vw, 20px)', maxWidth: '700px' }}>
            Our club focuses on enhancing cybersecurity skills through learning and hands-on practice.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a href="/contact" className="text-white px-8 py-3 font-medium transition-opacity hover:opacity-90 shadow-lg text-center" style={{ backgroundColor: '#111111', borderRadius: '9999px', fontSize: 'clamp(15px, 2vw, 18px)' }}>
              Contact Us
            </a>
            <a href="/about" className="px-8 py-3 font-medium transition-opacity hover:opacity-90 text-center" style={{ backgroundColor: 'transparent', border: '2px solid #ffffff', color: '#ffffff', borderRadius: '9999px', fontSize: 'clamp(15px, 2vw, 18px)' }}>
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
