import { useTranslations } from "next-intl";

import LangToggle from "@/components/global/LangToggle";
import { ThemeToggle } from "@/components/global/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export default function Home() {
  const t = useTranslations("LandingPage");
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-4xl font-semibold">{t("title")}</h1>
      <p className=" text-muted-foreground">{t("description")}</p>
      <div className="flex gap-2">
        <Link href="/sign-in">
          <Button>{t("button")}</Button>
        </Link>
        <ThemeToggle />
        <LangToggle />
      </div>
    </div>
  );
}
