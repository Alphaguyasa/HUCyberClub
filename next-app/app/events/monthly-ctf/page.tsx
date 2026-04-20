"use client";

import { useState, useEffect } from "react";
import { Spectral } from "next/font/google";
import Navbar from "@/components/navbar";
import { Component as Footer } from "@/components/footer-taped-design";
import Link from "next/link";
import ShiftingCountdown from "@/components/countdown-timer";
import { Progress } from "@/components/progress";
import GlassCard from "@/components/glass-card";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const MONTH = "January 2025";
const DEADLINE = new Date(Date.now() + 5 * 60 * 1000);

const challenges = [
  { id: 1, name: "SQL Injection Basics",  category: "Web",       difficulty: "Easy",   points: 100, solves: 42, solved: true,  description: "A vulnerable login form is hiding a secret. Bypass authentication and retrieve the hidden flag.", hints: ["Think about how SQL queries are constructed.", "Try a single quote to break the query."] },
  { id: 2, name: "Caesar's Secret",       category: "Crypto",    difficulty: "Easy",   points: 75,  solves: 61, solved: true,  description: "An ancient cipher protects this message. Decode it to find the flag hidden within.", hints: ["Julius Caesar used a shift of 3."] },
  { id: 3, name: "Hidden in Plain Sight", category: "Forensics", difficulty: "Medium", points: 200, solves: 28, solved: false, description: "An image file was sent to us. Something is hidden inside. Use your forensics skills to extract the flag.", hints: ["Try examining the file metadata.", "Steganography tools might help."] },
  { id: 4, name: "Reverse Me",            category: "Reverse",   difficulty: "Medium", points: 250, solves: 19, solved: false, description: "A compiled binary checks for a password. Reverse engineer it to find what it's looking for.", hints: ["Use a disassembler to inspect the binary.", "Look for string comparisons."] },
  { id: 5, name: "Buffer Overflow 101",   category: "Pwn",       difficulty: "Hard",   points: 400, solves: 8,  solved: false, description: "A classic stack-based buffer overflow. Exploit it to gain control of the instruction pointer.", hints: ["Find the offset to the return address.", "Control RIP/EIP to redirect execution."] },
  { id: 6, name: "OSINT Challenge",       category: "OSINT",     difficulty: "Easy",   points: 100, solves: 55, solved: false, description: "Using only publicly available information, find the flag hidden across various online sources.", hints: ["Start with the club's public social media."] },
];

const topPlayers = [
  { rank: 1, name: "Natnael Desta",  points: 775, solved: 6, badge: "🥇" },
  { rank: 2, name: "Biruk Tadesse",  points: 650, solved: 5, badge: "🥈" },
  { rank: 3, name: "Selam Bekele",   points: 500, solved: 4, badge: "🥉" },
  { rank: 4, name: "Dawit Tesfaye",  points: 350, solved: 3, badge: null },
  { rank: 5, name: "Meron Alemu",    points: 200, solved: 2, badge: null },
];

const timeline = [
  { date: "Jan 1",  label: "Challenge Released",  done: true  },
  { date: "Jan 10", label: "First Blood Claimed", done: true  },
  { date: "Jan 20", label: "Hint Unlocks",        done: true  },
  { date: "Jan 31", label: "Submissions Close",   done: false },
  { date: "Feb 3",  label: "Winners Announced",   done: false },
];

const catColor: Record<string, string> = { Web: "#60a5fa", Crypto: "#a78bfa", Forensics: "#fb923c", Reverse: "#34d399", Pwn: "#f472b6", OSINT: "#38bdf8" };
const diffColor: Record<string, string> = { Easy: "#4ade80", Medium: "#facc15", Hard: "#f87171" };

