import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Eye,
  Clock,
  DollarSign,
  TrendingUp,
  Award,
  Users,
  CheckCircle,
  Play,
  Gift,
  ChevronRight,
  Globe,
} from "lucide-react";

// Mock data
const workerData = {
  tier: 3,
  trustScore: 72,
  referralTrust: 45,
  balance: { usd: 127.40, usdt: 0 },
  incomeLimit: 300,
  earnedThisMonth: 127.40,
  tasksCompleted: 89,
  tasksFailed: 3,
};

const tasks = [
  { id: 1, type: "Base", duration: 15, reward: 0.05, geo: null, status: "available" },
  { id: 2, type: "Standard", duration: 30, reward: 0.12, geo: "US", status: "available" },
  { id: 3, type: "Deep", duration: 60, reward: 0.28, geo: null, status: "available" },
  { id: 4, type: "Premium", duration: 120, reward: 0.65, geo: "EU", status: "locked" },
];

const activityHistory = [
  { date: "today", completed: 12, failed: 0, earned: 2.15 },
  { date: "yesterday", completed: 18, failed: 1, earned: 3.40 },
  { date: "2", completed: 15, failed: 0, earned: 2.80 },
  { date: "3", completed: 22, failed: 1, earned: 4.10 },
  { date: "4", completed: 14, failed: 0, earned: 2.50 },
];

const referrals = [
  { name: "User_7842", tier: 4, trustScore: 48, rtEarned: 12 },
  { name: "User_9103", tier: 4, trustScore: 35, rtEarned: 8 },
];

const Worker = () => {
  const { t, language } = useLanguage();

  const tierColors = {
    1: "tier-badge-1",
    2: "tier-badge-2",
    3: "tier-badge-3",
    4: "tier-badge-4",
  };

  const getDateLabel = (date: string) => {
    if (date === "today") return t("worker.today");
    if (date === "yesterday") return t("worker.yesterday");
    return `${date} ${t("worker.days.ago")}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold">{t("worker.title")}</h1>
              <Badge className={tierColors[workerData.tier as keyof typeof tierColors]}>
                TIER {workerData.tier}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("worker.subtitle")}
            </p>
          </div>
          <Button className="btn-3d">
            <Gift className="w-4 h-4 mr-2" />
            {t("worker.bonus.task")}
          </Button>
        </div>

        {/* Top Stats Panel */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="dashboard-panel">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground uppercase">{t("worker.trust.score")}</span>
            </div>
            <div className="text-3xl font-mono font-bold text-success">{workerData.trustScore}</div>
            <Progress value={workerData.trustScore} className="h-1.5 mt-2" />
          </div>

          <div className="dashboard-panel">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-xs text-muted-foreground uppercase">{t("worker.referral.trust")}</span>
            </div>
            <div className="text-3xl font-mono font-bold">{workerData.referralTrust}</div>
            <p className="text-xs text-muted-foreground mt-1">{referrals.length} {t("worker.invited")}</p>
          </div>

          <div className="dashboard-panel">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-success" />
              <span className="text-xs text-muted-foreground uppercase">{t("worker.balance")}</span>
            </div>
            <div className="text-3xl font-mono font-bold">${workerData.balance.usd.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">+ {workerData.balance.usdt} USDT</p>
          </div>

          <div className="dashboard-panel">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-warning" />
              <span className="text-xs text-muted-foreground uppercase">{t("worker.income.limit")}</span>
            </div>
            <div className="text-3xl font-mono font-bold">${workerData.incomeLimit}</div>
            <Progress value={(workerData.earnedThisMonth / workerData.incomeLimit) * 100} className="h-1.5 mt-2" />
          </div>

          <div className="dashboard-panel">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-xs text-muted-foreground uppercase">{t("worker.completed")}</span>
            </div>
            <div className="text-3xl font-mono font-bold">{workerData.tasksCompleted}</div>
            <p className="text-xs text-muted-foreground mt-1">{workerData.tasksFailed} {t("worker.failed")}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Tasks Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Available Tasks */}
            <div className="dashboard-panel">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-lg">{t("worker.available.tasks")}</h2>
                <Badge variant="outline">{tasks.filter(t => t.status === "available").length} {t("worker.available")}</Badge>
              </div>

              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-4 rounded-xl border transition-all ${
                      task.status === "locked"
                        ? "bg-muted/50 border-border opacity-60"
                        : "bg-card border-border hover:border-primary/30 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          task.status === "locked" ? "bg-muted" : "bg-primary/10"
                        }`}>
                          <Eye className={`w-6 h-6 ${task.status === "locked" ? "text-muted-foreground" : "text-primary"}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{task.type} Attention</span>
                            {task.geo && (
                              <Badge variant="outline" className="text-xs">
                                <Globe className="w-3 h-3 mr-1" />
                                {task.geo} +20%
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {task.duration}s
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-3 h-3" />
                              ${task.reward.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {task.status === "available" ? (
                        <Button className="btn-3d">
                          <Play className="w-4 h-4 mr-2" />
                          {t("worker.accept")}
                        </Button>
                      ) : (
                        <Badge variant="secondary">{t("worker.requires.tier")}</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Post-Attention Signal */}
            <div className="dashboard-panel border-accent/30 bg-accent/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">{t("worker.post.attention")}</h3>
                  <p className="text-sm text-muted-foreground">{t("worker.post.attention.desc")}</p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="font-medium mb-3">{t("worker.post.attention.question")}</p>
                <div className="grid grid-cols-2 gap-2">
                  {(language === "ru" ? ["Смартфон", "Ноутбук", "Наушники", "Часы"] : ["Smartphone", "Laptop", "Headphones", "Watch"]).map((option) => (
                    <Button key={option} variant="outline" className="justify-start">
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Activity History */}
            <div className="dashboard-panel">
              <h2 className="font-semibold mb-4">{t("worker.activity.history")}</h2>
              <div className="space-y-3">
                {activityHistory.map((day, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div>
                      <p className="text-sm font-medium">{getDateLabel(day.date)}</p>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-success">{day.completed}</span> / <span className="text-destructive">{day.failed}</span> {t("worker.tasks")}
                      </p>
                    </div>
                    <span className="font-mono text-success font-semibold">+${day.earned.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Referral Panel */}
            <div className="dashboard-panel">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">{t("worker.referral.panel")}</h2>
                <Badge variant="outline">{referrals.length}/5</Badge>
              </div>

              <div className="space-y-3 mb-4">
                {referrals.map((ref, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-mono">
                        T{ref.tier}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{ref.name}</p>
                        <p className="text-xs text-muted-foreground">Trust: {ref.trustScore}</p>
                      </div>
                    </div>
                    <span className="text-xs text-accent font-mono">+{ref.rtEarned} RT</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                <p className="text-xs text-warning font-medium">⚠️ {t("worker.no.money")}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {t("worker.only.rt")}
                </p>
              </div>
            </div>

            {/* GEO Bonus */}
            <div className="dashboard-panel border-success/30 bg-success/5">
              <div className="flex items-center gap-3 mb-3">
                <Gift className="w-5 h-5 text-success" />
                <h3 className="font-semibold">{t("worker.geo.bonus")}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {t("worker.geo.bonus.desc")}
              </p>
              <Button variant="outline" className="w-full">
                {t("worker.check.availability")}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Worker;