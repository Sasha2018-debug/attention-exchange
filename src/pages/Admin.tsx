import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  Eye,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Settings,
  RefreshCw,
  Shield,
  Lock,
  Zap,
  CheckCircle,
  Download,
  Activity,
  Globe,
  Server,
} from "lucide-react";

// Mock data
const tierData = [
  { tier: 1, count: 0, active: 0, trustScore: 0, incomeLimit: "$2,000/mo", color: "tier-badge-1" },
  { tier: 2, count: 0, active: 0, trustScore: 0, incomeLimit: "$800/mo", color: "tier-badge-2" },
  { tier: 3, count: 3, active: 2, trustScore: 72.5, incomeLimit: "$300/mo", color: "tier-badge-3" },
  { tier: 4, count: 25, active: 18, trustScore: 45.2, incomeLimit: "$100/mo", color: "tier-badge-4" },
];

const attentionLevels = [
  { duration: 15, price: 0.05, completionRate: 96, available: 1250 },
  { duration: 30, price: 0.12, completionRate: 94, available: 890 },
  { duration: 60, price: 0.28, completionRate: 91, available: 420 },
  { duration: 120, price: 0.65, completionRate: 85, available: 150 },
];

const fraudMetrics = [
  { type: "bots", label: "Bot Detection", blocked: 47, detected: 52, status: "healthy" },
  { type: "scripts", label: "Script Blocking", blocked: 12, detected: 12, status: "healthy" },
  { type: "farms", label: "Farm Detection", blocked: 3, detected: 5, status: "warning" },
  { type: "velocity", label: "Velocity Abuse", blocked: 8, detected: 9, status: "healthy" },
];

