'use client';

import { motion } from "framer-motion";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks.",
    category: "Development",
    author: "John Smith",
    date: "Feb 15, 2024",
    readTime: "5 min read",
    image: "/placeholder.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Mastering UI/UX: Essential Principles for Modern Design",
    excerpt: "Learn the fundamental principles of UI/UX design that create engaging and user-friendly digital experiences.",
    category: "Design",
    author: "Sarah Johnson",
    date: "Feb 12, 2024",
    readTime: "4 min read",
    image: "/placeholder.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Building Scalable Applications with Next.js",
    excerpt: "A comprehensive guide to building scalable and performant applications using Next.js framework.",
    category: "Development",
    author: "Michael Chen",
    date: "Feb 10, 2024",
    readTime: "7 min read",
    image: "/placeholder.jpg",
    featured: false
  },
  {
    id: 4,
    title: "The Impact of AI on Digital Marketing",
    excerpt: "Discover how artificial intelligence is revolutionizing digital marketing strategies and customer engagement.",
    category: "Marketing",
    author: "Emily Brown",
    date: "Feb 8, 2024",
    readTime: "6 min read",
    image: "/placeholder.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Mobile-First Design: Best Practices for 2024",
    excerpt: "Essential guidelines and best practices for creating effective mobile-first digital experiences.",
    category: "Design",
    author: "David Wilson",
    date: "Feb 5, 2024",
    readTime: "5 min read",
    image: "/placeholder.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Optimizing Website Performance",
    excerpt: "Learn techniques and strategies to improve your website&apos;s loading speed and overall performance.",
    category: "Development",
    author: "Alex Turner",
    date: "Feb 3, 2024",
    readTime: "8 min read",
    image: "/placeholder.jpg",
    featured: false
  }
];

// Get unique categories
const categories = ["All", ...Array.from(new Set(posts.map(post => post.category)))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter posts based on active category
  const filteredPosts = posts.filter(post => !post.featured).filter(post => 
    activeCategory === "All" ? true : post.category === activeCategory
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-neutral-900 pt-32 pb-20 relative overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] gap-px opacity-[0.05]">
            {[...Array(400)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-white"
                initial={{ opacity: 0.1 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1],
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
              <span className="text-brand-400 font-medium">Our Blog</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
            >
              Insights &
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                Industry Updates
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-neutral-400 max-w-2xl mb-12"
            >
              Stay up to date with the latest trends, insights, and innovations in digital technology and design.
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.section>

      {/* Featured Posts Section */}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-brand-500/10 rounded-full px-6 py-3 w-fit"
            >
              <span className="text-brand-500 font-medium">Featured Posts</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-neutral-900"
            >
              Latest Articles
            </motion.h2>
          </div>

          {/* Featured Posts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {posts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
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
                      <span className="text-sm font-medium text-neutral-900">{post.category}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-brand-500 transition-colors mb-4">
                  {post.title}
                </h3>

                <p className="text-neutral-600 mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-200" />
                  <div>
                    <div className="font-medium text-neutral-900">{post.author}</div>
                    <div className="text-sm text-neutral-600">Author</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* All Posts Section */}
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
              <span className="text-brand-500 font-medium">All Posts</span>
            </motion.div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-neutral-900"
              >
                Browse Articles
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

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
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
                      <span className="text-sm font-medium text-neutral-900">{post.category}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-brand-500 transition-colors mb-4">
                  {post.title}
                </h3>

                <p className="text-neutral-600 mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-200" />
                  <div>
                    <div className="font-medium text-neutral-900">{post.author}</div>
                    <div className="text-sm text-neutral-600">Author</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
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
              <span className="text-brand-400 font-medium">Newsletter</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Stay Updated
            </h2>

            <p className="text-xl text-neutral-400 max-w-2xl mb-12">
              Subscribe to our newsletter to receive the latest insights and updates directly in your inbox.
            </p>

            <form className="w-full max-w-md flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              />
              <motion.button
                type="submit"
                className="group relative px-8 py-4 bg-brand-500 text-white rounded-full overflow-hidden whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 