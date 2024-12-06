import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";

import { routing } from "./i18n/routing";
import { i18nConfig } from "./i18n/i18nConfig";

const handleI18nRouting = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  if (
    !routing.locales.includes(request.nextUrl.pathname.split("/")[1] as any)
  ) {
    return NextResponse.redirect(
      new URL(
        request.cookies.get("NEXT_LOCALE")?.value || i18nConfig.defaultLocale,
        request.nextUrl
      )
    );
  }
  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|image|.*\\.png$).*)"],
};
