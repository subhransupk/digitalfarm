'use client';

import { motion } from "framer-motion";
import { useState } from "react";

// Project type definition
type Project = {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
};

// Project data
const projects: Project[] = [
  {
    title: "Modern E-commerce Platform",
    category: "Web Design",
    year: "2024",
    image: "/placeholder.jpg",
    description: "A cutting-edge e-commerce solution with seamless user experience and robust functionality."
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile Apps",
    year: "2024",
    image: "/placeholder.jpg",
    description: "Innovative healthcare application focusing on patient engagement and medical tracking."
  },
  {
    title: "Tech Startup Branding",
    category: "Branding",
    year: "2023",
    image: "/placeholder.jpg",
    description: "Complete brand identity design for an emerging technology startup."
  },
  {
    title: "Financial Dashboard",
    category: "UI/UX",
    year: "2023",
    image: "/placeholder.jpg",
    description: "Intuitive financial management interface with real-time data visualization."
  }
];

export default function WorkPage() {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter categories
  const categories = ["All", "Web Design", "Mobile Apps", "Branding", "UI/UX", "Marketing"];

  // Filter projects based on active category
  const filteredProjects = projects.filter(project => 
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section 
        animate={{ opacity: 1 }}
        className="w-full bg-neutral-900 pt-32 pb-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] gap-px opacity-[0.05]">
            {[...Array(400)].map((_, i) => (
              <motion.div
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1],
                }}
                className="bg-white"
                initial={{ opacity: 0.1 }}
                key={i}
                transition={{
                  delay: i * 0.01,
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-[1400px] mx-auto px-12 relative">
          <div className="flex flex-col items-center text-center relative">
            {/* Glowing Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[128px] pointer-events-none" />
            
            {/* Top Label */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <span className="text-brand-400 font-medium">Our Work</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Crafting Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                Masterpieces
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              animate={{ opacity: 1, y: 0 }}
              className="text-xl text-neutral-400 max-w-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explore our portfolio of successful projects that showcase our expertise in creating exceptional digital experiences.
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.section>

      {/* Filter Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-white py-16 relative"
      >
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((filter, index) => (
              <motion.button
                key={filter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-brand-500 text-white"
                    : "text-neutral-600 hover:text-white hover:bg-brand-500"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-white pb-32 relative"
      >
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  {/* Project Image */}
                  <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-white/80 mb-2">{project.description}</p>
                      <button className="text-white font-medium hover:text-brand-400 transition-colors">
                        View Project →
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-neutral-900">{project.category}</span>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-neutral-900">{project.year}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-brand-500 transition-colors">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-neutral-900 py-32 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] gap-px opacity-[0.03]">
            {[...Array(400)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-white"
                initial={{ opacity: 0.1 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.01,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-12 relative">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <span className="text-brand-400 font-medium">Start Your Project</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Create Something Amazing?
            </h2>

            <p className="text-xl text-neutral-400 max-w-2xl mb-12">
              Let&apos;s work together to bring your vision to life. Our team is ready to help you create exceptional digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="group relative px-8 py-4 bg-brand-500 text-white rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <button className="group px-8 py-4 bg-transparent text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300">
                View More Projects
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.section>
    </div>
  );
} 