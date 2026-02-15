"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Shirt, UtensilsCrossed, Sparkles, ChefHat } from "lucide-react";
import { DINING_RESTAURANTS } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useTheme } from "next-themes";

function RestaurantCard({
  restaurant,
  index,
  isDark,
}: {
  restaurant: (typeof DINING_RESTAURANTS)[number];
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
      } gap-0 rounded-2xl overflow-hidden border backdrop-blur-sm transition-all duration-700 ${
        isDark
          ? "border-white/[0.06] bg-white/[0.02] hover:border-amber-500/20"
          : "border-neutral-200 bg-white shadow-lg shadow-neutral-200/50 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-100/30"
      }`}
    >
      {/* Image Section */}
      <div className="relative w-full lg:w-[55%] h-[320px] sm:h-[400px] lg:h-[520px] overflow-hidden">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        {/* Gradient Overlay */}
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

        {/* Cuisine Badge */}
        <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-xl rounded-full border border-white/10">
          <ChefHat className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-semibold text-white tracking-wide">
            {restaurant.cuisine}
          </span>
        </div>

        {/* Price Range */}
        <div className="absolute top-5 right-5 px-3 py-1.5 bg-amber-500/90 backdrop-blur-xl rounded-full">
          <span className="text-sm font-bold text-white">
            {restaurant.priceRange}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative w-full lg:w-[45%] p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
        {/* Number decoration */}
        <span className={`absolute top-6 right-8 text-[120px] font-bold leading-none select-none pointer-events-none ${
          isDark ? "text-white/[0.03]" : "text-black/[0.04]"
        }`}>
          0{restaurant.id}
        </span>

        <p className="text-amber-500 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          {restaurant.tagline}
        </p>

        <h2 className={`text-4xl sm:text-5xl font-bold mb-5 tracking-tight ${
          isDark ? "text-white" : "text-neutral-900"
        }`}>
          {restaurant.name}
        </h2>

        <p className={`leading-relaxed mb-8 text-[15px] ${
          isDark ? "text-neutral-400" : "text-neutral-600"
        }`}>
          {restaurant.description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className={`flex items-center gap-3 ${isDark ? "text-neutral-300" : "text-neutral-700"}`}>
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
              isDark
                ? "bg-white/[0.05] border border-white/[0.08]"
                : "bg-amber-50 border border-amber-200/60"
            }`}>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <p className={`text-[11px] uppercase tracking-wider ${
                isDark ? "text-neutral-500" : "text-neutral-400"
              }`}>
                Hours
              </p>
              <p className="text-sm font-medium">{restaurant.hours}</p>
            </div>
          </div>
          <div className={`flex items-center gap-3 ${isDark ? "text-neutral-300" : "text-neutral-700"}`}>
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
              isDark
                ? "bg-white/[0.05] border border-white/[0.08]"
                : "bg-amber-50 border border-amber-200/60"
            }`}>
              <Shirt className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <p className={`text-[11px] uppercase tracking-wider ${
                isDark ? "text-neutral-500" : "text-neutral-400"
              }`}>
                Dress Code
              </p>
              <p className="text-sm font-medium">{restaurant.dressCode}</p>
            </div>
          </div>
        </div>

        {/* Signature Dishes */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className={`text-xs uppercase tracking-[0.15em] font-semibold ${
              isDark ? "text-neutral-500" : "text-neutral-400"
            }`}>
              Signature Dishes
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {restaurant.signatures.map((dish) => (
              <span
                key={dish}
                className={`px-3 py-1.5 text-xs font-medium rounded-full ${
                  isDark
                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    : "bg-amber-50 text-amber-700 border border-amber-200/70"
                }`}
              >
                {dish}
              </span>
            ))}
          </div>
        </div>

        {/* Ambiance Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {restaurant.ambiance.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1.5 text-[11px] uppercase tracking-wider rounded ${
                isDark
                  ? "bg-white/[0.04] border border-white/[0.08] text-neutral-400"
                  : "bg-neutral-100 border border-neutral-200 text-neutral-500"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="self-start flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3 rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.23)] active:scale-95">
          <UtensilsCrossed className="w-4 h-4" />
          Reserve a Table
        </button>
      </div>
    </motion.div>
  );
}

export default function DiningPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <main className={`min-h-screen ${isDark ? "bg-neutral-950 text-white" : "bg-neutral-50 text-neutral-900"}`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] ${
            isDark ? "bg-amber-500/[0.04]" : "bg-amber-400/[0.08]"
          }`} />
          <div className={`absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] ${
            isDark ? "bg-purple-500/[0.03]" : "bg-purple-400/[0.06]"
          }`} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className={`inline-flex items-center gap-2 transition-colors mb-8 group ${
                isDark ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-amber-500 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                Culinary Excellence
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            >
              A World of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500">
                Flavors
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`text-xl leading-relaxed max-w-2xl ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              From Mediterranean elegance to Vietnamese soul food, explore five
              unique dining destinations that transform every meal into an
              unforgettable journey.
            </motion.p>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-14"
          >
            {[
              { label: "Restaurants", value: "5" },
              { label: "Cuisines", value: "5" },
              { label: "Award-Winning Chefs", value: "12+" },
              { label: "Dishes Served Daily", value: "200+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className={`text-3xl font-bold ${isDark ? "text-white" : "text-neutral-900"}`}>{stat.value}</p>
                <p className={`text-sm mt-1 ${isDark ? "text-neutral-500" : "text-neutral-400"}`}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Restaurant Cards */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12">
            {DINING_RESTAURANTS.map((restaurant, index) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                index={index}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative pb-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`relative overflow-hidden rounded-3xl border p-12 md:p-20 text-center ${
              isDark
                ? "border-white/[0.08] bg-gradient-to-br from-amber-500/10 via-transparent to-purple-500/5"
                : "border-neutral-200 bg-gradient-to-br from-amber-50 via-white to-orange-50/50 shadow-lg shadow-amber-100/30"
            }`}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[100px] ${
                isDark ? "bg-amber-500/[0.06]" : "bg-amber-400/[0.1]"
              }`} />
            </div>
            <div className="relative z-10">
              <p className="text-amber-500 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                Private Events & Group Dining
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Make It{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  Unforgettable
                </span>
              </h2>
              <p className={`text-lg max-w-xl mx-auto mb-10 leading-relaxed ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}>
                Planning a special celebration? Our culinary team creates bespoke
                dining experiences tailored to your every desire.
              </p>
              <button className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-9 py-4 rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.23)] active:scale-95 text-lg">
                <UtensilsCrossed className="w-5 h-5" />
                Inquire About Private Dining
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
