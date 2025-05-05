"use client"

import { Volume2, RefreshCw, Navigation } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

interface ActionButtonsProps {
  lat: number
  lng: number
}

export default function ActionButtons({ lat, lng }: ActionButtonsProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handlePlaySound = () => {
    toast.success("Playing sound on pet tag", {
      description: "Beep sound simulated",
      icon: "🔊",
    })
  }

  const handleRefreshLocation = () => {
    setIsRefreshing(true)

    // Simulate refresh delay
    setTimeout(() => {
      toast.success("Location updated", {
        description: "Pet location refreshed",
        icon: "📍",
      })
      setIsRefreshing(false)
    }, 1500)
  }

  const handleNavigate = () => {
    // Open Google Maps with the coordinates
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank")
  }

  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      <button
        onClick={handlePlaySound}
        className="flex flex-col items-center justify-center gap-2 bg-white rounded-xl p-4 shadow-md hover:bg-gray-50 transition-colors"
      >
        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
          <Volume2 className="h-5 w-5 text-green-600" />
        </div>
        <span className="text-sm font-medium">Play Sound</span>
      </button>

      <button
        onClick={handleRefreshLocation}
        disabled={isRefreshing}
        className="flex flex-col items-center justify-center gap-2 bg-white rounded-xl p-4 shadow-md hover:bg-gray-50 transition-colors disabled:opacity-50"
      >
        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
          <RefreshCw className={`h-5 w-5 text-green-600 ${isRefreshing ? "animate-spin" : ""}`} />
        </div>
        <span className="text-sm font-medium">{isRefreshing ? "Refreshing..." : "Refresh"}</span>
      </button>

      <button
        onClick={handleNavigate}
        className="flex flex-col items-center justify-center gap-2 bg-white rounded-xl p-4 shadow-md hover:bg-gray-50 transition-colors"
      >
        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
          <Navigation className="h-5 w-5 text-green-600" />
        </div>
        <span className="text-sm font-medium">Navigate</span>
      </button>
    </div>
  )
}
