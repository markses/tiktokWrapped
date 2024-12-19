"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
}

export function Carousel({ 
  children, 
  className
}: CarouselProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg max-w-4xl mx-auto">
        <p className="text-xl sm:text-2xl font-bold mb-2 text-center bg-gradient-to-r from-[#FF6B81] to-[#70E1E1] text-transparent bg-clip-text pt-2">
          Your TikTok Wrapped
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
          {React.Children.map(children, (child) => (
            <div className="transform transition-all duration-300 hover:scale-105">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B81]/10 to-[#70E1E1]/10 
                              rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                  {child}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 