import Image from "next/image";
import type { Locale } from "@/content/profile";
import type { Project } from "@/content/projects";
import Tag from "@/components/ui/Tag";

export default function ProjectCard({
  project,
  locale,
  reversed,
}: {
  project: Project;
  locale: Locale;
  reversed: boolean;
}) {
  const link = project.href ?? project.repo;
  return (
    <article
      className={`flex flex-col gap-6 md:items-center ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="md:w-3/5">
        <div className="rounded-lg bg-surface">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="rounded-lg h-auto w-full object-cover blur-[2px] grayscale-90 transition duration-300 hover:scale-105 hover:blur-[0px] hover:grayscale-0 motion-reduce:transition-none motion-reduce:hover:scale-100"
          />
        </div>
      </div>
      <div
        className={`flex flex-col md:w-2/5 ${
          reversed ? "md:items-start md:text-left" : "md:items-end md:text-right"
        }`}
      >
        <p className="font-mono text-xs uppercase text-accent">{project.category.join(" / ")}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold">
          {link ? (
            <a href={link} target="_blank" rel="noreferrer" className="hover:text-accent">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <div className="relative z-10 mt-3 w-full rounded-lg border border-line bg-surface p-4 text-left text-sm text-muted shadow-lg md:w-[130%]">
          <p>{project.description[locale]}</p>
          <ul className="mt-2 space-y-1">
            {project.highlights.map((h, i) => (
              <li key={i}>{h[locale]}</li>
            ))}
          </ul>
        </div>
        <div
          className={`mt-4 flex flex-wrap gap-2 ${
            reversed ? "md:justify-start" : "md:justify-end"
          }`}
        >
          {project.techs.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
