import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockSystems } from "@/data/mockSystems";
import { GamingSystem, SystemStatus, SystemType } from "@/types/system";
import StatusBadge from "@/components/StatusBadge";
import { toast } from "sonner";
import { LogOut, Plus, Trash2, Save } from "lucide-react";

const AdminDashboard = () => {
  const [systems, setSystems] = useState<GamingSystem[]>(mockSystems);
  const [editingId, setEditingId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleStatusChange = (id: string, newStatus: SystemStatus) => {
    setSystems((prev) =>
      prev.map((system) =>
        system.id === id ? { ...system, status: newStatus } : system
      )
    );
    toast.success("System status updated!");
  };

  const handleDelete = (id: string) => {
    setSystems((prev) => prev.filter((system) => system.id !== id));
    toast.success("System removed!");
  };

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-foreground text-glow-red">
                SAGUNI
              </h1>
              <p className="text-sm text-muted-foreground">Admin Dashboard</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
          <Card className="p-6 bg-card border-border">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                Total Systems
              </p>
              <p className="text-4xl font-black text-foreground">{systems.length}</p>
            </div>
          </Card>
          <Card className="p-6 bg-card border-border">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                Available
              </p>
              <p className="text-4xl font-black text-[hsl(var(--status-available))]">
                {systems.filter((s) => s.status === "available").length}
              </p>
            </div>
          </Card>
          <Card className="p-6 bg-card border-border">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                In Use
              </p>
              <p className="text-4xl font-black text-[hsl(var(--status-in-use))]">
                {systems.filter((s) => s.status === "in-use").length}
              </p>
            </div>
          </Card>
        </div>

        {/* Systems Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Manage Systems</h2>
            <Button variant="glow" size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Add System
            </Button>
          </div>

          <div className="space-y-4">
            {systems.map((system) => (
              <Card
                key={system.id}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all animate-fade-in"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  {/* System Name */}
                  <div className="md:col-span-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      System Name
                    </p>
                    <p className="text-lg font-bold text-foreground">{system.name}</p>
                  </div>

                  {/* Type */}
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Type
                    </p>
                    <span className="inline-flex items-center px-3 py-1 rounded bg-secondary text-sm font-semibold">
                      {system.type}
                    </span>
                  </div>

                  {/* Status */}
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Status
                    </p>
                    <Select
                      value={system.status}
                      onValueChange={(value: SystemStatus) =>
                        handleStatusChange(system.id, value)
                      }
                    >
                      <SelectTrigger className="w-full bg-input border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available">
                          <div className="flex items-center gap-2">
                            <StatusBadge status="available" showLabel={false} size="sm" />
                            <span>Available</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="in-use">
                          <div className="flex items-center gap-2">
                            <StatusBadge status="in-use" showLabel={false} size="sm" />
                            <span>In Use</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="maintenance">
                          <div className="flex items-center gap-2">
                            <StatusBadge status="maintenance" showLabel={false} size="sm" />
                            <span>Maintenance</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(system.id)}
                      className="gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
