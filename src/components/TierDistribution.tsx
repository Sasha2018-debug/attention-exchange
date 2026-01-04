import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TierData {
  tier: 1 | 2 | 3 | 4;
  count: number;
  active: number;
  trustScore: number;
  incomeLimit: string;
}

interface TierDistributionProps {
  tiers: TierData[];
}

export function TierDistribution({ tiers }: TierDistributionProps) {
  const total = tiers.reduce((sum, t) => sum + t.count, 0);

  const getTierBadgeVariant = (tier: number) => {
    switch (tier) {
      case 1: return "tier1";
      case 2: return "tier2";
      case 3: return "tier3";
      case 4: return "tier4";
      default: return "default";
    }
  };

  const getTierBarColor = (tier: number) => {
    switch (tier) {
      case 1: return "bg-emerald-500";
      case 2: return "bg-cyan-500";
      case 3: return "bg-amber-500";
      case 4: return "bg-slate-500";
      default: return "bg-muted";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 h-4 rounded-full overflow-hidden bg-secondary">
        {tiers.map((tier) => (
          <div
            key={tier.tier}
            className={cn("h-full transition-all", getTierBarColor(tier.tier))}
            style={{ width: `${(tier.count / total) * 100}%` }}
          />
        ))}
      </div>

      <div className="space-y-3">
        {tiers.map((tier) => (
          <div
            key={tier.tier}
            className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className="flex items-center gap-3">
              <Badge variant={getTierBadgeVariant(tier.tier) as any}>
                T{tier.tier}
              </Badge>
              <div>
                <p className="text-sm font-medium">
                  {tier.count} workers
                  <span className="text-muted-foreground ml-2 text-xs">
                    ({tier.active} active)
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Limit: {tier.incomeLimit}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-mono">
                Trust: {tier.trustScore.toFixed(1)}
              </p>
              <p className="text-xs text-muted-foreground">
                avg score
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
