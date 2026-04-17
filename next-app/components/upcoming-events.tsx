"use client";

import { Spectral } from 'next/font/google';
import { CardHoverReveal, CardHoverRevealMain, CardHoverRevealContent } from "@/components/ui/reveal-on-hover";

const spectral = Spectral({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function UpcomingEvents() {
  const events = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1077&h=606&fit=crop&q=80",
      title: "Cybersecurity Workshop",
      date: "May 10, 2026",
      type: "Workshop",
      description: "Join us for an interactive workshop on cybersecurity fundamentals, where you'll learn about key concepts and tools used in the field. This workshop is perfect for beginners and those looking to refresh their knowledge. Don't miss the chance to ask questions and engage with our experts.",
      tags: ["Beginner Friendly", "Hands-on", "Q&A Session"]
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1077&h=606&fit=crop&q=80",
      title: "Capture The Flag Competition",
      date: "June 5, 2026",
      type: "Competition",
      description: "Put your skills to the test in our upcoming CTF competition! Teams will compete to solve cybersecurity challenges, ranging from web vulnerabilities to cryptographic puzzles. This is a great opportunity to showcase your knowledge and win exciting prizes.",
      tags: ["Team Event", "Prizes", "Advanced"]
    },
    {
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1077&h=606&fit=crop&q=80",
      title: "Network Security Seminar",
      date: "June 20, 2026",
      type: "Seminar",
      description: "Explore the fundamentals of network security in this comprehensive seminar. Learn about firewalls, intrusion detection systems, and best practices for securing network infrastructure. Industry experts will share real-world case studies and answer your questions.",
      tags: ["Expert Speakers", "Networking", "Certificates"]
    }
  ];

  return (
    <section className={`w-full py-20 ${spectral.className}`} style={{ backgroundColor: '#FFFEF0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4" style={{ fontSize: '36px', color: '#1D2023' }}>
            Upcoming Events
          </h2>
          <p style={{ fontSize: '18px', color: '#454545', maxWidth: '700px', margin: '0 auto' }}>
            Stay informed about our latest workshops and competitions to enhance your skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {events.map((event, index) => (
            <CardHoverReveal key={index} className="h-[512px] w-[385px] rounded-xl">
              <CardHoverRevealMain>
                <img
                  width={1077}
                  height={606}
                  alt={event.title}
                  src={event.image}
                  className="inline-block size-full max-h-full max-w-full object-cover align-middle"
                />
              </CardHoverRevealMain>

              <CardHoverRevealContent className="space-y-4 rounded-2xl bg-zinc-900/90 text-zinc-50 p-6">
                <div className="space-y-2">
                  <h3 className="text-sm opacity-60">Event Type</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="rounded-full px-3 py-1" style={{ backgroundColor: '#C9C73C' }}>
                      <p className="text-xs leading-normal" style={{ color: '#1D2023' }}>{event.type}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm opacity-60">Date</h3>
                  <p className="text-sm" style={{ color: '#C9C73C' }}>{event.date}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm opacity-60">Highlights</h3>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, i) => (
                      <div key={i} className="rounded-full bg-zinc-800 px-2 py-1">
                        <p className="text-xs leading-normal">{tag}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm opacity-60">Description</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#E5E5E5' }}>
                    {event.description}
                  </p>
                </div>
              </CardHoverRevealContent>
            </CardHoverReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
