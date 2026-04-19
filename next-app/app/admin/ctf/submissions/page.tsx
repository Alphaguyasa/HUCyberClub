"use client";

import { Spectral } from "next/font/google";
import AdminNavbar from "@/components/admin-navbar";
import { Component as Footer } from "@/components/footer-taped-design";
import { ServiceCard } from "@/components/service-card";
import { ServerManagementTable } from "@/components/server-management-table";
import type { Server } from "@/components/server-management-table";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const stats = [
  {
    title: "Total Submissions",
    href: "#",
    imgSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-nY3Stc1545aP21dAi1IEbYlnc4rovS.png&w=320&q=75",
    imgAlt: "Notebook illustration",
    variant: "gray" as const,
  },
  {
    title: "Correct Flags",
    href: "#",
    imgSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-SxvnIpN2RVwLK77XxK3MnVCU6Xgc29.png&w=320&q=75",
    imgAlt: "Paint bucket illustration",
    variant: "default" as const,
  },
  {
    title: "Incorrect Flags",
    href: "#",
    imgSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-DFiJBJyUFg9QYTZOWEFeeza18HBnty.png&w=320&q=75",
    imgAlt: "Bowling pins illustration",
    variant: "red" as const,
  },
  {
    title: "Points Awarded",
    href: "#",
    imgSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-J7XYh5Cix5CceVeAtkuVXYSGgrhjDL.png&w=320&q=75",
    imgAlt: "Megaphone illustration",
    variant: "blue" as const,
  },
];

const submissions: Server[] = [
  { id: "1",  number: "01", serviceName: "Natnael Desta",   osType: "ubuntu",  serviceLocation: "SQL Injection Basics",   countryCode: "us", ip: "HUCC{fake_flag_1}",  dueDate: "Jan 15, 2025 14:32", cpuPercentage: 100, status: "active"   },
  { id: "2",  number: "02", serviceName: "Abebe Kebede",    osType: "windows", serviceLocation: "Caesar's Secret",        countryCode: "de", ip: "HUCC{wrong_flag}",   dueDate: "Jan 15, 2025 14:45", cpuPercentage: 20,  status: "inactive" },
  { id: "3",  number: "03", serviceName: "Selam Bekele",    osType: "ubuntu",  serviceLocation: "Hidden in Plain Sight",  countryCode: "fr", ip: "HUCC{fake_flag_3}",  dueDate: "Jan 15, 2025 15:01", cpuPercentage: 100, status: "active"   },
  { id: "4",  number: "04", serviceName: "Dawit Tesfaye",   osType: "windows", serviceLocation: "Buffer Overflow 101",    countryCode: "us", ip: "HUCC{not_right}",    dueDate: "Jan 15, 2025 15:20", cpuPercentage: 10,  status: "inactive" },
  { id: "5",  number: "05", serviceName: "Meron Alemu",     osType: "ubuntu",  serviceLocation: "OSINT Challenge",        countryCode: "de", ip: "HUCC{fake_flag_6}",  dueDate: "Jan 15, 2025 15:35", cpuPercentage: 100, status: "active"   },
  { id: "6",  number: "06", serviceName: "Biruk Tadesse",   osType: "windows", serviceLocation: "XSS Playground",         countryCode: "fr", ip: "HUCC{fake_flag_7}",  dueDate: "Jan 15, 2025 16:00", cpuPercentage: 100, status: "active"   },
  { id: "7",  number: "07", serviceName: "Tigist Haile",    osType: "ubuntu",  serviceLocation: "RSA Weak Keys",          countryCode: "us", ip: "HUCC{bad_attempt}",  dueDate: "Jan 15, 2025 16:15", cpuPercentage: 15,  status: "inactive" },
  { id: "8",  number: "08", serviceName: "Yonas Girma",     osType: "windows", serviceLocation: "Reverse Me",             countryCode: "de", ip: "HUCC{fake_flag_4}",  dueDate: "Jan 15, 2025 16:30", cpuPercentage: 100, status: "active"   },
  { id: "9",  number: "09", serviceName: "Natnael Desta",   osType: "ubuntu",  serviceLocation: "Caesar's Secret",        countryCode: "fr", ip: "HUCC{fake_flag_2}",  dueDate: "Jan 15, 2025 16:50", cpuPercentage: 100, status: "active"   },
  { id: "10", number: "10", serviceName: "Abebe Kebede",    osType: "windows", serviceLocation: "OSINT Challenge",        countryCode: "us", ip: "HUCC{wrong_again}",  dueDate: "Jan 15, 2025 17:05", cpuPercentage: 5,   status: "inactive" },
];

export default function SubmissionsPage() {
  const correct = submissions.filter(s => s.status === "active").length;
  const incorrect = submissions.filter(s => s.status === "inactive").length;
  const points = submissions.filter(s => s.status === "active").length * 100;

  const statsWithValues = [
    { ...stats[0], title: `${submissions.length} Total Submissions` },
    { ...stats[1], title: `${correct} Correct Flags` },
    { ...stats[2], title: `${incorrect} Incorrect Flags` },
    { ...stats[3], title: `${points} Points Awarded` },
  ];

  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <AdminNavbar activeItem="CTF Management" transparent={false} />

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="uppercase tracking-widest mb-2 font-medium" style={{ color: '#C9C73C', fontSize: '13px' }}>CTF Management</p>
          <h1 className="font-light mb-2" style={{ fontSize: '36px', color: '#F6F8FA' }}>Submission Monitor</h1>
          <p className="font-light" style={{ fontSize: '18px', color: 'rgba(246,248,250,0.6)' }}>Review all flag submissions from members</p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsWithValues.map((stat) => (
            <ServiceCard
              key={stat.title}
              title={stat.title}
              href={stat.href}
              imgSrc={stat.imgSrc}
              imgAlt={stat.imgAlt}
              variant={stat.variant}
              className="min-h-[160px]"
            />
          ))}
        </div>

        {/* Submissions Table */}
        <ServerManagementTable
          title="Flag Submissions"
          servers={submissions}
        />
      </div>

      <Footer />
    </div>
  );
}
