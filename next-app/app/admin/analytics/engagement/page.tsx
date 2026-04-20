"use client";

import { Spectral } from "next/font/google";
import AdminNavbar from "@/components/admin-navbar";
import { Component as Footer } from "@/components/footer-taped-design";
import StatsSection from "@/components/stats-defautlt";
import InlineAnalyticsTable from "@/components/inline-analytics-table";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const engagementData = [
  { label: "CTF Competitions", participants: 89, completion: 72 },
  { label: "Workshops", participants: 64, completion: 88 },
  { label: "Seminars", participants: 112, completion: 95 },
  { label: "Resource Downloads", participants: 203, completion: 100 },
  { label: "Forum Posts", participants: 45, completion: 60 },
];

const monthlyStats = [
  { month: "Jan", events: 2, participants: 45, resources: 120 },
  { month: "Feb", events: 3, participants: 67, resources: 145 },
  { month: "Mar", events: 1, participants: 30, resources: 98 },
  { month: "Apr", events: 4, participants: 112, resources: 203 },
  { month: "May", events: 3, participants: 89, resources: 178 },
  { month: "Jun", events: 5, participants: 134, resources: 256 },
];

const topMembers = [
  { name: "Abebe Kebede", events: 8, points: 450, rank: 1 },
  { name: "Tigist Haile", events: 7, points: 380, rank: 2 },
  { name: "Dawit Tesfaye", events: 6, points: 320, rank: 3 },
  { name: "Meron Alemu", events: 5, points: 280, rank: 4 },
  { name: "Yonas Girma", events: 5, points: 260, rank: 5 },
];

const engagementStats = [
  { value: "18", label: "Total Events", color: "#C9C73C" },
  { value: "76%", label: "Avg Attendance", color: "#C9C73C" },
  { value: "89", label: "Active Members", color: "#C9C73C" },
  { value: "83%", label: "Completion Rate", color: "#C9C73C" },
];

export default function EngagementStatsPage() {
  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <AdminNavbar activeItem="Analytics" transparent={false} />

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="font-light mb-2" style={{ fontSize: '36px', color: '#F6F8FA' }}>Engagement Stats</h1>
          <p className="font-light" style={{ fontSize: '18px', color: 'rgba(246,248,250,0.6)' }}>
            Analyze engagement metrics across all club activities
          </p>
        </div>

        {/* Stats */}
        <div className="mb-10">
          <StatsSection stats={engagementStats} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Activity Breakdown */}
          <div className="p-6 rounded-2xl" style={{ backgroundColor: '#2E3338' }}>
            <h2 className="font-light mb-6" style={{ fontSize: '20px', color: '#F6F8FA' }}>Activity Breakdown</h2>
            <div className="space-y-4">
              {engagementData.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span style={{ fontSize: '14px', color: '#F6F8FA' }}>{item.label}</span>
                    <span style={{ fontSize: '14px', color: 'rgba(246,248,250,0.5)' }}>{item.participants} participants</span>
                  </div>
                  <div className="w-full h-2 rounded-full" style={{ backgroundColor: 'rgba(246,248,250,0.1)' }}>
                    <div className="h-2 rounded-full transition-all" style={{ width: `${item.completion}%`, backgroundColor: '#C9C73C' }} />
                  </div>
                  <p className="text-right mt-0.5" style={{ fontSize: '11px', color: 'rgba(246,248,250,0.4)' }}>{item.completion}% completion</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Engaged Members */}
          <div className="p-6 rounded-2xl" style={{ backgroundColor: '#2E3338' }}>
            <h2 className="font-light mb-6" style={{ fontSize: '20px', color: '#F6F8FA' }}>Top Engaged Members</h2>
            <div className="space-y-3">
              {topMembers.map((member, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: 'rgba(246,248,250,0.05)' }}>
                  <div className="flex items-center gap-3">
                    <span className="font-bold w-6 text-center" style={{ color: '#C9C73C', fontSize: '14px' }}>#{member.rank}</span>
                    <div>
                      <p className="font-medium" style={{ fontSize: '15px', color: '#F6F8FA' }}>{member.name}</p>
                      <p style={{ fontSize: '12px', color: 'rgba(246,248,250,0.5)' }}>{member.events} events attended</p>
                    </div>
                  </div>
                  <span className="font-bold" style={{ color: '#C9C73C', fontSize: '16px' }}>{member.points} pts</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Trend */}
        <div className="mb-10">
          <h2 className="font-light mb-6" style={{ fontSize: '20px', color: '#F6F8FA' }}>Monthly Trend</h2>
          <InlineAnalyticsTable data={monthlyStats} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
