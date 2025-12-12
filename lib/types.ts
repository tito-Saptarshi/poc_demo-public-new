import type { LucideIcon } from "lucide-react";

export type ViewItem = {
  name: string;
  href: string;
  icon: LucideIcon | "api" | "map";
};

export type ViewSectionType = {
  title: string;
  items: ViewItem[];
};
