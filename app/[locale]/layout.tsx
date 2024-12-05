import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* icon */}
        <link
          rel="icon"
          href="/images/logos/rocket.svg"
          type="image/svg+xml"
          sizes="any"
        />
        {/* TODO: Remove this for production */}
        <script
          src="https://unpkg.com/react-scan/dist/auto.global.js"
          async
        ></script>
      </head>
      <body
        className={cn(`${bricolageGrotesque.className}}   h-full antialiased `)}
      >
        {" "}
        <NextIntlClientProvider messages={messages}>
          <div className="">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <main className="relative flex flex-col min-h-screen">
                {/* Providers */}
                {/* Navbar */}
                <div className="flex-grow flex-1">{children}</div>
                {/* Footer */}
              </main>
            </ThemeProvider>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
