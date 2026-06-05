import type { Locale } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";

export default function About({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading index="01" label={label} />
        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label.en}>
              <h3 className="font-mono text-sm uppercase tracking-wide text-accent-2">
                {group.label[locale]}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
