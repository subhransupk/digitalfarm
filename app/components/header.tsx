"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MobileMenu from "./mobile-menu";

interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgb(255, 255, 255)", "rgb(23, 23, 23)"]
  );

  return (
    <div>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mx-auto flex items-center justify-between rounded-none md:rounded-2xl transition-all duration-300 max-w-[1400px] border border-solid p-6 bg-transparent backdrop-blur-0 shadow-none border-transparent"
        >
          {/* Mobile menu button */}
          <motion.button 
            className="p-2 md:hidden transition-colors duration-300"
            style={{ color: textColor as unknown as string }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen 
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                }
              />
            </svg>
          </motion.button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="hover:text-brand-500 transition-all duration-300 text-sm font-medium tracking-wide"
                style={{ color: textColor as unknown as string }}
              >
                {item.name}
              </motion.a>
            ))}
            <button className="px-5 py-2 bg-brand-500 text-white text-sm rounded-full hover:bg-brand-600 transition-all duration-300 hover:scale-105 font-medium tracking-wide">
              Book A Call
            </button>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </motion.div>
      </motion.header>
    </div>
  );
} 