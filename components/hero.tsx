"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Images with Framer Motion Cross-fade */}
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
          >
            <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
        >
          Luxury Redefined
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-zinc-100 md:text-xl"
        >
          Escape to a world where comfort meets elegance. Experience the finest
          hospitality at The Palace Resort Bahubal.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <button className="rounded-full bg-amber-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-amber-700 active:scale-95">
            Explore Rooms
          </button>
          <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black active:scale-95">
            Take a Tour
          </button>
        </motion.div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </section>
  );
}
