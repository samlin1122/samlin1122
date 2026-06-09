import type { Locale } from "@/content/profile";
import { profile } from "@/content/profile";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const copy = {
  zh: {
    lead: "目前開放遠端工作與接案合作的機會。",
    body: "如果你有任何問題，或只是想打聲招呼，我的信箱永遠開著，我會盡快回覆。",
  },
  en: {
    lead: "Open to remote opportunities and freelance collaborations.",
    body: "Whether you have a question or just want to say hi, my inbox is always open — I'll do my best to get back to you.",
  },
} as const;

export default function Contact({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  return (
    <section id="contact" className="py-24">
      <Container className="text-center">
        <SectionHeading index="03" label={label} />
        <p className="font-display text-2xl">{copy[locale].lead}</p>
        <p className="mx-auto mt-4 max-w-md text-muted">{copy[locale].body}</p>
        <div className="mt-8 flex justify-center">
          <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
        </div>
      </Container>
    </section>
  );
}
