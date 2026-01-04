import { cn } from "@/lib/utils";

interface TrustScoreGaugeProps {
  score: number;
  maxScore?: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function TrustScoreGauge({
  score,
  maxScore = 100,
  size = "md",
  showLabel = true,
}: TrustScoreGaugeProps) {
  const percentage = (score / maxScore) * 100;
  
  const getColor = () => {
    if (percentage >= 80) return "text-success";
    if (percentage >= 50) return "text-warning";
    return "text-destructive";
  };

  const getStrokeColor = () => {
    if (percentage >= 80) return "stroke-success";
    if (percentage >= 50) return "stroke-warning";
    return "stroke-destructive";
  };

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const radius = size === "sm" ? 28 : size === "md" ? 42 : 56;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("relative", sizeClasses[size])}>
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth={size === "sm" ? 4 : 6}
        />
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          className={cn("transition-all duration-500", getStrokeColor())}
          strokeWidth={size === "sm" ? 4 : 6}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("font-mono font-bold", getColor(), {
            "text-lg": size === "sm",
            "text-2xl": size === "md",
            "text-3xl": size === "lg",
          })}>
            {score.toFixed(0)}
          </span>
          <span className="text-xs text-muted-foreground">TRUST</span>
        </div>
      )}
    </div>
  );
}
