"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Spectral } from "next/font/google";
import { Component as Footer } from "@/components/footer-taped-design";
import Navbar from "@/components/navbar";

const spectral = Spectral({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const socialPaths = [
  "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
];

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative ${spectral.className}`}>
      <Navbar activeItem="Contact" transparent={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center" style={{ zIndex: 1 }}>
        <img src="/images/contactus.jpg" alt="Contact Us" className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }} />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)', zIndex: 0 }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="mb-6" style={{ fontSize: 'clamp(24px, 4vw, 42px)', color: '#ffffff', fontWeight: 400 }}>
            Stay Connected with Us
          </h1>
          <p className="mb-10" style={{ fontSize: 'clamp(14px, 2vw, 18px)', color: '#f0f0f0', fontWeight: 300 }}>
            Follow our social media channels to get the latest updates, event announcements, and cybersecurity insights. Engage with our community and share your thoughts!
          </p>
          <button className="px-10 py-4 font-medium transition-opacity hover:opacity-90 shadow-lg" style={{ backgroundColor: '#C9C73C', color: '#1D2023', borderRadius: '9999px', fontSize: '18px' }}>
            Follow Us
          </button>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="w-full py-20 px-6" style={{ backgroundColor: '#FFFEF0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-light mb-3" style={{ fontSize: '36px', color: '#1D2023' }}>Get in Touch</h2>
            <p className="font-light" style={{ fontSize: '18px', color: '#C9C73C' }}>
              We'd love to hear from you! Whether you have questions, suggestions, or want to learn more about our activities, reach out to us anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* Form */}
            <form className="flex flex-col text-sm">
              <label className="font-medium mb-1" style={{ color: '#1D2023' }}>Full Name</label>
              <div className="flex items-center mb-4 h-10 pl-3 border rounded-full focus-within:ring-2 focus-within:ring-yellow-400 transition-all overflow-hidden" style={{ borderColor: 'rgba(29,32,35,0.3)' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="#475569"/></svg>
                <input type="text" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Full Name" required />
              </div>

              <label className="font-medium mb-1" style={{ color: '#1D2023' }}>Email Address</label>
              <div className="flex items-center mb-4 h-10 pl-3 border rounded-full focus-within:ring-2 focus-within:ring-yellow-400 transition-all overflow-hidden" style={{ borderColor: 'rgba(29,32,35,0.3)' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#475569"/></svg>
                <input type="email" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Email Address" required />
              </div>

              <label className="font-medium mb-1" style={{ color: '#1D2023' }}>Message</label>
              <textarea rows={5} className="mb-5 p-3 bg-transparent border rounded-lg resize-none outline-none focus:ring-2 focus:ring-yellow-400 transition-all" style={{ borderColor: 'rgba(29,32,35,0.3)' }} placeholder="Message" required></textarea>

              <button type="submit" className="flex items-center justify-center gap-2 py-3 w-full transition hover:opacity-90" style={{ backgroundColor: '#C9C73C', color: '#1D2023', borderRadius: '9999px', fontSize: '16px', fontWeight: 600 }}>
                Submit
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#1D2023"/></svg>
              </button>
            </form>

            {/* Map */}
            <div className="w-full min-h-[400px] shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d41.9981!3d9.4145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163b3b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sHaramaya%20University!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-semibold mb-2" style={{ fontSize: '20px', color: '#1D2023' }}>Address</h3>
                <p className="font-light leading-relaxed" style={{ fontSize: '15px', color: '#454545' }}>
                  Haramaya University<br />
                  College of Computing and Informatics<br />
                  Haramaya, Oromia, Ethiopia
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ fontSize: '20px', color: '#1D2023' }}>Phone</h3>
                <p className="font-light" style={{ fontSize: '15px', color: '#454545' }}>+251 25 553 0000</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ fontSize: '20px', color: '#1D2023' }}>Email</h3>
                <p className="font-light" style={{ fontSize: '15px', color: '#454545' }}>cybersecurity@haramaya.edu.et</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ fontSize: '20px', color: '#1D2023' }}>Follow Us</h3>
                <div className="flex gap-3">
                  {socialPaths.map((path, i) => (
                    <a key={i} href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80" style={{ backgroundColor: '#111111' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d={path} /></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
