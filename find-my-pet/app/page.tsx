"use client"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import TopNavigation from "@/components/top-navigation"
import PetSelector from "@/components/pet-selector"
import PetMap from "@/components/pet-map"
import ActionPanel from "@/components/action-panel"
import PetActivityCard from "@/components/pet-activity-card"
import { getPets, type Pet } from "@/lib/pet-data"

export default function Home() {
  const pets = getPets()
  const [selectedPet, setSelectedPet] = useState<Pet>(pets[0])

  const handleSelectPet = (pet: Pet) => {
    setSelectedPet(pet)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <TopNavigation selectedPet={selectedPet} />

        <main className="max-w-md mx-auto pb-20">
          <PetSelector pets={pets} selectedPet={selectedPet} onSelectPet={handleSelectPet} />
          <PetMap selectedPet={selectedPet} />
          <div className="px-4 space-y-4 mt-4">
            <ActionPanel selectedPet={selectedPet} />
            <PetActivityCard selectedPet={selectedPet} />
          </div>

          <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8 pb-4">Made for Vijay Vittal</div>
        </main>
      </div>
    </ThemeProvider>
  )
}
