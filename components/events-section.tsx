"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { useTheme } from "next-themes";
import { EVENT_VENUES } from "@/lib/constants";

export function EventsSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Show only a few venues on the home page
  const featuredVenues = EVENT_VENUES.slice(0, 4);

  return (
    <section ref={ref} className={`relative py-12 overflow-hidden ${isDark ? "bg-neutral-950" : "bg-white"}`}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-[0.03] ${
          isDark ? "bg-amber-500" : "bg-amber-400"
        }`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 border border-amber-500/20">
                Memorable Gatherings
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              Exquisite <span className="text-amber-500">Event Venues</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base transition-colors duration-500 ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              From corporate retreats to fairytale weddings, discover our range of stunning indoor and outdoor spaces designed to make every occasion extraordinary.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/events"
              className="group flex items-center gap-2 text-amber-500 font-bold hover:gap-3 transition-all underline-offset-8 hover:underline"
            >
              <span>Explore All Venues</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVenues.map((venue, index) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`group relative h-[380px] rounded-2xl overflow-hidden border transition-all duration-500 ${
                isDark 
                  ? "border-white/5 shadow-2xl shadow-black/50" 
                  : "border-neutral-200 shadow-xl shadow-neutral-200/50 hover:shadow-2xl hover:shadow-amber-100/40"
              }`}
            >
              <Image
                src={venue.image}
                alt={venue.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded bg-amber-500 text-[10px] font-bold text-white uppercase tracking-wider">
                    {venue.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {venue.name}
                </h3>
                <p className="text-zinc-300 text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                  {venue.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-white/70">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-semibold">{venue.capacity}</span>
                    </div>
                    <div className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300`}>
                        <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                </div>
              </div>
              
              <Link href="/events" className="absolute inset-0 z-20" aria-label={`View ${venue.name}`} />
            </motion.div>
          ))}
        </div>

        {/* Plan Your Own Event Card - Full Width on Mobile, Special Treatment */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6, delay: 0.5 }}
           className={`mt-10 group relative h-[260px] rounded-[32px] overflow-hidden border transition-all duration-700 ${
             isDark ? "border-white/5" : "border-neutral-200"
           }`}
        >
            <Image 
                src="/assets/events/own-event.jpg" 
                alt="Plan Your Own Event" 
                fill 
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className={`absolute inset-0 ${isDark ? "bg-black/60" : "bg-black/40"} backdrop-blur-[2px]`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <Sparkles className="w-8 h-8 text-amber-500 mb-3 animate-pulse" />
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                    Plan Your <span className="text-amber-500">Own Event</span>
                </h3>
                <p className="text-zinc-200 text-base max-w-xl mb-6">
                    Let us bring your unique vision to life with our expert planning and bespoke services.
                </p>
                <Link 
                    href="/events" 
                    className="bg-white text-black font-bold px-8 py-3 rounded-xl hover:bg-amber-500 hover:text-white transition-all duration-300 transform group-hover:scale-105"
                >
                    Get Started
                </Link>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
