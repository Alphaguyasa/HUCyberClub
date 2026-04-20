"use client";

import { Spectral } from "next/font/google";
import Navbar from "@/components/navbar";
import { Component as Footer } from "@/components/footer-taped-design";
import Link from "next/link";
import Example from "@/components/form-1";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const magazineRows = [
  {
    large: { image: "/images/library.jpg", title: "Comprehensive PDFs", description: "Explore a range of in-depth documents covering essential cyber security topics.", button: "View PDFs", href: "/resources/library" },
    small: { image: "/images/resources.jpg", title: "Essential Tools", description: "Access a curated collection of tools designed to enhance your cyber security practices.", button: "Browse Tools", href: "/resources" },
    largeLeft: true,
  },
  {
    large: { image: "/images/hackatoncompete.jpg", title: "CTF Write-ups", description: "Read detailed write-ups from past CTF competitions to learn winning strategies and techniques.", button: "Read Write-ups", href: "#" },
    small: { image: "/images/re1.jpg", title: "Video Tutorials", description: "Watch step-by-step video guides on penetration testing, forensics, and more.", button: "Watch Now", href: "#" },
    largeLeft: false,
  },
];

const bottomCards = [
  { image: "/images/enhanceyourskills.jpg", title: "Practice Labs",        description: "Hands-on virtual labs to sharpen your skills in a safe, controlled environment.", button: "Start Lab",        href: "#" },
  { image: "/images/res2.jpg",              title: "Cheat Sheets",         description: "Quick-reference cheat sheets for common tools, commands, and techniques.",        button: "View Sheets",      href: "#" },
  { image: "/images/res3.jpg",              title: "Community Forum",      description: "Connect with fellow members, ask questions, and share your knowledge.",           button: "Join Discussion",  href: "#" },
  { image: "/images/adminother1.png",       title: "Certification Guides", description: "Structured study paths for CEH, OSCP, CompTIA Security+ and more.",             button: "Start Learning",   href: "#" },
];

const downloads = [
  { image: "/images/re1.jpg",           title: "Network Security Fundamentals", date: "Downloaded Jan 12, 2025", button: "View Again",     description: "You downloaded this comprehensive resource that covers the basics of network security, including protocols, threats, and protective measures. A must-have for any aspiring cyber security professional." },
  { image: "/images/res2.jpg",          title: "Incident Response Toolkit",     date: "Downloaded Jan 18, 2025", button: "Access Toolkit", description: "This toolkit provides various templates and guidelines essential for effective incident response. You downloaded it to ensure you are prepared for any security incidents." },
  { image: "/images/hackatoncompete.jpg", title: "Malware Analysis Techniques", date: "Downloaded Jan 22, 2025", button: "Read More",      description: "You downloaded this insightful resource that explores various techniques used in analyzing malware. A valuable guide for enhancing your analytical skills in cyber security." },
];

export default function ResourcesHubPage() {
  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <Navbar activeItem="Resources" transparent={true} />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        <img src="/images/resources.jpg" alt="Resources" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.65)' }} />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(201,199,60,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,199,60,0.4) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="uppercase tracking-widest mb-4 font-medium" style={{ color: '#C9C73C', fontSize: '13px' }}>Member Resources</p>
          <h1 className="font-light mb-4" style={{ fontSize: 'clamp(28px, 5vw, 52px)', color: '#ffffff' }}>Your Learning Hub</h1>
          <p className="font-light" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)' }}>
            Everything you need to grow as a cybersecurity professional — in one place.
          </p>
        </div>
      </section>

      {/* Magazine Layout */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">

        {magazineRows.map((row, ri) => (
          <div key={ri} className={`flex flex-col md:flex-row gap-6 ${!row.largeLeft ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-[60%] flex flex-col">
              <div className="overflow-hidden" style={{ height: '380px' }}>
                <img src={row.large.image} alt={row.large.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="pt-5 pb-2">
                <h3 className="font-semibold mb-2" style={{ fontSize: '22px', color: '#F6F8FA' }}>{row.large.title}</h3>
                <p className="font-light mb-4 leading-relaxed" style={{ fontSize: '15px', color: 'rgba(246,248,250,0.65)' }}>{row.large.description}</p>
                <Link href={row.large.href} className="px-7 py-2.5 font-medium transition-opacity hover:opacity-90 inline-block"
                  style={{ backgroundColor: '#C9C73C', color: '#111111', borderRadius: '9999px', fontSize: '14px' }}>{row.large.button}</Link>
              </div>
            </div>
            <div className="md:w-[40%] flex flex-col">
              <div className="overflow-hidden" style={{ height: '380px' }}>
                <img src={row.small.image} alt={row.small.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="pt-5 pb-2">
                <h3 className="font-semibold mb-2" style={{ fontSize: '20px', color: '#F6F8FA' }}>{row.small.title}</h3>
                <p className="font-light mb-4 leading-relaxed" style={{ fontSize: '14px', color: 'rgba(246,248,250,0.65)' }}>{row.small.description}</p>
                <Link href={row.small.href} className="px-7 py-2.5 font-medium transition-opacity hover:opacity-90 inline-block"
                  style={{ backgroundColor: '#111111', color: '#ffffff', borderRadius: '9999px', fontSize: '14px' }}>{row.small.button}</Link>
              </div>
            </div>
          </div>
        ))}

        {/* Divider */}
        <div className="pt-6 pb-2" style={{ borderTop: '1px solid rgba(246,248,250,0.08)' }} />

        {/* Bottom 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomCards.map((card, i) => (
            <div key={i} className="flex flex-col">
              <div className="overflow-hidden" style={{ height: '220px' }}>
                <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="pt-4">
                <h3 className="font-semibold mb-1.5" style={{ fontSize: '16px', color: '#F6F8FA' }}>{card.title}</h3>
                <p className="font-light mb-4 leading-relaxed" style={{ fontSize: '13px', color: 'rgba(246,248,250,0.6)' }}>{card.description}</p>
                <Link href={card.href} className="px-5 py-2 font-medium transition-opacity hover:opacity-90 inline-block text-sm"
                  style={{ backgroundColor: '#111111', color: '#ffffff', borderRadius: '9999px' }}>{card.button}</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="pt-6 pb-2" style={{ borderTop: '1px solid rgba(246,248,250,0.08)' }} />

        {/* Downloaded Resources */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-light mb-3" style={{ fontSize: '32px', color: '#F6F8FA' }}>Your Downloaded Resources</h2>
            <p className="font-light" style={{ fontSize: '16px', color: 'rgba(246,248,250,0.55)', maxWidth: '520px', margin: '0 auto' }}>
              Keep track of all the resources you have downloaded for quick and easy access whenever you need them.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {downloads.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-8 py-8" style={{ borderBottom: '1px solid rgba(246,248,250,0.07)' }}>
                <div className="flex-shrink-0 overflow-hidden" style={{ width: '260px', height: '180px' }}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-mono mb-2" style={{ color: '#C9C73C' }}>{item.date}</p>
                  <h3 className="font-semibold mb-3" style={{ fontSize: '22px', color: '#F6F8FA' }}>{item.title}</h3>
                  <p className="font-light mb-5 leading-relaxed" style={{ fontSize: '15px', color: 'rgba(246,248,250,0.6)', maxWidth: '560px' }}>{item.description}</p>
                  <Link href="#" className="px-7 py-2.5 font-medium transition-opacity hover:opacity-90 inline-block self-start"
                    style={{ backgroundColor: '#111111', color: '#ffffff', fontSize: '14px' }}>{item.button}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Example />
      <Footer />
    </div>
  );
}
