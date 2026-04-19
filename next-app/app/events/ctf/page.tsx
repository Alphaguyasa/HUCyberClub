"use client";

import { useState } from "react";
import { Spectral } from "next/font/google";
import Navbar from "@/components/navbar";
import { Component as Footer } from "@/components/footer-taped-design";
import GlassCard from "@/components/glass-card";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const challenges = [
  { id: 1, name: "SQL Injection Basics", category: "Web", difficulty: "Easy", points: 100, solves: 42, description: "A vulnerable login form is hiding a secret. Can you bypass authentication and retrieve the hidden flag?", hints: ["Think about how SQL queries are constructed.", "Try using a single quote to break the query."], solved: true },
  { id: 2, name: "Caesar's Secret", category: "Crypto", difficulty: "Easy", points: 75, solves: 61, description: "An ancient cipher protects this message. Decode it to find the flag hidden within.", hints: ["Julius Caesar used a shift of 3."], solved: true },
  { id: 3, name: "Hidden in Plain Sight", category: "Forensics", difficulty: "Medium", points: 200, solves: 28, description: "An image file was sent to us. Something is hidden inside. Use your forensics skills to extract the flag.", hints: ["Try examining the file metadata.", "Steganography tools might help."], solved: false },
  { id: 4, name: "Reverse Me", category: "Reverse", difficulty: "Medium", points: 250, solves: 19, description: "A compiled binary checks for a password. Reverse engineer it to find what it's looking for.", hints: ["Use a disassembler to inspect the binary.", "Look for string comparisons."], solved: false },
  { id: 5, name: "Buffer Overflow 101", category: "Pwn", difficulty: "Hard", points: 400, solves: 8, description: "A classic stack-based buffer overflow vulnerability. Exploit it to gain control of the instruction pointer.", hints: ["Find the offset to the return address.", "Control RIP/EIP to redirect execution."], solved: false },
  { id: 6, name: "OSINT Challenge", category: "OSINT", difficulty: "Easy", points: 100, solves: 55, description: "Using only publicly available information, find the flag hidden across various online sources.", hints: ["Start with the club's public social media."], solved: false },
  { id: 7, name: "XSS Playground", category: "Web", difficulty: "Medium", points: 200, solves: 23, description: "A comment section on a web app is vulnerable. Inject a script to steal the admin's cookie.", hints: ["Try basic script injection first.", "Check if input is sanitized."], solved: false },
  { id: 8, name: "RSA Weak Keys", category: "Crypto", difficulty: "Hard", points: 350, solves: 11, description: "The RSA implementation uses dangerously small primes. Factor the modulus and decrypt the message.", hints: ["Small primes can be factored quickly.", "Use the factored primes to compute the private key."], solved: false },
];

const categories = ["All", "Web", "Crypto", "Forensics", "Reverse", "Pwn", "OSINT"];
const difficulties = ["All", "Easy", "Medium", "Hard"];
const statuses = ["All", "Solved", "Unsolved"];

const diffColor: Record<string, string> = { Easy: "#4ade80", Medium: "#facc15", Hard: "#f87171" };
const catColor: Record<string, string> = { Web: "#60a5fa", Crypto: "#a78bfa", Forensics: "#fb923c", Reverse: "#34d399", Pwn: "#f472b6", OSINT: "#38bdf8" };

