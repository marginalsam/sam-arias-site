"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Film", href: "/film" },
  { label: "P.H.0", href: "https://www.ph0silkpunk.com", external: true },
  {
    label: "Resume",
    href: "/assets/sam-arias-resume.pdf",
    external: true,
    isPdf: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samuelarias/",
    external: true,
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Determine if we're on the film or ph0 page for dark nav styling
  const isDarkPage = pathname === "/film" || pathname === "/ph0";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isDarkPage ? "bg-transparent" : "bg-white border-b border-gray-100"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className={`text-sm font-bold tracking-wider uppercase transition-colors ${
            isDarkPage
              ? "text-white hover:text-gray-300"
              : "text-gray-900 hover:text-brand-blue"
          }`}
        >
          Sam Arias
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = !link.external && pathname === link.href;
            return (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium tracking-wide transition-colors ${
                      isDarkPage
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-brand-blue"
                    }`}
                  >
                    {link.label}
                    {link.isPdf && (
                      <span className="ml-1 text-xs opacity-60">↗</span>
                    )}
                    {!link.isPdf && link.external && (
                      <span className="ml-1 text-xs opacity-60">↗</span>
                    )}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors border-b-2 pb-0.5 ${
                      isActive
                        ? isDarkPage
                          ? "border-white text-white"
                          : "border-brand-blue text-brand-blue"
                        : isDarkPage
                        ? "border-transparent text-gray-300 hover:text-white hover:border-gray-300"
                        : "border-transparent text-gray-600 hover:text-brand-blue hover:border-brand-blue"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-1 ${
            isDarkPage ? "text-white" : "text-gray-700"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${
              isDarkPage ? "bg-white" : "bg-gray-700"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${
              isDarkPage ? "bg-white" : "bg-gray-700"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${
              isDarkPage ? "bg-white" : "bg-gray-700"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden border-t ${
            isDarkPage
              ? "bg-black/90 border-gray-700"
              : "bg-white border-gray-100"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => {
              const isActive = !link.external && pathname === link.href;
              return (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium ${
                        isDarkPage
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-600 hover:text-brand-blue"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label} ↗
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-sm font-medium ${
                        isActive
                          ? isDarkPage
                            ? "text-white"
                            : "text-brand-blue"
                          : isDarkPage
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-600 hover:text-brand-blue"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
