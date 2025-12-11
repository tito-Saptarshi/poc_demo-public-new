"use client"

import { cn } from "@/lib/utils" // shadcn-style cn helper [web:41][web:45]

interface GaugeChartProps {
  value: number
  label: string
  size?: number
}

export function GaugeChart({ value, label, size = 120 }: GaugeChartProps) {
  const clamped = Math.min(100, Math.max(0, value))
  const rotation = (clamped / 100) * 180 - 90

  let color = "text-emerald-500"
  if (clamped > 50 && clamped <= 75) color = "text-yellow-500"
  if (clamped > 75) color = "text-orange-500"

  return (
    <div className="flex flex-col items-center">
      <div className="text-xs text-muted-foreground mb-1 text-center leading-tight">
        <div className="text-lg font-black">{label}</div>
        <div className="text-[11px]">Current value</div>
      </div>

      <div
        className="relative overflow-hidden rounded-t-full bg-[#f5f5f5]"
        style={{ width: size, height: size / 2 }}
      >
        {/* background arc */}
        <div
          className="absolute inset-0 rounded-full border-[10px] border-[#ececec]"
          style={{
            width: size,
            height: size,
            top: size / -2,
          }}
        />

        {/* needle */}
        <div
          className={cn(
            "absolute bottom-0 left-1/2 origin-bottom transition-transform duration-300",
            color,
          )}
          style={{
            width: 1.5,
            height: size / 2 - 14,
            transform: `translateX(-50%) rotate(${rotation}deg)`,
          }}
        >
          <div className="w-full h-full bg-current" />
        </div>

        {/* center circle */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border border-[#ddd] bg-white"
          style={{ width: 18, height: 18 }}
        />
      </div>

      <div className={cn("mt-2 text-lg font-semibold", color)}>
        {clamped.toFixed(2)}%
      </div>
    </div>
  )
}
