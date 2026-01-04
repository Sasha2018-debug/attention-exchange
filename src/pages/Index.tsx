import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Signal, 
  Eye, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Lock,
  Zap
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="signal-grid absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container relative pt-24 pb-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <div className="status-indicator status-healthy" />
              <span className="text-xs font-mono text-muted-foreground">
                STAGE 1 ACTIVE — LIMITED CAPACITY
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-gradient-primary">Verified</span> Human
              <br />
              Attention Market
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We don't sell clicks. We don't sell traffic. 
              We sell <span className="text-foreground font-medium">guaranteed human attention</span> with 
              cryptographic proof, fraud protection, and quality scoring.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="signal" size="xl" asChild>
                <Link to="/admin">
                  <LayoutDashboard className="w-5 h-5" />
                  Open Dashboard
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/docs">
                  <FileText className="w-5 h-5" />
                  Read Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="stage" className="mb-4">CORE ARCHITECTURE</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Worst-Case Survival
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every component designed to function with 0 Tier-1, 0 contracts, and 25 active Tier-4 workers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "Attention Product",
                description: "15–120 second verified views. No clicks required. Completion criteria defined per task.",
                metrics: ["4 duration tiers", "92% avg completion", "Multi-signal verification"]
              },
              {
                icon: Users,
                title: "Tier System",
                description: "4-level worker hierarchy. Growth through behavior, not activity. Income caps per tier.",
                metrics: ["Trust Score based", "No referral income", "Behavior-only promotion"]
              },
              {
                icon: Shield,
                title: "Anti-Fraud Engine",
                description: "Bot detection, script blocking, farm identification. Economic attacks become unprofitable.",
                metrics: ["12+ signal types", "Auto-blocking", "$0 fraud loss target"]
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.metrics.map((metric, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-success" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Score Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="tier2" className="mb-2">TRUST ARCHITECTURE</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Trust Cannot Be Purchased
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Trust Score is a non-tradeable asset. It's earned through consistent, 
                high-quality attention delivery. It decays on violations. 
                It unlocks access to premium tasks.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Formation", desc: "Completion rate + response quality + time consistency" },
                  { label: "Decay", desc: "Violations, fraud attempts, pattern anomalies" },
                  { label: "Access", desc: "Higher trust = better tasks = higher earnings" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-mono text-primary">{i + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-3xl" />
              <div className="relative p-8 rounded-2xl bg-card border border-border">
                <div className="flex justify-center mb-6">
                  <div className="relative w-40 h-40">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="70"
                        fill="none"
                        stroke="hsl(var(--secondary))"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="70"
                        fill="none"
                        stroke="hsl(var(--success))"
                        strokeWidth="8"
                        strokeDasharray={2 * Math.PI * 70}
                        strokeDashoffset={2 * Math.PI * 70 * 0.15}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-mono font-bold text-success">85</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Trust Score</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Tier Access</span>
                    <Badge variant="tier2">Tier 2</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Task Quality</span>
                    <span className="font-mono text-success">Premium</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Income Limit</span>
                    <span className="font-mono">$500/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage System */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="warning" className="mb-4">STAGE-BASED LAUNCH</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Growth Only When Proven
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              No promises until supply is verified. No scaling without reserves. 
              Automatic rollback on degradation.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-center gap-4">
            {[
              { stage: 0, name: "Init", status: "complete", desc: "Core infrastructure" },
              { stage: 1, name: "Seed", status: "active", desc: "25 Tier-4 workers" },
              { stage: 2, name: "Validate", status: "locked", desc: "Quality metrics" },
              { stage: 3, name: "Scale", status: "locked", desc: "Contracts enabled" },
              { stage: 4, name: "Mature", status: "locked", desc: "Full SLA support" },
            ].map((item, i) => (
              <div key={i} className="flex md:flex-col items-center gap-4">
                <div className={`stage-marker ${
                  item.status === "complete" ? "stage-complete" : 
                  item.status === "active" ? "stage-active" : "stage-locked"
                }`}>
                  {item.status === "complete" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : item.status === "locked" ? (
                    <Lock className="w-4 h-4" />
                  ) : (
                    <Zap className="w-4 h-4" />
                  )}
                </div>
                <div className="text-center md:mt-2">
                  <p className={`text-sm font-medium ${
                    item.status === "active" ? "text-primary" : 
                    item.status === "complete" ? "text-success" : "text-muted-foreground"
                  }`}>
                    Stage {item.stage}: {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
                {i < 4 && (
                  <div className={`hidden md:block w-20 h-0.5 ${
                    item.status === "complete" ? "bg-success" : "bg-border"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to See the System?
            </h2>
            <p className="text-muted-foreground">
              Access the admin dashboard to monitor worker tiers, trust scores, 
              anti-fraud metrics, and reserve status in real-time.
            </p>
            <Button variant="signal" size="xl" asChild>
              <Link to="/admin">
                Open Admin Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Signal className="w-5 h-5 text-primary" />
              <span className="font-bold">SignalMarket</span>
              <Badge variant="outline" className="ml-2">v0.1.0</Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Verified Human Attention Protocol — Stage 1 Active
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Import icons used in buttons
import { LayoutDashboard, FileText } from "lucide-react";

export default Index;
