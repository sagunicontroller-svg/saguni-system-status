import { Card } from "@/components/ui/card";
import StatusBadge from "./StatusBadge";
import { GamingSystem } from "@/types/system";
import { Gamepad2, Monitor, Box } from "lucide-react";

interface SystemCardProps {
  system: GamingSystem;
}

const SystemCard = ({ system }: SystemCardProps) => {
  const getIcon = () => {
    switch (system.type) {
      case "PC":
        return <Monitor className="w-8 h-8" />;
      case "PS5":
      case "Xbox":
        return <Gamepad2 className="w-8 h-8" />;
      default:
        return <Box className="w-8 h-8" />;
    }
  };

  return (
    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-red group animate-fade-in">
      <div className="flex flex-col gap-4">
        {/* Icon and Type */}
        <div className="flex items-center justify-between">
          <div className="text-primary group-hover:scale-110 transition-transform">
            {getIcon()}
          </div>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 py-1 rounded bg-secondary">
            {system.type}
          </span>
        </div>

        {/* System Name */}
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-glow-red transition-all">
            {system.name}
          </h3>
        </div>

        {/* Status Badge */}
        <div className="pt-2 border-t border-border">
          <StatusBadge status={system.status} size="md" />
        </div>
      </div>
    </Card>
  );
};

export default SystemCard;
