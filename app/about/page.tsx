'use client';

import { motion } from "framer-motion";

export default function AboutPage() {
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
              <span className="text-brand-400 font-medium">About Us</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
            >
              We&apos;re a Team of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                Digital Innovators
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-neutral-400 max-w-2xl mb-12"
            >
              Passionate about creating exceptional digital experiences that drive growth and innovation for our clients.
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.section>

      {/* Story Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-white py-32 relative"
      >
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-neutral-200" />
              {/* Add your image here */}
            </motion.div>

            {/* Right Column - Content */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-brand-500/10 rounded-full px-6 py-3 w-fit"
              >
                <span className="text-brand-500 font-medium">Our Story</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-neutral-900"
              >
                Building Digital Excellence Since 2020
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-neutral-600"
              >
                We started with a vision to transform how businesses connect with their audience in the digital space. Our journey has been marked by continuous innovation, learning, and growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-8"
              >
                {[
                  { number: "100+", label: "Projects Completed" },
                  { number: "50+", label: "Happy Clients" },
                  { number: "5+", label: "Years Experience" },
                  { number: "15+", label: "Team Members" }
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-2">
                    <span className="text-3xl font-bold text-brand-500">{stat.number}</span>
                    <span className="text-neutral-600">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-neutral-50 py-32 relative overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-brand-500/10 rounded-full px-6 py-3 mb-6 inline-block"
            >
              <span className="text-brand-500 font-medium">Our Values</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-neutral-900 mb-6"
            >
              What Drives Us Forward
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
            >
              Our core values shape everything we do, from how we work together to how we serve our clients.
            </motion.p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Excellence",
                description: "We strive for excellence in every project, pushing boundaries and exceeding expectations."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "Embracing new technologies and creative solutions to solve complex challenges."
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description: "Working together with our clients as true partners to achieve shared success."
              },
              {
                icon: "⚡",
                title: "Agility",
                description: "Adapting quickly to changes and delivering results with speed and precision."
              },
              {
                icon: "🎨",
                title: "Creativity",
                description: "Bringing fresh perspectives and unique ideas to every project we undertake."
              },
              {
                icon: "🔒",
                title: "Integrity",
                description: "Building trust through transparency, honesty, and ethical business practices."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-4xl mb-6 block">{value.icon}</span>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-white py-32 relative"
      >
        <div className="max-w-[1400px] mx-auto px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-brand-500/10 rounded-full px-6 py-3 mb-6 inline-block"
            >
              <span className="text-brand-500 font-medium">Our Team</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-neutral-900 mb-6"
            >
              Meet the Innovators
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
            >
              Our diverse team of experts brings together years of experience and a passion for digital innovation.
            </motion.p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image: "/placeholder.jpg"
              },
              {
                name: "Sarah Johnson",
                role: "Creative Director",
                image: "/placeholder.jpg"
              },
              {
                name: "Michael Chen",
                role: "Technical Lead",
                image: "/placeholder.jpg"
              },
              {
                name: "Emily Brown",
                role: "Project Manager",
                image: "/placeholder.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
                <p className="text-neutral-600">{member.role}</p>
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
              <span className="text-brand-400 font-medium">Join Our Team</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Make an Impact?
            </h2>

            <p className="text-xl text-neutral-400 max-w-2xl mb-12">
              We&apos;re always looking for talented individuals who share our passion for innovation and excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="group relative px-8 py-4 bg-brand-500 text-white rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Open Positions
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <button className="group px-8 py-4 bg-transparent text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300">
                Learn More About Us
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