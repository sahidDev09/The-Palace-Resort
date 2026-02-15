"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RoomCard } from "@/components/room-card";
import { Room } from "@/lib/types";

export default function RoomsPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('/api/rooms');
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <main className={`relative min-h-screen pt-32 pb-24 overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#050505] text-white" : "bg-neutral-50 text-neutral-900"}`}>
      {/* Background decorative blobs - Full Height */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute top-0 -left-24 w-[800px] h-[800px] rounded-full blur-[160px] opacity-20 ${
          isDark ? "bg-amber-500/30" : "bg-amber-400/20"
        }`} />
        <div className={`absolute top-[30%] -right-24 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 ${
          isDark ? "bg-purple-500/20" : "bg-purple-300/20"
        }`} />
        <div className={`absolute top-[60%] -left-32 w-[700px] h-[700px] rounded-full blur-[180px] opacity-10 ${
          isDark ? "bg-amber-600/20" : "bg-amber-200/30"
        }`} />
        <div className={`absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-[160px] opacity-15 ${
          isDark ? "bg-amber-500/20" : "bg-amber-300/20"
        }`} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <Link 
            href="/" 
            className={`inline-flex items-center gap-2 transition-colors mb-8 group ${isDark ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"}`}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Our <span className="text-amber-500">Accommodations</span>
            </h1>
            <p className={`text-xl leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
              From elegant suites to private villas, discover our collection of luxury living spaces 
              designed for the most discerning travelers.
            </p>
          </div>
        </div>

        {/* Rooms Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`h-[500px] rounded-3xl animate-pulse ${isDark ? "bg-white/5" : "bg-black/5"}`} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
