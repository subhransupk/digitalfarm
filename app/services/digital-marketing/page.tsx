"use client";

import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { FaSearchDollar, FaHashtag, FaChartLine, FaEnvelope, FaBullhorn, FaRegChartBar } from "react-icons/fa";
import Link from "next/link";

const marketingServices = [
  {
    icon: <FaSearchDollar className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Boost your online visibility with data-driven SEO strategies that drive organic traffic and rankings"
  },
  {
    icon: <FaHashtag className="w-8 h-8" />,
    title: "Social Media Marketing",
    description: "Engage your audience and build brand presence across all major social media platforms"
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Performance Marketing",
    description: "Data-driven campaigns that maximize ROI through targeted advertising and optimization"
  },
  {
    icon: <FaEnvelope className="w-8 h-8" />,
    title: "Email Marketing",
    description: "Strategic email campaigns that nurture leads and drive conversions with personalized content"
  }
];

const marketingProcess = [
  {
    step: "01",
    title: "Analysis",
    description: "Deep market research and competitor analysis to identify opportunities"
  },
  {
    step: "02",
    title: "Strategy",
    description: "Developing targeted marketing strategies aligned with your goals"
  },
  {
    step: "03",
    title: "Execute",
    description: "Implementing campaigns across chosen marketing channels"
  },
  {
    step: "04",
    title: "Optimize",
    description: "Continuous monitoring and optimization for maximum performance"
  }
];

const marketingTools = [
  "Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Meta Ads",
  "Google Ads", "Hootsuite", "Ahrefs", "Moz", "Buffer"
];

export default function DigitalMarketing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-brand-500 via-secondary-500 to-brand-500 bg-clip-text text-transparent mb-4 animate-gradient">
            Digital Marketing Services
          </h1>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-2xl font-semibold text-black mb-4">
              Amplify Your Brand&apos;s Digital Presence and Drive Growth
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-brand-500 to-secondary-500 mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Transform your digital marketing with data-driven strategies that deliver 
            measurable results and sustainable business growth.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/10 to-transparent rounded-full blur-3xl -z-10 transform -translate-y-1/2"></div>
      </section>

      {/* Marketing Services Grid */}
      <section className="mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
          Marketing Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="relative bg-gradient-to-br from-white/10 to-white/5 group-hover:from-brand-500/20 group-hover:to-secondary-500/20 transition-all duration-500 border border-white/10 group-hover:border-brand-500/30 backdrop-blur-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03] group-hover:opacity-[0.05]"></div>
                <CardBody className="flex flex-row items-start gap-6 p-8 relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/10 to-secondary-500/10 group-hover:from-brand-500/20 group-hover:to-secondary-500/20 transition-all duration-500 backdrop-blur-xl border border-white/10 group-hover:border-brand-500/30">
                    <div className="text-brand-500 group-hover:text-brand-400 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-brand-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-black text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Marketing Process */}
      <section className="mb-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 via-secondary-500/10 to-brand-500/10 rounded-3xl blur-3xl -z-10"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
          Our Marketing Process
        </h2>
        <p className="text-xl text-black text-center mb-16 max-w-3xl mx-auto">
          A data-driven approach to digital marketing success
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketingProcess.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-6 relative">
                <span className="text-7xl font-bold text-brand-500/10 group-hover:text-brand-500/20 transition-colors duration-300">
                  {step.step}
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-brand-500/10 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-brand-500 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-black text-lg leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Marketing Tools */}
      <section className="mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
          Marketing Tools We Use
        </h2>
        <p className="text-xl text-black text-center mb-16 max-w-3xl mx-auto">
          Industry-leading platforms for maximum marketing impact
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {marketingTools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="px-6 py-3 rounded-full bg-neutral-900/50 border border-brand-500/20 text-white text-lg font-medium hover:border-brand-500 hover:bg-brand-500/10 transition-all duration-300 backdrop-blur-sm">
                {tool}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 via-secondary-500/20 to-brand-500/20 rounded-3xl blur-3xl -z-10"></div>
        <Card className="bg-gradient-to-r from-brand-500 to-secondary-500 p-12 overflow-hidden relative">
          <motion.div
            className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"
            animate={{
              backgroundPosition: ["0px 0px", "100px 100px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <CardBody>
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Boost Your Digital Presence?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white leading-relaxed">
              Let&apos;s create a powerful digital marketing strategy that takes your business to the next level.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-brand-500 font-semibold hover:bg-neutral-100 transition-all duration-300 px-12 py-6 text-lg shadow-xl hover:shadow-2xl"
              >
                Start Your Marketing Journey
              </Button>
            </Link>
          </CardBody>
        </Card>
      </section>
    </div>
  );
} 