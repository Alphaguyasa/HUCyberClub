"use client";

import Image from "next/image";
import { Spectral } from 'next/font/google';
import { Marquee } from "@/components/ui/marquee";

const spectral = Spectral({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop&q=80",
    title: "Our Mission",
    date: "April 15, 2026",
    description: "The Haramaya University Cyber Security Club is dedicated to fostering a deep understanding of cybersecurity principles and practices.",
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&q=80",
    title: "Why Join Us?",
    date: "April 15, 2026",
    description: "By joining our club, you become part of a community that prioritizes learning and skill development in cybersecurity.",
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=1000&fit=crop&q=80",
    title: "Our Focus Areas",
    date: "April 15, 2026",
    description: "We focus on various aspects of cybersecurity, including ethical hacking, network security, and digital forensics.",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=1000&fit=crop&q=80",
    title: "Community Events",
    date: "April 15, 2026",
    description: "Join our regular workshops, hackathons, and networking events to connect with cybersecurity professionals and enthusiasts.",
  },
];

export default function Component() {
  return (
    <section className={`relative w-full overflow-hidden py-20 ${spectral.className}`} style={{ backgroundColor: '#FFFEF0' }}>
      <div>
        <svg
          className="absolute right-0 bottom-0 opacity-20"
          fill="none"
          height="154"
          viewBox="0 0 460 154"
          width="460"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: '#111111' }}
        >
          <g clipPath="url(#clip0_494_1104)">
            <path
              d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="40"
            />
          </g>
          <defs>
            <clipPath id="clip0_494_1104">
              <rect fill="white" height="154" width="460" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 flex max-w-5xl flex-col items-center px-6 text-center lg:px-0">
          <h1 className="relative mb-4 font-bold tracking-tight" style={{ fontSize: '36px', color: '#1D2023' }}>
            About Us
            <svg
              className="absolute -top-2 -right-8 -z-10 w-24 opacity-20"
              fill="currentColor"
              height="86"
              viewBox="0 0 108 86"
              width="108"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#C9C73C' }}
            >
              <path
                d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="28"
              />
            </svg>
          </h1>
          <p className="max-w-2xl" style={{ fontSize: '18px', color: '#454545' }}>
            Discover our mission and vision for cultivating cybersecurity expertise within our community.
          </p>
        </div>

        <div className="relative w-full flex justify-center">
          <Marquee className="[--gap:2rem] [--duration:30s]" pauseOnHover repeat={3}>
            {teamMembers.map((member, index) => (
              <div
                className="group flex w-96 shrink-0 flex-col"
                key={index}
              >
                <div className="relative w-full overflow-hidden rounded-2xl" style={{ height: '500px', backgroundColor: '#FFFEF0' }}>
                  <Image
                    alt={member.title}
                    className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                    fill
                    src={member.image}
                  />
                </div>
                <div className="mt-6 px-2">
                  <h3 className="font-bold mb-3" style={{ fontSize: '18px', color: '#1D2023' }}>
                    {member.title}
                  </h3>
                  <p className="mb-3" style={{ fontSize: '18px', color: '#C9C73C' }}>
                    {member.date}
                  </p>
                  <p style={{ fontSize: '15px', color: '#454545', lineHeight: '1.7' }}>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
