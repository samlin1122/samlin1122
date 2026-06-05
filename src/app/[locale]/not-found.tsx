import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

export default async function NotFound() {
  const t = await getTranslations("common");
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-7xl font-semibold text-accent">404</p>
      <p className="mt-4 text-muted">{t("notFound")}</p>
      <Link
        href="/"
        className="mt-6 font-mono text-sm text-accent hover:underline"
      >
        {t("backHome")}
      </Link>
    </Container>
  );
}
