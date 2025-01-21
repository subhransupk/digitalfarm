"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, cubicBezier, MotionValue } from "framer-motion";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Custom easing function
const smoothEasing = cubicBezier(0.4, 0, 0.2, 1);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerMaxWidth, setHeaderMaxWidth] = useState(1400);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Calculate the width values
    const maxWidth = window.innerWidth;
    setHeaderMaxWidth(Math.min(1400, maxWidth));

    const handleResize = () => {
      setHeaderMaxWidth(Math.min(1400, window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Create an array of scroll points and corresponding widths
  const scrollPoints = Array.from({ length: 201 }, (_, i) => i); // 0 to 200
  const widthValues = scrollPoints.map(point => {
    const shrinkAmount = (point / 200) * 200; // Gradually increase from 0 to 200px
    return `${headerMaxWidth - shrinkAmount}px`;
  });

  // Transform values for scroll animations with smoother transitions
  const headerWidth = useTransform(scrollY, scrollPoints, widthValues);
  const headerPadding = useTransform(scrollY, [0, 200], ["1.5rem", "1rem"]);
  const headerBackground = useTransform(
    scrollY,
    [0, 100, 200],
    [
      "rgba(255, 255, 255, 0)",
      "rgba(255, 255, 255, 0.8)",
      "rgba(255, 255, 255, 1)"
    ]
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100, 200],
    [
      "none",
      "0 0 10px rgba(0, 0, 0, 0.05)",
      "0 0 20px rgba(0, 0, 0, 0.1)"
    ]
  );
  const headerBackdrop = useTransform(
    scrollY,
    [0, 100, 200],
    ["blur(0px)", "blur(5px)", "blur(10px)"]
  );

  const textColor = useTransform(
    scrollY,
    [0, 100, 200],
    [
      "rgba(0, 0, 0, 0.9)",
      "rgba(0, 0, 0, 0.9)",
      "rgba(0, 0, 0, 0.9)"
    ]
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 100, 200],
    [
      "rgba(0, 0, 0, 0)",
      "rgba(0, 0, 0, 0.04)",
      "rgba(0, 0, 0, 0.08)"
    ]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full z-50">
        <motion.header
          className="w-full flex justify-center pt-4"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: smoothEasing }}
        >
          <motion.div
            className="mx-auto flex items-center justify-between rounded-none md:rounded-2xl transition-all duration-1000"
            style={{
              width: headerWidth,
              padding: headerPadding,
              backgroundColor: headerBackground,
              backdropFilter: headerBackdrop,
              maxWidth: "1400px",
              boxShadow: headerShadow,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: headerBorder,
            }}
          >
            {/* Logo */}
            <Link href="/" className="relative w-32 h-8">
              <motion.div className="absolute inset-0">
                <Image
                  src="/images/logo/logo-white.png"
                  alt="Digital Farm Logo"
                  fill
                  className="object-contain transition-opacity duration-300"
                  style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) as unknown as number }}
                  priority
                />
              </motion.div>
              <motion.div className="absolute inset-0">
                <Image
                  src="/images/logo/logo.png"
                  alt="Digital Farm Logo"
                  fill
                  className="object-contain transition-opacity duration-300"
                  style={{ opacity: useTransform(scrollY, [0, 100], [0, 1]) as unknown as number }}
                  priority
                />
              </motion.div>
            </Link>

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
              <Link href="/book-a-call">
                <button className="px-5 py-2 bg-brand-500 text-white text-sm rounded-full hover:bg-brand-600 transition-all duration-300 hover:scale-105 font-medium tracking-wide">
                  Book A Call
                </button>
              </Link>
            </nav>

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
          </motion.div>
        </motion.header>
      </div>

      {/* Mobile Menu - Moved outside header */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-neutral-950/90 backdrop-blur-lg z-[60] md:hidden flex flex-col"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
        >
          <div className="flex justify-end p-6">
            <motion.button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className="text-2xl font-medium text-white hover:text-brand-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link href="/book-a-call">
                <button 
                  className="px-8 py-4 bg-brand-500 text-white text-lg rounded-full hover:bg-brand-600 transition-all duration-300 hover:scale-105 font-medium mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book A Call
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
} 