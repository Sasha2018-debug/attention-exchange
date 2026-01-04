import { cn } from "@/lib/utils";
import { Shield, Bot, Users, Zap, AlertTriangle } from "lucide-react";

interface FraudMetric {
  type: "bots" | "scripts" | "farms" | "velocity";
  label: string;
  blocked: number;
  detected: number;
  status: "healthy" | "warning" | "critical";
}

interface AntiFraudPanelProps {
  metrics: FraudMetric[];
  autoBlocksToday: number;
  economicLoss: number;
}

export function AntiFraudPanel({ metrics, autoBlocksToday, economicLoss }: AntiFraudPanelProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "bots": return Bot;
      case "scripts": return Zap;
      case "farms": return Users;
      case "velocity": return AlertTriangle;
      default: return Shield;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-3 rounded-lg bg-success/10 border border-success/30">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-success" />
          <span className="text-sm font-medium">Multi-Signal Protection</span>
        </div>
        <span className="text-xs font-mono text-success">ACTIVE</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric) => {
          const Icon = getIcon(metric.type);
          return (
            <div
              key={metric.type}
              className="p-3 rounded-lg bg-secondary/50 border border-border"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-4 h-4 text-muted-foreground" />
                <div className={cn("status-indicator", {
                  "status-healthy": metric.status === "healthy",
                  "status-warning": metric.status === "warning",
                  "status-critical": metric.status === "critical",
                })} />
              </div>
              <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-mono font-bold text-destructive">
                  {metric.blocked}
                </span>
                <span className="text-xs text-muted-foreground">
                  / {metric.detected} detected
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border">
        <div>
          <p className="text-xs text-muted-foreground">Auto-blocks today</p>
          <p className="text-lg font-mono font-bold">{autoBlocksToday}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Economic loss prevented</p>
          <p className="text-lg font-mono font-bold text-success">
            ${economicLoss.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
