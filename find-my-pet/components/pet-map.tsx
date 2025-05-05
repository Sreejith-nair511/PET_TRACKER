"use client"

import { useEffect, useRef } from "react"
import type { Pet } from "@/lib/pet-data"
import { useTheme } from "next-themes"

interface PetMapProps {
  selectedPet: Pet
}

export default function PetMap({ selectedPet }: PetMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (typeof window !== "undefined" && mapRef.current) {
      // Dynamic import to avoid SSR issues
      import("leaflet").then((L) => {
        // Import CSS
        import("leaflet/dist/leaflet.css")

        // Clear previous map instance if any
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove()
          mapInstanceRef.current = null
        }

        // Create map
        const map = L.map(mapRef.current).setView([selectedPet.lat, selectedPet.lng], 15)
        mapInstanceRef.current = map

        // Add tile layer based on theme
        const tileLayer =
          theme === "dark"
            ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        const attribution =
          theme === "dark"
            ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

        L.tileLayer(tileLayer, {
          attribution: attribution,
          maxZoom: 19,
        }).addTo(map)

        // Create custom icon
        const petIcon = L.divIcon({
          html: `<div class="pet-marker">${selectedPet.type === "Dog" ? "🐕" : "🐈"}</div>`,
          className: "pet-marker-container",
          iconSize: [40, 40],
          iconAnchor: [20, 20],
        })

        // Add marker
        L.marker([selectedPet.lat, selectedPet.lng], { icon: petIcon })
          .addTo(map)
          .bindPopup(`${selectedPet.name} is here!`)
          .openPopup()

        // Add pulse effect CSS
        const style = document.createElement("style")
        style.innerHTML = `
          .pet-marker-container {
            background: transparent;
          }
          .pet-marker {
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          .pet-marker::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 40px;
            height: 40px;
            background: rgba(76, 175, 80, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            animation: pulse 1.5s infinite;
          }
          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(0.5);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.5);
              opacity: 0;
            }
          }
        `
        document.head.appendChild(style)

        // Cleanup
        return () => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.remove()
            mapInstanceRef.current = null
          }
          document.head.removeChild(style)
        }
      })
    }
  }, [selectedPet.lat, selectedPet.lng, selectedPet.name, selectedPet.type, theme])

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-md">
      <div ref={mapRef} className="h-[300px] w-full"></div>
    </div>
  )
}
