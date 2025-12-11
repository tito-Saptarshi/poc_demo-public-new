"use client"

import Link from "next/link"
import { Header, AppHeader } from "@/components/header"
import { Cloud } from "lucide-react"

const viewOptions = [
  {
    title: "Global View",
    items: [
      {
        name: "GKE & POD Health",
        href: "/pos/gke-health",
        icon: Cloud,
      },
      {
        name: "Integration systems Health",
        href: "/pos/integration-health",
        icon: "api",
      },
    ],
  },
  {
    title: "Store View",
    items: [
      {
        name: "Store & Till Health",
        href: "/pos/store-view",
        icon: "map",
      },
    ],
  },
]

export default function POSPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <Header title="GLOBAL & STORE VIEW" />

      <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
        <AppHeader showBack backHref="/" />

        <div className="mt-8 flex flex-col md:flex-row gap-8 md:gap-16">
          {viewOptions.map((section) => (
            <div key={section.title} className="flex-1">
              <h2 className="text-lg font-semibold text-foreground mb-6 text-center">{section.title}</h2>
              <div className="flex flex-wrap justify-center gap-6">
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex flex-col items-center p-6 rounded-2xl border border-border hover:bg-accent transition-colors w-40"
                  >
                    <div className="w-20 h-20 mb-3 flex items-center justify-center">
                      {item.icon === Cloud && <Cloud className="w-16 h-16 text-foreground" />}
                      {item.icon === "api" && (
                        <svg viewBox="0 0 60 60" className="w-16 h-16">
                          <circle cx="30" cy="30" r="12" fill="none" stroke="#0EA5E9" strokeWidth="2" />
                          <text x="30" y="34" textAnchor="middle" fill="#0EA5E9" fontSize="8" fontWeight="bold">
                            API
                          </text>
                          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                            const rad = (angle * Math.PI) / 180
                            const x1 = 30 + Math.cos(rad) * 14
                            const y1 = 30 + Math.sin(rad) * 14
                            const x2 = 30 + Math.cos(rad) * 24
                            const y2 = 30 + Math.sin(rad) * 24
                            return (
                              <g key={i}>
                                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0EA5E9" strokeWidth="1" />
                                <circle cx={x2} cy={y2} r="3" fill="#0EA5E9" />
                              </g>
                            )
                          })}
                        </svg>
                      )}
                      {item.icon === "map" && (
                        <svg viewBox="0 0 100 80" className="w-16 h-16">
                          <path
                            d="M15,30 L25,15 L40,10 L55,8 L70,10 L85,18 L92,30 L90,45 L85,55 L75,62 L60,68 L45,70 L30,68 L18,60 L12,48 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-foreground"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-medium text-center text-foreground">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
