"use client"

import Link from "next/link"
import { Header, AppHeader } from "@/components/header"

const storeApps = [
  { name: "POS", href: "/pos", active: true },
  { name: "Ecommerce & Mobility", href: "#", active: false },
  { name: "Order", href: "#", active: false },
  { name: "Loyalty", href: "#", active: false },
]

const dcOperations = [
  { name: "Inventory & Replenishment", href: "#", active: false },
  { name: "Transportation", href: "#", active: false },
  { name: "DC & Warehouse", href: "#", active: false },
  { name: "Energy Management", href: "#", active: false },
]

const hqOperations = [
  { name: "Merchandising", href: "#", active: false },
  { name: "Pricing", href: "#", active: false },
  { name: "Promotions & Markdown", href: "#", active: false },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <Header  />

      <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
        <AppHeader />

        <div className="mt-6 space-y-8">
          {/* Store and Customer applications */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-4">Store and Customer applications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {storeApps.map((app) => (
                <Link
                  key={app.name}
                  href={app.href}
                  className={`p-4 md:p-6 rounded-lg border text-center transition-colors ${
                    app.active
                      ? "bg-card border-border hover:bg-accent text-foreground"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  <span className="text-sm md:text-base font-medium">{app.name}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Store and DC Operations */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-4">Store and DC Operations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dcOperations.map((app) => (
                <div key={app.name} className="p-4 md:p-6 rounded-lg bg-muted text-muted-foreground text-center">
                  <span className="text-sm md:text-base font-medium">{app.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* HQ Operations */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-4">HQ Operations</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {hqOperations.map((app) => (
                <div key={app.name} className="p-4 md:p-6 rounded-lg bg-muted text-muted-foreground text-center">
                  <span className="text-sm md:text-base font-medium">{app.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
