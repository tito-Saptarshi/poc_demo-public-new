import { ViewSectionType } from "@/lib/types";
import { ViewCard } from "./ViewCard";


export function ViewSection({ section }: { section: ViewSectionType }) {
  return (
    <div className="flex-1">
      <h2 className="text-lg font-semibold text-foreground mb-6 text-center">
        {section.title}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {section.items.map((item) => (
          <ViewCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
