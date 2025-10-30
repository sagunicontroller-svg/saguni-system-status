import { useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import SystemCard from "@/components/SystemCard";
import FilterBar from "@/components/FilterBar";
import { mockSystems } from "@/data/mockSystems";
import { SystemType } from "@/types/system";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [systems] = useState(mockSystems);
  const [selectedType, setSelectedType] = useState<SystemType | "all">("all");

  const filteredSystems =
    selectedType === "all"
      ? systems
      : systems.filter((system) => system.type === selectedType);

  const handleRefresh = () => {
    // In a real app, this would fetch fresh data from the backend
    console.log("Refreshing systems...");
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground text-glow-red tracking-tight">
            SAGUNI
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold tracking-wide">
            Gaming is Not a Crime
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            <span className="uppercase tracking-wider font-medium">Live Status</span>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="px-4 pb-8">
        <div className="container mx-auto">
          <FilterBar selectedType={selectedType} onFilterChange={setSelectedType} />
        </div>
      </div>

      {/* Systems Grid */}
      <div className="px-4 pb-16">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Available Systems ({filteredSystems.length})
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              className="gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSystems.map((system) => (
              <SystemCard key={system.id} system={system} />
            ))}
          </div>

          {filteredSystems.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-xl">No systems found for this filter.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">
            © 2025 SAGUNI Gaming Center. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Gaming is Not a Crime
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
