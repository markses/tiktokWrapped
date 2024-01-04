import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TikTok Wrapped: Discover Your Year in Videos",
  description: "Explore your top TikTok moments with TikTok Wrapped. Relive your favorite videos and trends from the past year ,Join the journey of your TikTok memories today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

      <body className={`${inter.className} w-screen min-h-screen`}>
        {children}

        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          data-collect-dnt="true"
        />
        <noscript>
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
        <Script
          data-domain="wrapped.vantezzen.io"
          src="https://plausible.io/js/script.tagged-events.js"
        />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8508732166185621"
          crossOrigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
