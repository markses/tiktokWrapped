"use client";

import React from "react";

interface LegalPageProps {
  children: React.ReactNode;
}

export default function LegalPage({ children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE1E1] to-[#E1F4F4]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
