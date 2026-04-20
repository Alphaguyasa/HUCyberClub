"use client";

import { Spectral } from "next/font/google";

const spectral = Spectral({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const cards = [
  {
    image: "/images/usermanage1.png",
    title: "Registration Approval",
    description: "Approve or reject new member registrations to maintain the integrity of the club. Ensure that all members meet the necessary criteria before they gain access.",
    button: "Manage Registrations",
    href: "/admin/members?tab=registration",
  },
  {
    image: "/images/usermanage2.png",
    title: "Role Assignment",
    description: "Assign user roles such as Admin, Member, or Moderator based on their contributions and responsibilities within the club. Tailor their access to features accordingly.",
    button: "Assign Roles",
    href: "/admin/members?tab=roles",
  },
  {
    image: "/images/usermanage3.png",
    title: "Activity Tracking",
    description: "Monitor member activities to ensure engagement and participation. Gain insights into who is active and how they contribute to the club's objectives.",
    button: "View Activity",
    href: "/admin/members?tab=activity",
  },
];

export default function UserManagement() {
  return (
    <section id="user-management" className={`w-full py-20 px-6 ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 font-light" style={{ fontSize: '36px', color: '#F6F8FA' }}>
            User Management
          </h2>
          <p className="font-light" style={{ fontSize: '18px', color: '#F6F8FA' }}>
            Efficiently oversee user registrations and roles
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{ backgroundColor: '#25292E' }}
            >
              {/* Image - Portrait 3:4 */}
              <div className="w-full overflow-hidden rounded-t-2xl" style={{ aspectRatio: '3/4' }}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text - centered */}
              <div className="p-6 text-center flex flex-col items-center">
                <h3 className="font-semibold mb-3" style={{ fontSize: '20px', color: '#F6F8FA' }}>
                  {card.title}
                </h3>
                <p className="font-light leading-relaxed mb-6" style={{ fontSize: '15px', color: 'rgba(246,248,250,0.7)' }}>
                  {card.description}
                </p>
                <a
                  href={card.href}
                  className="font-medium transition-opacity hover:opacity-90 px-6 py-2 inline-block"
                  style={{ backgroundColor: 'rgb(80, 85, 92)', color: '#F6F8FA', borderRadius: '9999px', fontSize: '15px' }}
                >
                  {card.button}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
