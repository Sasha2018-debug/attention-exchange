import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Hero3D } from "@/components/Hero3D";
import { ValueCard } from "@/components/ValueCard";
import { LiveStats } from "@/components/LiveStats";
import { HowItWorks } from "@/components/HowItWorks";
import {
  Eye,
  Shield,
  Users,
  TrendingUp,
  ArrowRight,
  Signal,
  CheckCircle,
  Globe,
  Lock,
  Zap,
  LayoutDashboard,
  FileText,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-hero" />
        <Hero3D />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border shadow-md">
              <div className="live-indicator">
                <span className="text-xs font-mono text-success">LIVE</span>
              </div>
              <span className="text-sm text-muted-foreground">
                Stage 1 Active — Limited Capacity
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
              Гарантированное
              <br />
              <span className="text-gradient-primary">Человеческое</span>
              <br />
              Внимание
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Мы не продаём клики. Мы не продаём трафик.
              <br />
              <span className="text-foreground font-medium">
                Мы продаём верифицированное внимание
              </span>{" "}
              с криптографическим доказательством.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="btn-3d text-base px-8 h-14" asChild>
                <Link to="/admin">
                  <LayoutDashboard className="w-5 h-5 mr-2" />
                  Открыть Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 h-14"
                asChild
              >
                <Link to="/docs">
                  <FileText className="w-5 h-5 mr-2" />
                  Документация
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary" />
          </div>
        </div>
      </section>

      {/* Live Stats */}
      <section className="py-12 border-y border-border bg-secondary/30">
        <div className="container">
          <LiveStats />
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 text-xs tracking-wider">
              АРХИТЕКТУРА
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Построено для выживания
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Каждый компонент работает даже при 0 Tier-1, 0 контрактов и 25
              активных Tier-4 воркеров
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon={Eye}
              title="Продукт Внимание"
              description="15–120 секунд верифицированного просмотра. Без кликов. Критерии выполнения определены для каждой задачи."
              metrics={["4 уровня длительности", "92% завершений", "Multi-signal верификация"]}
              delay={0}
            />
            <ValueCard
              icon={Users}
              title="Tier Система"
              description="4 уровня воркеров. Рост через поведение, не активность. Лимиты дохода на каждом уровне."
              metrics={["Trust Score основа", "Нет реферального дохода", "Только поведенческий рост"]}
              delay={100}
            />
            <ValueCard
              icon={Shield}
              title="Антифрод Движок"
              description="Детекция ботов, блокировка скриптов, обнаружение ферм. Экономические атаки нерентабельны."
              metrics={["12+ типов сигналов", "Авто-блокировка", "Цель: $0 потерь"]}
              delay={200}
            />
            <ValueCard
              icon={Globe}
              title="GEO Гарантии"
              description="Жёсткая и мягкая верификация. Confidence Score. SLA только после созревания системы."
              metrics={["Confidence уровни", "Без IP-обещаний", "Прозрачная отчётность"]}
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Trust Score Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="outline" className="text-xs">
                TRUST ARCHITECTURE
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Доверие нельзя
                <br />
                <span className="text-primary">купить</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trust Score — нематериальный актив. Он зарабатывается
                через последовательную, качественную доставку внимания.
                Он падает при нарушениях. Он открывает доступ к
                премиальным заданиям.
              </p>

              <div className="space-y-4">
                {[
                  {
                    label: "Формирование",
                    desc: "Completion rate + качество ответов + стабильность времени",
                    icon: TrendingUp,
                  },
                  {
                    label: "Падение",
                    desc: "Нарушения, попытки фрода, аномалии паттернов",
                    icon: Shield,
                  },
                  {
                    label: "Доступ",
                    desc: "Выше trust = лучше задачи = выше заработок",
                    icon: Lock,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover-lift"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-radial" />
              <div className="relative dashboard-panel">
                <div className="flex justify-center mb-8">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="85"
                        fill="none"
                        stroke="hsl(var(--secondary))"
                        strokeWidth="12"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="85"
                        fill="none"
                        stroke="hsl(var(--success))"
                        strokeWidth="12"
                        strokeDasharray={2 * Math.PI * 85}
                        strokeDashoffset={2 * Math.PI * 85 * 0.15}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-mono font-bold text-success">
                        85
                      </span>
                      <span className="text-sm text-muted-foreground uppercase tracking-wider">
                        Trust Score
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tier Access</span>
                    <Badge className="tier-badge-2">Tier 2</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Task Quality</span>
                    <span className="font-mono text-success font-semibold">
                      Premium
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Income Limit</span>
                    <span className="font-mono font-semibold">$500/месяц</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xs">
              STAGE-BASED LAUNCH
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Рост только когда доказан
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Никаких обещаний пока supply не верифицирован. Никакого
              масштабирования без резервов. Автоматический откат при деградации.
            </p>
          </div>

          <HowItWorks />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 signal-dots opacity-30" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Готовы увидеть систему?
            </h2>
            <p className="text-lg text-muted-foreground">
              Откройте админ панель для мониторинга Tier воркеров, Trust Score,
              антифрод метрик и статуса резервов в реальном времени.
            </p>
            <Button size="lg" className="btn-3d text-base px-10 h-14" asChild>
              <Link to="/admin">
                Открыть Admin Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Signal className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">SignalMarket</span>
              <Badge variant="outline" className="ml-2">
                v0.1.0
              </Badge>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/docs" className="hover:text-foreground transition-colors">
                Documentation
              </Link>
              <span>•</span>
              <span>Verified Human Attention Protocol</span>
              <span>•</span>
              <span>Stage 1 Active</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
