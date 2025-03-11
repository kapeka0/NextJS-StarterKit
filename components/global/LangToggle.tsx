"use client";

import { useParams } from "next/navigation";
import { Languages } from "lucide-react";
import { useTranslations } from "next-intl";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LangToggle() {
  const t = useTranslations("Global");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const changeLanguage = (locale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: locale }
    );
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
          </Avatar>
          {t("es")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          className="cursor-pointer flex items-center gap-2 flex-nowrap"
        >
          <Avatar className="size-6">
            <AvatarImage src="/images/flags/united-kingdom.svg" />
          </Avatar>
          {t("en")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
