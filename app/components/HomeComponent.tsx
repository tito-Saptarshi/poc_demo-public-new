

import { Header, AppHeader } from "@/components/header"
import { dcOperations, hqOperations, storeApps } from "@/lib/custom-data"
import { HomeSection } from "./HomeSection"

export function HomeComponent()  {

  return (
     <div className="min-h-screen bg-background p-4 md:p-6">
      {/* <Header  /> */}

      <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
        <AppHeader />

        <div className="mt-6 space-y-8">

          <HomeSection
            title="Store and Customer applications"
            apps={storeApps}
            cols="md:grid-cols-4"
          />

          <HomeSection
            title="Store and DC Operations"
            apps={dcOperations}
            cols="md:grid-cols-4"
          />

          <HomeSection
            title="HQ Operations"
            apps={hqOperations}
            cols="md:grid-cols-3"
          />


        </div>
      </div>
    </div>
  )
}

