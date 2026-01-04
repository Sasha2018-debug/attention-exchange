import { cn } from "@/lib/utils";
import { Check, Lock } from "lucide-react";

interface Stage {
  id: number;
  name: string;
  description: string;
  metrics: string[];
  status: "complete" | "active" | "locked";
}

interface StageIndicatorProps {
  stages: Stage[];
  currentStage: number;
}

export function StageIndicator({ stages, currentStage }: StageIndicatorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex items-center">
            <div
              className={cn("stage-marker", {
                "stage-complete": stage.status === "complete",
                "stage-active": stage.status === "active",
                "stage-locked": stage.status === "locked",
              })}
            >
              {stage.status === "complete" ? (
                <Check className="w-4 h-4" />
              ) : stage.status === "locked" ? (
                <Lock className="w-3 h-3" />
              ) : (
                stage.id
              )}
            </div>
            {index < stages.length - 1 && (
              <div
                className={cn("h-0.5 w-16 mx-2", {
                  "bg-success": stage.status === "complete",
                  "bg-primary/50": stage.status === "active",
                  "bg-border": stage.status === "locked",
                })}
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-5 gap-2 text-center">
        {stages.map((stage) => (
          <div key={stage.id} className="space-y-1">
            <p
              className={cn("text-xs font-medium", {
                "text-success": stage.status === "complete",
                "text-primary": stage.status === "active",
                "text-muted-foreground": stage.status === "locked",
              })}
            >
              {stage.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
