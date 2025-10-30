import { cn } from "@/lib/utils";

export type SystemStatus = "available" | "in-use" | "maintenance";

interface StatusBadgeProps {
  status: SystemStatus;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

const StatusBadge = ({ status, showLabel = true, size = "md" }: StatusBadgeProps) => {
  const statusConfig = {
    available: {
      label: "Available",
      color: "bg-[hsl(var(--status-available))]",
      glow: "glow-green",
      text: "text-[hsl(var(--status-available))]",
    },
    "in-use": {
      label: "In Use",
      color: "bg-[hsl(var(--status-in-use))]",
      glow: "glow-red",
      text: "text-[hsl(var(--status-in-use))]",
    },
    maintenance: {
      label: "Maintenance",
      color: "bg-[hsl(var(--status-maintenance))]",
      glow: "glow-yellow",
      text: "text-[hsl(var(--status-maintenance))]",
    },
  };

  const config = statusConfig[status];
  
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          "rounded-full animate-pulse-glow",
          config.color,
          config.glow,
          sizeClasses[size]
        )}
      />
      {showLabel && (
        <span className={cn("font-semibold text-sm uppercase tracking-wide", config.text)}>
          {config.label}
        </span>
      )}
    </div>
  );
};

export default StatusBadge;
