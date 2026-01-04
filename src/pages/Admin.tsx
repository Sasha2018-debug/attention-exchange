import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { TierDistribution } from "@/components/TierDistribution";
import { TrustScoreGauge } from "@/components/TrustScoreGauge";
import { ReserveIndicator } from "@/components/ReserveIndicator";
import { AttentionProduct } from "@/components/AttentionProduct";
import { AntiFraudPanel } from "@/components/AntiFraudPanel";
import { StageIndicator } from "@/components/StageIndicator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Eye, 
  DollarSign, 
  TrendingUp,
  AlertTriangle,
  Settings,
  RefreshCw
} from "lucide-react";

// Mock data
const tierData = [
  { tier: 1 as const, count: 0, active: 0, trustScore: 0, incomeLimit: "$2,000/mo" },
  { tier: 2 as const, count: 0, active: 0, trustScore: 0, incomeLimit: "$800/mo" },
  { tier: 3 as const, count: 3, active: 2, trustScore: 72.5, incomeLimit: "$300/mo" },
  { tier: 4 as const, count: 25, active: 18, trustScore: 45.2, incomeLimit: "$100/mo" },
];

const attentionLevels = [
  { id: "15s", duration: 15, price: 0.05, completionRate: 96, available: 1250 },
  { id: "30s", duration: 30, price: 0.12, completionRate: 94, available: 890 },
  { id: "60s", duration: 60, price: 0.28, completionRate: 91, available: 420 },
  { id: "120s", duration: 120, price: 0.65, completionRate: 85, available: 150 },
];

const fraudMetrics = [
  { type: "bots" as const, label: "Bot Detection", blocked: 47, detected: 52, status: "healthy" as const },
  { type: "scripts" as const, label: "Script Blocking", blocked: 12, detected: 12, status: "healthy" as const },
  { type: "farms" as const, label: "Farm Detection", blocked: 3, detected: 5, status: "warning" as const },
  { type: "velocity" as const, label: "Velocity Abuse", blocked: 8, detected: 9, status: "healthy" as const },
];

const stages = [
  { id: 0, name: "Init", description: "Core infrastructure", metrics: ["DB deployed", "Auth ready"], status: "complete" as const },
  { id: 1, name: "Seed", description: "25 Tier-4 workers", metrics: ["25 workers", "Basic tasks"], status: "active" as const },
  { id: 2, name: "Validate", description: "Quality metrics", metrics: ["Trust > 60", "Fraud < 1%"], status: "locked" as const },
  { id: 3, name: "Scale", description: "Contracts enabled", metrics: ["100+ workers", "Contracts"], status: "locked" as const },
  { id: 4, name: "Mature", description: "Full SLA support", metrics: ["GEO verified", "Full SLA"], status: "locked" as const },
];

const reserveData = {
  stability: { current: 4200, required: 5000, percentage: 84 },
  growth: { current: 0, allocated: 2000, locked: true },
};

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <Badge variant="warning">STAGE 1</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              System monitoring and risk management • Last updated: 2 min ago
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="admin" size="sm">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
            <Button variant="admin" size="sm">
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stage Progress */}
        <div className="p-6 rounded-xl bg-card border border-border mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">System Stage</h2>
            <Badge variant="stage">AUTO-TRANSITION DISABLED</Badge>
          </div>
          <StageIndicator stages={stages} currentStage={1} />
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <MetricCard
            title="Total Workers"
            value="28"
            subtitle="25 Tier-4, 3 Tier-3"
            icon={Users}
            status="healthy"
            trend="up"
            trendValue="+3 this week"
          />
          <MetricCard
            title="Attention Units"
            value="2,710"
            subtitle="Available now"
            icon={Eye}
            status="healthy"
          />
          <MetricCard
            title="Revenue (24h)"
            value="$127.40"
            subtitle="From 892 units"
            icon={DollarSign}
            status="healthy"
            trend="up"
            trendValue="+12% vs avg"
          />
          <MetricCard
            title="Avg Trust Score"
            value="52.3"
            subtitle="System average"
            icon={TrendingUp}
            status="warning"
          />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tier Distribution */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Worker Tier Distribution</h2>
                <Badge variant="outline">28 total</Badge>
              </div>
              <TierDistribution tiers={tierData} />
            </div>

            {/* Attention Products */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Attention Products</h2>
                <Badge variant="success">IN STOCK</Badge>
              </div>
              <AttentionProduct levels={attentionLevels} />
            </div>

            {/* Anti-Fraud Panel */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Anti-Fraud Engine</h2>
                <Badge variant="success">ACTIVE</Badge>
              </div>
              <AntiFraudPanel 
                metrics={fraudMetrics}
                autoBlocksToday={70}
                economicLoss={234}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* System Trust Score */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h2 className="font-semibold mb-4">System Trust Score</h2>
              <div className="flex justify-center">
                <TrustScoreGauge score={52.3} size="lg" />
              </div>
              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Min threshold</span>
                  <span className="font-mono">40.0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Target (Stage 2)</span>
                  <span className="font-mono text-primary">60.0</span>
                </div>
              </div>
            </div>

            {/* Reserves */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Financial Reserves</h2>
                <Badge variant="warning">LOW</Badge>
              </div>
              <ReserveIndicator data={reserveData} />
            </div>

            {/* Risk Alerts */}
            <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <h2 className="font-semibold">Risk Alerts</h2>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-background border border-border">
                  <p className="text-sm font-medium text-destructive">Stability Reserve Low</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    84% of required minimum. Growth operations blocked.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-background border border-border">
                  <p className="text-sm font-medium text-warning">0 Tier-1 Workers</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Premium Human product unavailable until Tier-1 supply.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h2 className="font-semibold mb-4">Today's Activity</h2>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tasks completed</span>
                  <span className="text-success">892</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tasks failed</span>
                  <span className="text-destructive">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Completion rate</span>
                  <span>97.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg response time</span>
                  <span>34s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">New registrations</span>
                  <span className="text-primary">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
