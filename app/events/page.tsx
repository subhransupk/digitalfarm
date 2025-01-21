'use client';

import { motion } from "framer-motion";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Digital Innovation Summit 2024",
    date: "March 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Tech Hub, San Francisco",
    category: "Conference",
    description: "Join industry leaders and innovators for a day of insights into the future of digital technology.",
    image: "/placeholder.jpg",
    featured: true,
    speakers: ["John Smith", "Sarah Johnson", "Michael Chen"],
    price: "Free",
    spots: "250 spots left"
  },
  {
    id: 2,
    title: "UX/UI Design Workshop",
    date: "March 20, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Design Studio, New York",
    category: "Workshop",
    description: "Hands-on workshop focusing on modern design principles and practical implementation.",
    image: "/placeholder.jpg",
    featured: true,
    speakers: ["Emily Brown", "David Wilson"],
    price: "$199",
    spots: "15 spots left"
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    date: "March 25, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Code Lab, Austin",
    category: "Workshop",
    description: "Intensive bootcamp covering the latest web development technologies and best practices.",
    image: "/placeholder.jpg",
    featured: false,
    speakers: ["Alex Turner"],
    price: "$299",
    spots: "20 spots left"
  },
  {
    id: 4,
    title: "AI in Business Seminar",
    date: "April 5, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "Business Center, Chicago",
    category: "Seminar",
    description: "Explore how AI is transforming business operations and customer experiences.",
    image: "/placeholder.jpg",
    featured: false,
    speakers: ["Robert Lee", "Lisa Chen"],
    price: "$149",
    spots: "100 spots left"
  }
];

// Get unique categories
const categories = ["All", ...Array.from(new Set(events.map(event => event.category)))];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = events.filter(event => 
    activeCategory === "All" ? true : event.category === activeCategory
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
              <span className="text-brand-400 font-medium">Upcoming Events</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Join Our
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                Learning Community
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              animate={{ opacity: 1, y: 0 }}
              className="text-xl text-neutral-400 max-w-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover workshops, seminars, and conferences that will help you stay ahead in the digital world.
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.section>

      {/* Featured Events Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-white py-32 relative"
      >
        <div className="max-w-[1400px] mx-auto px-12">
          {/* Section Header */}
          <div className="flex flex-col gap-4 mb-16">
            <motion.div
              className="bg-brand-500/10 rounded-full px-6 py-3 w-fit"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="text-brand-500 font-medium">Featured Events</span>
            </motion.div>

            <motion.h2
              className="text-4xl font-bold text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Don&apos;t Miss Out
            </motion.h2>
          </div>

          {/* Featured Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.filter(event => event.featured).map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-neutral-900">{event.category}</span>
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-brand-500 px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-white">{event.price}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.time}</span>
                  <span>•</span>
                  <span>{event.location}</span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-brand-500 transition-colors mb-4">
                  {event.title}
                </h3>

                <p className="text-neutral-600 mb-6">
                  {event.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-white" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-brand-500">{event.spots}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* All Events Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-neutral-50 py-32 relative"
      >
        <div className="max-w-[1400px] mx-auto px-12">
          {/* Section Header */}
          <div className="flex flex-col gap-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-brand-500/10 rounded-full px-6 py-3 w-fit"
            >
              <span className="text-brand-500 font-medium">All Events</span>
            </motion.div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-neutral-900"
              >
                Browse Events
              </motion.h2>

              <div className="flex flex-wrap gap-4">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`px-6 py-3 rounded-full transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-brand-500 text-white"
                        : "text-neutral-600 hover:text-white hover:bg-brand-500"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.filter(event => !event.featured).map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.time}</span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-brand-500 transition-colors mb-4">
                  {event.title}
                </h3>

                <p className="text-neutral-600 mb-6">
                  {event.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-neutral-600">{event.location}</span>
                  </div>
                  <span className="text-sm font-medium text-brand-500">{event.price}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
} 