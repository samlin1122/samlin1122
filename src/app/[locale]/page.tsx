import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/content/profile";
import { profile } from "@/content/profile";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Reveal from "@/components/ui/Reveal";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const loc = locale as Locale;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            email: `mailto:${profile.email}`,
            jobTitle: "Senior Frontend Developer",
            sameAs: [profile.socials.github, profile.socials.linkedin],
          }),
        }}
      />
      <Hero locale={loc} />
      <Reveal>
        <About locale={loc} label={t("aboutLabel")} />
      </Reveal>
      <Reveal>
        <Experience locale={loc} label={t("experienceLabel")} />
      </Reveal>
      <Reveal>
        <Contact locale={loc} label={t("contactLabel")} />
      </Reveal>
    </>
  );
}
