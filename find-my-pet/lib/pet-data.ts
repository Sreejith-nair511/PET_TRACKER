export interface Pet {
  petID: string
  name: string
  type: "Dog" | "Cat"
  battery: string
  lat: number
  lng: number
  lastSeen: string
  signal: string
  distance: string
}

export function getPets(): Pet[] {
  // Simulated pet data
  return [
    {
      petID: "D-001",
      name: "Rocky",
      type: "Dog",
      battery: "76%",
      lat: 12.9716,
      lng: 77.5946,
      lastSeen: "4 mins ago",
      signal: "Strong",
      distance: "120m",
    },
    {
      petID: "C-003",
      name: "Mittens",
      type: "Cat",
      battery: "88%",
      lat: 12.972,
      lng: 77.595,
      lastSeen: "2 mins ago",
      signal: "Strong",
      distance: "150m",
    },
    {
      petID: "D-002",
      name: "Bruno",
      type: "Dog",
      battery: "64%",
      lat: 12.973,
      lng: 77.596,
      lastSeen: "10 mins ago",
      signal: "Medium",
      distance: "300m",
    },
    {
      petID: "C-005",
      name: "Luna",
      type: "Cat",
      battery: "90%",
      lat: 12.974,
      lng: 77.597,
      lastSeen: "1 min ago",
      signal: "Strong",
      distance: "80m",
    },
    {
      petID: "D-004",
      name: "Rex",
      type: "Dog",
      battery: "53%",
      lat: 12.975,
      lng: 77.598,
      lastSeen: "15 mins ago",
      signal: "Weak",
      distance: "500m",
    },
  ]
}
