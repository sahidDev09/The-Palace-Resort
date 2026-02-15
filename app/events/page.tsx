"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Users, Sparkles, MapPin, Calendar, Music, PartyPopper } from "lucide-react";
import { EVENT_VENUES } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useTheme } from "next-themes";

function VenueCard({
  venue,
  index,
  isDark,
}: {
  venue: (typeof EVENT_VENUES)[number];
  index: number;
  isDark: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-0 rounded-3xl overflow-hidden border backdrop-blur-sm transition-all duration-700 ${
        isDark
          ? "border-white/[0.06] bg-white/[0.02] hover:border-amber-500/20"
          : "border-neutral-200 bg-white shadow-lg shadow-neutral-200/50 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-100/30"
      }`}
    >
      {/* Image Section */}
      <div className="relative w-full lg:w-[50%] h-[300px] sm:h-[350px] lg:h-[480px] overflow-hidden">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        {/* Gradient Overlays */}
        <div className={`absolute inset-0 lg:hidden ${
          isDark
            ? "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            : "bg-gradient-to-t from-white/80 via-white/20 to-transparent"
        }`} />
        <div
          className={`absolute inset-0 hidden lg:block ${
            isDark
              ? isReversed
                ? "bg-gradient-to-l from-black/60 via-black/20 to-transparent"
                : "bg-gradient-to-r from-black/60 via-black/20 to-transparent"
              : isReversed
                ? "bg-gradient-to-l from-white/70 via-white/20 to-transparent"
                : "bg-gradient-to-r from-white/70 via-white/20 to-transparent"
          }`}
          style={{ [isReversed ? "right" : "left"]: 0 }}
        />

        {/* Category Badge */}
        <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-xl rounded-full border border-white/10">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-semibold text-white tracking-wide">
            {venue.category}
          </span>
        </div>

        {/* Capacity Badge */}
        <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-amber-500/90 backdrop-blur-xl rounded-full">
          <Users className="w-4 h-4 text-white" />
          <span className="text-sm font-bold text-white">
            {venue.capacity}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative w-full lg:w-[50%] p-8 sm:p-10 lg:p-10 flex flex-col justify-center">
        {/* Decorative background number */}
        <span className={`absolute top-6 right-8 text-[100px] font-bold leading-none select-none pointer-events-none transition-colors duration-700 ${
          isDark ? "text-white/[0.03]" : "text-black/[0.04]"
        }`}>
          {venue.id < 10 ? `0${venue.id}` : venue.id}
        </span>

        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-amber-500 text-sm font-bold uppercase tracking-[0.25em] mb-4"
        >
          {venue.tagline}
        </motion.p>

        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 tracking-tight ${
          isDark ? "text-white" : "text-neutral-900"
        }`}>
          {venue.name}
        </h2>

        <p className={`leading-relaxed mb-8 text-base ${
          isDark ? "text-neutral-400" : "text-neutral-600"
        }`}>
          {venue.description}
        </p>

        {/* Features Grid */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-amber-500/50" />
            <span className={`text-xs uppercase tracking-[0.2em] font-bold ${
              isDark ? "text-neutral-500" : "text-neutral-400"
            }`}>
              Highlights
            </span>
          </div>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6">
            {venue.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 group/item">
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  isDark ? "bg-amber-500/40 group-hover/item:bg-amber-500" : "bg-amber-400/50 group-hover/item:bg-amber-500"
                }`} />
                <span className={`text-[15px] font-medium transition-colors duration-300 ${
                  isDark ? "text-neutral-300 group-hover/item:text-white" : "text-neutral-600 group-hover/item:text-neutral-900"
                }`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button className="self-start group/btn relative flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(245,158,11,0.6)] active:scale-95">
          <Calendar className="w-5 h-5 transition-transform group-hover/btn:rotate-12" />
          <span>Check Availability</span>
        </button>
      </div>
    </motion.div>
  );
}

export default function EventsPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <main className={`relative min-h-screen overflow-hidden ${isDark ? "bg-[#050505] text-white" : "bg-neutral-50 text-neutral-900"}`}>
      {/* Background decorative blobs - Full Height */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute top-0 -left-24 w-[800px] h-[800px] rounded-full blur-[160px] opacity-20 ${
          isDark ? "bg-amber-500/30" : "bg-amber-400/20"
        }`} />
        <div className={`absolute top-[20%] -right-24 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 ${
          isDark ? "bg-purple-500/20" : "bg-purple-300/20"
        }`} />
        <div className={`absolute top-[40%] -left-32 w-[700px] h-[700px] rounded-full blur-[180px] opacity-10 ${
          isDark ? "bg-amber-600/20" : "bg-amber-200/30"
        }`} />
        <div className={`absolute top-[60%] -right-32 w-[900px] h-[900px] rounded-full blur-[200px] opacity-10 ${
          isDark ? "bg-amber-400/20" : "bg-amber-100/40"
        }`} />
        <div className={`absolute top-[80%] -left-20 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 ${
          isDark ? "bg-purple-600/20" : "bg-purple-200/30"
        }`} />
        <div className={`absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-[160px] opacity-15 ${
          isDark ? "bg-amber-500/20" : "bg-amber-300/20"
        }`} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-14">

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className={`inline-flex items-center gap-2 transition-all mb-12 group py-2 px-4 rounded-full border ${
                isDark 
                  ? "text-neutral-400 hover:text-white border-white/5 hover:bg-white/5" 
                  : "text-neutral-500 hover:text-neutral-900 border-neutral-200 hover:bg-neutral-100"
              }`}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-semibold tracking-wide">Back to Home</span>
            </Link>
          </motion.div>

          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-6 border border-amber-500/20">
                Exclusive Venues
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter leading-[1]"
            >
              Extraordinary 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-orange-600 animate-gradient-x">
                Celebrations
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`text-lg md:text-xl leading-relaxed max-w-2xl font-medium ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              From sun-drenched garden parties to opulent gala dinners, our collection of signature venues provides the perfect canvas for your most significant milestones.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Venue Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-16 md:gap-24">
            {EVENT_VENUES.map((venue, index) => (
              <VenueCard
                key={venue.id}
                venue={venue}
                index={index}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Events CTA */}
      <section className="relative pb-40 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative overflow-hidden rounded-[40px] border p-12 md:p-24 text-center ${
              isDark
                ? "border-white/[0.08] bg-gradient-to-br from-neutral-900 to-black shadow-2xl"
                : "border-neutral-200 bg-white shadow-2xl shadow-neutral-200"
            }`}
          >
            {/* Background elements */}
            <div className={`absolute top-0 right-0 w-1/2 h-full opacity-20 bg-gradient-to-l from-amber-500/30 to-transparent pointer-events-none`} />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block py-1 px-4 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-amber-500/20">
                Custom Experiences
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                Your Vision, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  Perfectly Executed
                </span>
              </h2>
              <p className={`text-lg mb-10 leading-relaxed font-medium ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}>
                Every event at The Palace Resort is unique. Our expert team of planners and decorators work alongside you to ensure every detail exceeds your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-amber-500/20 active:scale-95 text-lg">
                  <Calendar className="w-5 h-5" />
                  Request a Proposal
                </button>
                <button className={`inline-flex items-center justify-center gap-3 font-bold px-10 py-5 rounded-2xl transition-all duration-300 border active:scale-95 text-lg ${
                  isDark 
                    ? "border-white/10 hover:bg-white/5 text-white" 
                    : "border-neutral-200 hover:bg-neutral-50 text-neutral-900"
                }`}>
                  Contact Concierge
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
