
import Link from "next/link";
import { StatusIndicator } from "@/components/status-indicator";

export type System = {
  id: string;
  name: string;
  description: string;
  status: "online" | "offline";
};

type SystemCardProps = {
  system: System;
  baseHref: string;
};

export function SystemCard({ system, baseHref }: SystemCardProps) {
  return (
    <Link
      href={`${baseHref}/${system.id}`}
      className="relative p-6 rounded-2xl border border-border hover:bg-accent transition-colors"
    >
      <div className="text-center">
        <div className="text-lg font-semibold text-foreground">{system.name}</div>
        <div className="text-sm text-muted-foreground mt-1">
          ({system.description})
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <StatusIndicator status={system.status} size="lg" />
      </div>
    </Link>
  );
}
