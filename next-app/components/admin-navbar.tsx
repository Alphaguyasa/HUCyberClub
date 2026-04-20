"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const adminNavItems = [
  { label: "Dashboard", href: "/admin" },
  { label: "User Management", href: "/admin#user-management" },
  { label: "CTF Management", href: "/admin#ctf-management" },
  { label: "Event Management", href: "/admin#event-management" },
  { label: "Blog Management", href: "/admin#blog-management" },
  { label: "Analytics", href: "/admin#analytics" },
];

interface AdminNavbarProps {
  activeItem?: string;
  transparent?: boolean;
}

export default function AdminNavbar({ activeItem = "Dashboard", transparent = true }: AdminNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = transparent
    ? scrolled ? 'rgb(80, 85, 92)' : 'transparent'
    : 'rgb(80, 85, 92)';

  return (
    <header
      className="w-full fixed top-0 z-[100] transition-all duration-300"
      style={{ backgroundColor: bgColor, boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.08)' : 'none' }}
    >
      <div className="max-w-full px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">

        {/* Branding */}
        <div className="flex items-center gap-2 md:gap-3">
          <Image
            src="/images/cyberc.jpg"
            alt="HU Cyber Security Club Logo"
            width={48}
            height={48}
            className="w-9 h-9 md:w-12 md:h-12 rounded-lg shadow-md object-cover"
          />
          <span className="font-semibold text-sm md:text-base hidden sm:block" style={{ color: '#ffffff' }}>
            HU Cyber Club — Admin
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6" aria-label="Admin navigation">
          {adminNavItems.map((item) => (
            <Link key={item.label} href={item.href}
              className="pb-1 transition-all hover:opacity-70"
              style={{
                color: '#ffffff',
                fontSize: '15px',
                borderBottom: item.label === activeItem ? '2px solid #ffffff' : 'none',
                fontWeight: item.label === activeItem ? 600 : 400,
              }}
            >{item.label}</Link>
          ))}
        </nav>

        {/* Right - Logout */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden sm:block text-white px-4 md:px-6 py-2 font-medium transition-opacity hover:opacity-90 text-sm md:text-base"
            style={{ backgroundColor: '#111111', borderRadius: '9999px' }}
          >
            ← Back to Site
          </Link>
          <Link
            href="/login"
            className="text-white px-4 md:px-6 py-2 font-medium transition-opacity hover:opacity-90 text-sm md:text-base"
            style={{ backgroundColor: '#d2d076', color: '#111111', borderRadius: '9999px' }}
          >
            Log Out
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-6 pt-2 flex flex-col gap-4" style={{ backgroundColor: 'rgb(80, 85, 92)' }}>
          {adminNavItems.map((item) => (
            <Link key={item.label} href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-base py-2 border-b border-white/10 hover:opacity-70 transition-opacity"
              style={{ fontWeight: item.label === activeItem ? 600 : 400 }}
            >{item.label}</Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link href="/" className="text-white px-4 py-2 font-medium text-sm" style={{ backgroundColor: '#111111', borderRadius: '9999px' }}>
              ← Back to Site
            </Link>
            <Link href="/login" className="px-4 py-2 font-medium text-sm" style={{ backgroundColor: '#d2d076', color: '#111111', borderRadius: '9999px' }}>
              Log Out
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