const stages = [
  { id: 0, name: "Init", status: "complete", metrics: ["DB deployed", "Auth ready"] },
  { id: 1, name: "Seed", status: "active", metrics: ["25 workers", "Basic tasks"] },
  { id: 2, name: "Validate", status: "locked", metrics: ["Trust > 60", "Fraud < 1%"] },
  { id: 3, name: "Scale", status: "locked", metrics: ["100+ workers", "Contracts"] },
  { id: 4, name: "Mature", status: "locked", metrics: ["GEO verified", "Full SLA"] },
];

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <Badge className="bg-warning/10 text-warning border-warning/30">STAGE 1</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Мониторинг системы • Управление рисками • Финансовый контроль
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Экспорт CSV
            </Button>
            <Button variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Обновить
            </Button>
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Настройки
            </Button>
          </div>
        </div>

        {/* Stage Progress */}
        <div className="dashboard-panel mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Server className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-lg">System Stage</h2>
            </div>
            <Badge variant="outline" className="text-warning">
              <Lock className="w-3 h-3 mr-1" />
              AUTO-TRANSITION DISABLED
            </Badge>
          </div>

          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-1 bg-border rounded-full">
              <div className="h-full bg-gradient-to-r from-success via-primary to-primary/50 rounded-full" style={{ width: "30%" }} />
            </div>

            <div className="relative flex justify-between">
              {stages.map((stage) => (
                <div key={stage.id} className="flex flex-col items-center">
                  <div className={`stage-marker z-10 ${
                    stage.status === "complete" ? "stage-complete" :
                    stage.status === "active" ? "stage-active" : "stage-locked"
                  }`}>
                    {stage.status === "complete" ? <CheckCircle className="w-5 h-5" /> :
                     stage.status === "active" ? <Zap className="w-5 h-5" /> :
                     <Lock className="w-4 h-4" />}
                  </div>
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-semibold ${
                      stage.status === "complete" ? "text-success" :
                      stage.status === "active" ? "text-primary" : "text-muted-foreground"
                    }`}>
                      Stage {stage.id}: {stage.name}
                    </p>
                    <div className="flex gap-1 mt-1 justify-center">
                      {stage.metrics.map((m, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{m}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="metric-card">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Total Workers</span>
            </div>
            <div className="text-3xl font-mono font-bold">28</div>
            <p className="text-xs text-muted-foreground mt-1">25 Tier-4, 3 Tier-3</p>
            <Badge className="mt-2 text-success bg-success/10 border-success/30 text-xs">+3 на этой неделе</Badge>
          </div>

          <div className="metric-card">
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">Attention Units</span>
            </div>
            <div className="text-3xl font-mono font-bold">2,710</div>
            <p className="text-xs text-muted-foreground mt-1">Доступно сейчас</p>
          </div>

          <div className="metric-card">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-success" />
              <span className="text-sm text-muted-foreground">Revenue (24h)</span>
            </div>
            <div className="text-3xl font-mono font-bold text-success">$127</div>
            <p className="text-xs text-muted-foreground mt-1">От 892 units</p>
            <Badge className="mt-2 text-success bg-success/10 border-success/30 text-xs">+12% vs avg</Badge>
          </div>

          <div className="metric-card">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-warning" />
              <span className="text-sm text-muted-foreground">Avg Trust Score</span>
            </div>
            <div className="text-3xl font-mono font-bold text-warning">52.3</div>
            <p className="text-xs text-muted-foreground mt-1">Цель Stage 2: 60.0</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tier Distribution */}
            <div className="dashboard-panel">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-lg">Worker Tier Distribution</h2>
                <Badge variant="outline">28 всего</Badge>
              </div>

              <div className="space-y-4">
                {tierData.map((tier) => (
                  <div key={tier.tier} className="flex items-center gap-4">
                    <Badge className={`${tier.color} w-16 justify-center`}>Tier {tier.tier}</Badge>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{tier.count} workers ({tier.active} active)</span>
                        <span className="font-mono">{tier.incomeLimit}</span>
                      </div>
                      <Progress value={tier.count > 0 ? (tier.active / tier.count) * 100 : 0} className="h-2" />
                    </div>
                    <div className="text-right w-20">
                      <p className="text-sm font-mono">{tier.trustScore || "—"}</p>
                      <p className="text-xs text-muted-foreground">Trust</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attention Products */}
            <div className="dashboard-panel">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-lg">Attention Products</h2>
                <Badge className="bg-success/10 text-success border-success/30">IN STOCK</Badge>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {attentionLevels.map((level) => (
                  <div key={level.duration} className="p-4 rounded-xl bg-secondary/50 border border-border text-center">
                    <div className="text-2xl font-mono font-bold">{level.duration}s</div>
                    <div className="text-lg font-mono text-success mt-1">${level.price}</div>
                    <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                      <p>{level.completionRate}% completion</p>
                      <p className="font-mono">{level.available.toLocaleString()} avail</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Anti-Fraud Panel */}
            <div className="dashboard-panel">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-success" />
                  <h2 className="font-semibold text-lg">Anti-Fraud Engine</h2>
                </div>
                <Badge className="bg-success/10 text-success border-success/30">ACTIVE</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {fraudMetrics.map((metric) => (
                  <div key={metric.type} className={`p-4 rounded-xl border ${
                    metric.status === "warning" ? "bg-warning/5 border-warning/20" : "bg-card border-border"
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{metric.label}</span>
                      <div className={`w-2 h-2 rounded-full ${
                        metric.status === "healthy" ? "bg-success" : "bg-warning"
                      }`} />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-mono font-bold">{metric.blocked}</span>
                      <span className="text-sm text-muted-foreground">/ {metric.detected} detected</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-secondary/50">
                <div className="text-center flex-1">
                  <p className="text-2xl font-mono font-bold">70</p>
                  <p className="text-xs text-muted-foreground">Auto-blocks today</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-2xl font-mono font-bold text-success">$234</p>
                  <p className="text-xs text-muted-foreground">Economic loss prevented</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-2xl font-mono font-bold">0.8%</p>
                  <p className="text-xs text-muted-foreground">Fraud rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* System Trust Score */}
            <div className="dashboard-panel">
              <h2 className="font-semibold mb-4">System Trust Score</h2>
              <div className="flex justify-center mb-4">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="50%" cy="50%" r="70" fill="none" stroke="hsl(var(--secondary))" strokeWidth="10" />
                    <circle
                      cx="50%" cy="50%" r="70" fill="none"
                      stroke="hsl(var(--warning))"
                      strokeWidth="10"
                      strokeDasharray={2 * Math.PI * 70}
                      strokeDashoffset={2 * Math.PI * 70 * 0.48}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-mono font-bold text-warning">52.3</span>
                    <span className="text-xs text-muted-foreground">System Avg</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t border-border">
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
            <div className="dashboard-panel">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Financial Reserves</h2>
                <Badge className="bg-warning/10 text-warning border-warning/30">LOW</Badge>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-secondary/50">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Stability Reserve</span>
                    <span className="font-mono text-sm">$4,200 / $5,000</span>
                  </div>
                  <Progress value={84} className="h-2" />
                  <p className="text-xs text-warning mt-2">84% от минимума — рост заблокирован</p>
                </div>

                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Growth Reserve</span>
                    <span className="font-mono text-sm text-muted-foreground">$0 / $2,000</span>
                  </div>
                  <Progress value={0} className="h-2" />
                  <div className="flex items-center gap-1 mt-2">
                    <Lock className="w-3 h-3 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Заблокировано до Stage 2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Alerts */}
            <div className="dashboard-panel border-destructive/20 bg-destructive/5">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <h2 className="font-semibold">Risk Alerts</h2>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-card border border-border">
                  <p className="text-sm font-medium text-destructive">Stability Reserve Low</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    84% от минимума. Операции роста заблокированы.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border">
                  <p className="text-sm font-medium text-warning">0 Tier-1 Workers</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Premium Human продукт недоступен.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="dashboard-panel">
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
