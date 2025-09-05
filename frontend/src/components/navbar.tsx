"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<"church" | "resources" | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full flex justify-center fixed top-0 left-0 z-50 pointer-events-none">
      <nav
        className="pointer-events-auto mt-6 rounded-2xl shadow-xl border border-gray-200 flex justify-between items-center px-6 py-3 max-w-5xl w-[95vw] mx-auto bg-white/95"
        style={{
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-gray-800 tracking-widest">EEB RPCF</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-medium text-gray-800">
          <li>
            <Link href="/" className="hover:text-yellow-600 transition-colors px-2 py-1 rounded">
              Accueil
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === "church" ? null : "church")}
              className="hover:text-yellow-600 transition-colors flex items-center gap-1 px-2 py-1 rounded"
            >
              L’Église <span>▾</span>
            </button>
            <ul
              className={`absolute top-full left-0 mt-2 w-44 bg-white/95 rounded-md shadow-lg overflow-hidden transition-all duration-300 border border-gray-200 z-20 ${
                openMenu === "church" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <li>
                <Link href="/about" className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition">
                  Ministères
                </Link>
              </li>
              <li>
                <Link href="/members" className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition">
                  Responsables
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === "resources" ? null : "resources")}
              className="hover:text-yellow-600 transition-colors flex items-center gap-1 px-2 py-1 rounded"
            >
              Ressources <span>▾</span>
            </button>
            <ul
              className={`absolute top-full left-0 mt-2 w-52 bg-white/95 rounded-md shadow-lg overflow-hidden transition-all duration-300 border border-gray-200 z-20 ${
                openMenu === "resources" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <li>
                <Link href="/events" className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition">
                  Prédications / Médiathèque
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-600 transition-colors px-2 py-1 rounded">
              Contact & Dons
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle (Hamburger / Cross) */}
        <button
          className="md:hidden p-2 rounded-lg border-2 border-gray-300 text-gray-700 transition-all duration-300"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenu ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMobileMenu(false)} />
        )}
        <ul
          className={`fixed top-0 right-0 h-full w-64 bg-white/95 rounded-l-2xl shadow-lg z-50 flex flex-col gap-6 pt-24 px-8 text-gray-700 font-medium transition-transform duration-300 md:hidden ${
            mobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li>
            <Link href="/" className="hover:text-yellow-600 transition-colors" onClick={() => setMobileMenu(false)}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-600 transition-colors" onClick={() => setMobileMenu(false)}>
              À propos
            </Link>
          </li>
          <li>
            <Link href="/ministries" className="hover:text-yellow-600 transition-colors" onClick={() => setMobileMenu(false)}>
              Ministères
            </Link>
          </li>
          <li>
            <Link href="/members" className="hover:text-yellow-600 transition-colors" onClick={() => setMobileMenu(false)}>
              Responsables
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-yellow-600 transition-colors" onClick={() => setMobileMenu(false)}>
              Événements
            </Link>
          </li>
          <li>
            <Link href="/sermons" className="hover:text-yellow-600 transition-colors" onClick={() => setMobileMenu(false)}>
              Prédications / Médiathèque
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-600 transition-colors" onClick={() => setMobileMenu(false)}>
              Contact & Dons
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}