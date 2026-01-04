import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  status?: "healthy" | "warning" | "critical";
  className?: string;
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
  status,
  className,
}: MetricCardProps) {
  return (
    <div className={cn("metric-card group", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {title}
          </p>
          <p className="text-2xl font-bold font-mono text-foreground">
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {status && (
            <div
              className={cn("status-indicator", {
                "status-healthy": status === "healthy",
                "status-warning": status === "warning",
                "status-critical": status === "critical",
              })}
            />
          )}
          {Icon && (
            <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
              <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          )}
        </div>
      </div>
      {trend && trendValue && (
        <div className="mt-3 pt-3 border-t border-border">
          <span
            className={cn("text-xs font-mono", {
              "text-success": trend === "up",
              "text-destructive": trend === "down",
              "text-muted-foreground": trend === "neutral",
            })}
          >
            {trend === "up" && "↑ "}
            {trend === "down" && "↓ "}
            {trendValue}
          </span>
        </div>
      )}
    </div>
  );
}
