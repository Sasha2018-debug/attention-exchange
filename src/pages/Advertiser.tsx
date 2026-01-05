import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Eye,
  TrendingUp,
  Globe,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  Calendar,
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

const Advertiser = () => {
  const { t, language } = useLanguage();

  const recommendations = [
    {
      type: "optimize",
      title: language === "ru" ? "Оптимизация длительности" : "Duration Optimization",
      description: language === "ru" 
        ? "30s attention показывает лучший ROI для вашей категории. Рекомендуем увеличить долю."
        : "30s attention shows best ROI for your category. Recommend increasing share.",
      impact: "+15%",
    },
    {
      type: "warning",
      title: language === "ru" ? "Дефицит Tier-1 supply" : "Tier-1 Supply Deficit",
      description: language === "ru"
        ? "Premium Human продукт недоступен. Tier-1 воркеры: 0. ETA: неизвестно."
        : "Premium Human product unavailable. Tier-1 workers: 0. ETA: unknown.",
      impact: "Tier-2 alt",
    },
    {
      type: "geo",
      title: language === "ru" ? "GEO расширение" : "GEO Expansion",
      description: language === "ru"
        ? "DACH регион показывает высокий confidence (87%). Рекомендуем добавить."
        : "DACH region shows high confidence (87%). Recommend adding.",
      impact: "+23% reach",
    },
  ];

  const contracts = [
    { period: language === "ru" ? "1 мес" : "1 mo", discount: "0%", price: "$2,000", selected: false },
    { period: language === "ru" ? "3 мес" : "3 mo", discount: "5%", price: "$5,700", selected: false },
    { period: language === "ru" ? "6 мес" : "6 mo", discount: "10%", price: "$10,800", selected: true },
    { period: language === "ru" ? "12 мес" : "12 mo", discount: "15%", price: "$20,400", selected: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold">{t("advertiser.title")}</h1>
              <Badge variant="default">PRO</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("advertiser.subtitle")}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              {t("advertiser.export")}
            </Button>
            <Button className="btn-3d">
              <Play className="w-4 h-4 mr-2" />
              {t("advertiser.new.campaign")}
            </Button>
          </div>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="dashboard-panel">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground uppercase">{t("advertiser.active.campaigns")}</span>
            </div>
            <div className="text-3xl font-mono font-bold">{advertiserData.activeCampaigns}</div>
          </div>

          <div className="dashboard-panel">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-accent" />
              <span className="text-xs text-muted-foreground uppercase">{t("advertiser.attention.delivered")}</span>
            </div>
            <div className="text-3xl font-mono font-bold">{advertiserData.totalAttention.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">{t("advertiser.seconds")}</p>
          </div>

          <div className="dashboard-panel">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-xs text-muted-foreground uppercase">{t("advertiser.avg.trust")}</span>
            </div>
            <div className="text-3xl font-mono font-bold text-success">{advertiserData.avgTrustScore}</div>
          </div>

          <div className="dashboard-panel">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-warning" />
              <span className="text-xs text-muted-foreground uppercase">{t("advertiser.geo.confidence")}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-success">{t("advertiser.high")}</span>
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
                <h2 className="font-semibold text-lg">{t("advertiser.campaign.settings")}</h2>
                <Badge variant="outline">
                  <Settings className="w-3 h-3 mr-1" />
                  {t("advertiser.advanced.mode")}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      {t("advertiser.attention.duration")}: <span className="text-primary font-mono">45s</span>
                    </label>
                    <Slider defaultValue={[45]} max={120} min={15} step={15} />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>15s ($0.05)</span>
                      <span>120s ($0.65)</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      {t("advertiser.show.interval")}: <span className="text-primary font-mono">24h</span>
                    </label>
                    <Slider defaultValue={[24]} max={72} min={12} step={12} />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>12h</span>
                      <span>72h</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t("advertiser.geo.filters")}</label>
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
                    <label className="text-sm font-medium mb-2 block">{t("advertiser.audience.tier")}</label>
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
                <h2 className="font-semibold text-lg">{t("advertiser.active.campaigns.list")}</h2>
                <Badge variant="outline">{campaigns.length} {t("advertiser.total")}</Badge>
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
                        <p className="text-muted-foreground text-xs">{t("advertiser.progress")}</p>
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
                <h2 className="font-semibold">{t("advertiser.ai.recommendations")}</h2>
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
                <h2 className="font-semibold">{t("advertiser.contracts")}</h2>
                <Badge variant="outline">
                  <Calendar className="w-3 h-3 mr-1" />
                  6 {language === "ru" ? "мес" : "mo"} {t("advertiser.active")}
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
                      <p className="text-xs text-muted-foreground">{t("advertiser.discount")}: {contract.discount}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono font-semibold">{contract.price}</p>
                      {contract.selected && (
                        <Badge variant="default" className="text-xs mt-1">{t("advertiser.active")}</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-lg bg-secondary/50">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t("advertiser.used")}</span>
                  <span className="font-mono">${advertiserData.spent.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-muted-foreground">{t("advertiser.remaining")}</span>
                  <span className="font-mono text-success">${advertiserData.remaining.toFixed(2)}</span>
                </div>
                <Progress value={(advertiserData.spent / (advertiserData.spent + advertiserData.remaining)) * 100} className="h-1.5 mt-2" />
              </div>
            </div>

            {/* Supply Warning */}
            <div className="dashboard-panel border-warning/30 bg-warning/5">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <h3 className="font-semibold text-warning">{t("advertiser.warning")}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("advertiser.supply.warning")}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Advertiser;