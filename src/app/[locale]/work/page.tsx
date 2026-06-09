import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/profile";
import Container from "@/components/ui/Container";
import WorkList from "@/components/sections/WorkList";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("work");

  return (
    <div className="py-20">
      <Container>
        <h1 className="font-display text-5xl font-semibold">{t("title")}</h1>
        <p className="mt-4 text-muted">{t("subtitle")}</p>
      </Container>
      <WorkList locale={locale as Locale} />
    </div>
  );
}
