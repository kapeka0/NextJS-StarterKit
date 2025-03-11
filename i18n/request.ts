import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { i18nConfig } from "./i18nConfig";

export default getRequestConfig(async ({ requestLocale }) => {
  const { locales } = i18nConfig;
  let locale = await requestLocale;
  if (!locales.includes(locale as any)) {
    notFound();
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
