import type { Locale } from "@/content/profile";
import { profile } from "@/content/profile";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="py-28 sm:py-36">
      <Container>
        <p
          className="animate-rise font-mono text-sm uppercase tracking-[0.2em] text-accent"
          style={{ animationDelay: "0ms" }}
        >
          Portfolio / 2026
        </p>
        <h1
          className="animate-rise mt-6 font-display text-6xl font-semibold leading-none sm:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          {profile.name}
        </h1>
        <p
          className="animate-rise mt-6 max-w-xl text-lg text-muted"
          style={{ animationDelay: "160ms" }}
        >
          {profile.tagline[locale]}
        </p>
        <p
          className="animate-rise mt-4 max-w-xl text-muted"
          style={{ animationDelay: "240ms" }}
        >
          {profile.intro[locale]}
        </p>
        <div
          className="animate-rise mt-8 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "320ms" }}
        >
          <Button href="/work">{locale === "zh" ? "瀏覽作品" : "View Work"}</Button>
          <Button href={`mailto:${profile.email}`} variant="ghost">
            {locale === "zh" ? "與我聯繫" : "Get in touch"}
          </Button>
        </div>
      </Container>
    </section>
  );
}
