import Faq from "@/components/Preparation/Faq";
import FatHeading from "@/components/Wrapped/FatHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[rgb(var(--muted))] py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-shadow">
          <FatHeading className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[rgb(var(--primary))] via-[rgb(var(--secondary))] to-[rgb(var(--accent))] text-transparent bg-clip-text">
            Frequently Asked Questions
          </FatHeading>

          <div className="space-y-6">
            <Faq />
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <Button 
                className="bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] 
                         hover:opacity-90 text-white transform hover:scale-105 
                         transition-all duration-200 min-w-[160px] px-8 py-2.5 
                         rounded-full shadow-md hover:shadow-lg"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FaqPage;
