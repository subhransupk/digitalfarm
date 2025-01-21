'use client';

import { motion } from "framer-motion";

export default function ServicesPage() {
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
              <span className="text-brand-400 font-medium">Our Services</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
            >
              Transforming Ideas into
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                Digital Excellence
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-neutral-400 max-w-2xl mb-12"
            >
              We offer comprehensive digital solutions tailored to your unique needs. From design to development, we&apos;ve got you covered.
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.section>

      {/* Services Grid Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-white py-32 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-[repeat(40,minmax(0,1fr))] gap-px opacity-[0.02]">
            {[...Array(800)].map((_, i) => (
              <div key={i} className="bg-neutral-950 w-full h-full" />
            ))}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-12 relative">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "UI/UX Design",
                description: "Create intuitive and engaging user experiences that delight your customers and drive conversions.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 4L4 10l12 6 12-6-12-6zM4 30l12 6 12-6M4 20l12 6 12-6" />
                  </svg>
                ),
                features: [
                  "User Research & Analysis",
                  "Wireframing & Prototyping",
                  "Visual Design",
                  "Usability Testing"
                ]
              },
              {
                title: "Web Development",
                description: "Build fast, secure, and scalable web applications using cutting-edge technologies and best practices.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 4l4 4-4 4-4-4 4-4zM32 16l4 4-4 4-4-4 4-4zM8 16l4 4-4 4-4-4 4-4zM20 28l4 4-4 4-4-4 4-4z" />
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 12v12M10 20h20" />
                  </svg>
                ),
                features: [
                  "Frontend Development",
                  "Backend Development",
                  "API Integration",
                  "Performance Optimization"
                ]
              },
              {
                title: "Mobile Development",
                description: "Develop native and cross-platform mobile applications that provide seamless user experiences.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <rect className="stroke-brand-500" x="12" y="4" width="16" height="32" rx="3" strokeWidth="1.5" />
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" d="M12 8h16M12 32h16" />
                  </svg>
                ),
                features: [
                  "iOS Development",
                  "Android Development",
                  "Cross-platform Solutions",
                  "App Store Optimization"
                ]
              },
              {
                title: "Branding & Identity",
                description: "Craft compelling brand identities that resonate with your audience and stand out in the market.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 8l24 24M8 32l24-24" />
                    <circle className="stroke-brand-500" cx="20" cy="20" r="16" strokeWidth="1.5" />
                  </svg>
                ),
                features: [
                  "Logo Design",
                  "Brand Guidelines",
                  "Marketing Materials",
                  "Brand Strategy"
                ]
              },
              {
                title: "Digital Marketing",
                description: "Drive growth through strategic digital marketing campaigns that reach and engage your target audience.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 4v32M28 12H12c-2 0-4 2-4 4s2 4 4 4h16c2 0 4 2 4 4s-2 4-4 4H12" />
                  </svg>
                ),
                features: [
                  "SEO Optimization",
                  "Social Media Marketing",
                  "Content Strategy",
                  "Analytics & Reporting"
                ]
              },
              {
                title: "Consulting & Strategy",
                description: "Get expert guidance on digital transformation and technology strategy to drive business growth.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 4c8.8 0 16 7.2 16 16s-7.2 16-16 16S4 28.8 4 20 11.2 4 20 4z" />
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 10l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-4z" />
                  </svg>
                ),
                features: [
                  "Technology Assessment",
                  "Digital Strategy",
                  "Process Optimization",
                  "Team Training"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full border border-neutral-200/60 hover:border-brand-500/20 transition-colors duration-300 relative overflow-hidden">
                  {/* Service Icon */}
                  <div className="p-3 bg-brand-500/5 rounded-xl w-fit mb-6 relative">
                    {service.icon}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-brand-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4 group-hover:text-brand-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-neutral-600">
                        <svg className="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Decoration */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-brand-500/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-neutral-950 py-32 relative overflow-hidden"
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
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6">
              <span className="text-brand-400 font-medium">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Work
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Our proven process ensures consistent delivery of high-quality solutions
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your goals, challenges, and vision through in-depth consultations."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Our team develops a comprehensive strategy tailored to your specific needs and objectives."
              },
              {
                step: "03",
                title: "Execution",
                description: "We bring your vision to life using cutting-edge technologies and industry best practices."
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and optimization ensure optimal performance and results."
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-500/20 transition-colors duration-300 relative overflow-hidden">
                  {/* Step Number */}
                  <div className="text-5xl font-bold text-brand-500 mb-6 opacity-40">
                    {step.step}
                  </div>

                  {/* Step Content */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-brand-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400">
                    {step.description}
                  </p>

                  {/* Hover Decoration */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-brand-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-white py-32 relative overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-12 relative">
          <div className="flex flex-col items-center text-center">
            <div className="bg-brand-500/10 backdrop-blur-sm border border-brand-500/20 rounded-full px-6 py-3 mb-8">
              <span className="text-brand-600 font-medium">Ready to Get Started?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
              Let&apos;s Build Something Amazing Together
            </h2>

            <p className="text-xl text-neutral-600 max-w-2xl mb-12">
              Transform your digital presence with our comprehensive services. Get in touch to discuss your project.
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

              <button className="group px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-brand-500 transition-all duration-300">
                Schedule a Call
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 