export default function CTFPage() {
  const [cat, setCat] = useState("All");
  const [diff, setDiff] = useState("All");
  const [status, setStatus] = useState("All");
  const [selected, setSelected] = useState<typeof challenges[0] | null>(null);
  const [flag, setFlag] = useState("");
  const [flagResult, setFlagResult] = useState<"correct" | "wrong" | null>(null);

  const filtered = challenges.filter(c =>
    (cat === "All" || c.category === cat) &&
    (diff === "All" || c.difficulty === diff) &&
    (status === "All" || (status === "Solved" ? c.solved : !c.solved))
  );

  const submitFlag = () => {
    setFlagResult(flag.trim() === `HUCC{fake_flag_${selected?.id}}` ? "correct" : "wrong");
  };

  const closeModal = () => { setSelected(null); setFlag(""); setFlagResult(null); };

  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <Navbar activeItem="Events" transparent={true} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <img src="/images/activectf.jpg" alt="CTF" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="uppercase tracking-widest mb-4 font-medium" style={{ color: '#C9C73C', fontSize: '14px' }}>Compete & Learn</p>
          <h1 className="mb-4 font-light" style={{ fontSize: 'clamp(28px, 5vw, 52px)', color: '#ffffff' }}>CTF Challenges</h1>
          <p className="font-light" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)' }}>Test your skills, earn points, and climb the leaderboard</p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{ backgroundColor: cat === c ? '#C9C73C' : 'rgba(246,248,250,0.1)', color: cat === c ? '#111111' : '#F6F8FA' }}>
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {difficulties.map(d => (
              <button key={d} onClick={() => setDiff(d)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{ backgroundColor: diff === d ? '#C9C73C' : 'rgba(246,248,250,0.1)', color: diff === d ? '#111111' : '#F6F8FA' }}>
                {d}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {statuses.map(s => (
              <button key={s} onClick={() => setStatus(s)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{ backgroundColor: status === s ? '#C9C73C' : 'rgba(246,248,250,0.1)', color: status === s ? '#111111' : '#F6F8FA' }}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Challenge Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {filtered.map(c => (
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
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: 'rgba(246,248,250,0.4)' }}>No challenges match your filters.</div>
        )}
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} onClick={closeModal}>
          <div className="w-full max-w-lg rounded-3xl p-8 relative" style={{ backgroundColor: '#2E3338', border: '1px solid rgba(246,248,250,0.1)' }} onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(246,248,250,0.1)', color: '#F6F8FA' }}>✕</button>

            <div className="flex gap-2 mb-4 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: `${catColor[selected.category]}20`, color: catColor[selected.category] }}>{selected.category}</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: `${diffColor[selected.difficulty]}20`, color: diffColor[selected.difficulty] }}>{selected.difficulty}</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: 'rgba(201,199,60,0.15)', color: '#C9C73C' }}>{selected.points} pts</span>
            </div>

            <h2 className="font-semibold mb-3" style={{ fontSize: '24px', color: '#F6F8FA' }}>{selected.name}</h2>
            <p className="mb-6 leading-relaxed" style={{ fontSize: '15px', color: 'rgba(246,248,250,0.7)' }}>{selected.description}</p>

            {selected.hints.length > 0 && (
              <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(201,199,60,0.08)', border: '1px solid rgba(201,199,60,0.2)' }}>
                <p className="text-xs font-semibold mb-2" style={{ color: '#C9C73C' }}>HINTS</p>
                {selected.hints.map((h, i) => (
                  <p key={i} className="text-sm" style={{ color: 'rgba(246,248,250,0.7)' }}>• {h}</p>
                ))}
              </div>
            )}

            <div className="mb-2">
              <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(246,248,250,0.7)' }}>Submit Flag</label>
              <div className="flex gap-2">
                <input
                  value={flag}
                  onChange={e => { setFlag(e.target.value); setFlagResult(null); }}
                  placeholder="HUCC{your_flag_here}"
                  className="flex-1 px-4 py-2.5 rounded-xl font-mono text-sm outline-none"
                  style={{ backgroundColor: 'rgba(246,248,250,0.08)', border: '1px solid rgba(246,248,250,0.15)', color: '#F6F8FA' }}
                />
                <button onClick={submitFlag}
                  className="px-5 py-2.5 rounded-xl font-medium text-sm"
                  style={{ backgroundColor: '#C9C73C', color: '#111111' }}>
                  Submit
                </button>
              </div>
            </div>
            {flagResult === "correct" && <p className="text-sm mt-2" style={{ color: '#4ade80' }}>✓ Correct! Challenge solved.</p>}
            {flagResult === "wrong" && <p className="text-sm mt-2" style={{ color: '#f87171' }}>✗ Incorrect flag. Try again.</p>}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
