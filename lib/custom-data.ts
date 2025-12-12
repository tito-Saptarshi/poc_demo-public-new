import { Cloud } from "lucide-react";
import { ViewSectionType } from "./types";

export const storeApps = [
  { name: "POS", href: "/pos", active: true },
  { name: "Ecommerce & Mobility", href: "#", active: false },
  { name: "Order", href: "#", active: false },
  { name: "Loyalty", href: "#", active: false },
]

export const dcOperations = [
  { name: "Inventory & Replenishment", href: "#", active: false },
  { name: "Transportation", href: "#", active: false },
  { name: "DC & Warehouse", href: "#", active: false },
  { name: "Energy Management", href: "#", active: false },
]

export const hqOperations = [
  { name: "Merchandising", href: "#", active: false },
  { name: "Pricing", href: "#", active: false },
  { name: "Promotions & Markdown", href: "#", active: false },
]

export const viewOptions: ViewSectionType[] = [
  {
    title: "Global View",
    items: [
      { name: "GKE & POD Health", href: "/pos/gke-health", icon: Cloud },
      { name: "Integration systems Health", href: "/pos/integration-health", icon: "api" },
    ],
  },
  {
    title: "Store View",
    items: [{ name: "Store & Till Health", href: "/pos/store-view", icon: "map" }],
  },
];
