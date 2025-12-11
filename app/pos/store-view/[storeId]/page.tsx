"use client"

import { use } from "react"
import { useRouter } from "next/navigation"
import { Header, AppHeader } from "@/components/header"
import { StatusIndicator } from "@/components/status-indicator"
import { stores, storeTills } from "@/lib/data"
import { Building2 } from "lucide-react"

export default function StoreTillsPage({ params }: { params: Promise<{ storeId: string }> }) {
  const { storeId } = use(params)
  const router = useRouter()

  const store = stores.find((s) => s.id === storeId)
  const tillData = storeTills[storeId as keyof typeof storeTills] || {
    storeName: store?.name || "Unknown Store",
    storeId: storeId,
    areas: [
      {
        name: "Linia Caselor",
        tills: [
          { id: "01", status: "online" as const },
          { id: "02", status: "online" as const },
          { id: "03", status: "online" as const },
          { id: "04", status: "online" as const },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <Header title="STORE VIEW" />

      <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
        <AppHeader showBack backHref="/pos/store-view" />

        {/* Store Name */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <Building2 className="w-10 h-10 text-[#4CAF50]" />
          <span className="text-xl font-semibold text-foreground">
            {storeId} – {tillData.storeName}
          </span>
        </div>

        {/* Tills Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tillData.areas.map((area) => (
            <div key={area.name} className="border border-border rounded-lg overflow-hidden">
              <div className="bg-[#4CAF50] text-white py-2 px-4 font-semibold text-center">{area.name}</div>
              <div className="p-4 grid grid-cols-4 gap-3">
                {area.tills.map((till) => (
                  <button
                    key={till.id}
                    onClick={() => router.push(`/pos/store-view/${storeId}/till/${storeId}${till.id}`)}
                    className="relative p-4 border border-border rounded-lg hover:bg-accent transition-colors text-center"
                  >
                    <span className="text-lg font-semibold text-foreground">{till.id}</span>
                    <div className="absolute top-2 right-2">
                      <StatusIndicator status={till.status} size="sm" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
