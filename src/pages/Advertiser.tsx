import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import {
  Eye,
  TrendingUp,
  Globe,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  Calendar,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  Settings,
  Download,
  Play,
  Pause,
} from "lucide-react";

// Mock data
const advertiserData = {
  activeCampaigns: 3,
  totalAttention: 12450,
  avgTrustScore: 68,
  geoConfidence: { high: 42, medium: 35, low: 23 },
  spent: 1847.50,
  remaining: 2152.50,
};

const campaigns = [
  {
    id: 1,
    name: "Product Launch Q1",
    status: "active",
    attention: 30,
    interval: 24,
    tier: [2, 3],
    geo: "US, EU",
    sla: 95,
    delivered: 4200,
    target: 5000,
    trustScore: 72,
  },
  {
    id: 2,
    name: "Brand Awareness",
    status: "active",
    attention: 60,
    interval: 48,
    tier: [3, 4],
    geo: "Global",
    sla: 90,
    delivered: 2800,
    target: 4000,
    trustScore: 58,
  },
  {
    id: 3,
    name: "Premium Human Test",
    status: "paused",
    attention: 120,
    interval: 72,
    tier: [1],
    geo: "US",
    sla: 98,
    delivered: 150,
    target: 500,
    trustScore: 85,
  },
];

const recommendations = [
  {
    type: "optimize",
    title: "Оптимизация длительности",
    description: "30s attention показывает лучший ROI для вашей категории. Рекомендуем увеличить долю.",
    impact: "+15% эффективность",
  },
  {
    type: "warning",
    title: "Дефицит Tier-1 supply",
    description: "Premium Human продукт недоступен. Tier-1 воркеры: 0. ETA: неизвестно.",
    impact: "Альтернатива: Tier-2",
  },
  {
    type: "geo",
    title: "GEO расширение",
    description: "DACH регион показывает высокий confidence (87%). Рекомендуем добавить.",
    impact: "+23% reach",
  },
];

const contracts = [
  { period: "1 мес", discount: "0%", price: "$2,000", selected: false },
  { period: "3 мес", discount: "5%", price: "$5,700", selected: false },
  { period: "6 мес", discount: "10%", price: "$10,800", selected: true },
  { period: "12 мес", discount: "15%", price: "$20,400", selected: false },
];

