"use client";

import { useState } from "react";
import { Spectral } from "next/font/google";
import UserNavbar from "@/components/user-navbar";
import { Component as Footer } from "@/components/footer-taped-design";
import Link from "next/link";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const faqs = [
  {
    q: "How can I leave a comment?",
    a: "To leave a comment, simply scroll to the bottom of the blog post you wish to discuss. You will find a comment box where you can enter your thoughts. Remember to keep your comments respectful and constructive.",
    defaultOpen: true,
  },
  {
    q: "Can I edit my comment after posting?",
    a: "Unfortunately, once a comment is posted, it cannot be edited directly. If you wish to clarify or change your comment, please feel free to post a follow-up comment addressing your concerns or updates.",
    defaultOpen: false,
  },
  {
    q: "What if my comment doesn't appear?",
    a: "Comments are subject to moderation to ensure a respectful and constructive environment. If your comment does not appear immediately, it may be pending approval. We appreciate your understanding as we maintain the quality of our discussions.",
    defaultOpen: false,
  },
];

function Accordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left transition-opacity hover:opacity-80"
          >
            <span className="font-medium" style={{ fontSize: '17px', color: '#F6F8FA' }}>{faq.q}</span>
            <span className="ml-4 flex-shrink-0 text-lg" style={{ color: '#C9C73C' }}>
              {open === i ? '▼' : '▶'}
            </span>
          </button>
          {open === i && (
            <p className="pb-5 font-light leading-relaxed" style={{ fontSize: '15px', color: 'rgba(246,248,250,0.6)' }}>
              {faq.a}
            </p>
          )}
          {i < faqs.length - 1 && <hr style={{ borderColor: 'rgba(246,248,250,0.1)' }} />}
        </div>
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <UserNavbar activeItem="Blog" />

      {/* Hero with curved bottom */}
      <div style={{ backgroundColor: '#25292E' }}>
        <section
          className="relative w-full pt-32 pb-48 px-6 text-center overflow-hidden"
          style={{ clipPath: 'ellipse(100% 85% at 50% 0%)', minHeight: '500px' }}
        >
          <img src="/images/blog.jpg" alt="Cyber Blog" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.62)' }} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="uppercase tracking-widest mb-4 font-medium" style={{ color: '#C9C73C', fontSize: '14px' }}>
              HU Cyber Club
            </p>
            <h1 className="mb-4 font-light" style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: '#ffffff' }}>
              Welcome to Our Cyber Blog
            </h1>
            <p style={{ fontSize: '18px', color: '#f0f0f0', fontWeight: 300 }}>
              Explore insights, tutorials, and discussions in the world of cybersecurity.
            </p>
          </div>
        </section>
      </div>

      {/* Latest Insights */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-14 mt-4">
          <h2 className="font-light mb-3" style={{ fontSize: '36px', color: '#F6F8FA' }}>Latest Insights and Articles</h2>
          <p className="font-light" style={{ fontSize: '18px', color: 'rgba(246,248,250,0.55)' }}>
            Stay updated with our community's contributions and discussions.
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 overflow-hidden flex-shrink-0" style={{ height: '280px' }}>
              <img src="/images/blog1.png" alt="Understanding Phishing Attacks" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <p className="text-xs font-mono mb-2" style={{ color: '#C9C73C' }}>April 15, 2026</p>
              <h3 className="font-semibold mb-3" style={{ fontSize: '22px', color: '#F6F8FA' }}>Understanding Phishing Attacks</h3>
              <p className="font-light mb-5 leading-relaxed" style={{ fontSize: '15px', color: 'rgba(246,248,250,0.6)' }}>
                Phishing attacks continue to be a major threat to individuals and organizations alike. In this...
              </p>
              <Link href="/blog/post?id=1" className="font-medium transition-opacity hover:opacity-70 self-start" style={{ color: '#C9C73C', fontSize: '14px' }}>
                Read more...
              </Link>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(246,248,250,0.08)' }} />

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 overflow-hidden flex-shrink-0" style={{ height: '280px' }}>
              <img src="/images/blog2.png" alt="The Importance of Cyber Hygiene" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <p className="text-xs font-mono mb-2" style={{ color: '#C9C73C' }}>April 15, 2026</p>
              <h3 className="font-semibold mb-3" style={{ fontSize: '22px', color: '#F6F8FA' }}>The Importance of Cyber Hygiene</h3>
              <p className="font-light mb-5 leading-relaxed" style={{ fontSize: '15px', color: 'rgba(246,248,250,0.6)' }}>
                Cyber hygiene refers to the practices and steps that users of computers and other devices take to...
              </p>
              <Link href="/blog/post?id=2" className="font-medium transition-opacity hover:opacity-70 self-start" style={{ color: '#C9C73C', fontSize: '14px' }}>
                Read more...
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spotlight on Member Expertise */}
      <section className="w-full py-20 px-6" style={{ backgroundColor: '#25292E' }}>
        <div className="max-w-5xl mx-auto">

          <div className="mb-6 text-center">
            <h2 className="font-light mb-2" style={{ fontSize: '36px', color: '#F6F8FA' }}>
              Spotlight on Member Expertise
            </h2>
            <p className="font-light" style={{ fontSize: '16px', color: 'rgba(246,248,250,0.55)' }}>
              Read outstanding contributions from our talented members.
            </p>
          </div>
          <hr style={{ borderColor: 'rgba(246,248,250,0.1)', marginBottom: '48px' }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Article 1 */}
            <div className="flex flex-col p-5" style={{ border: '1.5px solid rgba(246,248,250,0.1)' }}>
              <div className="overflow-hidden mb-5" style={{ height: '200px' }}>
                <img src="/images/spot1.png" alt="Ransomware" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <h3 className="font-semibold mb-3" style={{ fontSize: '20px', color: '#F6F8FA' }}>
                An In-Depth Look at Ransomware
              </h3>
              <p className="font-light leading-relaxed mb-4 flex-1" style={{ fontSize: '14px', color: 'rgba(246,248,250,0.6)', minHeight: '120px' }}>
                This writeup delves into the mechanics of ransomware attacks, examining real-world cases and the strategies employed by cybercriminals. Gain insights into prevention and recovery techniques that can be crucial for organizations facing such threats. We also explore how attackers use encryption to hold data hostage and what steps organizations can take to minimize damage and recover effectively.
              </p>
              <Link href="/blog/post?id=3" className="font-medium transition-opacity hover:opacity-70 self-start" style={{ color: '#C9C73C', fontSize: '14px' }}>
                Read More
              </Link>
            </div>

            {/* Article 2 */}
            <div className="flex flex-col p-5" style={{ border: '1.5px solid rgba(246,248,250,0.1)' }}>
              <div className="overflow-hidden mb-5" style={{ height: '200px' }}>
                <img src="/images/spot2.png" alt="Dark Web" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <h3 className="font-semibold mb-3" style={{ fontSize: '20px', color: '#F6F8FA' }}>
                Exploring the Dark Web
              </h3>
              <p className="font-light leading-relaxed mb-4 flex-1" style={{ fontSize: '14px', color: 'rgba(246,248,250,0.6)', minHeight: '120px' }}>
                Join us as we navigate the complexities of the dark web, understanding its structure, how it operates, and the potential risks associated with it. This piece serves as both an informative guide and a cautionary tale for those curious about what lies beneath the surface of the internet. We examine the tools used to access it, the communities that thrive there, and the legal and ethical boundaries every user should be aware of.
              </p>
              <Link href="/blog/post?id=4" className="font-medium transition-opacity hover:opacity-70 self-start" style={{ color: '#C9C73C', fontSize: '14px' }}>
                Discover More
              </Link>
            </div>

            {/* Article 3 */}
            <div className="flex flex-col p-5" style={{ border: '1.5px solid rgba(246,248,250,0.1)' }}>
              <div className="overflow-hidden mb-5" style={{ height: '200px' }}>
                <img src="/images/spot3.png" alt="AI in Cybersecurity" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <h3 className="font-semibold mb-3" style={{ fontSize: '20px', color: '#F6F8FA' }}>
                AI in Cybersecurity: A Double-Edged Sword
              </h3>
              <p className="font-light leading-relaxed mb-4 flex-1" style={{ fontSize: '14px', color: 'rgba(246,248,250,0.6)', minHeight: '120px' }}>
                This article discusses the dual role of artificial intelligence in cybersecurity, showcasing how it can both enhance security measures and pose new threats. We analyze current trends and future implications for cybersecurity professionals in an evolving landscape. From AI-powered intrusion detection to adversarial attacks that fool machine learning models, the stakes have never been higher.
              </p>
              <Link href="/blog/post?id=5" className="font-medium transition-opacity hover:opacity-70 self-start" style={{ color: '#C9C73C', fontSize: '14px' }}>
                Explore This Topic
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Join the Discussion */}
      <section className="w-full py-20 px-6" style={{ backgroundColor: '#25292E' }}>
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-6">
            <h2 className="font-light mb-2" style={{ fontSize: '36px', color: '#F6F8FA' }}>
              Join the Discussion
            </h2>
            <p className="font-light" style={{ fontSize: '16px', color: 'rgba(246,248,250,0.55)' }}>
              Your thoughts and feedback are valuable to us. Share your opinions on our articles.
            </p>
          </div>
          <hr style={{ borderColor: 'rgba(246,248,250,0.1)', marginBottom: '32px' }} />

          <Accordion />
        </div>
      </section>

      {/* Contribute Your Knowledge */}
      <section className="w-full py-20 px-6" style={{ backgroundColor: '#25292E' }}>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-light mb-3" style={{ fontSize: '36px', color: '#F6F8FA' }}>
              Contribute Your Knowledge
            </h2>
            <p className="font-light" style={{ fontSize: '16px', color: 'rgba(246,248,250,0.55)' }}>
              Share your insights and expertise by creating a post for our community.
            </p>
          </div>

          <form className="flex flex-col text-sm">
            <label className="font-medium mb-1" style={{ color: 'rgba(246,248,250,0.8)' }}>Full Name</label>
            <div className="flex items-center mb-4 h-10 pl-3 border focus-within:ring-2 focus-within:ring-yellow-400 transition-all overflow-hidden rounded-full" style={{ borderColor: 'rgba(246,248,250,0.2)', backgroundColor: 'rgba(246,248,250,0.05)' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="#94a3b8"/></svg>
              <input type="text" className="h-full px-2 w-full outline-none bg-transparent" style={{ color: '#F6F8FA' }} placeholder="Full Name" required />
            </div>

            <label className="font-medium mb-1" style={{ color: 'rgba(246,248,250,0.8)' }}>Email Address</label>
            <div className="flex items-center mb-4 h-10 pl-3 border focus-within:ring-2 focus-within:ring-yellow-400 transition-all overflow-hidden rounded-full" style={{ borderColor: 'rgba(246,248,250,0.2)', backgroundColor: 'rgba(246,248,250,0.05)' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#94a3b8"/></svg>
              <input type="email" className="h-full px-2 w-full outline-none bg-transparent" style={{ color: '#F6F8FA' }} placeholder="Email Address" required />
            </div>

            <label className="font-medium mb-1" style={{ color: 'rgba(246,248,250,0.8)' }}>Message</label>
            <textarea rows={5} className="mb-5 p-3 border resize-none outline-none focus:ring-2 focus:ring-yellow-400 transition-all rounded-lg" style={{ borderColor: 'rgba(246,248,250,0.2)', backgroundColor: 'rgba(246,248,250,0.05)', color: '#F6F8FA' }} placeholder="Message" required></textarea>

            <button type="submit" className="flex items-center justify-center gap-2 py-3 px-8 mx-auto transition hover:opacity-90" style={{ backgroundColor: '#111111', color: '#ffffff', fontSize: '16px', fontWeight: 600 }}>
              Submit
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#ffffff"/></svg>
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
