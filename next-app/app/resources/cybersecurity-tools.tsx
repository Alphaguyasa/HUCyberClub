"use client";

import React from 'react';
import { Spectral } from 'next/font/google';
import { Shield, Terminal, Network } from 'lucide-react';
import { ExpandingCards, CardItem } from "@/components/expanding-cards";

const spectral = Spectral({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const tools: CardItem[] = [
  {
    id: "wireshark",
    title: "Wireshark",
    description: "Wireshark is a powerful network protocol analyzer that allows you to capture and interactively browse the traffic on a computer network. It is widely used for troubleshooting, analysis, and software development. With its detailed packet analysis, Wireshark helps you understand network performance and security vulnerabilities.",
    imgSrc: "/images/wireshark.png",
    icon: <Network size={24} />,
    linkHref: "#",
  },
  {
    id: "metasploit",
    title: "Metasploit Framework",
    description: "The Metasploit Framework is a penetration testing platform that enables security professionals to find and exploit vulnerabilities in systems. It offers a suite of tools for automating the discovery and exploitation processes, making it an indispensable resource for ethical hackers and security researchers.",
    imgSrc: "/images/metasploit.png",
    icon: <Terminal size={24} />,
    linkHref: "#",
  },
  {
    id: "nmap",
    title: "Nmap",
    description: "Nmap (Network Mapper) is a free and open-source tool for network discovery and security auditing. It is designed to rapidly scan large networks, although it also works well against single hosts. Nmap provides information about hosts, services, and operating systems, making it a vital tool for network security assessments.",
    imgSrc: "/images/nmap.png",
    icon: <Shield size={24} />,
    linkHref: "#",
  },
];

export default function CyberSecurityTools() {
  return (
    <section className={`w-full py-20 px-6 ${spectral.className}`} style={{ backgroundColor: '#FFFEF0' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: '36px', color: '#1D2023', fontWeight: 400 }}>
            Essential Cybersecurity Tools
          </h2>
          <p style={{ fontSize: '18px', color: '#C9C73C' }}>
            Discover the tools that can enhance your cybersecurity practices and keep you ahead.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center">
          <ExpandingCards items={tools} defaultActiveIndex={0} />
        </div>
      </div>
    </section>
  );
}
