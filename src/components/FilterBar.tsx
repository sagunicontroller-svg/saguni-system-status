import { Button } from "@/components/ui/button";
import { SystemType } from "@/types/system";

interface FilterBarProps {
  selectedType: SystemType | "all";
  onFilterChange: (type: SystemType | "all") => void;
}

const FilterBar = ({ selectedType, onFilterChange }: FilterBarProps) => {
  const types: Array<SystemType | "all"> = ["all", "PS5", "PC", "Xbox", "Switch", "VR"];

  return (
    <div className="flex flex-wrap gap-2 justify-center items-center animate-fade-in">
      {types.map((type) => (
        <Button
          key={type}
          variant={selectedType === type ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(type)}
          className="uppercase tracking-wider font-semibold"
        >
          {type === "all" ? "All Systems" : type}
        </Button>
      ))}
    </div>
  );
};

export default FilterBar;
