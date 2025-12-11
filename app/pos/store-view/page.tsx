"use client"

import { useRouter } from "next/navigation"
import { Header, AppHeader } from "@/components/header"
import { RomaniaMap } from "@/components/romania-map"
import { stores, storesByCity } from "@/lib/data"
import { Building2 } from "lucide-react"

export default function StoreViewPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <Header title="MagazinIQ – STORE VIEW" />

      <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
        <AppHeader showBack backHref="/pos" />

        <div className="mt-6 flex flex-col lg:flex-row gap-6">
          {/* Map */}
          <div className="flex-1">
            <RomaniaMap stores={stores} onStoreClick={(store) => router.push(`/pos/store-view/${store.id}`)} />
          </div>

          {/* Store List */}
          <div className="w-full lg:w-80 border-l-4 border-[#4CAF50] pl-4">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-8 h-8 text-[#4CAF50]" />
              <span className="text-lg font-semibold text-foreground">Stores</span>
            </div>

            <div className="space-y-4 max-h-[500px] overflow-y-auto">
              {Object.entries(storesByCity).map(([city, cityStores]) => (
                <div key={city}>
                  <h3 className="font-bold text-foreground">{city}</h3>
                  <div className="space-y-1 mt-2">
                    {cityStores.map((store) => (
                      <button
                        key={store.id}
                        onClick={() => router.push(`/pos/store-view/${store.id}`)}
                        className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {store.id} - {store.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
