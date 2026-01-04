import { cn } from "@/lib/utils";
import { Shield, TrendingUp, AlertTriangle } from "lucide-react";

interface ReserveData {
  stability: {
    current: number;
    required: number;
    percentage: number;
  };
  growth: {
    current: number;
    allocated: number;
    locked: boolean;
  };
}

interface ReserveIndicatorProps {
  data: ReserveData;
}

export function ReserveIndicator({ data }: ReserveIndicatorProps) {
  const stabilityHealthy = data.stability.percentage >= 100;
  const growthBlocked = data.growth.locked;

  return (
    <div className="space-y-4">
      {/* Stability Reserve */}
      <div className="p-4 rounded-lg bg-secondary/50 border border-border">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Shield className={cn("w-4 h-4", stabilityHealthy ? "text-success" : "text-warning")} />
            <span className="text-sm font-medium">Stability Reserve</span>
          </div>
          <div className={cn("status-indicator", stabilityHealthy ? "status-healthy" : "status-warning")} />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">
              ${data.stability.current.toLocaleString()} / ${data.stability.required.toLocaleString()}
            </span>
            <span className={cn("font-mono", stabilityHealthy ? "text-success" : "text-warning")}>
              {data.stability.percentage}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className={cn("h-full transition-all", stabilityHealthy ? "bg-success" : "bg-warning")}
              style={{ width: `${Math.min(data.stability.percentage, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Growth Reserve */}
      <div className={cn(
        "p-4 rounded-lg border",
        growthBlocked 
          ? "bg-destructive/5 border-destructive/30" 
          : "bg-secondary/50 border-border"
      )}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {growthBlocked ? (
              <AlertTriangle className="w-4 h-4 text-destructive" />
            ) : (
              <TrendingUp className="w-4 h-4 text-primary" />
            )}
            <span className="text-sm font-medium">Growth Reserve</span>
          </div>
          {growthBlocked && (
            <span className="text-xs font-mono text-destructive uppercase">LOCKED</span>
          )}
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-xl font-mono font-bold">
            ${data.growth.current.toLocaleString()}
          </span>
          <span className="text-xs text-muted-foreground">
            of ${data.growth.allocated.toLocaleString()} allocated
          </span>
        </div>

        {growthBlocked && (
          <p className="mt-2 text-xs text-destructive/80">
            Growth blocked: stability reserve below threshold
          </p>
        )}
      </div>
    </div>
  );
}
