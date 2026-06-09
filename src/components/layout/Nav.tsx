import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { profile } from "@/content/profile";
import Container from "@/components/ui/Container";
import LangSwitch from "./LangSwitch";

export default async function Nav() {
  const t = await getTranslations("nav");
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold">
          {profile.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-muted transition-colors hover:text-text">
            {t("home")}
          </Link>
          <Link href="/work" className="text-muted transition-colors hover:text-text">
            {t("work")}
          </Link>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-text"
          >
            {t("resume")}
          </a>
          <LangSwitch />
        </nav>
      </Container>
    </header>
  );
}
