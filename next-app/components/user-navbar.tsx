"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "CTF Dashboard", href: "/dashboard" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Events", href: "/events" },
];

interface UserNavbarProps {
  activeItem?: string;
}

export default function UserNavbar({ activeItem = "CTF Dashboard" }: UserNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className="w-full fixed top-0 z-[100] transition-all duration-300"
      style={{ backgroundColor: "rgb(80, 85, 92)" }}
      role="banner"
    >
      <div className="max-w-full px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">

        {/* Branding */}
        <div className="flex items-center gap-2 md:gap-3">
          <Image
            src="/images/cyberc.jpg"
            alt="Haramaya University Cyber Security Club Logo"
            width={48}
            height={48}
            className="w-9 h-9 md:w-12 md:h-12 rounded-lg shadow-md object-cover"
          />
          <span className="font-semibold text-sm md:text-base hidden sm:block" style={{ color: "#ffffff" }}>
            Haramaya University Cyber Security Club
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6" aria-label="User navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="pb-1 transition-all hover:opacity-70"
              aria-current={item.label === activeItem ? "page" : undefined}
              style={{
                color: "#ffffff",
                fontSize: "15px",
                borderBottom: item.label === activeItem ? "2px solid #C9C73C" : "none",
                fontWeight: item.label === activeItem ? 600 : 400,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* User avatar / logout */}
          <Link
            href="/login"
            className="hidden sm:flex items-center gap-2 px-4 py-2 font-medium transition-opacity hover:opacity-80 text-sm"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "9999px", color: "#ffffff" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </Link>

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="user-mobile-menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="user-mobile-menu"
          ref={menuRef}
          className="lg:hidden px-4 pb-6 pt-2 flex flex-col gap-4"
          style={{ backgroundColor: "rgb(80, 85, 92)" }}
          role="navigation"
          aria-label="Mobile user navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-base py-2 border-b border-white/10 hover:opacity-70 transition-opacity"
              aria-current={item.label === activeItem ? "page" : undefined}
              style={{ fontWeight: item.label === activeItem ? 600 : 400 }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/login" className="text-white px-6 py-2 font-medium w-fit" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "9999px" }}>
            Logout
          </Link>
        </div>
      )}
    </header>
  );
}
