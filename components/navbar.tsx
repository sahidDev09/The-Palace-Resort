"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  // In light mode, text should be dark if scrolled OR if we are NOT on the homepage (which has a dark hero overlay)
  const isDarkText = resolvedTheme !== "dark" && (isScrolled || !isHomePage);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background py-4 shadow-sm backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/palace-nav-logo.png"
              alt="The Palace Logo"
              width={120}
              height={40}
              className={`h-10 w-auto object-contain transition-all duration-300 ${isDarkText ? "brightness-0" : ""}`}
            />
          </Link>
        </motion.div>

        <div className="hidden items-center gap-8 md:flex">
          {["Rooms", "Dining", "Events", "Gallery", "Contact us"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Link
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isDarkText ? "text-zinc-800" : "text-zinc-100"
                }`}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ThemeToggle isScrolled={isScrolled} />
          <button className="rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] transition-all hover:bg-amber-600 hover:shadow-[0_6px_20px_rgba(245,158,11,0.23)] active:scale-95">
            Book Now
          </button>
        </motion.div>
      </div>
    </nav>
  );
}
