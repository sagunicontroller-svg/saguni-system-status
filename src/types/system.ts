export type SystemStatus = "available" | "in-use" | "maintenance";
export type SystemType = "PS5" | "PC" | "Xbox" | "Switch" | "VR";

export interface GamingSystem {
  id: string;
  name: string;
  type: SystemType;
  status: SystemStatus;
}
