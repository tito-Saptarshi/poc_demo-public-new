"use client"

import Link from "next/link"
import { Header, AppHeader } from "@/components/header"
import { StatusIndicator } from "@/components/status-indicator"
import { adeoSystems, lmroSystems } from "@/lib/data"

export default function IntegrationHealthPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <Header title="Integration systems Health" />

      <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
        <AppHeader showBack backHref="/pos" />

        {/* ADEO Systems */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-foreground mb-4">ADEO SYSTEMS</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {adeoSystems.map((system) => (
              <Link
                key={system.id}
                href={`/pos/integration-health/${system.id}`}
                className="relative p-6 rounded-2xl border border-border hover:bg-accent transition-colors"
              >
                
                <div className="mt-4 text-center">
                  <div className="text-lg font-semibold text-foreground">{system.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">({system.description})</div>
                </div>
                <div className="absolute top-4 right-4">
                  <StatusIndicator status={system.status} size="lg" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* LMRO Systems */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-foreground mb-4">LMRO SYSTEMS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {lmroSystems.map((system) => (
              <Link
                key={system.id}
                href={`/pos/integration-health/${system.id}`}
                className="relative p-6 rounded-2xl border border-border hover:bg-accent transition-colors"
              >
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground">{system.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">({system.description})</div>
                </div>
                <div className="absolute top-4 right-4">
                  <StatusIndicator status={system.status} size="lg" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
