"use client";

import { useState } from "react";
import { Spectral } from "next/font/google";
import Navbar from "@/components/navbar";
import { Component as Footer } from "@/components/footer-taped-design";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const posts = [
  {
    id: 1,
    title: "Understanding Phishing Attacks",
    subtitle: "How to recognize and defend against one of the most common cyber threats",
    date: "April 15, 2026",
    category: "Recent Articles",
    image: "/images/blog1.png",
    body: `Phishing attacks continue to be a major threat to individuals and organizations alike. In this post, we explore the various types of phishing, how they work, and effective strategies to recognize and prevent these attacks. By enhancing your awareness, you can protect yourself and your organization from potential breaches.

Phishing typically involves an attacker masquerading as a trusted entity — a bank, a colleague, or a well-known service — to trick victims into revealing sensitive information such as passwords, credit card numbers, or personal data. These attacks are delivered through email, SMS, phone calls, or even fake websites that closely mimic legitimate ones.

There are several common types of phishing to be aware of. Spear phishing targets specific individuals or organizations using personalized information to appear more convincing. Whaling targets high-profile executives. Smishing uses SMS messages, while vishing uses voice calls. Each variant exploits human psychology — urgency, fear, or curiosity — to bypass rational thinking.

To protect yourself, always verify the sender's email address carefully, avoid clicking links in unsolicited messages, enable multi-factor authentication on all accounts, and report suspicious emails to your IT or security team. Organizations should invest in security awareness training and deploy email filtering solutions to reduce exposure.`,
  },
  {
    id: 2,
    title: "The Importance of Cyber Hygiene",
    subtitle: "Building daily habits that keep your digital life secure",
    date: "April 15, 2026",
    category: "Recent Articles",
    image: "/images/blog2.png",
    body: `Cyber hygiene refers to the practices and steps that users of computers and other devices take to maintain system health and improve online security. Just as personal hygiene prevents illness, cyber hygiene prevents digital threats from taking hold.

Good cyber hygiene starts with the basics: keeping software and operating systems up to date, using strong and unique passwords for every account, and enabling two-factor authentication wherever possible. These simple habits dramatically reduce your attack surface.

Beyond the basics, regularly backing up your data ensures you can recover from ransomware or hardware failure. Being mindful of what you share online, reviewing app permissions, and using a VPN on public networks are all part of a comprehensive hygiene routine.

Organizations that cultivate a culture of cyber hygiene among their employees are significantly more resilient to attacks. Regular training, clear policies, and easy-to-use security tools make it easier for everyone to stay safe without friction.`,
  },
  {
    id: 3,
    title: "An In-Depth Look at Ransomware",
    subtitle: "Understanding how ransomware works and how to defend against it",
    date: "March 10, 2026",
    category: "Member Spotlight",
    image: "/images/spot1.png",
    body: `This writeup delves into the mechanics of ransomware attacks, examining real-world cases and the strategies employed by cybercriminals. Gain insights into prevention and recovery techniques that can be crucial for organizations facing such threats.

Ransomware is a type of malicious software that encrypts a victim's files, rendering them inaccessible until a ransom is paid. Attackers typically demand payment in cryptocurrency to maintain anonymity. The consequences can be devastating — from financial loss to permanent data destruction.

We also explore how attackers use encryption to hold data hostage and what steps organizations can take to minimize damage and recover effectively. Key defenses include maintaining offline backups, segmenting networks, and deploying endpoint detection and response tools.

Building a resilient incident response plan before an attack occurs is critical. Organizations that practice their response procedures regularly are far better positioned to contain damage and restore operations quickly when ransomware strikes.`,
  },
  {
    id: 4,
    title: "Exploring the Dark Web",
    subtitle: "A guide to understanding what lies beneath the surface of the internet",
    date: "March 5, 2026",
    category: "Member Spotlight",
    image: "/images/spot2.png",
    body: `Join us as we navigate the complexities of the dark web, understanding its structure, how it operates, and the potential risks associated with it. This piece serves as both an informative guide and a cautionary tale for those curious about what lies beneath the surface of the internet.

The dark web is a part of the internet that is not indexed by standard search engines and requires special software, such as the Tor browser, to access. While it has legitimate uses — such as providing anonymity for journalists and activists in repressive regimes — it is also home to illegal marketplaces and criminal activity.

We examine the tools used to access it, the communities that thrive there, and the legal and ethical boundaries every user should be aware of. Understanding the dark web is important for cybersecurity professionals who need to monitor for leaked credentials, stolen data, and emerging threats.

Always approach this topic with caution. Accessing certain parts of the dark web may be illegal in your jurisdiction, and exposure to malware and scams is extremely high.`,
  },
  {
    id: 5,
    title: "AI in Cybersecurity: A Double-Edged Sword",
    subtitle: "How artificial intelligence is reshaping the threat landscape",
    date: "February 20, 2026",
    category: "Member Spotlight",
    image: "/images/spot3.png",
    body: `This article discusses the dual role of artificial intelligence in cybersecurity, showcasing how it can both enhance security measures and pose new threats. We analyze current trends and future implications for cybersecurity professionals in an evolving landscape.

On the defensive side, AI powers advanced threat detection systems that can identify anomalies in network traffic, detect malware in real time, and automate incident response. Machine learning models trained on vast datasets can spot patterns that human analysts would miss.

However, the same technology is being weaponized by attackers. AI-generated phishing emails are more convincing than ever. Deepfake audio and video are being used in social engineering attacks. Adversarial machine learning techniques can fool AI-based security tools into misclassifying threats.

From AI-powered intrusion detection to adversarial attacks that fool machine learning models, the stakes have never been higher. Cybersecurity professionals must stay ahead of both the defensive and offensive applications of AI to protect their organizations effectively.`,
  },
];

