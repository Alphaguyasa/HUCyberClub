"use client";

import React from 'react';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const workshopData = {
  heading: "Skill Enhancement Workshops",
  demoUrl: "#",
  items: [
    {
      id: "item-1",
      title: "Introduction to Ethical Hacking",
      summary: "Dive into the world of ethical hacking and learn the foundational techniques used to secure systems. This workshop will cover tools and methodologies essential for aspiring ethical hackers.",
      url: "#",
      image: "/images/skill1.png",
    },
    {
      id: "item-2",
      title: "Malware Analysis Basics",
      summary: "Explore the fundamentals of malware analysis in this hands-on workshop. Participants will learn how to dissect malware samples and understand their behavior in a controlled environment.",
      url: "#",
      image: "/images/skill2.png",
    },
    {
      id: "item-3",
      title: "Network Security Fundamentals",
      summary: "This workshop will introduce key concepts in network security, including firewalls, intrusion detection systems, and best practices for securing networks. Perfect for beginners and those looking to refresh their skills.",
      url: "#",
      image: "/images/skill3.png",
    },
  ],
};

export default function SkillWorkshops() {
  return (
    <section id="events" className={`w-full py-20 px-6 ${spectral.className}`} style={{ backgroundColor: '#FFFEF0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 font-light" style={{ fontSize: '36px', color: '#1D2023' }}>
            Skill Enhancement Workshops
          </h2>
          <p className="font-light" style={{ fontSize: '18px', color: '#C9C73C' }}>
            Join us for a series of engaging workshops designed to sharpen your cybersecurity skills and knowledge.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-16">
          {workshopData.items.map((item, index) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center gap-12">
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img src={item.image} alt={item.title} className="w-full h-auto rounded-2xl shadow-xl object-cover" />
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="mb-4 font-bold" style={{ fontSize: '20px', color: '#1D2023' }}>
                  {item.title}
                </h3>
                <p className="mb-8 leading-relaxed font-light" style={{ fontSize: '18px', color: '#454545' }}>
                  {item.summary}
                </p>
                <button
                  className="transition-opacity hover:opacity-90 px-8 py-3"
                  style={{ backgroundColor: '#C9C73C', color: '#1D2023', borderRadius: '9999px', fontSize: '16px', fontWeight: 400 }}
                >
                  {index === 0 ? 'Enroll Now' : index === 1 ? 'Sign Up' : 'Join Us'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
