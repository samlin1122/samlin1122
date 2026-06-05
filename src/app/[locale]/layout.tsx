import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { SITE_URL } from "@/lib/site";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
  fraunces,
  geist,
  jetbrains,
  notoSerifTC,
  notoSansTC,
} from "@/lib/fonts";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale === "en" ? "en" : "zh";
  const title = `${profile.name} — ${profile.tagline[loc]}`;
  const description = profile.intro[loc];
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      languages: { zh: "/zh", en: "/en" },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${loc}`,
      siteName: profile.name,
      locale: loc === "zh" ? "zh_TW" : "en_US",
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const fontVars = [
    fraunces.variable,
    geist.variable,
    jetbrains.variable,
    notoSerifTC.variable,
    notoSansTC.variable,
  ].join(" ");

  return (
    <html lang={locale} className={fontVars}>
      <body className="relative antialiased">
        <NextIntlClientProvider>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
