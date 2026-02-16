"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  size: "small" | "medium" | "large" | "tall";
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: "/assets/gallery/the-palace-luxury-resort.jpg", title: "The Palace Resort", size: "large" },
  { id: 2, src: "/assets/gallery/night-view.jpg", title: "Midnight Panorama", size: "medium" },
  { id: 3, src: "/assets/gallery/waterfall.jpg", title: "Serene Waterfall", size: "tall" },
  { id: 4, src: "/assets/gallery/couple-room.jpg", title: "Luxury Suite", size: "small" },
  { id: 5, src: "/assets/gallery/helicapter.jpg", title: "Heli-Service", size: "small" },
  { id: 6, src: "/assets/gallery/stars.jpg", title: "Under the Stars", size: "medium" },
  { id: 7, src: "/assets/gallery/1bar.jpg", title: "Premium Bar", size: "small" },
  { id: 8, src: "/assets/gallery/recieption.jpg", title: "Grand Lobby", size: "small" },
  { id: 9, src: "/assets/gallery/playground.jpg", title: "Playground", size: "medium" },
  { id: 10, src: "/assets/gallery/kidz.jpg", title: "Kids Zone", size: "medium" },
  { id: 11, src: "/assets/gallery/masque.jpg", title: "The Mosque", size: "tall" },
  { id: 12, src: "/assets/gallery/twin-bad.jpg", title: "Deluxe Twin Room", size: "medium" },
  { id: 13, src: "/assets/gallery/washroom.jpg", title: "Spa & Bath", size: "small" },
  { id: 14, src: "/assets/gallery/1gd.jpg", title: "Garden View", size: "small" },
  { id: 15, src: "/assets/gallery/2leak.jpg", title: "Lakeside Serenity", size: "medium" },
  { id: 16, src: "/assets/gallery/1.jpg", title: "Architectural Marvel", size: "large" },
  { id: 17, src: "/assets/gallery/2.jpg", title: "Sunset Bliss", size: "medium" },
  { id: 18, src: "/assets/gallery/head24.jpg", title: "Mountain Peak", size: "medium" },
  { id: 19, src: "/assets/gallery/helifield.jpg", title: "Aviation Field", size: "medium" },
  
];

export function GalleryGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".gallery-card");

    // Scroll-triggered entry animation for each card
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
          delay: (index % 4) * 0.1, // Stagger effect
        }
      );
    });

    // Global velocity observer
    const proxy = { skew: 0 };
    const clamp = gsap.utils.clamp(-8, 8); // Max skew

    ScrollTrigger.create({
      onUpdate: (self) => {
        const skew = clamp(self.getVelocity() / -400);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.5,
            ease: "power3",
            overwrite: true,
            onUpdate: () => {
              cards.forEach((card) => {
                gsap.set(card, { skewY: proxy.skew });
              });
            },
          });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-6 grid-flow-dense"
    >
      {galleryItems.map((item) => (
        <div
          key={item.id}
          className={cn(
            "gallery-card group relative overflow-hidden rounded-[2.5rem] cursor-pointer bg-zinc-200 dark:bg-zinc-900 shadow-xl transition-all duration-500",
            item.size === "large" && "md:col-span-2 md:row-span-2",
            item.size === "medium" && "md:col-span-2 md:row-span-1",
            item.size === "tall" && "md:col-span-1 md:row-span-2",
            item.size === "small" && "md:col-span-1 md:row-span-1"
          )}
        >
          {/* Card Shine Effect */}
          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-white/5 via-white/20 to-transparent transition-opacity duration-700 pointer-events-none" />

          {/* Image */}
          <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={item.id <= 4}
            />
          </div>

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <h3 className="text-white text-2xl font-bold tracking-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              {item.title}
            </h3>
            <div className="h-px w-0 group-hover:w-full bg-amber-500 transition-all duration-500 mt-2 mb-3" />
            <p className="text-zinc-300 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
              EXPLORE THE LUXURY
            </p>
          </div>
          
          {/* Subtle Border */}
          <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] pointer-events-none" />
        </div>
      ))}
    </div>
  );
}
