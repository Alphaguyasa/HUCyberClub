"use client";

import { Spectral } from "next/font/google";
import AdminNavbar from "@/components/admin-navbar";
import { Component as Footer } from "@/components/footer-taped-design";
import StatsSection from "@/components/stats-defautlt";
import InlineAnalyticsTable from "@/components/inline-analytics-table";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const resourceStats = [
  { value: "63", label: "Total Resources", color: "#C9C73C" },
  { value: "2,272", label: "Total Views", color: "#C9C73C" },
  { value: "1,007", label: "Total Downloads", color: "#C9C73C" },
  { value: "4.6★", label: "Avg Rating", color: "#C9C73C" },
];

const categoryStats = [
  { category: "Tools", count: 12, views: 752 },
  { category: "Tutorials", count: 18, views: 634 },
  { category: "Guides", count: 9, views: 497 },
  { category: "CTF Writeups", count: 24, views: 389 },
];

const topResourcesData = [
  { month: "Wireshark Guide", events: 342, participants: 189, resources: 49 },
  { month: "Ethical Hacking Basics", events: 298, participants: 156, resources: 48 },
  { month: "Network Security Fundamentals", events: 276, participants: 134, resources: 47 },
  { month: "CTF Beginner Handbook", events: 245, participants: 122, resources: 46 },
  { month: "Metasploit Framework", events: 223, participants: 98, resources: 45 },
  { month: "Python for Hackers", events: 198, participants: 87, resources: 44 },
  { month: "Nmap Cheat Sheet", events: 187, participants: 145, resources: 47 },
  { month: "Web App Pen Testing", events: 176, participants: 76, resources: 43 },
];

export default function ResourcePopularityPage() {
  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <AdminNavbar activeItem="Analytics" transparent={false} />

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="font-light mb-2" style={{ fontSize: '36px', color: '#F6F8FA' }}>Resource Popularity</h1>
          <p className="font-light" style={{ fontSize: '18px', color: 'rgba(246,248,250,0.6)' }}>
            Identify which educational materials are accessed most frequently
          </p>
        </div>

        {/* Stats */}
        <div className="mb-10">
          <StatsSection stats={resourceStats} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Category Breakdown */}
          <div className="p-6 rounded-2xl" style={{ backgroundColor: '#2E3338' }}>
            <h2 className="font-light mb-6" style={{ fontSize: '20px', color: '#F6F8FA' }}>By Category</h2>
            <div className="space-y-4">
              {categoryStats.map((cat, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span style={{ fontSize: '14px', color: '#F6F8FA' }}>{cat.category}</span>
                    <span style={{ fontSize: '13px', color: 'rgba(246,248,250,0.5)' }}>{cat.views} views</span>
                  </div>
                  <div className="w-full h-2 rounded-full" style={{ backgroundColor: 'rgba(246,248,250,0.1)' }}>
                    <div className="h-2 rounded-full" style={{ width: `${(cat.views / 752) * 100}%`, backgroundColor: '#C9C73C' }} />
                  </div>
                  <p style={{ fontSize: '11px', color: 'rgba(246,248,250,0.4)', marginTop: '2px' }}>{cat.count} resources</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Resources Table */}
          <div className="lg:col-span-2">
            <h2 className="font-light mb-6" style={{ fontSize: '20px', color: '#F6F8FA' }}>Top Resources</h2>
            <InlineAnalyticsTable
              data={topResourcesData}
              columns={["Resource", "Views", "Downloads", "Rating"]}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}