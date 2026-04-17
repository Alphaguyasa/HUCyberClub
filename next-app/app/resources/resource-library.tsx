"use client";

import React from 'react';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function ResourceLibrary() {
  return (
    <section className={`w-full relative ${spectral.className}`} style={{ minHeight: '500px' }}>
      {/* Background Image */}
      <img
        src="/images/library.jpg"
        alt="Resource Library"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-20 md:py-28 text-center">
        <h2 className="mb-6" style={{ fontSize: '36px', color: '#ffffff', fontWeight: 400 }}>
          Access Our Full Resource Library
        </h2>
        <p className="mb-10 leading-relaxed" style={{ fontSize: '18px', color: '#f0f0f0' }}>
          Join us to gain full access to our extensive library of tutorials, guides, and tools designed to enhance your cybersecurity skills. Log in to unlock a world of knowledge and community support.
        </p>
        <a
          href="/login"
          className="font-medium transition-opacity hover:opacity-90 shadow-lg px-10 py-4 inline-block"
          style={{ backgroundColor: '#C9C73C', color: '#111111', borderRadius: '9999px', fontSize: '18px' }}
        >
          Log In
        </a>
      </div>
    </section>
  );
}
