import LangToggle from "@/components/global/LangToggle";
import { ThemeToggle } from "@/components/global/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("LandingPage");
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-4xl font-semibold">{t("title")}</h1>
      <div className="flex gap-2">
        <Button>{t("button")}</Button>
        <ThemeToggle />
        <LangToggle />
      </div>
    </div>
  );
}
