"use client";

import React, { useState } from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { MoveRight, Plus } from "lucide-react";
import Image from "next/image";

const ROOMS = [
  {
    id: 1,
    title: "Presidential Suite",
    description: "Experience the pinnacle of luxury with panoramic ocean views and private butler service.",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    features: ["Private Terrace", "Jacuzzi", "24/7 Butler", "Mini Bar"],
  },
  {
    id: 2,
    title: "Luxury Ocean Villa",
    description: "A secluded sanctuary featuring a private infinity pool and direct beach access.",
    price: "$850",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop",
    features: ["Infinity Pool", "Garden Shower", "Sound System", "Wine Cellar"],
  },
  {
    id: 3,
    title: "Executive Royal Room",
    description: "Contemporary elegence meets comfort, perfect for business or leisure stays.",
    price: "$450",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
    features: ["King Bed", "Work Station", "Smart Room Controls", "Premium Bath"],
  },
  {
    id: 4,
    title: "Family Sunrise Suite",
    description: "Spacious and bright suite designed for the ultimate family vacation experience.",
    price: "$600",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop",
    features: ["2 Bedrooms", "Kitchenette", "Kids Area", "Balcony"],
  },
  {
    id: 5,
    title: "Honeymoon Penthouse",
    description: "An intimate and romantic getaway with 360-degree views of the resort skyline.",
    price: "$950",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
    features: ["Sunken Bath", "Champagne Service", "Private Lift", "Sky Garden"],
  },
  {
    id: 6,
    title: "Garden Deluxe Room",
    description: "Tranquil room surrounded by lush tropical gardens for a peaceful retreat.",
    price: "$350",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
    features: ["Garden View", "Outdoor Seating", "Eco-friendly", "Rain Shower"],
  },
];

export function RoomsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedRooms = showAll ? ROOMS : ROOMS.slice(0, 3);

  return (
    <section className="py-24 bg-neutral-950 text-white overflow-hidden" id="rooms">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Our Luxurious <span className="text-blue-500">Rooms</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Indulge in unparalleled comfort and sophistication. Each room is meticulously designed 
              to provide an unforgettable stay at The Palace Resort.
            </p>
          </div>
          {!showAll && (
            <button 
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300"
            >
              See All Rooms
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedRooms.map((room) => (
            <CardSpotlight key={room.id} className="h-full min-h-[500px] flex flex-col p-6 cursor-pointer">
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image 
                  src={room.image} 
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/spotlight:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-sm font-semibold">
                  {room.price} <span className="text-neutral-400 font-normal">/ Night</span>
                </div>
              </div>

              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 group-hover/spotlight:text-blue-400 transition-colors">
                  {room.title}
                </h3>
                <p className="text-neutral-400 mb-6 text-sm line-clamp-2">
                  {room.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((feature) => (
                      <span 
                        key={feature} 
                        className="px-2 py-1 text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-white font-semibold group/btn">
                    Book This Room
                    <MoveRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
