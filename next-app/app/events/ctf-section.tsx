"use client";

import React, { useId, useState } from 'react';
import Link from 'next/link';
import { Spectral } from 'next/font/google';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const spectral = Spectral({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const ctfEvents = [
  {
    image: "/images/activectf.jpg",
    title: "Monthly CTF Challenge",
    description: "Join our monthly CTF challenge where members can compete against each other and solve real-world cybersecurity problems.",
    button: "Join Challenge",
    href: "/events/monthly-ctf",
  },
  {
    image: "/images/alphactf.jpg",
    title: "Regional CTF Event",
    description: "Our club will be hosting a regional CTF event, open to teams from various universities. This is a fantastic opportunity to showcase your skills and collaborate with peers.",
    button: "Register Now",
    href: null,
  },
  {
    image: "/images/awardctf.jpg",
    title: "Online CTF Series",
    description: "Participate in our online CTF series that allows you to compete from anywhere. The series will feature a variety of challenges catering to all skill levels.",
    button: "Compete Online",
    href: "/events/ctf",
  },
];

function RegionalCTFDialog({ button }: { button: string }) {
  const id = useId();
  const [submitted, setSubmitted] = useState(false);

  return (
    <Dialog onOpenChange={() => setSubmitted(false)}>
      <DialogTrigger asChild>
        <button
          className="transition-opacity hover:opacity-90 px-6 py-3 self-start"
          style={{ backgroundColor: '#C9C73C', color: '#1D2023', borderRadius: '9999px', fontSize: '15px', fontWeight: 500 }}
        >
          {button}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {!submitted ? (
          <>
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border" aria-hidden="true">
                <svg className="stroke-zinc-800 dark:stroke-zinc-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
                </svg>
              </div>
              <DialogHeader>
                <DialogTitle className="sm:text-center">Regional CTF Event Registration</DialogTitle>
                <DialogDescription className="sm:text-center">
                  Register your team for the upcoming Regional CTF Event hosted by HU Cyber Security Club.
                </DialogDescription>
              </DialogHeader>
            </div>

            <form className="space-y-5" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              <div className="space-y-4">

                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Personal Info</p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor={`${id}-fname`}>First Name</Label>
                    <Input id={`${id}-fname`} placeholder="Natnael" type="text" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${id}-lname`}>Last Name</Label>
                    <Input id={`${id}-lname`} placeholder="Desta" type="text" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${id}-email`}>University Email</Label>
                  <Input id={`${id}-email`} placeholder="natnael@haramaya.edu.et" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${id}-phone`}>Phone Number</Label>
                  <Input id={`${id}-phone`} placeholder="+251 9XX XXX XXX" type="tel" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${id}-dept`}>Department</Label>
                  <Select required>
                    <SelectTrigger id={`${id}-dept`}>
                      <SelectValue placeholder="Select your department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="se">Software Engineering</SelectItem>
                      <SelectItem value="is">Information Systems</SelectItem>
                      <SelectItem value="cyber">Cybersecurity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${id}-year`}>Year of Study</Label>
                  <Select required>
                    <SelectTrigger id={`${id}-year`}>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1st Year</SelectItem>
                      <SelectItem value="2">2nd Year</SelectItem>
                      <SelectItem value="3">3rd Year</SelectItem>
                      <SelectItem value="4">4th Year</SelectItem>
                      <SelectItem value="5">5th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground pt-2">Team Info</p>

                <div className="space-y-2">
                  <Label htmlFor={`${id}-team`}>Team Name</Label>
                  <Input id={`${id}-team`} placeholder="e.g. ByteBreakers" type="text" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${id}-role`}>Your Role in Team</Label>
                  <Select required>
                    <SelectTrigger id={`${id}-role`}>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leader">Team Leader</SelectItem>
                      <SelectItem value="member">Team Member</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${id}-skill`}>Primary Skill Area</Label>
                  <Select required>
                    <SelectTrigger id={`${id}-skill`}>
                      <SelectValue placeholder="Select skill" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Exploitation</SelectItem>
                      <SelectItem value="crypto">Cryptography</SelectItem>
                      <SelectItem value="forensics">Forensics</SelectItem>
                      <SelectItem value="reverse">Reverse Engineering</SelectItem>
                      <SelectItem value="pwn">Binary Exploitation</SelectItem>
                      <SelectItem value="osint">OSINT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${id}-experience`}>CTF Experience Level</Label>
                  <Select required>
                    <SelectTrigger id={`${id}-experience`}>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (0–1 CTFs)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (2–5 CTFs)</SelectItem>
                      <SelectItem value="advanced">Advanced (5+ CTFs)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C9C73C', color: '#111111' }}
              >
                Register for Event
              </button>
            </form>

            <p className="text-center text-xs text-muted-foreground">
              By registering you agree to our{" "}
              <a className="underline hover:no-underline" href="#">Terms & Conditions</a>.
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201,199,60,0.15)', border: '2px solid #C9C73C' }}>
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#C9C73C" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <DialogTitle>Registration Successful!</DialogTitle>
            <DialogDescription>
              You've been registered for the Regional CTF Event. Check your email for confirmation details.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function CTFSection() {
  return (
    <section className={`w-full py-20 px-6 ${spectral.className}`} style={{ backgroundColor: '#FFFEF0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 font-light" style={{ fontSize: '36px', color: '#1D2023' }}>
            Capture The Flag Competitions
          </h2>
          <p className="font-light" style={{ fontSize: '18px', color: '#C9C73C' }}>
            Participate in exciting CTF competitions to test your skills and earn recognition within the cybersecurity community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ctfEvents.map((event, index) => (
            <div
              key={index}
              className="flex flex-col p-3"
              style={{ border: '1.5px solid rgba(29, 32, 35, 0.2)' }}
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="mb-3 font-bold" style={{ fontSize: '20px', color: '#1D2023' }}>
                  {event.title}
                </h3>
                <p className="mb-6 leading-relaxed font-light flex-1" style={{ fontSize: '15px', color: '#454545' }}>
                  {event.description}
                </p>
                {event.href ? (
                  <Link
                    href={event.href}
                    className="transition-opacity hover:opacity-90 px-6 py-3 self-start inline-block"
                    style={{ backgroundColor: '#C9C73C', color: '#1D2023', borderRadius: '9999px', fontSize: '15px', fontWeight: 500 }}
                  >
                    {event.button}
                  </Link>
                ) : event.title === "Regional CTF Event" ? (
                  <RegionalCTFDialog button={event.button} />
                ) : (
                  <button
                    className="transition-opacity hover:opacity-90 px-6 py-3 self-start"
                    style={{ backgroundColor: '#C9C73C', color: '#1D2023', borderRadius: '9999px', fontSize: '15px', fontWeight: 500 }}
                  >
                    {event.button}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
