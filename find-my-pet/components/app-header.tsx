"use client"

import { Battery } from "lucide-react"
import { useState, useEffect } from "react"

interface AppHeaderProps {
  battery: string
}

export default function AppHeader({ battery }: AppHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 w-full z-10 transition-shadow ${isScrolled ? "shadow-md" : ""}`}>
      <div className="bg-green-700 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <h1 className="text-xl font-semibold">Find My Pet</h1>
        </div>

        <div className="flex items-center gap-1">
          <Battery className="h-5 w-5" />
          <span className="text-sm">{battery}</span>
        </div>
      </div>
    </header>
  )
}
