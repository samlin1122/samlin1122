"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LangSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const next = locale === "zh" ? "en" : "zh";
  const label = locale === "zh" ? "EN" : "中";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: next })}
      className="font-mono text-sm text-muted transition-colors hover:text-accent"
      aria-label="Switch language"
    >
      {label}
    </button>
  );
}
