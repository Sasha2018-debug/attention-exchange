import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Eye, Clock, CheckCircle, XCircle } from "lucide-react";

interface AttentionLevel {
  id: string;
  duration: number;
  price: number;
  completionRate: number;
  available: number;
}

interface AttentionProductProps {
  levels: AttentionLevel[];
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export function AttentionProduct({ levels, selectedId, onSelect }: AttentionProductProps) {
  return (
    <div className="space-y-3">
      {levels.map((level) => (
        <div
          key={level.id}
          onClick={() => onSelect?.(level.id)}
          className={cn(
            "p-4 rounded-lg border cursor-pointer transition-all",
            selectedId === level.id
              ? "border-primary bg-primary/5"
              : "border-border bg-secondary/30 hover:border-primary/50"
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center",
                selectedId === level.id ? "bg-primary/20" : "bg-secondary"
              )}>
                <Eye className={cn(
                  "w-5 h-5",
                  selectedId === level.id ? "text-primary" : "text-muted-foreground"
                )} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-lg">
                    {level.duration}s
                  </span>
                  <Badge variant="outline" className="text-xs">
                    ATTENTION
                  </Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {level.duration} sec verified
                  </span>
                  <span className="flex items-center gap-1">
                    {level.completionRate >= 90 ? (
                      <CheckCircle className="w-3 h-3 text-success" />
                    ) : (
                      <XCircle className="w-3 h-3 text-warning" />
                    )}
                    {level.completionRate}% completion
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-mono font-bold text-lg">${level.price.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground">
                {level.available.toLocaleString()} available
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
