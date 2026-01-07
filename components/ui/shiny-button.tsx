import { ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

type ShinyButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ShinyButton({ className, children, ...props }: ShinyButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        "group w-full relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap font-medium transition-all duration-300 hover:ring-primary hover:ring-2 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-gray-900",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="size-4 shrink-0  transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-disabled:hidden" />
      </span>

      <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-35 bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
    </Button>
  );
}
