import type { Locale } from "@/content/profile";
import { projects } from "@/content/projects";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";

export default function WorkList({ locale }: { locale: Locale }) {
  return (
    <Container className="space-y-20 py-16">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.slug}
          project={project}
          locale={locale}
          reversed={i % 2 === 1}
        />
      ))}
    </Container>
  );
}
