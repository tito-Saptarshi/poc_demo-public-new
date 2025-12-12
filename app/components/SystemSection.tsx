
import { System, SystemCard } from "./SystemCard";

type SystemSectionProps = {
  title: string;
  systems: System[];
  baseHref: string;
  gridClassName?: string;
};

export function SystemSection({
  title,
  systems,
  baseHref,
  gridClassName = "grid-cols-2 md:grid-cols-5",
}: SystemSectionProps) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-foreground mb-4">{title}</h2>
      <div className={`grid ${gridClassName} gap-4`}>
        {systems.map((system) => (
          <SystemCard key={system.id} system={system} baseHref={baseHref} />
        ))}
      </div>
    </div>
  );
}
