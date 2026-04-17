"use client";

import React from 'react';
import { Spectral } from 'next/font/google';
import { ScrollAnimation, ScrollTranslateX } from "@/components/team-section";

const spectral = Spectral({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const teamMembers = [
  { name: "Abebe Kebede", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
  { name: "Tigist Haile", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
  { name: "Dawit Tesfaye", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
  { name: "Meron Alemu", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
  { name: "Yonas Girma", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" },
  { name: "Selam Bekele", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" },
  { name: "Biruk Tadesse", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" },
  { name: "Hana Mulugeta", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop" },
  { name: "Samuel Worku", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
  { name: "Liya Getachew", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
  { name: "Natnael Desta", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" },
  { name: "Sara Johnson", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
  { name: "James Wilson", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=200&auto=format&fit=crop" },
  { name: "Emily Chen", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop" },
  { name: "Marcus Lee", image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=200&auto=format&fit=crop" },
  { name: "Aisha Mohammed", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" },
  { name: "Daniel Park", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop" },
  { name: "Fatima Hassan", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop" },
  { name: "Chris Taylor", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
  { name: "Zara Ahmed", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop" },
  { name: "Kevin Osei", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=200&auto=format&fit=crop" },
  { name: "Nina Patel", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=200&auto=format&fit=crop" },
  { name: "Omar Diallo", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop" },
  { name: "Sofia Martinez", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop" },
  { name: "Elias Bekele", image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=200&auto=format&fit=crop" },
  { name: "Grace Kim", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop" },
  { name: "Ahmed Seid", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=200&auto=format&fit=crop" },
  { name: "Rachel Green", image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=200&auto=format&fit=crop" },
  { name: "Kofi Mensah", image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=200&auto=format&fit=crop" },
  { name: "Priya Sharma", image: "https://images.unsplash.com/photo-1521310192545-4ac7951413f0?q=80&w=200&auto=format&fit=crop" },
  { name: "Tomas Nguyen", image: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=200&auto=format&fit=crop" },
];

const row1 = teamMembers.slice(0, 16);
const row2 = teamMembers.slice(16, 31);

export default function MeetOurTeam() {
  return (
    <section className={`w-full py-20 overflow-hidden ${spectral.className}`} style={{ backgroundColor: '#FFFEF0' }}>
      <div className="text-center mb-16 px-6">
        <h2 className="mb-4" style={{ fontSize: '36px', color: '#1D2023', fontWeight: 400 }}>
          Meet Our Dedicated Team
        </h2>
        <p style={{ fontSize: '18px', color: '#C9C73C' }}>
          Our club is driven by passionate students committed to advancing cybersecurity knowledge and building a stronger digital future for our community.
        </p>
      </div>

      <ScrollAnimation spacerClass="h-48">
        {/* Row 1 - scrolls left */}
        <ScrollTranslateX xRange={['0%', '-20%']} inputRange={[0, 1]} className="flex gap-4 mb-4 w-max">
          {row1.map((member, i) => (
            <div key={i} className="flex-shrink-0 w-36 h-36 rounded-2xl overflow-hidden shadow-md">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
          ))}
        </ScrollTranslateX>

        {/* Row 2 - scrolls right */}
        <ScrollTranslateX xRange={['0%', '20%']} inputRange={[0, 1]} className="flex gap-4 w-max">
          {row2.map((member, i) => (
            <div key={i} className="flex-shrink-0 w-36 h-36 rounded-2xl overflow-hidden shadow-md">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
          ))}
        </ScrollTranslateX>
      </ScrollAnimation>
    </section>
  );
}
