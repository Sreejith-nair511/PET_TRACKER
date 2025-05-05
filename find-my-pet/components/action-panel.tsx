"use client"

import { useState } from "react"
import { Volume2, RefreshCw, Navigation, MessageSquare, Info } from "lucide-react"
import { toast } from "sonner"
import type { Pet } from "@/lib/pet-data"
import PetInfoModal from "./pet-info-modal"

interface ActionPanelProps {
  selectedPet: Pet
}

export default function ActionPanel({ selectedPet }: ActionPanelProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)

  const handlePlaySound = () => {
    toast.success(`Playing sound on ${selectedPet.name}'s tag`, {
      description: "Beep sound simulated",
      icon: "🔊",
    })
  }

  const handleRefreshLocation = () => {
    setIsRefreshing(true)

    // Simulate refresh delay
    setTimeout(() => {
      toast.success("Location updated", {
        description: `${selectedPet.name}'s location refreshed`,
        icon: "📍",
      })
      setIsRefreshing(false)
    }, 1500)
  }

  const handleNavigate = () => {
    // Open Google Maps with the coordinates
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${selectedPet.lat},${selectedPet.lng}`, "_blank")
  }

  const handleSendMessage = () => {
    toast.success(`Message sent to ${selectedPet.name}'s tag`, {
      description: "Audio message simulated",
      icon: "💬",
    })
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md">
        <button
          onClick={handlePlaySound}
          className="flex flex-col items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <Volume2 className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>
          <span className="text-sm font-medium">Play Sound</span>
        </button>

        <button
          onClick={handleRefreshLocation}
          disabled={isRefreshing}
          className="flex flex-col items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
        >
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <RefreshCw className={`h-5 w-5 text-blue-600 dark:text-blue-400 ${isRefreshing ? "animate-spin" : ""}`} />
          </div>
          <span className="text-sm font-medium">{isRefreshing ? "Refreshing..." : "Refresh"}</span>
        </button>

        <button
          onClick={handleNavigate}
          className="flex flex-col items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
            <Navigation className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>
          <span className="text-sm font-medium">Navigate</span>
        </button>

        <button
          onClick={handleSendMessage}
          className="flex flex-col items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-orange-600 dark:text-orange-400" />
          </div>
          <span className="text-sm font-medium">Send Message</span>
        </button>

        <button
          onClick={() => setShowInfoModal(true)}
          className="flex flex-col items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors col-span-2"
        >
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
            <Info className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </div>
          <span className="text-sm font-medium">Pet Info</span>
        </button>
      </div>

      <PetInfoModal isOpen={showInfoModal} onClose={() => setShowInfoModal(false)} pet={selectedPet} />
    </>
  )
}
