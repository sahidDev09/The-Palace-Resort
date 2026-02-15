"use client";

import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RoomCard } from "@/components/room-card";
import { Room } from "@/lib/types";

export function RoomsSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <section className={`py-24 overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#050505] text-white" : "bg-neutral-50 text-neutral-900"}`} id="rooms">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Our Luxurious <span className="text-amber-500">Rooms</span>
            </h2>
            <p className={`text-lg ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
              Indulge in unparalleled comfort and sophistication. Each room is meticulously designed 
              to provide an unforgettable stay at The Palace Resort.
            </p>
          </div>
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

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
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
    </section>
  );
}
