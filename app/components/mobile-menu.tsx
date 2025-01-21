"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-neutral-950/90 backdrop-blur-lg z-50 md:hidden flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-center gap-8">
        {menuItems.map((item) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={item.href}
              className="text-2xl font-medium text-white hover:text-brand-500 transition-colors"
              onClick={onClose}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
        <motion.button 
          className="px-8 py-4 bg-brand-500 text-white text-lg rounded-full hover:bg-brand-600 transition-all duration-300 hover:scale-105 font-medium mt-4"
          onClick={onClose}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Book A Call
        </motion.button>
      </div>
    </motion.div>
  );
} 