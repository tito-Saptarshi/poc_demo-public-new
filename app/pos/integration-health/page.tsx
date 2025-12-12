
import { SystemSection } from "@/app/components/SystemSection";
import { Header, AppHeader } from "@/components/header";

import { adeoSystems, lmroSystems } from "@/lib/data";

export default function IntegrationHealthPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      {/* <Header title="Integration systems Health" /> */}

      <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
        <AppHeader showBack backHref="/pos" />

        <SystemSection
          title="ADEO SYSTEMS"
          systems={adeoSystems}
          baseHref="/pos/integration-health"
          gridClassName="grid-cols-2 md:grid-cols-5"
        />

        <SystemSection
          title="LMRO SYSTEMS"
          systems={lmroSystems}
          baseHref="/pos/integration-health"
          gridClassName="grid-cols-2 md:grid-cols-3"
        />
      </div>
    </div>
  );
}
