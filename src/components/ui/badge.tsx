import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        success:
          "border-transparent bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        warning:
          "border-transparent bg-amber-500/20 text-amber-400 border-amber-500/30",
        tier1:
          "bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-400 border-emerald-500/30",
        tier2:
          "bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 text-cyan-400 border-cyan-500/30",
        tier3:
          "bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-400 border-amber-500/30",
        tier4:
          "bg-gradient-to-r from-slate-500/20 to-slate-600/20 text-slate-400 border-slate-500/30",
        stage:
          "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
