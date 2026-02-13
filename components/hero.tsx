"use client";

import { useTheme } from "next-themes";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Hotel, 
  ConciergeBell, 
  Eye, 
  Star, 
  Users, 
  Calendar,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { Variants } from "framer-motion";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) return null;

  const stats = [
    { label: "Guest Satisfaction", value: "98%", icon: <Star className="h-4 w-4 text-primary" /> },
    { label: "Luxury Suites", value: "120+", icon: <Hotel className="h-4 w-4 text-primary" /> },
    { label: "Happy Clients", value: "50k+", icon: <Users className="h-4 w-4 text-primary" /> },
  ];

  const serviceLinks = [
    { title: "Book a hotel service", href: "/services/hotel", icon: <Calendar className="h-5 w-5" /> },
    { title: "Book a room service", href: "/services/room", icon: <ConciergeBell className="h-5 w-5" /> },
    { title: "View hotel service", href: "/services", icon: <Eye className="h-5 w-5" /> },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] // Custom ease curve for a smoother feel
      } 
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center py-24 w-full overflow-hidden">
      {/* Background Images - No Scale, No Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={resolvedTheme}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${
                resolvedTheme === "dark"
                  ? "/assets/palace-hero-night.png"
                  : "/assets/palace-hero-light.jpg"
              }')`,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Top Overlay for Navbar Visibility */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-[1]" />

      {/* Light Theme Overlay */}
      {resolvedTheme === "light" && (
        <div className="absolute inset-0 z-[1] bg-black/20 pointer-events-none" />
      )}

      {/* Main Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto flex flex-col gap-16 mt-4"
      >
        {/* Row 1: Heading/Description & Quick Services */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          {/* Top Left: Heading & Description */}
          <div className="lg:max-w-3xl space-y-8">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-primary text-sm font-semibold tracking-wide"
            >
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>#3 Five-Star Hotel in Asia</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl uppercase"
            >
             Discover best hospitality in <br />the palace luxury resort
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-zinc-100 max-w-2xl drop-shadow-md leading-relaxed"
            >
              Immerse yourself in unparalleled luxury. Our resort offers a sanctuary of peace 
              and elegance, designed for those who seek the extraordinary in every moment.
            </motion.p>
          </div>

          {/* Top Right: FAQ / Service Links System */}
          <div className="w-full lg:w-1/3">
            <motion.div
              variants={itemVariants}
              className="w-full bg-black/20 backdrop-blur-2xl border border-white/10 p-6 md:p-7 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-primary/20">
                  <ConciergeBell className="text-primary h-5 w-5" />
                </div>
                Quick Services
              </h3>
              <div className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="group flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 text-white">
                      <span className="p-2.5 rounded-lg bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                        {link.icon}
                      </span>
                      <span className="font-semibold text-base">{link.title}</span>
                    </div>
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-primary/20 transition-all">
                      <ArrowRight className="h-4 w-4 text-white/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Row 2: Action Buttons & Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 w-full">
          {/* Bottom Left: Action Buttons */}
          <div className="flex flex-wrap gap-6">
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-2xl bg-amber-500 text-white font-bold uppercase tracking-[0.2em] text-sm shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:bg-amber-600 transition-all"
            >
              Explore Now
            </motion.button>
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all"
            >
              View Gallery
            </motion.button>
          </div>

          {/* Bottom Right: Stats */}
          <div className="w-full lg:w-auto">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group hover:border-primary/50 transition-all">
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-black text-white mb-0.5">{stat.value}</div>
                  <div className="text-[9px] uppercase tracking-[0.1em] text-zinc-400 font-bold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </motion.div>

      {/* Decorative Bottom Shadow (to ensure content at the bottom of the page is visible) */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-[1]" />
    </section>
  );
}
