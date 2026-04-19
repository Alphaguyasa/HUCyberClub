"use client";

import { useState } from "react";
import { Spectral } from "next/font/google";
import AdminNavbar from "@/components/admin-navbar";
import { Component as Footer } from "@/components/footer-taped-design";
import { LeaderboardCard } from "@/components/first-place-leaderboard";
import { ServerManagementTable } from "@/components/server-management-table";
import type { Server } from "@/components/server-management-table";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const leaderboard = [
  { rank: 1, name: "Natnael Desta",   avatar: "https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png", points: 850, solved: 7, score: 95, tone: "emerald" as const, lastActivity: "Jan 15, 2025 16:45" },
  { rank: 2, name: "Biruk Tadesse",   avatar: "https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png", points: 700, solved: 6, score: 80, tone: "blue"    as const, lastActivity: "Jan 15, 2025 16:00" },
  { rank: 3, name: "Selam Bekele",    avatar: "https://raw.githubusercontent.com/nayanrdeveloper/shadcn-extras/refs/heads/dev/public/avatars/man.png", points: 650, solved: 5, score: 70, tone: "zinc"    as const, lastActivity: "Jan 15, 2025 15:01" },
  { rank: 4, name: "Dawit Tesfaye",   avatar: "", points: 550, solved: 4, score: 60, lastActivity: "Jan 15, 2025 16:30" },
  { rank: 5, name: "Meron Alemu",     avatar: "", points: 400, solved: 3, score: 45, lastActivity: "Jan 15, 2025 15:35" },
  { rank: 6, name: "Yonas Girma",     avatar: "", points: 300, solved: 2, score: 35, lastActivity: "Jan 15, 2025 15:20" },
  { rank: 7, name: "Tigist Haile",    avatar: "", points: 175, solved: 1, score: 20, lastActivity: "Jan 15, 2025 16:15" },
  { rank: 8, name: "Abebe Kebede",    avatar: "", points: 75,  solved: 1, score: 10, lastActivity: "Jan 15, 2025 14:45" },
];

const tableData: Server[] = leaderboard.map((p, i) => ({
  id: String(i + 1),
  number: String(p.rank).padStart(2, "0"),
  serviceName: p.name,
  osType: "ubuntu" as const,
  serviceLocation: `${p.solved} challenges solved`,
  countryCode: "us" as const,
  ip: `${p.points} pts`,
  dueDate: p.lastActivity,
  cpuPercentage: p.score,
  status: p.rank === 1 ? "active" : p.rank <= 3 ? "paused" : "inactive",
}));

export default function ScoresPage() {
  const top3 = leaderboard.slice(0, 3);
  // order: 2nd, 1st, 3rd for podium effect
  const podium = [top3[1], top3[0], top3[2]];

  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <AdminNavbar activeItem="CTF Management" transparent={false} />

      <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="uppercase tracking-widest mb-2 font-medium" style={{ color: '#C9C73C', fontSize: '13px' }}>CTF Management</p>
          <h1 className="font-light mb-2" style={{ fontSize: '36px', color: '#F6F8FA' }}>Leaderboard</h1>
          <p className="font-light" style={{ fontSize: '18px', color: 'rgba(246,248,250,0.6)' }}>Member rankings and scores</p>
        </div>

        {/* Top 3 LeaderboardCards — podium order: 2nd, 1st, 3rd */}
        <div className="flex items-end justify-center gap-6 mb-16">
          {podium.map((p, i) => {
            const heights = ["pb-0", "pb-8", "pb-0"];
            return (
              <div key={p.name} className={`w-full max-w-[220px] pt-16 ${heights[i]}`}>
                <LeaderboardCard
                  name={p.name}
                  amount={p.points}
                  amountPrefix=""
                  avatarSrc={p.avatar}
                  rank={p.rank}
                  score={p.score}
                  label="Score"
                  tone={p.tone}
                  size="md"
                />
              </div>
            );
          })}
        </div>

        {/* Full Rankings Table */}
        <div className="max-w-6xl mx-auto">
          <ServerManagementTable
            title="Full Rankings"
            servers={tableData}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
