"use client"

import { X } from "lucide-react"
import type { Pet } from "@/lib/pet-data"
import { useEffect, useRef } from "react"

interface PetInfoModalProps {
  isOpen: boolean
  onClose: () => void
  pet: Pet
}

export default function PetInfoModal({ isOpen, onClose, pet }: PetInfoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Mock history data
  const historyData = [
    { time: "Today, 10:15 AM", location: "Home", coordinates: "12.9716, 77.5946" },
    { time: "Today, 09:30 AM", location: "Park", coordinates: "12.9720, 77.5950" },
    { time: "Today, 08:45 AM", location: "Home", coordinates: "12.9716, 77.5946" },
    { time: "Yesterday, 06:30 PM", location: "Vet Clinic", coordinates: "12.9730, 77.5960" },
    { time: "Yesterday, 04:15 PM", location: "Dog Park", coordinates: "12.9740, 77.5970" },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col"
      >
        <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            {pet.type === "Dog" ? "🐶" : "🐱"} {pet.name}'s Info
          </h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <div className="text-sm text-gray-500 dark:text-gray-400">Pet ID</div>
              <div className="font-medium">{pet.petID}</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <div className="text-sm text-gray-500 dark:text-gray-400">Type</div>
              <div className="font-medium">{pet.type}</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <div className="text-sm text-gray-500 dark:text-gray-400">Battery</div>
              <div className="font-medium">{pet.battery}</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <div className="text-sm text-gray-500 dark:text-gray-400">Signal</div>
              <div className="font-medium">{pet.signal}</div>
            </div>
          </div>

          <h3 className="font-medium mb-3">Location History</h3>
          <div className="space-y-3">
            {historyData.map((item, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between">
                <div>
                  <div className="font-medium">{item.location}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{item.time}</div>
                </div>
                <div className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 h-fit rounded-full">
                  {item.coordinates}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t dark:border-gray-700 mt-auto">
          <button
            onClick={onClose}
            className="w-full py-2 bg-gray-200 dark:bg-gray-700 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
