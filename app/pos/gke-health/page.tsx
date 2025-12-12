import { Header, AppHeader } from "@/components/header";

import { StatCard } from "@/app/components/StatCard";
import { GaugeTile } from "@/app/components/GaugeTile";
import { gkeOverview, cloudSqlMetrics, podInfo } from "@/lib/data";
import { SectionCard } from "@/app/components/SectionCard";

export default function GKEHealthPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      {/* <Header title="GLOBAL VIEW – GKE & POD HEALTH" /> */}

      <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
        <AppHeader showBack backHref="/pos" />

        {/* Overview */}
        <SectionCard title="Overview">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Clusters", value: gkeOverview.clusters },
              { label: "Regions", value: gkeOverview.regions },
              { label: "Zones", value: gkeOverview.zones },
              { label: "PODs", value: gkeOverview.pods },
              { label: "Node Pools", value: gkeOverview.nodePools },
              { label: "Nodes", value: gkeOverview.nodes },
              { label: "Containers", value: gkeOverview.containers },
              { label: "Services", value: gkeOverview.services },
            ].map((item) => (
              <StatCard
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>

          
        </SectionCard>

        {/* Cloud SQL */}
        <SectionCard
          title="Cloud SQL"
          headerClassName="bg-[#4CAF50] text-white"
          bodyClassName="bg-[#4CAF50]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <GaugeTile value={cloudSqlMetrics.cpu} label="CPU utilization" />
            <GaugeTile
              value={cloudSqlMetrics.memory}
              label="Memory utilization"
            />
            <GaugeTile value={cloudSqlMetrics.disk} label="Disk utilization" />

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
        </SectionCard>

        {/* POD */}
        <SectionCard
          title={`POD: ${podInfo.name}`}
          headerClassName="bg-[#4CAF50] text-white"
          bodyClassName="bg-[#4CAF50]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="bg-[#4CAF50] border-2 border-white rounded-md p-4 text-center text-white flex flex-col justify-center">
              <div className="text-xs mb-2">Status</div>
              <div className="text-3xl font-bold">{podInfo.status}</div>
            </div>

            <div className="bg-white rounded-md shadow-sm p-4 text-center flex flex-col justify-center">
              <div className="text-xs text-muted-foreground mb-2">Restarts</div>
              <div className="text-3xl font-bold text-foreground">
                {podInfo.restarts}
              </div>
            </div>

            <GaugeTile value={podInfo.cpu} label="CPU utilization" />
            <GaugeTile value={podInfo.memory} label="Memory utilization" />
            <GaugeTile value={podInfo.disk} label="Disk utilization" />
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
