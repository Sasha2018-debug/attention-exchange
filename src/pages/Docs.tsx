import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Eye, 
  Users, 
  Shield, 
  Globe, 
  FileText, 
  TrendingUp,
  DollarSign,
  Lock,
  AlertTriangle
} from "lucide-react";

const sections = [
  {
    id: "product",
    icon: Eye,
    title: "1. Attention Product",
    content: [
      { label: "Duration Tiers", value: "15s / 30s / 60s / 120s" },
      { label: "Completion Criteria", value: "Time on screen + scroll depth + focus events" },
      { label: "Rejection Criteria", value: "Early exit, focus loss >3s, pattern mismatch" },
      { label: "Verification", value: "Multi-signal without click requirement" },
    ],
    rules: [
      "No clicks required for completion verification",
      "Minimum 3 positive signals for valid completion",
      "Auto-reject if verification confidence <80%",
    ]
  },
  {
    id: "workers",
    icon: Users,
    title: "2. Worker Tier System",
    content: [
      { label: "Tier 4 (Entry)", value: "Trust <50, $100/mo limit, basic tasks only" },
      { label: "Tier 3", value: "Trust 50-70, $300/mo limit, standard tasks" },
      { label: "Tier 2", value: "Trust 70-85, $800/mo limit, premium tasks" },
      { label: "Tier 1", value: "Trust 85+, $2000/mo limit, all tasks + Premium Human" },
    ],
    rules: [
      "Promotion through behavior metrics only (not volume)",
      "No referral income at any tier",
      "Demotion possible on Trust Score decay",
      "30-day evaluation period for tier changes",
    ]
  },
  {
    id: "trust",
    icon: TrendingUp,
    title: "3. Trust Score",
    content: [
      { label: "Formation", value: "Completion rate (40%) + Quality (30%) + Consistency (30%)" },
      { label: "Decay Events", value: "Fraud attempt (-20), Rejection (-2), Inactivity (-0.1/day)" },
      { label: "Recovery", value: "Max +5 per week, requires 100% completion streak" },
      { label: "Floor", value: "0 (account suspended), Ceiling: 100" },
    ],
    rules: [
      "Trust cannot be purchased or transferred",
      "Single fraud attempt = 6 month recovery period",
      "Trust <30 = suspended from all tasks",
      "Trust affects task access, not payment rates",
    ]
  },
  {
    id: "antifraud",
    icon: Shield,
    title: "4. Anti-Fraud Engine",
    content: [
      { label: "Bot Detection", value: "Behavioral fingerprinting, timing analysis" },
      { label: "Script Blocking", value: "DOM mutation monitoring, interaction patterns" },
      { label: "Farm Detection", value: "Network clustering, device fingerprinting" },
      { label: "Velocity Abuse", value: "Rate limiting, completion time distribution" },
    ],
    rules: [
      "12+ signals per verification",
      "Auto-block on 2+ fraud signals",
      "Economic loss from attack must exceed potential gain",
      "All blocks reviewed within 24h",
    ]
  },
  {
    id: "geo",
    icon: Globe,
    title: "5. GEO Guarantees",
    content: [
      { label: "Hard Verification", value: "Device timezone + language + IP region match" },
      { label: "Soft Verification", value: "IP only, confidence: 70-85%" },
      { label: "Confidence Score", value: "Weighted average of all geo signals" },
      { label: "SLA Eligibility", value: "Stage 3+ only, requires 95% confidence" },
    ],
    rules: [
      "No IP-level promises until Stage 4",
      "VPN/proxy detection enabled by default",
      "Confidence <70% = no geo claims in reports",
      "GEO premiums only with hard verification",
    ]
  },
  {
    id: "contracts",
    icon: FileText,
    title: "6. Contract System",
    content: [
      { label: "Spot", value: "Market price, no guarantees, immediate" },
      { label: "1 Month", value: "5% discount, 80% delivery SLA" },
      { label: "3 Month", value: "12% discount, 90% delivery SLA, priority" },
      { label: "6+ Month", value: "20% discount, 95% delivery SLA, dedicated support" },
    ],
    rules: [
      "Contracts enabled at Stage 3 only",
      "Unused volume does not roll over",
      "Partial refund for under-delivery",
      "Advertiser can't exceed contracted volume",
    ]
  },
  {
    id: "reserves",
    icon: DollarSign,
    title: "7. Reserve System",
    content: [
      { label: "Stability Reserve", value: "3 months operating costs (mandatory)" },
      { label: "Growth Reserve", value: "Capped at 20% of stability reserve" },
      { label: "Emergency Threshold", value: "Auto-pause at 50% stability" },
      { label: "Rebuild Rate", value: "20% of net revenue until 100%" },
    ],
    rules: [
      "Growth blocked if stability <100%",
      "No dividends until reserves full",
      "Reserve != growth capital",
      "Auto-lockdown below 50%",
    ]
  },
  {
    id: "stages",
    icon: Lock,
    title: "8. Stage System",
    content: [
      { label: "Stage 0", value: "Infrastructure only, no workers" },
      { label: "Stage 1", value: "25 Tier-4, basic tasks, no contracts" },
      { label: "Stage 2", value: "Quality validated, Tier-3 enabled" },
      { label: "Stage 3", value: "Contracts enabled, 100+ workers" },
      { label: "Stage 4", value: "Full SLA, GEO guarantees, Premium Human" },
    ],
    rules: [
      "Transition requires ALL metrics met for 30 days",
      "Auto-rollback on metric degradation",
      "No manual stage forcing allowed",
      "Each stage unlocks specific features only",
    ]
  },
];

const Docs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold">System Documentation</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Complete technical specification of SignalMarket architecture. 
              Designed for worst-case survival with 0 Tier-1, 0 contracts, 25 Tier-4 workers.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Badge variant="outline">v0.1.0</Badge>
              <Badge variant="stage">Stage 1 Active</Badge>
              <Badge variant="warning">Draft</Badge>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="p-6 rounded-xl bg-card border border-border mb-8">
            <h2 className="font-semibold mb-4">Table of Contents</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 p-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <section.icon className="w-4 h-4" />
                  {section.title.split(". ")[1]}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="p-6 rounded-xl bg-card border border-border scroll-mt-20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">{section.title}</h2>
                </div>

                {/* Parameters Table */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    Parameters
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full data-table">
                      <tbody>
                        {section.content.map((item, i) => (
                          <tr key={i} className="border-b border-border last:border-0">
                            <td className="py-3 pr-4 text-muted-foreground w-1/3">
                              {item.label}
                            </td>
                            <td className="py-3 font-mono text-sm">
                              {item.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Rules */}
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    Constraints
                  </h3>
                  <ul className="space-y-2">
                    {section.rules.map((rule, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 p-6 rounded-xl bg-secondary/30 border border-border text-center">
            <p className="text-sm text-muted-foreground">
              This documentation is auto-generated from system configuration.
              <br />
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Docs;
