import { useEffect, useState } from "react";
import { Users, Eye, Shield, TrendingUp } from "lucide-react";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ElementType;
  color: string;
}

const baseStats: Stat[] = [
  { label: "Active Workers", value: 28, icon: Users, color: "text-primary" },
  { label: "Attention Units", value: 2710, icon: Eye, color: "text-accent" },
  { label: "Trust Score Avg", value: 52, suffix: "%", icon: TrendingUp, color: "text-success" },
  { label: "Fraud Blocked", value: 70, icon: Shield, color: "text-warning" },
];

export function LiveStats() {
  const [stats, setStats] = useState(baseStats);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((stat) => ({
          ...stat,
          value: stat.value + Math.floor(Math.random() * 3) - 1,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="stat-box group hover-lift"
        >
          <div className="flex items-center gap-2 mb-2">
            <stat.icon className={`w-4 h-4 ${stat.color}`} />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
          <div className={`text-2xl font-mono font-bold ${stat.color}`}>
            {stat.value.toLocaleString()}
            {stat.suffix}
          </div>
        </div>
      ))}
    </div>
  );
}
