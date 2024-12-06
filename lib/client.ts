"use client";

import { useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
const useSafeRedirect = () => {
  const router = useRouter();
  const locale = useLocale();
  const safeRedirectClient = (path: string) => {
    try {
      if (typeof path === "string" && path.startsWith("/")) {
        router.push(new URL(path, window.location.origin).href);
      } else {
        console.warn("Invalid path detected, redirecting to default"); //debug
        router.push("/appquila");
      }
    } catch (e) {
      console.warn("Invalid path detected, redirecting to default"); //debug
      router.push("/appquila");
    }
  };

  return { safeRedirectClient };
};

export default useSafeRedirect;
