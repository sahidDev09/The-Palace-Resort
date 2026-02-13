"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url('${
            resolvedTheme === "dark" ? "/assets/palace-hero-night.png" : "/assets/palace-hero-light.jpg"
          }')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30 dark:bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <h1 className="mb-6 animate-fade-in-up text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          Luxury Redefined
        </h1>
        <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up text-lg text-zinc-100 delay-100 md:text-xl">
          Escape to a world where comfort meets elegance. Experience the finest
          hospitality at The Palace Resort Bahubal.
        </p>
        <div className="flex animate-fade-in-up justify-center gap-4 delay-200">
          <button className="rounded-full bg-amber-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-amber-700 active:scale-95">
            Explore Rooms
          </button>
          <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black active:scale-95">
            Take a Tour
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-white/50 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
