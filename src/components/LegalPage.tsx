import React from "react";
import { Metadata } from "next";
import Footer from "./Footer";

interface LegalPageProps {
  children: React.ReactNode;
}

function LegalPage({ children }: LegalPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      {/* 只保留一个 Footer */}
    </div>
  );
}

export default LegalPage;
