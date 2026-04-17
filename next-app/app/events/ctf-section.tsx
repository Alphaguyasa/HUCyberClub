"use client";

import React from 'react';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const ctfEvents = [
  {
    image: "/images/activectf.jpg",
    title: "Monthly CTF Challenge",
    description: "Join our monthly CTF challenge where members can compete against each other and solve real-world cybersecurity problems.",
    button: "Join Challenge",
  },
  {
    image: "/images/alphactf.jpg",
    title: "Regional CTF Event",
    description: "Our club will be hosting a regional CTF event, open to teams from various universities. This is a fantastic opportunity to showcase your skills and collaborate with peers.",
    button: "Register Now",
  },
  {
    image: "/images/awardctf.jpg",
    title: "Online CTF Series",
    description: "Participate in our online CTF series that allows you to compete from anywhere. The series will feature a variety of challenges catering to all skill levels.",
    button: "Compete Online",
  },
];

export default function CTFSection() {
  return (
    <section className={`w-full py-20 px-6 ${spectral.className}`} style={{ backgroundColor: '#FFFEF0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 font-light" style={{ fontSize: '36px', color: '#1D2023' }}>
            Capture The Flag Competitions
          </h2>
          <p className="font-light" style={{ fontSize: '18px', color: '#C9C73C' }}>
            Participate in exciting CTF competitions to test your skills and earn recognition within the cybersecurity community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctfEvents.map((event, index) => (
            <div
              key={index}
              className="flex flex-col p-3"
              style={{ border: '1.5px solid rgba(29, 32, 35, 0.2)' }}
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="mb-3 font-bold" style={{ fontSize: '20px', color: '#1D2023' }}>
                  {event.title}
                </h3>
                <p className="mb-6 leading-relaxed font-light flex-1" style={{ fontSize: '15px', color: '#454545' }}>
                  {event.description}
                </p>
                <button
                  className="transition-opacity hover:opacity-90 px-6 py-3 self-start"
                  style={{ backgroundColor: '#C9C73C', color: '#1D2023', borderRadius: '9999px', fontSize: '15px', fontWeight: 500 }}
                >
                  {event.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
