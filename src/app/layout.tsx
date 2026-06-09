import type { ReactNode } from "react";

// The real <html> lives in [locale]/layout.tsx so we can set lang per locale.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
