import { ReactNode } from "react";

import { cn } from "@/lib/utils";

function MaxWidthWrapper({ className, children }: { readonly className?: string; readonly children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-(--breakpoint-xl) px-2.5 md:px-20", className)}>{children}</div>;
}

export default MaxWidthWrapper;
