"use client"

import { Header, AppHeader } from "@/components/header"
import { GaugeChart } from "@/components/gauge-chart"
import { gkeOverview, cloudSqlMetrics, podInfo } from "@/lib/data"

export default function GKEHealthPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <Header title="GLOBAL VIEW – GKE & POD HEALTH" />

      <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
        <AppHeader showBack backHref="/pos" />

        {/* Overview Section */}
        <div className="mt-6">
          <div className="bg-[#4CAF50] text-white text-center py-2 rounded-t-md font-semibold text-base">
            Overview
          </div>
          <div className="border border-t-0 border-border rounded-b-md p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Clusters", value: gkeOverview.clusters },
                { label: "Regions", value: gkeOverview.regions },
                { label: "Zones", value: gkeOverview.zones },
                { label: "PODs", value: gkeOverview.pods },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="bg-[#4CAF50] text-white py-2 rounded-t-md text-sm font-medium">
                    {item.label}
                  </div>
                  <div className="border border-t-0 border-border rounded-b-md py-4 bg-white">
                    <span className="text-4xl font-bold text-foreground">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[
                { label: "Node Pools", value: gkeOverview.nodePools },
                { label: "Nodes", value: gkeOverview.nodes },
                { label: "Containers", value: gkeOverview.containers },
                { label: "Services", value: gkeOverview.services },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="bg-[#4CAF50] text-white py-2 rounded-t-md text-sm font-medium">
                    {item.label}
                  </div>
                  <div className="border border-t-0 border-border rounded-b-md py-4 bg-white">
                    <span className="text-4xl font-bold text-foreground">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cloud SQL Section */}
        <div className="mt-6">
          <div className="bg-[#4CAF50] text-white text-center py-2 rounded-t-md font-semibold text-base">
            Cloud SQL
          </div>
          <div className="border border-t-0 border-border rounded-b-md p-4 bg-[#4CAF50]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="bg-white rounded-md shadow-sm p-3 flex items-center justify-center">
                <GaugeChart
                  value={cloudSqlMetrics.cpu}
                  label="CPU utilization"
                />
              </div>
              <div className="bg-white rounded-md shadow-sm p-3 flex items-center justify-center">
                <GaugeChart
                  value={cloudSqlMetrics.memory}
                  label="Memory utilization"
                />
              </div>
              <div className="bg-white rounded-md shadow-sm p-3 flex items-center justify-center">
                <GaugeChart
                  value={cloudSqlMetrics.disk}
                  label="Disk utilization"
                />
              </div>
              <div className="bg-white rounded-md shadow-sm p-3 text-center flex flex-col justify-center">
                <div className="text-xs text-muted-foreground mb-2">
                  Backup Status
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {cloudSqlMetrics.backupStatus}
                </div>
              </div>
              <div className="bg-[#4CAF50] rounded-md shadow-sm p-3 text-center text-white flex flex-col justify-center">
                <div className="text-xs mb-1">Backup Date</div>
                <div className="text-lg font-semibold">
                  {cloudSqlMetrics.backupDate}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* POD Section */}
        <div className="mt-6">
          <div className="bg-[#4CAF50] text-white text-center py-2 rounded-t-md font-semibold text-base">
            POD: {podInfo.name}
          </div>
          <div className="border border-t-0 border-border rounded-b-md p-4 bg-[#4CAF50]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="bg-[#4CAF50] border-2 border-white rounded-md p-4 text-center text-white flex flex-col justify-center">
                <div className="text-xs mb-2">Status</div>
                <div className="text-3xl font-bold">{podInfo.status}</div>
              </div>
              <div className="bg-white rounded-md shadow-sm p-4 text-center flex flex-col justify-center">
                <div className="text-xs text-muted-foreground mb-2">
                  Restarts
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {podInfo.restarts}
                </div>
              </div>
              <div className="bg-white rounded-md shadow-sm p-3 flex items-center justify-center">
                <GaugeChart value={podInfo.cpu} label="CPU utilization" />
              </div>
              <div className="bg-white rounded-md shadow-sm p-3 flex items-center justify-center">
                <GaugeChart value={podInfo.memory} label="Memory utilization" />
              </div>
              <div className="bg-white rounded-md shadow-sm p-3 flex items-center justify-center">
                <GaugeChart value={podInfo.disk} label="Disk utilization" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
