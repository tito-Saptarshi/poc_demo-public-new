

import { Header, AppHeader } from "@/components/header";
import { ViewSectionType } from "@/lib/types";
import { ViewSection } from "./ViewSection";


export function POSLayout({ viewOptions }: { viewOptions: ViewSectionType[] }) {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      {/* <Header title="GLOBAL & STORE VIEW" /> */}

      <div className="border border-border rounded-lg p-4 md:p-6 bg-card">
        <AppHeader showBack backHref="/" />

        <div className="mt-8 flex flex-col md:flex-row gap-8 md:gap-16">
          {viewOptions.map((section) => (
            <ViewSection key={section.title} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}
