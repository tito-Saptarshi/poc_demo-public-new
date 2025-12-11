"use client"

import { use } from "react"
import { AppHeader } from "@/components/header"
import { StatusIndicator } from "@/components/status-indicator"
import { stores, tillDetails } from "@/lib/data"
import { Building2, Printer, ScanLine, Monitor, Archive } from "lucide-react"

export default function TillDetailPage({
  params,
}: {
  params: Promise<{ storeId: string; tillId: string }>
}) {
  const { storeId, tillId } = use(params)

  const store = stores.find((s) => s.id === storeId)
  const till = tillDetails[tillId as keyof typeof tillDetails] || {
    casaNumerar: tillId,
    casaLocatie: "Linia Caselor",
    omnistoreVersion: "1.1.44.21",
    symdsVersion: "3.13.5",
    postgresVersion: "15.5",
    services: [
      { name: "Cash Register", status: "online" as const, icon: "register" },
      { name: "Data Sync", status: "online" as const, icon: "sync" },
      { name: "Cookie", status: "online" as const, icon: "cookie" },
    ],
    devices: [
      { name: "Printer", status: "online" as const, icon: "printer" },
      { name: "Scanner", status: "online" as const, icon: "scanner" },
      { name: "Display", status: "online" as const, icon: "display" },
      { name: "Cash Drawer", status: "online" as const, icon: "drawer" },
    ],
  }

  const getDeviceIcon = (icon: string) => {
    switch (icon) {
      case "printer":
        return <Printer className="w-16 h-16 text-foreground" />
      case "scanner":
        return <ScanLine className="w-16 h-16 text-foreground" />
      case "display":
        return <Monitor className="w-16 h-16 text-foreground" />
      case "drawer":
        return <Archive className="w-16 h-16 text-foreground" />
      default:
        return <div className="w-16 h-16 bg-muted rounded" />
    }
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
        <AppHeader showBack backHref={`/pos/store-view/${storeId}`} />

        {/* Store Name */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <Building2 className="w-10 h-10 text-[#4CAF50]" />
          <span className="text-xl font-semibold text-foreground">
            {storeId} – {store?.name || "Unknown Store"}
          </span>
        </div>

        {/* Till Info Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-[#4CAF50] text-white px-4 py-2 text-left font-semibold border border-white">
                  Casa Numerar
                </th>
                <th className="bg-[#4CAF50] text-white px-4 py-2 text-left font-semibold border border-white">
                  Casa Locatie
                </th>
                <th className="bg-[#4CAF50] text-white px-4 py-2 text-left font-semibold border border-white">
                  Omnistore versiuni
                </th>
                <th className="bg-[#4CAF50] text-white px-4 py-2 text-left font-semibold border border-white">
                  SymDS versiuni
                </th>
                <th className="bg-[#4CAF50] text-white px-4 py-2 text-left font-semibold border border-white">
                  Postgres versiuni
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2 text-foreground">{till.casaNumerar}</td>
                <td className="border border-border px-4 py-2 text-foreground">{till.casaLocatie}</td>
                <td className="border border-border px-4 py-2 text-foreground">{till.omnistoreVersion}</td>
                <td className="border border-border px-4 py-2 text-foreground">{till.symdsVersion}</td>
                <td className="border border-border px-4 py-2 text-foreground">{till.postgresVersion}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Services */}
        <div className="mt-6 flex">
          <div
            className="bg-[#4CAF50] text-white px-3 py-8 font-bold writing-mode-vertical flex items-center justify-center rounded-l-lg"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
          >
            SERVICES
          </div>
          <div className="flex-1 grid grid-cols-3 gap-4 p-4 border border-border rounded-r-lg">
            {till.services.map((service, index) => (
              <div
                key={index}
                className="relative p-4 border border-border rounded-lg flex flex-col items-center justify-center h-32"
              >
                {service.icon === "register" && (
                  <svg viewBox="0 0 64 64" className="w-16 h-16">
                    <rect
                      x="10"
                      y="20"
                      width="44"
                      height="30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-foreground"
                    />
                    <rect
                      x="15"
                      y="25"
                      width="20"
                      height="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-foreground"
                    />
                    <rect x="40" y="25" width="8" height="8" fill="currentColor" className="text-foreground" />
                    <rect
                      x="15"
                      y="38"
                      width="34"
                      height="8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-foreground"
                    />
                  </svg>
                )}
                {service.icon === "sync" && (
                  <svg viewBox="0 0 64 64" className="w-16 h-16">
                    <ellipse cx="32" cy="15" rx="10" ry="5" fill="none" stroke="#60A5FA" strokeWidth="2" />
                    <ellipse cx="15" cy="45" rx="10" ry="5" fill="none" stroke="#60A5FA" strokeWidth="2" />
                    <ellipse cx="49" cy="45" rx="10" ry="5" fill="none" stroke="#60A5FA" strokeWidth="2" />
                    <line x1="26" y1="18" x2="18" y2="40" stroke="#60A5FA" strokeWidth="1" />
                    <line x1="38" y1="18" x2="46" y2="40" stroke="#60A5FA" strokeWidth="1" />
                    <line x1="25" y1="45" x2="39" y2="45" stroke="#60A5FA" strokeWidth="1" />
                  </svg>
                )}
                {service.icon === "cookie" && (
                  <div className="text-2xl font-bold">
                    <span className="text-[#4A5568]">C</span>
                    <span className="text-[#F97316]">🍪</span>
                    <span className="text-[#3B82F6]">OKIE</span>
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <StatusIndicator status={service.status} size="md" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Devices */}
        <div className="mt-6 flex">
          <div
            className="bg-[#4CAF50] text-white px-3 py-8 font-bold writing-mode-vertical flex items-center justify-center rounded-l-lg"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
          >
            DEVICES
          </div>
          <div className="flex-1 grid grid-cols-4 gap-4 p-4 border border-border rounded-r-lg">
            {till.devices.map((device, index) => (
              <div
                key={index}
                className="relative p-4 border border-border rounded-lg flex flex-col items-center justify-center h-32 bg-muted/50"
              >
                {getDeviceIcon(device.icon)}
                <div className="absolute top-2 right-2">
                  <StatusIndicator status={device.status} size="md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
