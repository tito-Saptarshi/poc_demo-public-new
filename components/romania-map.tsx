
"use client"

import { useState } from "react"

interface Store {
  id: string
  name: string
  city: string
  x: number
  y: number
  status: "online" | "offline"
}

interface RomaniaMapProps {
  stores: Store[]
  onStoreClick: (store: Store) => void
}

export function RomaniaMap({ stores, onStoreClick }: RomaniaMapProps) {
  const [hoveredStore, setHoveredStore] = useState<string | null>(null)

  return (
    <div className="relative w-full max-w-2xl">
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* Romania outline - simplified */}
        <path
          d="M50,100 L80,60 L120,50 L160,40 L200,35 L240,40 L280,50 L320,70 L350,90 L360,130 L350,170 L340,200 L320,220 L280,240 L240,250 L200,255 L160,250 L120,240 L80,220 L60,190 L50,160 L45,130 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground"
        />

        {/* Store markers */}
        {stores.map((store) => (
          <g
            key={store.id}
            onClick={() => onStoreClick(store)}
            onMouseEnter={() => setHoveredStore(store.id)}
            onMouseLeave={() => setHoveredStore(null)}
            className="cursor-pointer"
          >
            <polygon
              points={`${store.x},${store.y - 12} ${store.x - 8},${store.y + 4} ${store.x + 8},${store.y + 4}`}
              fill={store.status === "online" ? "#22c55e" : "#ef4444"}
              className="transition-transform hover:scale-110"
            />
            {hoveredStore === store.id && (
              <text x={store.x} y={store.y + 20} textAnchor="middle" className="text-xs fill-foreground" fontSize="10">
                {store.name}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}
