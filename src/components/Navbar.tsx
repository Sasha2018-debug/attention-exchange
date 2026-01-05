import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Signal, LayoutDashboard, FileText, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { href: "/", label: t("nav.overview"), icon: Signal },
    { href: "/worker", label: t("nav.worker"), icon: Users },
    { href: "/advertiser", label: t("nav.advertiser"), icon: Briefcase },
    { href: "/admin", label: t("nav.admin"), icon: LayoutDashboard },
    { href: "/docs", label: t("nav.docs"), icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform shadow-glow">
              <Signal className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              Signal<span className="text-primary">Market</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <div className="hidden sm:block live-indicator ml-2">
            <span className="text-xs font-mono text-success">{t("common.stage")} 1</span>
          </div>
          <Button variant="default" size="sm" className="btn-3d ml-2">
            {t("nav.connect")}
          </Button>
        </div>
      </div>
    </header>
  );
}
