import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TikTok Wrapped: Discover Your Year in Videos",
  description: "Explore your top TikTok moments with TikTok Wrapped. Relive your favorite videos and trends from the past year, Join the journey of your TikTok memories today!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-cream-100`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <script defer data-domain="tiktokwrapped.me" src="https://tj.misew.top/js/script.js"></script>
      </body>
    </html>
  )
}