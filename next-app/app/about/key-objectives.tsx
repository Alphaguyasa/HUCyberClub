"use client";

import React from 'react';
import { Spectral } from 'next/font/google';
import Component from '@/components/linear-card';

const spectral = Spectral({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const items = [
  {
    id: 1,
    url: { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80' },
    title: 'Promote Cybersecurity Education',
    description: 'To elevate awareness and understanding of cybersecurity principles among students and the wider community. We provide comprehensive training, workshops, and resources to ensure our members are well-equipped to face modern digital threats and challenges.',
    tags: ['Education', 'Awareness', 'Training', 'Community', 'Skills'],
  },
  {
    id: 2,
    url: { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&q=80' },
    title: 'Host Competitions and Workshops',
    description: 'Organizing regular events that challenge our members and help them build practical skills in a competitive environment. From CTF competitions to hands-on workshops, we create opportunities for members to test and grow their cybersecurity expertise.',
    tags: ['CTF', 'Competitions', 'Workshops', 'Practice', 'Events'],
  },
  {
    id: 3,
    url: { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80' },
    title: 'Build a Collaborative Community',
    description: 'To create a network of cybersecurity enthusiasts who support each other in learning and professional development. We foster a supportive environment where members can share knowledge, collaborate on projects, and grow together as future cybersecurity professionals.',
    tags: ['Community', 'Collaboration', 'Network', 'Growth', 'Support'],
  },
];

export default function KeyObjectives() {
  return (
    <section className={`w-full py-20 px-6 ${spectral.className}`} style={{ backgroundColor: '#FFFEF0' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: '36px', color: '#1D2023', fontWeight: 400 }}>
            Our Key Objectives
          </h2>
          <p style={{ fontSize: '18px', color: '#C9C73C' }}>
            Driving excellence in cybersecurity education and practice
          </p>
        </div>

        <Component items={items} />
      </div>
    </section>
  );
}
