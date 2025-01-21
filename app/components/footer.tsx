'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 pt-24 text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-[repeat(40,minmax(0,1fr))] gap-px opacity-[0.02]">
          {[...Array(800)].map((_, i) => (
            <div key={i} className="bg-white w-full h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-12 relative">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 pb-16 border-b border-white/10">
          {/* Left Side - Logo & Description */}
          <div className="lg:w-1/3">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold mb-6">Digital Farm</h3>
            </Link>
            <p className="text-neutral-400 mb-8">
              Cultivating digital excellence through innovative design and development solutions. Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              {["twitter", "instagram", "github", "linkedin"].map((social) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    {social === "twitter" && (
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    )}
                    {social === "instagram" && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    )}
                    {social === "github" && (
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    )}
                    {social === "linkedin" && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side - Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:w-2/3">
            {[
              {
                title: "Company",
                links: [
                  { name: "About Us", href: "/about" },
                  { name: "Our Work", href: "/work" },
                  { name: "Services", href: "/services" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" }
                ]
              },
              {
                title: "Resources",
                links: [
                  { name: "Events", href: "/events" },
                  { name: "Newsletter", href: "/newsletter" },
                  { name: "Help Center", href: "/help" },
                  { name: "Terms", href: "/terms" },
                  { name: "Privacy", href: "/privacy" }
                ]
              },
              {
                title: "Services",
                links: [
                  { name: "UI/UX Design", href: "/services/ui-ux-design" },
                  { name: "Web Design & Development", href: "/services/web-development" },
                  { name: "SaaS Development", href: "/services/saas-development" },
                  { name: "App Development", href: "/services/app-development" },
                  { name: "Google & Facebook Ads", href: "/services/google-facebook-ads" }
                ]
              }
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-6 text-lg">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-neutral-400 hover:text-brand-400 transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Digital Farm. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/terms"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[128px] pointer-events-none" />
    </footer>
  );
} 