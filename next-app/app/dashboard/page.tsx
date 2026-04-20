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

const leaderboardItems = [
  {
    image: "/images/topplayersimage.png",
    title: "Top Players",
    description:
      "View the leaderboard to see who is leading the competition in real time. Track their progress and strategies as they tackle challenges.",
  },
  {
    image: "/images/scoreupdateimage.png",
    title: "Score Updates",
    description:
      "Get instant updates on your score and the scores of other participants. This feature ensures you never miss a beat in the competition.",
  },
  {
    image: "/images/rankinginsightimage.png",
    title: "Ranking Insights",
    description:
      "Analyze your performance compared to others with detailed ranking insights. Understand what it takes to climb the leaderboard.",
  },
];

export default function DashboardPage() {
  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: "#25292E" }}>
      <UserNavbar activeItem="CTF Dashboard" />

      {/* Challenges Grid */}
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

      {/* Leaderboard Section */}
      <section className="w-full py-10 px-6" style={{ backgroundColor: "#25292E" }}>
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {leaderboardItems.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row items-start gap-10">
              <div className="w-full md:w-1/2 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "280px" }}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h3 className="font-semibold mb-4" style={{ fontSize: "24px", color: "#F6F8FA" }}>
                  {item.title}
                </h3>
                <p className="font-light leading-relaxed" style={{ fontSize: "16px", color: "rgba(246,248,250,0.7)" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Stats Section */}
      <section className="w-full py-20 px-6" style={{ backgroundColor: "#25292E" }}>
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="font-light mb-3" style={{ fontSize: "36px", color: "#F6F8FA" }}>Your Personal Stats</h2>
            <p className="font-light" style={{ fontSize: "18px", color: "rgba(246,248,250,0.55)" }}>
              Track your progress and performance in challenges.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {[
              {
                image: "/images/pointsearned.png",
                title: "Points Earned",
                description: "Monitor the total number of points you've accumulated from solving challenges. This feature encourages continuous improvement and engagement.",
              },
              {
                image: "/images/challengessolved.png",
                title: "Challenges Solved",
                description: "Keep a log of the challenges you've successfully completed. This feature serves as a testament to your skills and dedication in the field of cyber security.",
              },
              {
                image: "/images/accuracyrate.png",
                title: "Accuracy Rate",
                description: "Evaluate your accuracy in solving challenges. This metric provides insight into your strengths and areas for improvement, helping you refine your approach.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "280px" }}
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="font-semibold mb-4" style={{ fontSize: "24px", color: "#F6F8FA" }}>
                    {item.title}
                  </h3>
                  <p className="font-light leading-relaxed" style={{ fontSize: "16px", color: "rgba(246,248,250,0.7)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
