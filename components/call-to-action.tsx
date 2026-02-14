"use client";

import { useTheme } from "next-themes";
import { ArrowRight, Sparkles, Phone, Calendar } from "lucide-react";
import Link from "next/link";

export function CallToAction() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section className="relative w-full overflow-hidden bg-background py-24 md:py-8">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-orange-500/5 blur-[120px] dark:bg-orange-500/10" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[400px] rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-400/8" />
        <div className="absolute top-1/3 right-0 h-[250px] w-[350px] rounded-full bg-purple-500/5 blur-[100px] dark:bg-purple-400/8" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Heading */}
          <h2
            className={`max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            Your Luxury Escape{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Awaits
            </span>
          </h2>

          {/* Description */}
          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed md:text-xl ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Book your stay today and experience the world-class hospitality of The Palace Resort.
            Enjoy exclusive rates, complimentary spa sessions, and a sunset dinner for two.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/rooms"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Book Your Stay</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>

            <Link
              href="#"
              className={`group inline-flex items-center gap-3 rounded-full border-2 px-8 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "border-zinc-700 text-white hover:border-orange-400/50 hover:bg-orange-500/5"
                  : "border-zinc-300 text-zinc-800 hover:border-orange-400/50 hover:bg-orange-500/5"
              }`}
            >
              <Phone className="h-5 w-5 transition-colors group-hover:text-orange-500" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-10">
            {[
              {
                icon: <Calendar className="h-6 w-6 text-orange-500 dark:text-orange-400" />,
                title: "Flexible Booking",
                desc: "Free cancellation up to 48 hours before check-in",
              },
              {
                icon: <Sparkles className="h-6 w-6 text-orange-500 dark:text-orange-400" />,
                title: "Best Rate Guarantee",
                desc: "Find a lower price? We'll match it, guaranteed",
              },
              {
                icon: <Phone className="h-6 w-6 text-orange-500 dark:text-orange-400" />,
                title: "24/7 Concierge",
                desc: "Personalized service round the clock for all guests",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`glass-card group flex flex-col items-center rounded-2xl px-6 py-8 text-center transition-all duration-500 hover:-translate-y-1`}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 ring-1 ring-orange-500/20 transition-all duration-300 group-hover:bg-orange-500/15 group-hover:ring-orange-500/40 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                  {item.icon}
                </div>
                <h3
                  className={`mb-2 text-lg font-bold ${
                    isDark ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
