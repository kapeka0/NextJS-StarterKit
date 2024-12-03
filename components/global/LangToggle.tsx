"use client";
import { Languages } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LangToggle() {
  const t = useTranslations("Global");
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (locale: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("lang")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeLanguage("es")}
          className="cursor-pointer flex items-center gap-2 flex-nowrap"
        >
          <Avatar className="size-6">
            <AvatarImage src="/images/flags/spain.svg" className="" />
            <AvatarFallback>{t("es")}</AvatarFallback>
          </Avatar>
          {t("es")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          className="cursor-pointer flex items-center gap-2 flex-nowrap"
        >
          <Avatar className="size-6">
            <AvatarImage src="/images/flags/united-kingdom.svg" />
            <AvatarFallback>{t("en")}</AvatarFallback>
          </Avatar>
          {t("en")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
