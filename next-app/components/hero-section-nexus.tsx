import React from 'react';
import { Spectral } from 'next/font/google';

const spectral = Spectral({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function InteractiveHero() {
  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#FEFB8F' }}>
      {/* Header / Navigation */}
      <header className="w-full shadow-sm sticky top-0 z-50" style={{ backgroundColor: '#FEFB8F' }}>
        <div className="max-w-full px-8 py-6 flex items-center justify-between">
          {/* Left - Branding */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/cyberc.jpg" 
              alt="Haramaya University Cyber Security Club Logo" 
              className="w-12 h-12 rounded-lg shadow-md object-cover"
            />
            <span className="font-semibold text-base" style={{ color: '#111111' }}>Haramaya University Cyber Security Club</span>
          </div>

          {/* Center - Navigation */}
          <nav className="hidden lg:flex gap-6">
            <a href="#home" className="font-medium pb-1 transition-all" style={{ color: '#111111', borderBottom: '2px solid #111111', fontSize: '15px' }}>Home</a>
            <a href="/about" className="pb-1 transition-all hover:opacity-70" style={{ color: '#111111', fontSize: '15px' }}>About</a>
            <a href="/resources" className="pb-1 transition-all hover:opacity-70" style={{ color: '#111111', fontSize: '15px' }}>Resources</a>
            <a href="/events" className="pb-1 transition-all hover:opacity-70" style={{ color: '#111111', fontSize: '15px' }}>Events</a>
            <a href="#contact" className="pb-1 transition-all hover:opacity-70" style={{ color: '#111111', fontSize: '15px' }}>Contact</a>
          </nav>

          {/* Right - Social & CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80" style={{ backgroundColor: '#111111' }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80" style={{ backgroundColor: '#111111' }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80" style={{ backgroundColor: '#111111' }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
            <button className="text-white px-6 py-2 font-medium transition-opacity hover:opacity-90" style={{ backgroundColor: '#d2d076', borderRadius: '9999px', fontSize: '16px' }}>
              Join Us
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full px-6 py-20 text-center min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto">
          {/* Headlines */}
          <p className="uppercase tracking-widest mb-6 font-medium" style={{ color: '#111111', fontSize: '20px' }}>
            Empowering Cyber Defenders
          </p>
          <h1 className="font-bold mb-8 leading-tight whitespace-nowrap" style={{ color: '#111111', fontSize: '56px' }}>
            Join Us in Securing the Digital World
          </h1>
          <p className="mx-auto mb-12 leading-relaxed" style={{ color: '#111111', fontSize: '20px', maxWidth: '700px' }}>
            Our club focuses on enhancing cybersecurity skills through learning and hands-on practice.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-5 justify-center mb-20">
            <button className="text-white px-10 py-4 font-medium transition-opacity hover:opacity-90 shadow-lg" style={{ backgroundColor: '#111111', borderRadius: '9999px', fontSize: '18px' }}>
              Contact Us
            </button>
            <button className="px-10 py-4 font-medium transition-opacity hover:opacity-90" style={{ backgroundColor: 'transparent', border: '2px solid #111111', color: '#111111', borderRadius: '9999px', fontSize: '18px' }}>
              Learn more
            </button>
          </div>

          {/* Featured Image */}
          <div className="w-full mx-auto mb-10">
            <img 
              src="/images/image.png" 
              alt="Cybersecurity illustration" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Caption */}
          <p className="font-semibold mt-8" style={{ color: '#111111', fontSize: '24px' }}>
            Fostering a Community of Cybersecurity Enthusiasts.
          </p>
        </div>
      </section>
    </div>
  );
}
