import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metrics?: string[];
  variant?: "default" | "primary" | "accent";
  delay?: number;
}

export function ValueCard({
  icon: Icon,
  title,
  description,
  metrics,
  variant = "default",
  delay = 0,
}: ValueCardProps) {
  return (
    <div
      className={cn(
        "value-card group animate-slide-up",
        variant === "primary" && "border-primary/20",
        variant === "accent" && "border-accent/20"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={cn(
          "w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110",
          variant === "default" && "bg-primary/10 text-primary",
          variant === "primary" && "bg-primary text-primary-foreground",
          variant === "accent" && "bg-accent/10 text-accent"
        )}
      >
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>

      {metrics && metrics.length > 0 && (
        <div className="pt-4 border-t border-border space-y-2">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{metric}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
