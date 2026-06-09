import type { Locale } from "@/content/profile";
import { experiences } from "@/content/experience";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  return (
    <section id="experience" className="py-20">
      <Container>
        <SectionHeading index="02" label={label} />
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.company.en} className="border-l border-line pl-6">
              <p className="font-mono text-xs text-muted">{exp.period}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold">
                {exp.role[locale]}
                <span className="text-accent"> · {exp.company[locale]}</span>
              </h3>
              <ul className="mt-4 space-y-2 text-muted">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">▹</span>
                    <span>{h[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
