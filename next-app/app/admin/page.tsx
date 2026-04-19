"use client";

import { Spectral } from "next/font/google";
import AdminNavbar from "@/components/admin-navbar";
import UserManagement from "./user-management";
import CTFManagement from "./ctf-management";
import EventManagement from "./event-management";
import AnalyticsSection from "./analytics-section";

const spectral = Spectral({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function AdminPage() {
  return (
    <div className={`relative ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <AdminNavbar activeItem="Dashboard" transparent={true} />

      {/* Hero Section with ball curve bottom */}
      <div style={{ backgroundColor: '#25292E' }}>
        <section
          className="relative w-full pt-32 pb-48 px-6 text-center overflow-hidden"
          style={{
            clipPath: 'ellipse(100% 85% at 50% 0%)',
            minHeight: '500px',
            backgroundColor: 'transparent',
          }}
        >
          <img
            src="/images/admin.jpg"
            alt="Admin Dashboard"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />

          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="uppercase tracking-widest mb-4 font-medium" style={{ color: '#C9C73C', fontSize: '14px' }}>
              Control Panel
            </p>
            <h1 className="mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: '#ffffff', fontWeight: 400 }}>
              Admin Dashboard
            </h1>
            <p style={{ fontSize: '18px', color: '#f0f0f0', fontWeight: 300 }}>
              Manage and monitor all aspects of the Cyber Security Club
            </p>
          </div>
        </section>
      </div>

      <UserManagement />
      <CTFManagement />
      <EventManagement />
      <AnalyticsSection />
    </div>
  );
}
