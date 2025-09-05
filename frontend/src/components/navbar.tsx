"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react"; // Icône croix

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<"church" | "resources" | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-md">
      <nav
        className="flex justify-between items-center px-6 py-4 w-full"
        style={{
          background: "linear-gradient(90deg, #fffbe6 0%, #fff 60%, #ffe9b3 100%)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-gray-800 tracking-widest">
            EEB RPCF
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-medium text-gray-700">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-600 transition-colors px-2 py-1 rounded"
            >
              Accueil
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() =>
                setOpenMenu(openMenu === "church" ? null : "church")
              }
              className="hover:text-yellow-600 transition-colors flex items-center gap-1 px-2 py-1 rounded"
            >
              L’Église <span>▾</span>
            </button>
            <ul
              className={`absolute top-full left-0 mt-2 w-44 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 border border-yellow-100 z-20 ${
                openMenu === "church"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <li>
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/ministries"
                  className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition"
                >
                  Ministères
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition"
                >
                  Responsables
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button
              onClick={() =>
                setOpenMenu(openMenu === "resources" ? null : "resources")
              }
              className="hover:text-yellow-600 transition-colors flex items-center gap-1 px-2 py-1 rounded"
            >
              Ressources <span>▾</span>
            </button>
            <ul
              className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 border border-yellow-100 z-20 ${
                openMenu === "resources"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <li>
                <Link
                  href="/events"
                  className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition"
                >
                  Événements
                </Link>
              </li>
              <li>
                <Link
                  href="/sermons"
                  className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-700 transition"
                >
                  Prédications / Médiathèque
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-yellow-600 transition-colors px-2 py-1 rounded"
            >
              Contact & Dons
            </Link>
          </li>
        </ul>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-yellow-100 border border-yellow-100"
          onClick={() => setMobileMenu(true)}
          aria-label="Ouvrir le menu"
        >
          <span className="block w-6 h-0.5 bg-yellow-700"></span>
          <span className="block w-6 h-0.5 bg-yellow-700"></span>
          <span className="block w-6 h-0.5 bg-yellow-700"></span>
        </button>
      </nav>

      {/* Overlay */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileMenu(false)}
        />
      )}

      {/* Mobile Menu joli */}
      <div
        className={`fixed top-4 right-4 w-72 max-h-[90vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col p-6 transition-transform duration-300 md:hidden ${
          mobileMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Header menu avec croix */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-800">Menu</h3>
          <button
            onClick={() => setMobileMenu(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Fermer le menu"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Liens */}
        <ul className="flex flex-col gap-4 text-gray-700 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-600 transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-yellow-600 transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              href="/ministries"
              className="hover:text-yellow-600 transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              Ministères
            </Link>
          </li>
          <li>
            <Link
              href="/members"
              className="hover:text-yellow-600 transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              Responsables
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="hover:text-yellow-600 transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              Événements
            </Link>
          </li>
          <li>
            <Link
              href="/sermons"
              className="hover:text-yellow-600 transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              Prédications / Médiathèque
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-yellow-600 transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              Contact & Dons
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
