"use client";

import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { useRef, useState } from "react";

export default function Home() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"]
  });

  // Custom easing with slower timing
  const customEase = cubicBezier(0.25, 0.1, 0.25, 1);

  // Features scroll animations with tighter ranges
  const featureOneY = useTransform(scrollYProgress, [0, 0.3], [100, 0], { ease: customEase });
  const featureOneOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1], { ease: customEase });
  
  const featureTwoY = useTransform(scrollYProgress, [0.1, 0.4], [100, 0], { ease: customEase });
  const featureTwoOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1], { ease: customEase });
  
  const featureThreeY = useTransform(scrollYProgress, [0.2, 0.5], [100, 0], { ease: customEase });
  const featureThreeOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1], { ease: customEase });
  
  const featureFourY = useTransform(scrollYProgress, [0.3, 0.6], [100, 0], { ease: customEase });
  const featureFourOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1], { ease: customEase });
  
  const featureFiveY = useTransform(scrollYProgress, [0.4, 0.7], [100, 0], { ease: customEase });
  const featureFiveOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1], { ease: customEase });
  
  const featureSixY = useTransform(scrollYProgress, [0.5, 0.8], [100, 0], { ease: customEase });
  const featureSixOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1], { ease: customEase });

  // More dynamic transforms with longer ranges
  const leftX = useTransform(scrollYProgress, [0, 0.7], [-300, 0], { ease: customEase });
  const rightX = useTransform(scrollYProgress, [0, 0.7], [300, 0], { ease: customEase });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1], { ease: customEase });
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.8, 1], { ease: customEase });
  
  // More dramatic rotations with longer ranges
  const leftRotate = useTransform(scrollYProgress, [0, 0.7], [-30, 0], { ease: customEase });
  const rightRotate = useTransform(scrollYProgress, [0, 0.7], [30, 0], { ease: customEase });
  
  // Additional transforms with longer ranges
  const leftY = useTransform(scrollYProgress, [0, 0.7], [100, 0], { ease: customEase });
  const rightY = useTransform(scrollYProgress, [0, 0.7], [-100, 0], { ease: customEase });
  const perspective = useTransform(scrollYProgress, [0, 0.7], [1000, 0], { ease: customEase });

  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const threshold = 100; // minimum distance for slide
    const velocity = 500; // minimum velocity for slide
    
    if (Math.abs(info.velocity.x) > velocity || Math.abs(info.offset.x) > threshold) {
      if (info.velocity.x > 0 || info.offset.x > 0) {
        // Sliding right
        setSliderPosition(Math.max(sliderPosition - 1, 0));
      } else {
        // Sliding left
        setSliderPosition(Math.min(sliderPosition + 1, 2));
      }
    }
  };

  return (
    <div className="flex flex-col w-full items-center">
      {/* Hero Section */}
      <motion.section 
        className="bg-white rounded-b-2xl flex flex-col items-center justify-center gap-4 py-12 md:py-16 shadow-[0_0_15px_rgba(0,0,0,0.1)] relative w-full"
      >
        {/* Background Decorative Elements */}
        <motion.div 
          className="absolute top-0 left-0 w-[800px] h-[800px] opacity-[0.03] -translate-x-1/3 overflow-hidden hidden md:block"
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 80L80 40L120 80L80 120L40 80Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M20 100L100 20L180 100L100 180L20 100Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M60 100H140M100 60V140" stroke="currentColor" strokeWidth="2"/>
            <path d="M80 60L120 60" stroke="currentColor" strokeWidth="2"/>
            <path d="M60 80L60 120" stroke="currentColor" strokeWidth="2"/>
            <path d="M140 80L140 120" stroke="currentColor" strokeWidth="2"/>
            <path d="M80 140L120 140" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </motion.div>

        {/* Content Container */}
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center relative z-10">
          {/* Welcome Text with Rotating Icon */}
          <motion.div 
            className="flex items-center gap-3 bg-neutral-900 px-6 py-3 rounded-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-base text-white font-medium">Welcome to Digitalfarm</span>
            <motion.div 
              className="w-5 h-5 text-brand-500"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-neutral-900 text-center max-w-5xl leading-tight mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your Brand&apos;s Digital Partner made for&nbsp;
            <span className="relative inline-block">
              <span className="relative z-10">Growth</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-4 z-0 text-brand-500"
                viewBox="0 0 100 10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
              >
                <motion.path
                  d="M0 5C20 5 30 5 50 5C70 5 80 5 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  style={{
                    transform: "rotate(-1deg)",
                  }}
                />
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-neutral-600 max-w-3xl text-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Transform your digital presence with our innovative solutions. We craft experiences that drive engagement, conversion, and sustainable growth.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button className="group relative px-10 py-5 bg-brand-500 text-white rounded-full hover:bg-brand-600 transition-all duration-300 hover:scale-105 font-medium text-lg">
              Get Started Today
              <motion.span 
                className="absolute inset-0 rounded-full bg-white mix-blend-difference"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full bg-white py-24 relative"
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
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-brand-500/10 backdrop-blur-sm border border-brand-500/20 rounded-full px-6 py-3 mb-6">
              <span className="text-brand-600 font-medium">How can we support you?</span>
                  </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We offer end-to-end digital services to help your business thrive in the digital landscape
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "UI/UX Design",
                description: "Create intuitive and engaging user experiences that delight your customers and drive conversions.",
                icon: (
                  <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                ),
                features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
              },
              {
                title: "Web Development",
                description: "Build fast, scalable, and secure web applications that provide seamless user experiences across all devices.",
                icon: (
                  <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                ),
                features: ["Frontend Development", "Backend Systems", "API Integration", "Performance Optimization"]
              },
              {
                title: "Mobile Apps",
                description: "Develop native and cross-platform mobile applications that engage users and drive business growth.",
                icon: (
                  <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                ),
                features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"]
              },
              {
                title: "Branding",
                description: "Develop a strong brand identity that resonates with your audience and sets you apart from competitors.",
                icon: (
                  <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                ),
                features: ["Logo Design", "Brand Strategy", "Style Guides", "Brand Voice"]
              },
              {
                title: "Digital Marketing",
                description: "Drive growth through strategic digital marketing campaigns that reach and engage your target audience.",
                icon: (
                  <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                ),
                features: ["SEO", "Content Marketing", "Social Media", "Email Campaigns"]
              },
              {
                title: "Consulting",
                description: "Get expert guidance on digital strategy, technology choices, and implementation roadmaps.",
                icon: (
                  <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                features: ["Technical Consulting", "Digital Strategy", "Technology Assessment", "Process Optimization"]
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

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full bg-neutral-900 py-32 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-[repeat(40,minmax(0,1fr))] gap-px opacity-[0.03]">
            {[...Array(800)].map((_, i) => (
              <div key={i} className="bg-white w-full h-full" />
            ))}
          </div>
        </div>

        {/* Glowing Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-brand-500/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-brand-400/5 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="max-w-[1400px] mx-auto px-12 relative">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Unlimited Design Requests",
                description: "Submit as many design requests as you need, with no restrictions or hidden limits.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 4L4 10l12 6 12-6-12-6zM4 30l12 6 12-6M4 20l12 6 12-6" />
                  </svg>
                ),
                animation: {
                  initial: { scale: 0.8, opacity: 0 },
                  whileInView: { scale: 1, opacity: 1 },
                  transition: { duration: 0.5, delay: 0.1 }
                }
              },
              {
                title: "Priority Turnaround",
                description: "Get your designs delivered quickly with our expedited turnaround times.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <circle className="stroke-brand-500" cx="20" cy="20" r="16" strokeWidth="1.5" />
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" d="M20 12v8l6 4" />
                  </svg>
                ),
                animation: {
                  initial: { scale: 0.8, opacity: 0 },
                  whileInView: { scale: 1, opacity: 1 },
                  transition: { duration: 0.5, delay: 0.2 }
                }
              },
              {
                title: "Dedicated Designer",
                description: "Work with your own dedicated designer who understands your brand and vision.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 20a6 6 0 100-12 6 6 0 000 12z" />
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M10 32c2-5 6-8 10-8s8 3 10 8" />
                  </svg>
                ),
                animation: {
                  initial: { scale: 0.8, opacity: 0 },
                  whileInView: { scale: 1, opacity: 1 },
                  transition: { duration: 0.5, delay: 0.3 }
                }
              },
              {
                title: "Comprehensive Solutions",
                description: "Full-spectrum design services covering all your digital and print needs.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 4l4 4-4 4-4-4 4-4zM32 16l4 4-4 4-4-4 4-4zM8 16l4 4-4 4-4-4 4-4zM20 28l4 4-4 4-4-4 4-4z" />
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 12v12M10 20h20" />
                  </svg>
                ),
                animation: {
                  initial: { scale: 0.8, opacity: 0 },
                  whileInView: { scale: 1, opacity: 1 },
                  transition: { duration: 0.5, delay: 0.4 }
                }
              },
              {
                title: "Cost-effective Pricing",
                description: "Transparent, competitive pricing that delivers exceptional value for your investment.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 4v32M28 12H12c-2 0-4 2-4 4s2 4 4 4h16c2 0 4 2 4 4s-2 4-4 4H12" />
                  </svg>
                ),
                animation: {
                  initial: { scale: 0.8, opacity: 0 },
                  whileInView: { scale: 1, opacity: 1 },
                  transition: { duration: 0.5, delay: 0.5 }
                }
              },
              {
                title: "Regular Strategy Sessions",
                description: "Regular consultations to align design strategy with your business goals and objectives.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 4c8.8 0 16 7.2 16 16s-7.2 16-16 16S4 28.8 4 20 11.2 4 20 4z" />
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 10l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-4z" />
                  </svg>
                ),
                animation: {
                  initial: { scale: 0.8, opacity: 0 },
                  whileInView: { scale: 1, opacity: 1 },
                  transition: { duration: 0.5, delay: 0.6 }
                }
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                {...feature.animation}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-brand-500/20 transition-colors duration-300 relative overflow-hidden">
                  {/* Feature Icon */}
                  <div className="p-3 bg-brand-500/5 rounded-xl w-fit mb-6 relative">
                    {feature.icon}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-brand-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  </div>

                  {/* Feature Content */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-brand-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-400">
                    {feature.description}
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
        <div className="absolute -bottom-px left-0 w-full h-24 bg-gradient-to-t from-white to-transparent opacity-[0.02]" />
      </motion.section>

      {/* Featured Work Section */}
      <motion.section 
        className="w-full bg-white py-24 overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">Featured Work</h2>
            <button className="group px-8 py-4 text-lg font-medium text-neutral-900 hover:text-brand-500 transition-colors relative">
              View More
              <span className="absolute bottom-3 left-0 w-full h-px bg-brand-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </motion.div>

          {/* Works Grid */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item}
                  className="relative w-full"
                >
                  <div className="relative aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden mb-6 group">
                    {/* Year Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-sm font-medium text-neutral-900">2024</span>
                      </div>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute bottom-6 left-6 z-10">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Web Design</span>
                      </div>
                    </div>
                    {/* Placeholder Image */}
                    <div className="w-full h-full bg-neutral-200 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-neutral-900 hover:text-brand-500 transition-colors">Project {item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Tools We Use Section */}
      <motion.section 
        className="w-full bg-neutral-950 py-16 relative overflow-hidden"
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

        {/* Content Container */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-4">
              <span className="text-brand-400 font-medium">Our Tech Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tools We Use
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to bring your vision to life
            </p>
          </div>

          {/* Tools Container */}
          <div className="relative h-[300px]">
            {/* Center Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-[600px] h-[300px] bg-brand-500/10 rounded-full blur-[100px]" />
              <div className="w-[400px] h-[200px] bg-brand-400/10 rounded-full blur-[80px] animate-pulse" />
            </div>

            {[
              { name: "GitHub", x: 15, y: 25, delay: 0 },
              { name: "Bootstrap", x: 70, y: 20, delay: 0.1 },
              { name: "Slack", x: 30, y: 70, delay: 0.2 },
              { name: "SVGator", x: 80, y: 65, delay: 0.3 },
              { name: "Photoshop", x: 20, y: 45, delay: 0.4 },
              { name: "Figma", x: 85, y: 35, delay: 0.5 },
              { name: "Illustrator", x: 40, y: 80, delay: 0.6 },
              { name: "ChatGPT", x: 60, y: 30, delay: 0.7 },
              { name: "Notion", x: 35, y: 35, delay: 0.8 },
              { name: "VS Code", x: 50, y: 75, delay: 0.9 },
              { name: "Next.js", x: 75, y: 45, delay: 1 },
              { name: "Node.js", x: 25, y: 55, delay: 1.1 },
              { name: "Supabase", x: 65, y: 60, delay: 1.2 },
            ].map((tool) => (
              <motion.div
                key={tool.name}
                className="absolute"
                style={{
                  left: `${tool.x}%`,
                  top: `${tool.y}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: tool.delay,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute -inset-3 bg-gradient-to-r from-brand-500 to-brand-400 rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition duration-500" />
                  <div className="relative bg-neutral-900/80 backdrop-blur-sm rounded-lg px-5 py-2.5 border border-white/10 shadow-2xl">
                    <h3 className="text-base font-medium text-white text-center whitespace-nowrap">
                      {tool.name}
                    </h3>
                  </div>
                  {/* Floating Animation */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -bottom-px left-0 w-full h-24 bg-gradient-to-t from-white to-transparent opacity-[0.02]" />
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="w-full bg-white py-24 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 grid grid-cols-[repeat(40,minmax(0,1fr))] gap-px">
            {[...Array(800)].map((_, i) => (
              <div key={i} className="bg-neutral-950 w-full h-full" />
            ))}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative">
          {/* Top Label */}
          <motion.div 
            className="text-center mb-20"
          >
            <div className="inline-block bg-brand-500/10 backdrop-blur-sm border border-brand-500/20 rounded-full px-6 py-3 mb-6">
              <span className="text-brand-600 font-medium">You Won&apos;t Believe</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our Clients Can&apos;t Say Anything Bad About Us
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-neutral-200/60 hover:border-brand-500/20 transition-colors duration-300 relative">
                  {/* Quote Icon */}
                  <div className="p-3 bg-brand-500/5 rounded-xl w-fit mb-6">
                    <svg className="w-6 h-6 text-brand-500" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21c3.33-3.33 5-6.67 5-10V5h6v6c0 3.33-1.67 6.67-5 10m7 0c3.33-3.33 5-6.67 5-10V5h6v6c0 3.33-1.67 6.67-5 10" />
                    </svg>
                  </div>

                  {/* Content */}
                  <p className="text-neutral-600 mb-6">
                    &quot;Working with Digital Farm has been an absolute pleasure. Their attention to detail and creative solutions have exceeded our expectations.&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-100" />
                    <div>
                      <h4 className="font-semibold text-neutral-900">John Doe</h4>
                      <p className="text-sm text-neutral-500">CEO at Company</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-8 right-8 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Hover Decoration */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-brand-500/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section 
        className="w-full bg-white py-24 relative overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(31,144,255,0.02)_25%,rgba(31,144,255,0.02)_50%,transparent_50%,transparent_75%,rgba(31,144,255,0.02)_75%)] bg-[length:64px_64px]" />

        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-20">
            {/* Left Title - 65% width */}
            <div className="lg:w-[65%]">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 lg:sticky lg:top-8">
                Frequently asked<br />Questions
              </h2>
            </div>

            {/* Right Content - 35% width */}
            <div className="lg:w-[35%] flex flex-col items-start lg:items-end">
              <p className="text-xl text-neutral-600 mb-8 lg:text-right">
                Got questions? Here are answers to the ones we get asked most often.
              </p>
              <button className="group px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-brand-500 transition-all duration-300 hover:scale-105 font-medium">
                Ask A Question
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="grid gap-6">
            {[
              {
                question: "What design package is best for my needs?",
                answer: "Our packages are tailored to fit various needs. Whether you require a complete branding overhaul, a new website, or continuous design support, we can recommend the best package based on your goals and budget. Contact us for a personalized consultation.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 2L2 7l10 5 10-5-10-5zM4 30l10 5 10-5M4 20l10 5 10-5" />
                  </svg>
                )
              },
              {
                question: "How much work will I receive in a single month?",
                answer: "The amount of work depends on the package you choose. We offer flexible plans that cater to different project scopes and timelines, ensuring you get the quality and quantity of work needed to achieve your objectives.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <circle className="stroke-brand-500" cx="16" cy="16" r="14" strokeWidth="1.5" />
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" d="M16 8v8l6 4" />
                  </svg>
                )
              },
              {
                question: "Can I hire Digital Farm to design for my agency?",
                answer: "Yes, we collaborate with agencies to provide top-notch design services. Whether you need extra hands on a specific project or ongoing design support, we can seamlessly integrate with your team to deliver outstanding results.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 20a6 6 0 100-12 6 6 0 000 12z" />
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 24c1.5-4 6-7 12-7s10.5 3 12 7" />
                  </svg>
                )
              },
              {
                question: "What industries does Digital Farm typically work with?",
                answer: "While we excel in various industries, we have significant experience in ecommerce, tech startups, and B2B services, providing tailored solutions that meet specific industry needs.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 2l4 4-4 4-4-4 4-4zM26 12l4 4-4 4-4-4 4-4zM6 12l4 4-4 4-4-4 4-4zM16 22l4 4-4 4-4-4 4-4z" />
                    <path className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 10v8M8 16h16" />
                  </svg>
                )
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 cursor-pointer relative overflow-hidden transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="p-3 bg-brand-500/5 rounded-xl">
                      {faq.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-brand-500 transition-colors">
                          {faq.question}
                        </h3>
                        <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-brand-500 transition-colors">
                          <svg className="w-4 h-4 text-neutral-500 group-hover:text-brand-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-4 text-neutral-600 hidden group-hover:block transition-all">
                        {faq.answer}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Gradient */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-brand-500/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="w-full bg-neutral-950 py-24 relative overflow-hidden"
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
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center text-center relative">
            {/* Glowing Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[128px] pointer-events-none" />
            
            {/* Top Label */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <span className="text-brand-400 font-medium">Ready to Transform Your Vision?</span>
            </div>

            {/* Main Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 relative">
              Let&apos;s Create Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                Extraordinary
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-neutral-400 max-w-2xl mb-12">
              Let&apos;s work together to bring your vision to life. Our team is ready to help you create exceptional digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
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
                Schedule a Call
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -bottom-px left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </motion.section>
    </div>
  );
}
