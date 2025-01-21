"use client";

import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { FaClock, FaCalendarAlt, FaVideo, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

interface Service {
  label: string;
  value: string;
}

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

const services: Service[] = [
  { label: "UI/UX Design", value: "ui-ux-design" },
  { label: "Web Design & Development", value: "web-development" },
  { label: "SaaS Development", value: "saas-development" },
  { label: "App Development", value: "app-development" },
  { label: "Google & Facebook Ads", value: "google-facebook-ads" }
];

const meetingTypes = [
  {
    icon: <FaVideo className="w-6 h-6" />,
    title: "Video Call",
    description: "Face-to-face discussion via Google Meet or Zoom"
  },
  {
    icon: <FaPhoneAlt className="w-6 h-6" />,
    title: "Phone Call",
    description: "Direct phone conversation for detailed discussion"
  }
];

export default function BookACall() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-brand-500 via-secondary-500 to-brand-500 bg-clip-text text-transparent mb-4 animate-gradient">
            Book a Consultation Call
          </h1>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-2xl font-semibold text-black mb-4">
              Let&apos;s Discuss Your Project and Goals
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-brand-500 to-secondary-500 mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Schedule a free consultation call with our experts to explore how we can help 
            transform your ideas into reality.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/10 to-transparent rounded-full blur-3xl -z-10 transform -translate-y-1/2"></div>
      </section>

      {/* Meeting Type Selection */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-black">Choose Your Preferred Meeting Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {meetingTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="relative bg-gradient-to-br from-white/10 to-white/5 group-hover:from-brand-500/20 group-hover:to-secondary-500/20 transition-all duration-500 border border-white/10 group-hover:border-brand-500/30 backdrop-blur-xl overflow-hidden shadow-lg cursor-pointer">
                <CardBody className="flex flex-row items-center gap-6 p-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500/10 to-secondary-500/10 group-hover:from-brand-500/20 group-hover:to-secondary-500/20 transition-all duration-500">
                    <div className="text-brand-500 group-hover:text-brand-400 transition-colors duration-300">
                      {type.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-brand-500 transition-colors duration-300">
                      {type.title}
                    </h3>
                    <p className="text-neutral-500 group-hover:text-neutral-700 transition-colors duration-300">
                      {type.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
          <CardBody className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  label="First Name"
                  placeholder="Enter your first name"
                  labelPlacement="outside"
                  classNames={{
                    label: "text-black font-medium",
                    input: "bg-white/5 text-black",
                  }}
                />
                <Input
                  type="text"
                  label="Last Name"
                  placeholder="Enter your last name"
                  labelPlacement="outside"
                  classNames={{
                    label: "text-black font-medium",
                    input: "bg-white/5 text-black",
                  }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  labelPlacement="outside"
                  classNames={{
                    label: "text-black font-medium",
                    input: "bg-white/5 text-black",
                  }}
                />
                <Input
                  type="tel"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  labelPlacement="outside"
                  classNames={{
                    label: "text-black font-medium",
                    input: "bg-white/5 text-black",
                  }}
                />
              </div>

              <Dropdown>
                <DropdownTrigger>
                  <Button 
                    className="w-full justify-start text-left bg-white/5 text-black"
                    variant="flat" 
                  >
                    {selectedService ? services.find(s => s.value === selectedService)?.label : "Select a service"}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu 
                  aria-label="Service selection"
                  onAction={(key: string) => setSelectedService(key)}
                  selectedKeys={selectedService ? new Set([selectedService]) : new Set()}
                >
                  {services.map((service) => (
                    <DropdownItem key={service.value}>
                      {service.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="date"
                  label="Preferred Date"
                  placeholder="Select a date"
                  labelPlacement="outside"
                  classNames={{
                    label: "text-black font-medium",
                    input: "bg-white/5 text-black",
                  }}
                />
                <Dropdown>
                  <DropdownTrigger>
                    <Button 
                      className="w-full justify-start text-left bg-white/5 text-black"
                      variant="flat" 
                    >
                      {selectedTimeSlot || "Select a time slot"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu 
                    aria-label="Time slot selection"
                    onAction={(key: string) => setSelectedTimeSlot(key)}
                    selectedKeys={selectedTimeSlot ? new Set([selectedTimeSlot]) : new Set()}
                  >
                    {timeSlots.map((slot) => (
                      <DropdownItem key={slot}>
                        {slot}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>

              <Textarea
                label="Project Details"
                placeholder="Tell us about your project and goals"
                labelPlacement="outside"
                minRows={4}
                classNames={{
                  label: "text-black font-medium",
                  input: "bg-white/5 text-black",
                }}
              />

              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-500 to-secondary-500 text-white font-semibold px-12 py-6 text-lg shadow-xl hover:shadow-2xl hover:opacity-90 transition-all duration-300"
                >
                  Schedule Call
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </motion.section>

      {/* Additional Information */}
      <section className="mt-16 text-center">
        <div className="flex flex-wrap justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <FaClock className="w-5 h-5 text-brand-500" />
            <span className="text-black">30-Minute Session</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <FaCalendarAlt className="w-5 h-5 text-brand-500" />
            <span className="text-black">Flexible Scheduling</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 