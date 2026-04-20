"use client";

import { Spectral } from "next/font/google";

const spectral = Spectral({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const cards = [
  {
    image: "/images/ctfmanage1.png",
    title: "Challenge Creation",
    description: "Design and create engaging CTF challenges that stimulate learning and enhance skills. Define the complexity and objectives to cater to various skill levels.",
    button: "Create Challenge",
    href: "/admin/ctf",
  },
  {
    image: "/images/ctfmanage2.png",
    title: "Submission Monitoring",
    description: "Keep track of member submissions for each challenge. Review their solutions and ensure that submissions adhere to the established criteria for scoring.",
    button: "Monitor Submissions",
    href: "/admin/ctf/submissions",
  },
  {
    image: "/images/ctfmanage3.png",
    title: "Automatic Scoring",
    description: "Implement an automated scoring system that evaluates submissions based on predefined flags and points, ensuring a fair and efficient assessment process.",
    button: "View Scores",
    href: "/admin/ctf/scores",
  },
];

export default function CTFManagement() {
  return (
    <section id="ctf-management" className={`w-full py-20 px-6 ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 font-light" style={{ fontSize: '36px', color: '#F6F8FA' }}>
            CTF Management
          </h2>
          <p className="font-light" style={{ fontSize: '18px', color: '#F6F8FA' }}>
            Create and oversee Capture The Flag challenges for members
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row overflow-hidden"
              style={{ backgroundColor: '#F6F8FA' }}
            >
              {/* Image - Landscape 4:3 */}
              <div className="w-full md:w-1/4 p-6 flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                <h3 className="font-semibold mb-4" style={{ fontSize: '24px', color: '#1D2023' }}>
                  {card.title}
                </h3>
                <p className="font-light leading-relaxed mb-8" style={{ fontSize: '16px', color: '#454545' }}>
                  {card.description}
                </p>
                <div>
                  <a
                    href={card.href}
                    className="font-medium transition-opacity hover:opacity-80 px-8 py-3 inline-block"
                    style={{ backgroundColor: '#111111', color: '#ffffff', fontSize: '15px' }}
                  >
                    {card.button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
