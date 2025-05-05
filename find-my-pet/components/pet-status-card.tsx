import { Signal, Clock } from "lucide-react"

interface PetStatusCardProps {
  petName: string
  tagID: string
  lastSeen: string
  signal: string
}

export default function PetStatusCard({ petName, tagID, lastSeen, signal }: PetStatusCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐶</span>
          <h2 className="text-xl font-bold">{petName}</h2>
        </div>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{tagID}</span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span>Last seen: {lastSeen}</span>
        </div>

        <div className="flex items-center gap-2">
          <Signal className="h-4 w-4 text-green-600" />
          <span>Signal: {signal}</span>
        </div>
      </div>
    </div>
  )
}
