"use client";

import React, { useEffect, useState, useRef } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RoomCard } from "@/components/room-card";
import { Room } from "@/lib/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RoomsSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('/api/rooms');
        const data = await response.json();
        setRooms(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  useGSAP(() => {
    if (loading) return;

    // Animate text elements
    gsap.from(".animate-text", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    // Animate room cards
    gsap.from(".room-card-wrapper", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 65%",
      }
    });
  }, { scope: container, dependencies: [loading] });

  return (
    <section ref={container} className={`py-24 overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#050505] text-white" : "bg-neutral-50 text-neutral-900"}`} id="rooms">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="animate-text text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Our Luxurious <span className="text-amber-500">Rooms</span>
            </h2>
            <p className={`animate-text text-lg ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
              Indulge in unparalleled comfort and sophistication. Each room is meticulously designed 
              to provide an unforgettable stay at The Palace Resort.
            </p>
          </div>
          <div className="animate-text">
            <Link 
              href="/rooms"
              className={`group flex items-center gap-2 px-6 py-3 border rounded-full transition-all duration-300 ${
                isDark 
                  ? "bg-white/10 hover:bg-white/20 border-white/20 text-white" 
                  : "bg-neutral-200/50 hover:bg-neutral-200 border-neutral-300 text-neutral-900"
              }`}
            >
              See All Rooms
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-[500px] rounded-3xl animate-pulse ${isDark ? "bg-white/5" : "bg-black/5"}`} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="room-card-wrapper h-full">
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