// ── Terminal ──────────────────────────────────────────────────────────────────
function Terminal() {
  const TOTAL = 7;
  const [visible, setVisible] = useState<string[]>([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const lines = [
      "$ ./monthly_ctf --init",
      "> Loading challenge environment...",
      "> Connecting to HU Cyber Club servers...",
      "> [OK] 6 challenges loaded",
      "> [OK] Scoreboard active",
      "> [OK] Flag validator online",
      "> Ready. Good luck, hacker.",
    ];
    let i = 0;
    const t = setInterval(() => {
      if (i < lines.length) { setVisible(prev => [...prev, lines[i]]); i++; }
      else clearInterval(t);
    }, 400);
    const c = setInterval(() => setCursor(p => !p), 500);
    return () => { clearInterval(t); clearInterval(c); };
  }, []);

  return (
    <div className="rounded-2xl p-6 font-mono text-sm" style={{ backgroundColor: '#0d1117', border: '1px solid rgba(201,199,60,0.3)' }}>
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs" style={{ color: 'rgba(246,248,250,0.3)' }}>terminal — monthly_ctf</span>
      </div>
      {visible.filter(Boolean).map((line, i) => (
        <div key={i} className="mb-1" style={{ color: line.startsWith("$") ? '#C9C73C' : line.includes("[OK]") ? '#4ade80' : 'rgba(246,248,250,0.7)' }}>
          {line}
        </div>
      ))}
      {visible.length < TOTAL && (
        <span style={{ color: '#C9C73C' }}>{cursor ? "█" : " "}</span>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function MonthlyCTFPage() {
  const [unlocked, setUnlocked] = useState(true);
  const [selected, setSelected] = useState<typeof challenges[0] | null>(null);
  const [flag, setFlag] = useState("");
  const [flagResult, setFlagResult] = useState<"correct" | "wrong" | null>(null);
  const [activeTab, setActiveTab] = useState<"challenges" | "leaderboard" | "timeline">("challenges");
  const [filterCat, setFilterCat] = useState("All");
  const [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const closeModal = () => { setSelected(null); setFlag(""); setFlagResult(null); };
  const submitFlag = () => setFlagResult(flag.trim() === `HUCC{fake_flag_${selected?.id}}` ? "correct" : "wrong");

  const totalPoints = challenges.reduce((a, c) => a + c.points, 0);
  const solvedPoints = challenges.filter(c => c.solved).reduce((a, c) => a + c.points, 0);
  const solvedCount = challenges.filter(c => c.solved).length;

  const filteredChallenges = filterCat === "All" ? challenges : challenges.filter(c => c.category === filterCat);
  const totalPages = Math.ceil(filteredChallenges.length / PER_PAGE);
  const pagedChallenges = filteredChallenges.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#0d1117' }}>
      <Navbar activeItem="Events" transparent={true} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        <img src="/images/activectf.jpg" alt="Monthly CTF" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.75)' }} />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(201,199,60,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,199,60,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 font-mono text-xs" style={{ backgroundColor: 'rgba(201,199,60,0.15)', border: '1px solid rgba(201,199,60,0.4)', color: '#C9C73C' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {unlocked ? "LIVE" : "STARTING SOON"} — {MONTH}
          </div>
          <h1 className="font-light mb-4" style={{ fontSize: 'clamp(32px, 6vw, 64px)', color: '#ffffff', lineHeight: 1.1 }}>
            Monthly CTF<br /><span style={{ color: '#C9C73C' }}>Challenge</span>
          </h1>
          <p className="mb-10 font-light" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>
            {unlocked ? "Challenges are live. Good luck, hacker." : "Challenges unlock when the timer hits zero."}
          </p>

          {!unlocked ? (
            <div className="w-full max-w-2xl mx-auto mb-10">
              <ShiftingCountdown targetDate={DEADLINE} onComplete={() => setUnlocked(true)} />
            </div>
          ) : (
            <div className="flex gap-4 justify-center flex-wrap mb-10">
              <button onClick={() => setActiveTab("challenges")}
                className="px-8 py-3 font-medium rounded-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C9C73C', color: '#111111', fontSize: '16px' }}>
                View Challenges
              </button>
              <button onClick={() => setActiveTab("leaderboard")}
                className="px-8 py-3 font-medium rounded-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'transparent', border: '2px solid #ffffff', color: '#ffffff', fontSize: '16px' }}>
                Leaderboard
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Locked State */}
      {!unlocked && (
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(201,199,60,0.1)', border: '2px solid rgba(201,199,60,0.3)' }}>
            <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="#C9C73C" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <h2 className="font-semibold mb-3" style={{ fontSize: '24px', color: '#F6F8FA' }}>Challenges Locked</h2>
          <p className="font-light" style={{ color: 'rgba(246,248,250,0.5)', fontSize: '16px' }}>
            The challenges for this month will be revealed when the countdown reaches zero. Stay ready.
          </p>
        </div>
      )}

      {/* Unlocked Content */}
      {unlocked && (
        <>
          {/* Stats Bar */}
          <div style={{ backgroundColor: '#161b22', borderBottom: '1px solid rgba(201,199,60,0.15)' }}>
            <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Challenges",    value: challenges.length },
                { label: "Your Progress", value: `${solvedCount}/${challenges.length}` },
                { label: "Points Earned", value: `${solvedPoints} pts` },
                { label: "Total Points",  value: `${totalPoints} pts` },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <p className="font-bold font-mono" style={{ fontSize: '24px', color: '#C9C73C' }}>{s.value}</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(246,248,250,0.5)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Tabs */}
            <div className="flex gap-1 mb-10 p-1 rounded-xl w-fit" style={{ backgroundColor: 'rgba(246,248,250,0.05)' }}>
              {(["challenges", "leaderboard", "timeline"] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className="px-6 py-2 rounded-lg text-sm font-medium capitalize transition-all"
                  style={{ backgroundColor: activeTab === tab ? '#C9C73C' : 'transparent', color: activeTab === tab ? '#111111' : 'rgba(246,248,250,0.6)' }}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Challenges Tab */}
            {activeTab === "challenges" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Panel */}
                <div className="lg:col-span-1 space-y-6">
                  <Terminal />

                  {/* Progress Bar */}
                  <div className="p-5 rounded-2xl" style={{ backgroundColor: '#161b22', border: '1px solid rgba(246,248,250,0.08)' }}>
                    <p className="text-sm font-semibold mb-4" style={{ color: '#F6F8FA' }}>Your Progress</p>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span style={{ color: 'rgba(246,248,250,0.7)' }}>Challenges Solved</span>
                        <span style={{ color: '#C9C73C' }}>{solvedCount}/{challenges.length}</span>
                      </div>
                      <Progress
                        value={(solvedCount / challenges.length) * 100}
                        className="w-full h-2"
                        style={{ backgroundColor: 'rgba(246,248,250,0.1)' }}
                        indicatorClassName="bg-[#C9C73C]"
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span style={{ color: 'rgba(246,248,250,0.7)' }}>Points Earned</span>
                        <span style={{ color: '#C9C73C' }}>{solvedPoints}/{totalPoints}</span>
                      </div>
                      <Progress
                        value={(solvedPoints / totalPoints) * 100}
                        className="w-full h-2"
                        style={{ backgroundColor: 'rgba(246,248,250,0.1)' }}
                        indicatorClassName="bg-[#a78bfa]"
                      />
                    </div>
                  </div>

                  {/* Category List */}
                  <div className="p-5 rounded-2xl" style={{ backgroundColor: '#161b22', border: '1px solid rgba(246,248,250,0.08)' }}>
                    <p className="text-sm font-semibold mb-3" style={{ color: '#F6F8FA' }}>Categories</p>
                    {Object.entries(catColor).map(([cat, color]) => {
                      const count = challenges.filter(c => c.category === cat).length;
                      if (!count) return null;
                      return (
                        <div key={cat} onClick={() => { setFilterCat(cat); setPage(1); }}
                          className="flex items-center justify-between mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: filterCat === cat ? color : 'rgba(246,248,250,0.3)' }} />
                            <span className="text-xs" style={{ color: filterCat === cat ? color : 'rgba(246,248,250,0.7)' }}>{cat}</span>
                          </div>
                          <span className="text-xs font-mono" style={{ color }}>{count}</span>
                        </div>
                      );
                    })}
                    <div onClick={() => { setFilterCat("All"); setPage(1); }}
                      className="flex items-center justify-between mt-3 pt-3 cursor-pointer hover:opacity-80 transition-opacity"
                      style={{ borderTop: '1px solid rgba(246,248,250,0.08)' }}>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: filterCat === "All" ? '#C9C73C' : 'rgba(246,248,250,0.3)' }} />
                        <span className="text-xs" style={{ color: filterCat === "All" ? '#C9C73C' : 'rgba(246,248,250,0.7)' }}>All</span>
                      </div>
                      <span className="text-xs font-mono" style={{ color: '#C9C73C' }}>{challenges.length}</span>
                    </div>
                  </div>
                </div>

                {/* Right: GlassCards + Pagination */}
                <div className="lg:col-span-2">
                  <div className="flex flex-wrap justify-center gap-8 min-h-[320px]">
                    {pagedChallenges.map(c => (
                      <GlassCard
                        key={c.id}
                        title={c.name}
                        description={c.description}
                        category={c.category}
                        difficulty={c.difficulty}
                        points={c.points}
                        solves={c.solves}
                        solved={c.solved}
                        diffColor={diffColor[c.difficulty]}
                        catColor={catColor[c.category]}
                        onClick={() => setSelected(c)}
                      />
                    ))}
                    {filteredChallenges.length === 0 && (
                      <p className="text-center py-20 w-full" style={{ color: 'rgba(246,248,250,0.3)' }}>No challenges in this category.</p>
                    )}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-between mt-10 pt-6" style={{ borderTop: '1px solid rgba(246,248,250,0.08)' }}>
                      <p className="text-xs font-mono" style={{ color: 'rgba(246,248,250,0.4)' }}>
                        Showing {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filteredChallenges.length)} of {filteredChallenges.length}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setPage(p => Math.max(1, p - 1))}
                          disabled={page === 1}
                          className="w-8 h-8 flex items-center justify-center rounded-lg transition-all disabled:opacity-30"
                          style={{ backgroundColor: 'rgba(246,248,250,0.08)', color: '#F6F8FA' }}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                          <button
                            key={n}
                            onClick={() => setPage(n)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-all"
                            style={{ backgroundColor: page === n ? '#C9C73C' : 'rgba(246,248,250,0.08)', color: page === n ? '#111111' : 'rgba(246,248,250,0.6)' }}
                          >
                            {n}
                          </button>
                        ))}
                        <button
                          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                          disabled={page === totalPages}
                          className="w-8 h-8 flex items-center justify-center rounded-lg transition-all disabled:opacity-30"
                          style={{ backgroundColor: 'rgba(246,248,250,0.08)', color: '#F6F8FA' }}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Leaderboard Tab */}
            {activeTab === "leaderboard" && (
              <div className="max-w-2xl mx-auto">
                <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(246,248,250,0.08)' }}>
                  <div className="px-6 py-4" style={{ backgroundColor: '#161b22', borderBottom: '1px solid rgba(246,248,250,0.08)' }}>
                    <p className="font-semibold" style={{ color: '#F6F8FA' }}>Top Players — {MONTH}</p>
                  </div>
                  {topPlayers.map((p, i) => (
                    <div key={p.name} className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-white/5"
                      style={{ borderBottom: i < topPlayers.length - 1 ? '1px solid rgba(246,248,250,0.05)' : 'none', backgroundColor: i === 0 ? 'rgba(201,199,60,0.05)' : 'transparent' }}>
                      <span className="text-xl w-8 text-center">{p.badge ?? `#${p.rank}`}</span>
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: '#C9C73C', color: '#111' }}>
                        {p.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm" style={{ color: '#F6F8FA' }}>{p.name}</p>
                        <p className="text-xs" style={{ color: 'rgba(246,248,250,0.4)' }}>{p.solved} challenges solved</p>
                      </div>
                      <span className="font-bold font-mono" style={{ color: '#C9C73C' }}>{p.points} pts</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm mt-6" style={{ color: 'rgba(246,248,250,0.4)' }}>
                  Full rankings on the <Link href="/admin/ctf/scores" className="underline" style={{ color: '#C9C73C' }}>scores page</Link>
                </p>
              </div>
            )}

            {/* Timeline Tab */}
            {activeTab === "timeline" && (
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <div className="absolute left-5 top-0 bottom-0 w-px" style={{ backgroundColor: 'rgba(246,248,250,0.1)' }} />
                  {timeline.map((item, i) => (
                    <div key={i} className="flex gap-6 mb-8 relative">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                        style={{ backgroundColor: item.done ? '#C9C73C' : '#161b22', border: `2px solid ${item.done ? '#C9C73C' : 'rgba(246,248,250,0.2)'}` }}>
                        {item.done
                          ? <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#111" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          : <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(246,248,250,0.3)' }} />
                        }
                      </div>
                      <div className="pt-1.5">
                        <p className="text-xs font-mono mb-1" style={{ color: item.done ? '#C9C73C' : 'rgba(246,248,250,0.4)' }}>{item.date}</p>
                        <p className="font-medium" style={{ color: item.done ? '#F6F8FA' : 'rgba(246,248,250,0.5)', fontSize: '15px' }}>{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Flag Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} onClick={closeModal}>
          <div className="w-full max-w-lg rounded-3xl p-8 relative" style={{ backgroundColor: '#161b22', border: '1px solid rgba(201,199,60,0.2)' }} onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(246,248,250,0.08)', color: '#F6F8FA' }}>✕</button>
            <div className="flex gap-2 mb-4 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: `${catColor[selected.category]}20`, color: catColor[selected.category] }}>{selected.category}</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: `${diffColor[selected.difficulty]}20`, color: diffColor[selected.difficulty] }}>{selected.difficulty}</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium font-mono" style={{ backgroundColor: 'rgba(201,199,60,0.15)', color: '#C9C73C' }}>{selected.points} pts</span>
            </div>
            <h2 className="font-semibold mb-3" style={{ fontSize: '22px', color: '#F6F8FA' }}>{selected.name}</h2>
            <p className="mb-5 leading-relaxed text-sm" style={{ color: 'rgba(246,248,250,0.7)' }}>{selected.description}</p>
            {selected.hints.length > 0 && (
              <div className="mb-5 p-4 rounded-xl" style={{ backgroundColor: 'rgba(201,199,60,0.06)', border: '1px solid rgba(201,199,60,0.2)' }}>
                <p className="text-xs font-semibold mb-2 font-mono" style={{ color: '#C9C73C' }}>// HINTS</p>
                {selected.hints.map((h, i) => (
                  <p key={i} className="text-sm" style={{ color: 'rgba(246,248,250,0.6)' }}>→ {h}</p>
                ))}
              </div>
            )}
            <label className="block text-xs font-mono mb-2" style={{ color: 'rgba(246,248,250,0.5)' }}>$ submit_flag</label>
            <div className="flex gap-2">
              <input value={flag} onChange={e => { setFlag(e.target.value); setFlagResult(null); }}
                placeholder="HUCC{your_flag_here}"
                className="flex-1 px-4 py-2.5 rounded-xl font-mono text-sm outline-none"
                style={{ backgroundColor: 'rgba(246,248,250,0.06)', border: '1px solid rgba(246,248,250,0.12)', color: '#F6F8FA' }}
                onKeyDown={e => e.key === "Enter" && submitFlag()}
              />
              <button onClick={submitFlag} className="px-5 py-2.5 rounded-xl font-medium text-sm" style={{ backgroundColor: '#C9C73C', color: '#111111' }}>Submit</button>
            </div>
            {flagResult === "correct" && <p className="text-sm mt-3 font-mono" style={{ color: '#4ade80' }}>✓ Correct! Flag accepted. +{selected.points} pts</p>}
            {flagResult === "wrong"   && <p className="text-sm mt-3 font-mono" style={{ color: '#f87171' }}>✗ Wrong flag. Keep trying.</p>}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
