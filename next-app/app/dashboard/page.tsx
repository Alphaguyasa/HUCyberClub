"use client";

import { Spectral } from "next/font/google";
import UserNavbar from "@/components/user-navbar";
import { Component as Footer } from "@/components/footer-taped-design";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const challenges = [
  {
    image: "/images/ctfdash1.png",
    category: "Web Exploitation",
    description:
      "Dive into challenges that test your skills in identifying and exploiting vulnerabilities in web applications. Perfect for honing your penetration testing abilities.",
  },
  {
    image: "/images/ctfdash2.png",
    category: "Cryptography",
    description:
      "Challenge your understanding of encryption methods and security protocols. Solve puzzles that require both creativity and analytical thinking.",
  },
  {
    image: "/images/ctfdash3.png",
    category: "Forensics",
    description:
      "Put your investigative skills to the test by analyzing digital evidence. Learn to uncover hidden information through various forensic techniques.",
  },
];

export default function DashboardPage() {
  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: "#25292E" }}>
      <UserNavbar activeItem="CTF Dashboard" />

      <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge, i) => (
            <div key={i} className="overflow-hidden flex flex-col" style={{ backgroundColor: "#ffffff" }}>
              <img
                src={challenge.image}
                alt={challenge.category}
                className="w-full object-cover"
                style={{ height: "200px" }}
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="font-semibold" style={{ fontSize: "20px", color: "#111111" }}>
                  {challenge.category}
                </h3>
                <p className="font-light leading-relaxed" style={{ fontSize: "15px", color: "#444444" }}>
                  {challenge.description}
                </p>
                <div className="mt-2">
                  <button
                    className="px-6 py-2 font-medium transition-opacity hover:opacity-80"
                    style={{ backgroundColor: "#C9C73C", color: "#111111", borderRadius: "9999px", fontSize: "14px" }}
                  >
                    Start Challenge
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
