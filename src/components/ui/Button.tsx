import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "solid",
  external = false,
}: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5";
  const styles =
    variant === "solid"
      ? "bg-accent text-bg hover:bg-accent-2"
      : "border border-line text-text hover:border-accent hover:text-accent";
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
