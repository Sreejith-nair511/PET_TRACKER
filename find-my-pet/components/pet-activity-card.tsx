import { Signal, Clock, MapPin, Battery, Volume } from "lucide-react"
import type { Pet } from "@/lib/pet-data"

interface PetActivityCardProps {
  selectedPet: Pet
}

export default function PetActivityCard({ selectedPet }: PetActivityCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
        {selectedPet.type === "Dog" ? "🐶" : "🐱"} {selectedPet.name}'s Activity
      </h2>

      <div className="grid grid-cols-1 gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Clock className="h-4 w-4" />
            <span>Last Seen</span>
          </div>
          <span className="font-medium">{selectedPet.lastSeen}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Signal className="h-4 w-4" />
            <span>Signal Strength</span>
          </div>
          <span className="font-medium">{selectedPet.signal}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <MapPin className="h-4 w-4" />
            <span>Distance from You</span>
          </div>
          <span className="font-medium">{selectedPet.distance}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Battery className="h-4 w-4" />
            <span>Tag Battery</span>
          </div>
          <span className="font-medium">{selectedPet.battery}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Volume className="h-4 w-4" />
            <span>Last Sound Trigger</span>
          </div>
          <span className="font-medium">Today, 02:15 PM</span>
        </div>
      </div>
    </div>
  )
}
