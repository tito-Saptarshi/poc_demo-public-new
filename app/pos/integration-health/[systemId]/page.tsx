"use client"

import { use } from "react"
import { Header, AppHeader } from "@/components/header"
import { adeoSystems, lmroSystems, ddgbImpacts } from "@/lib/data"

export default function SystemDetailPage({ params }: { params: Promise<{ systemId: string }> }) {
  const { systemId } = use(params)

  const allSystems = [...adeoSystems, ...lmroSystems]
  const system = allSystems.find((s) => s.id === systemId)

  if (!system) {
    return <div>System not found</div>
  }

  const isOffline = system.status === "offline"

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      {/* <Header title={`${system.description} - ${system.name}`} /> */}

      <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
        <AppHeader showBack backHref="/pos/integration-health" />

        <div className="mt-6 flex">
          <div className="border border-border px-6 py-3 font-semibold text-foreground">Status</div>
          <div className={`flex-1 px-6 py-3 text-white font-semibold ${isOffline ? "bg-red-500" : "bg-green-500"}`}>
          {isOffline ? "OFFLINE" : "ONLINE"}
          </div>
        </div>

       
        {isOffline && (
          <div className="mt-8">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Business Impacts</h3>
              <ol className="list-decimal list-inside space-y-3 text-foreground">
                {ddgbImpacts.map((impact, index) => (
                  <li key={index}>{impact}</li>
                ))}
              </ol>
            </div>
          </div>
        )}

    
        {!isOffline && (
          <div className="mt-8">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">System Information</h3>
              <div className="space-y-2 text-foreground">
                <p>
                  <strong>Name:</strong> {system.name}
                </p>
                <p>
                  <strong>Description:</strong> {system.description}
                </p>
                <p>
                  <strong>Status:</strong> Operational
                </p>
                <p>
                  <strong>Last Check:</strong> {new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
