import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Signal, LayoutDashboard, FileText, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Overview", icon: Signal },
    { href: "/worker", label: "Worker", icon: Users },
    { href: "/advertiser", label: "Advertiser", icon: Briefcase },
    { href: "/admin", label: "Admin", icon: LayoutDashboard },
    { href: "/docs", label: "Docs", icon: FileText },
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

        <div className="flex items-center gap-3">
          <div className="hidden sm:block live-indicator">
            <span className="text-xs font-mono text-success">STAGE 1</span>
          </div>
          <Button variant="default" size="sm" className="btn-3d">
            Connect
          </Button>
        </div>
      </div>
    </header>
  );
}
