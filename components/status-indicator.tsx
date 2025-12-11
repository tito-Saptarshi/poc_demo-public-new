import { cn } from "@/lib/utils"

export function StatusIndicator({
  status,
  size = "md",
}: {
  status: "online" | "offline" | "warning"
  size?: "sm" | "md" | "lg"
}) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }

  const colorClasses = {
    online: "bg-green-500",
    offline: "bg-red-500",
    warning: "bg-yellow-500",
  }

  return <div className={cn("rounded-full", sizeClasses[size], colorClasses[status])} />
}
