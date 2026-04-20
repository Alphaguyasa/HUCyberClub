"use client";

import { Spectral } from "next/font/google";

const spectral = Spectral({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const cards = [
  {
    image: "/images/eventmanage1.png",
    title: "Create Events",
    description: "Plan and create new events tailored to the interests of club members. Define details such as date, time, location, and participant limits to ensure smooth execution.",
    button: "Create Event",
    href: "/admin/events/create",
    imageLeft: true,
  },
  {
    image: "/images/eventmanage2.png",
    title: "Edit Events",
    description: "Modify existing events as needed to accommodate changes in scheduling or participant availability. Ensure that all members are informed of any updates promptly.",
    button: "Edit Event",
    href: "/admin/events/edit",
    imageLeft: false,
  },
  {
    image: "/images/eventmanage3.png",
    title: "Manage Participants",
    description: "Oversee participant lists for each event, allowing you to approve or decline registrations based on capacity or prerequisites. Facilitate communication among participants.",
    button: "Manage Participants",
    href: "/admin/events/participants",
    imageLeft: true,
  },
];

export default function EventManagement() {
  return (
    <section id="event-management" className={`w-full py-20 px-6 ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 font-light" style={{ fontSize: '36px', color: '#F6F8FA' }}>
            Event Management
          </h2>
          <p className="font-light" style={{ fontSize: '18px', color: '#F6F8FA' }}>
            Organize and oversee events for club members
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-16 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col ${card.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: '280px' }}
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="font-semibold mb-4" style={{ fontSize: '28px', color: '#F6F8FA' }}>
                  {card.title}
                </h3>
                <p className="font-light leading-relaxed mb-8" style={{ fontSize: '16px', color: 'rgba(246,248,250,0.7)' }}>
                  {card.description}
                </p>
                <button
                  className="font-medium transition-opacity hover:opacity-80 px-8 py-3"
                  style={{ backgroundColor: '#111111', color: '#ffffff', borderRadius: '9999px', fontSize: '15px' }}
                  onClick={() => window.location.href = card.href}
                >
                  {card.button}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
