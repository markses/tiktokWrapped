import Persona from "@/lib/Statistics/Personas/Persona";
import { Statistics } from "@/lib/Wrapped";
import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

export type WrappedSlideProps = {
  statistics: Statistics;
  persona: Persona;
  isDemo: boolean;
};

export default function WrappedContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[rgb(var(--muted))] py-8 px-4">
      <div className={cn(
        "container mx-auto",
        "min-h-[calc(100vh-4rem)]",
        "flex items-center justify-center",
        className
      )}>
        <Card className="w-full max-w-3xl mx-auto">
          <div className="p-6 md:p-8">
            {children}
          </div>
        </Card>
      </div>
    </div>
  );
}
