"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const socialPaths = [
  "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
];

const navItems = ["Home", "About", "Resources", "Events", "Contact"];

const getHref = (item: string) => {
  switch (item) {
    case "Home": return "/";
    case "About": return "/about";
    case "Resources": return "/resources";
    case "Events": return "/events";
    case "Contact": return "/contact";
    default: return "/";
  }
};

interface NavbarProps {
  activeItem?: string;
  transparent?: boolean;
}

export default function Navbar({ activeItem = "Home", transparent = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape key + focus management
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

  // Focus first menu item when menu opens
  useEffect(() => {
    if (menuOpen) {
      const firstLink = menuRef.current?.querySelector("a");
      firstLink?.focus();
    }
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const bgColor = transparent
    ? scrolled ? 'rgb(80, 85, 92)' : 'transparent'
    : 'rgb(80, 85, 92)';

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded focus:text-white focus:font-medium"
        style={{ backgroundColor: '#C9C73C', color: '#111111' }}
      >
        Skip to content
      </a>

      <header
        className="w-full fixed top-0 z-[100] transition-all duration-300"
        style={{ backgroundColor: bgColor, boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.08)' : 'none' }}
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
            <span className="font-semibold text-sm md:text-base hidden sm:block" style={{ color: '#ffffff' }}>
              Haramaya University Cyber Security Club
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item} href={getHref(item)}
                className="pb-1 transition-all hover:opacity-70"
                aria-current={item === activeItem ? "page" : undefined}
                style={{
                  color: '#ffffff',
                  fontSize: '15px',
                  borderBottom: item === activeItem ? '2px solid #ffffff' : 'none',
                  fontWeight: item === activeItem ? 600 : 400,
                }}
              >{item}</Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-2">
              {[
                { path: socialPaths[0], label: "LinkedIn" },
                { path: socialPaths[1], label: "GitHub" },
                { path: socialPaths[2], label: "Twitter" },
              ].map(({ path, label }, i) => (
                <a key={i} href="#" aria-label={label}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#111111' }}>
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>

            <a href="/login" className="hidden sm:block text-white px-4 md:px-6 py-2 font-medium transition-opacity hover:opacity-90 text-sm md:text-base" style={{ backgroundColor: '#d2d076', borderRadius: '9999px' }}>
              Join Us
            </a>

            {/* Dark mode toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden sm:flex w-8 h-8 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                )}
              </button>
            )}

            {/* Hamburger */}
            <button
              ref={hamburgerRef}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="lg:hidden px-4 pb-6 pt-2 flex flex-col gap-4"
            style={{ backgroundColor: 'rgb(80, 85, 92)' }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link key={item} href={getHref(item)}
                onClick={() => setMenuOpen(false)}
                className="text-white text-base py-2 border-b border-white/10 hover:opacity-70 transition-opacity"
                aria-current={item === activeItem ? "page" : undefined}
                style={{ fontWeight: item === activeItem ? 600 : 400 }}
              >{item}</Link>
            ))}
            <div className="flex gap-3 pt-2">
              {[
                { path: socialPaths[0], label: "LinkedIn" },
                { path: socialPaths[1], label: "GitHub" },
                { path: socialPaths[2], label: "Twitter" },
              ].map(({ path, label }, i) => (
                <a key={i} href="#" aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#111111' }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
            <a href="/login" className="text-white px-6 py-2 font-medium w-fit" style={{ backgroundColor: '#d2d076', borderRadius: '9999px' }}>
              Join Us
            </a>
          </div>
        )}
      </header>
    </>
  );
}
