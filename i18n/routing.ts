import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

import { i18nConfig } from "./i18nConfig";

export const routing = defineRouting(i18nConfig);

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
