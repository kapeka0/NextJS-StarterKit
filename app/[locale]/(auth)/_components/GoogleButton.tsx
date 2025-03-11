"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

type Props = {
  readonly callback: () => void;
  readonly disabled?: boolean;
};

function GoogleButton({ callback, disabled = false }: Props) {
  const t = useTranslations("Auth");

  return (
    <Button className="border   w-full" disabled={disabled} onClick={callback} variant="secondary">
      <Image alt="google" height={20} src="/images/icons/google.svg" width={20} />
      {t("google")}
    </Button>
  );
}

export default GoogleButton;
