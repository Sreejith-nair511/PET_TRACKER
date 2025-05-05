"use client"

import type { Pet } from "@/lib/pet-data"

interface PetSelectorProps {
  pets: Pet[]
  selectedPet: Pet
  onSelectPet: (pet: Pet) => void
}

export default function PetSelector({ pets, selectedPet, onSelectPet }: PetSelectorProps) {
  return (
    <div className="py-4">
      <div className="flex overflow-x-auto gap-4 snap-x px-4 pb-2 hide-scrollbar">
        {pets.map((pet) => (
          <div
            key={pet.petID}
            className={`flex-shrink-0 snap-center cursor-pointer transition-all duration-200 ${
              selectedPet.petID === pet.petID ? "scale-105 ring-2 ring-green-500 dark:ring-green-400" : "opacity-70"
            }`}
            onClick={() => onSelectPet(pet)}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 w-36">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{pet.type === "Dog" ? "🐶" : "🐱"}</span>
                <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">{pet.petID}</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">{pet.name}</h3>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Battery</span>
                  <span>{pet.battery}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
