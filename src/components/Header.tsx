import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Signal, LayoutDashboard, FileText } from "lucide-react";

export function Header() {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Overview", icon: Signal },
    { href: "/admin", label: "Admin", icon: LayoutDashboard },
    { href: "/docs", label: "Documentation", icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Signal className="w-4 h-4 text-primary" />
            </div>
            <span className="font-bold text-lg tracking-tight">
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
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
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
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/30">
            <div className="status-indicator status-healthy" />
            <span className="text-xs font-mono text-success">STAGE 1</span>
          </div>
        </div>
      </div>
    </header>
  );
}
