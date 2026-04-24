"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Our Company", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto flex max-w-[1110px] items-center justify-between px-6 py-8 lg:px-0">
        {/* Logo */}
        <Link href="/" aria-label="Designo home">
          <Image
            src="/assets/shared/desktop/logo-dark.png"
            alt="Designo"
            width={202}
            height={27}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-[42px]" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-dark-grey text-[14px] uppercase tracking-[2px] hover:underline transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Image
            src={
              menuOpen
                ? "/assets/shared/mobile/icon-close.svg"
                : "/assets/shared/mobile/icon-hamburger.svg"
            }
            alt=""
            width={24}
            height={20}
          />
        </button>
      </div>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden absolute left-0 right-0 top-full bg-dark z-40 py-10"
          >
            <nav
              className="flex flex-col gap-8 px-6"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-[24px] uppercase tracking-[2px] hover:text-peach transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
