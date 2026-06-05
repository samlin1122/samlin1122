import { profile } from "@/content/profile";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-center gap-3 text-center">
        <div className="flex gap-5 font-mono text-sm">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-muted hover:text-accent">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-muted hover:text-accent">
            Email
          </a>
        </div>
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </Container>
    </footer>
  );
}
