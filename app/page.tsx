import { ThemeToggle } from "@/components/global/ThemeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-4xl font-semibold">Start building !!!</h1>
      <div className="flex gap-2">
        <Button>Click Me</Button>
        <ThemeToggle />
      </div>
    </div>
  );
}