const Advertiser = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold">Advertiser Dashboard</h1>
              <Badge variant="default">PRO</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Настройка кампаний • AI-рекомендации • Прозрачная отчётность
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Экспорт
            </Button>
            <Button className="btn-3d">
              <Play className="w-4 h-4 mr-2" />
              Новая кампания
            </Button>
          </div>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="dashboard-panel">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground uppercase">Активные кампании</span>
            </div>
            <div className="text-3xl font-mono font-bold">{advertiserData.activeCampaigns}</div>
          </div>

          <div className="dashboard-panel">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-accent" />
              <span className="text-xs text-muted-foreground uppercase">Доставлено внимания</span>
            </div>
            <div className="text-3xl font-mono font-bold">{advertiserData.totalAttention.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">секунд</p>
          </div>

          <div className="dashboard-panel">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-xs text-muted-foreground uppercase">Avg Trust Score</span>
            </div>
            <div className="text-3xl font-mono font-bold text-success">{advertiserData.avgTrustScore}</div>
          </div>

          <div className="dashboard-panel">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-warning" />
              <span className="text-xs text-muted-foreground uppercase">GEO Confidence</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-success">High</span>
                  <span>{advertiserData.geoConfidence.high}%</span>
                </div>
                <Progress value={advertiserData.geoConfidence.high} className="h-1.5" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Campaign Settings */}
            <div className="dashboard-panel">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-lg">Настройка кампании</h2>
                <Badge variant="outline">
                  <Settings className="w-3 h-3 mr-1" />
                  Расширенный режим
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Длительность внимания: <span className="text-primary font-mono">45s</span>
                    </label>
                    <Slider defaultValue={[45]} max={120} min={15} step={15} />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>15s ($0.05)</span>
                      <span>120s ($0.65)</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Интервал показов: <span className="text-primary font-mono">24ч</span>
                    </label>
                    <Slider defaultValue={[24]} max={72} min={12} step={12} />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>12ч</span>
                      <span>72ч</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">GEO фильтры</label>
                    <div className="flex flex-wrap gap-2">
                      {["US", "EU", "DACH", "UK", "Global"].map((geo) => (
                        <Badge
                          key={geo}
                          variant={geo === "US" || geo === "EU" ? "default" : "outline"}
                          className="cursor-pointer"
                        >
                          {geo}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Tier аудитории</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((tier) => (
                        <Badge
                          key={tier}
                          variant={tier === 2 || tier === 3 ? "default" : "outline"}
                          className={`cursor-pointer ${tier === 1 ? "opacity-50" : ""}`}
                        >
                          Tier {tier}
                          {tier === 1 && " (0)"}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaigns Table */}
            <div className="dashboard-panel">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-lg">Активные кампании</h2>
                <Badge variant="outline">{campaigns.length} всего</Badge>
              </div>

              <div className="space-y-4">
                {campaigns.map((campaign) => (
                  <div
                    key={campaign.id}
                    className={`p-4 rounded-xl border transition-all ${
                      campaign.status === "paused"
                        ? "bg-muted/50 border-border"
                        : "bg-card border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          campaign.status === "active" ? "bg-success" : "bg-muted-foreground"
                        }`} />
                        <span className="font-semibold">{campaign.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {campaign.attention}s | {campaign.interval}h
                        </Badge>
                      </div>
                      <Button variant="ghost" size="sm">
                        {campaign.status === "active" ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs">Прогресс</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Progress value={(campaign.delivered / campaign.target) * 100} className="h-1.5 flex-1" />
                          <span className="font-mono text-xs">
                            {Math.round((campaign.delivered / campaign.target) * 100)}%
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">GEO</p>
                        <p className="font-medium">{campaign.geo}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">SLA</p>
                        <p className={`font-mono font-semibold ${campaign.sla >= 95 ? "text-success" : "text-warning"}`}>
                          {campaign.sla}%
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Trust Score</p>
                        <p className="font-mono font-semibold">{campaign.trustScore}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* AI Recommendations */}
            <div className="dashboard-panel">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-accent" />
                <h2 className="font-semibold">AI Рекомендации</h2>
              </div>

              <div className="space-y-3">
                {recommendations.map((rec, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg border ${
                      rec.type === "warning"
                        ? "bg-warning/5 border-warning/20"
                        : rec.type === "optimize"
                        ? "bg-success/5 border-success/20"
                        : "bg-accent/5 border-accent/20"
                    }`}
                  >
                    <p className="text-sm font-medium">{rec.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{rec.description}</p>
                    <Badge
                      variant="outline"
                      className={`mt-2 text-xs ${
                        rec.type === "warning" ? "text-warning" : "text-success"
                      }`}
                    >
                      {rec.impact}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Contracts */}
            <div className="dashboard-panel">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Контракты</h2>
                <Badge variant="outline">
                  <Calendar className="w-3 h-3 mr-1" />
                  6 мес активен
                </Badge>
              </div>

              <div className="space-y-2">
                {contracts.map((contract, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg border flex items-center justify-between ${
                      contract.selected
                        ? "bg-primary/5 border-primary/30"
                        : "bg-card border-border"
                    }`}
                  >
                    <div>
                      <p className="font-medium">{contract.period}</p>
                      <p className="text-xs text-muted-foreground">Скидка: {contract.discount}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono font-semibold">{contract.price}</p>
                      {contract.selected && (
                        <Badge variant="default" className="text-xs mt-1">Активен</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-lg bg-secondary/50">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Использовано</span>
                  <span className="font-mono">${advertiserData.spent.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-muted-foreground">Остаток</span>
                  <span className="font-mono text-success">${advertiserData.remaining.toFixed(2)}</span>
                </div>
                <Progress value={(advertiserData.spent / (advertiserData.spent + advertiserData.remaining)) * 100} className="h-1.5 mt-2" />
              </div>
            </div>

            {/* Supply Warning */}
            <div className="dashboard-panel border-warning/30 bg-warning/5">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <h3 className="font-semibold text-warning">Предупреждение</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Tier-1 supply недоступен. Premium Human продукт заблокирован до появления Tier-1 воркеров.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Advertiser;
