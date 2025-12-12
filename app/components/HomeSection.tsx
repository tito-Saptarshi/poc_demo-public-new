
import { HomePageCard } from "./HomePageCards";

type App = { name: string; href: string; active: boolean };

export function HomeSection({
  title,
  apps,
  cols = "md:grid-cols-4",
}: {
  title: string;
  apps: App[];
  cols?: string; // optional to control grid cols
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground mb-4">{title}</h2>
      <div className={`grid grid-cols-2 ${cols} gap-4`}>
        {apps.map((app) => (
          <HomePageCard key={app.name} app={app} />
        ))}
      </div>
    </section>
  );
}
