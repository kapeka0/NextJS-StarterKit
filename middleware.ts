import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { i18nConfig } from "./i18n/i18nConfig";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  // Redirect all routes to the setted locale or the default one
  if (!routing.locales.includes(request.nextUrl.pathname.split("/")[1] as any)) {
    console.log(
      `${request.nextUrl.origin}/${
        request.cookies.get("NEXT_LOCALE")?.value || i18nConfig.defaultLocale
      }${request.nextUrl.pathname}`
    );
    return NextResponse.redirect(
      `${request.nextUrl.origin}/${
        request.cookies.get("NEXT_LOCALE")?.value || i18nConfig.defaultLocale
      }${request.nextUrl.pathname}`
    );
  }
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|image|.*\\.png$).*)"],
};
