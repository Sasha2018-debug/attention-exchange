import { CheckCircle, Lock, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  {
    id: 0,
    name: "Init",
    description: "Core infrastructure deployed",
    status: "complete" as const,
  },
  {
    id: 1,
    name: "Seed",
    description: "25 Tier-4 workers active",
    status: "active" as const,
  },
  {
    id: 2,
    name: "Validate",
    description: "Quality metrics verified",
    status: "locked" as const,
  },
  {
    id: 3,
    name: "Scale",
    description: "Contracts enabled",
    status: "locked" as const,
  },
  {
    id: 4,
    name: "Mature",
    description: "Full SLA support",
    status: "locked" as const,
  },
];

export function HowItWorks() {
  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="relative">
        <div className="absolute top-6 left-0 right-0 h-1 bg-border rounded-full">
          <div
            className="h-full bg-gradient-to-r from-success via-primary to-primary rounded-full transition-all duration-500"
            style={{ width: "30%" }}
          />
        </div>

        <div className="relative flex justify-between">
          {stages.map((stage, i) => (
            <div key={stage.id} className="flex flex-col items-center">
              <div
                className={cn(
                  "stage-marker z-10",
                  stage.status === "complete" && "stage-complete",
                  stage.status === "active" && "stage-active",
                  stage.status === "locked" && "stage-locked"
                )}
              >
                {stage.status === "complete" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : stage.status === "active" ? (
                  <Zap className="w-5 h-5" />
                ) : (
                  <Lock className="w-4 h-4" />
                )}
              </div>
              <div className="mt-4 text-center">
                <p
                  className={cn(
                    "text-sm font-semibold",
                    stage.status === "complete" && "text-success",
                    stage.status === "active" && "text-primary",
                    stage.status === "locked" && "text-muted-foreground"
                  )}
                >
                  Stage {stage.id}
                </p>
                <p className="text-xs text-muted-foreground mt-1 max-w-[100px]">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current stage info */}
      <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <div className="live-indicator">
          <span className="text-xs font-mono text-success">LIVE</span>
        </div>
        <span className="text-sm">
          Currently in <strong className="text-primary">Stage 1: Seed</strong> — Building verified worker base
        </span>
        <ArrowRight className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  );
}
