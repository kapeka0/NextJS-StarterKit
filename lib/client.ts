"use client";

import "client-only";

import { useRouter } from "@/i18n/routing";

const useSafeRedirect = () => {
  const router = useRouter();
  const safeRedirectClient = (path: string) => {
    try {
      if (typeof path === "string" && path.startsWith("/")) {
        router.push(new URL(path, window.location.origin).href);
      } else {
        console.warn("Invalid path detected, redirecting to default"); //debug
        router.push("/");
      }
    } catch (e) {
      console.warn("Invalid path detected, redirecting to default", e); //debug
      router.push("/");
    }
  };

  return { safeRedirectClient };
};

export default useSafeRedirect;