export default function BlogPostPage() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const currentId = idParam ? parseInt(idParam) : 1;
  const post = posts.find(p => p.id === currentId) ?? posts[0];
  const prevPost = posts.find(p => p.id === currentId - 1);
  const nextPost = posts.find(p => p.id === currentId + 1);

  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <Navbar activeItem="Resources" transparent={true} />

      {/* Hero Image */}
      <div className="w-full overflow-hidden" style={{ height: '480px', marginTop: '0' }}>
        <div className="relative w-full h-full">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 text-center">
            <p className="text-xs font-mono mb-3" style={{ color: '#C9C73C' }}>
              {post.date} · {post.category}
            </p>
            <h1 className="font-light mb-3" style={{ fontSize: 'clamp(28px, 5vw, 52px)', color: '#ffffff', maxWidth: '800px' }}>
              {post.title}
            </h1>
            <p className="font-light" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px' }}>
              {post.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {post.body.split("\n\n").map((para, i) => (
            <p key={i} className="font-light leading-relaxed" style={{ fontSize: '17px', color: 'rgba(246,248,250,0.8)', lineHeight: '1.9' }}>
              {para}
            </p>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-14" style={{ borderColor: 'rgba(246,248,250,0.1)' }} />

        {/* Prev / Next Navigation */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          {prevPost ? (
            <Link href={`/blog/post?id=${prevPost.id}`}
              className="flex items-center gap-2 font-medium transition-opacity hover:opacity-70"
              style={{ color: '#F6F8FA', fontSize: '15px' }}>
              <span style={{ color: '#C9C73C' }}>←</span> Previous
            </Link>
          ) : <div />}

          {nextPost ? (
            <Link href={`/blog/post?id=${nextPost.id}`}
              className="flex items-center gap-2 font-medium transition-opacity hover:opacity-70 text-right"
              style={{ color: '#F6F8FA', fontSize: '15px' }}>
              <span className="font-light" style={{ color: 'rgba(246,248,250,0.5)', fontSize: '14px' }}>{nextPost.title}</span>
              <span style={{ color: '#C9C73C' }}>→</span>
            </Link>
          ) : <div />}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-4">
          <Link href="/blog"
            className="px-6 py-2.5 font-medium transition-opacity hover:opacity-90 text-sm"
            style={{ backgroundColor: '#111111', color: '#ffffff' }}>
            ← Return to Blog
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
