"use client"

import { useState } from "react"
import { Moon, Sun, ChevronDown, Battery } from "lucide-react"
import { useTheme } from "next-themes"
import type { Pet } from "@/lib/pet-data"

interface TopNavigationProps {
  selectedPet: Pet
}

export default function TopNavigation({ selectedPet }: TopNavigationProps) {
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-3 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-md mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <h1 className="text-xl font-semibold">Find My Pet</h1>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-1 text-sm">
              <span>{selectedPet.name}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-1">
            <Battery className="h-5 w-5" />
            <span className="text-sm">{selectedPet.battery}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
