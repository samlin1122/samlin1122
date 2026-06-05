export default function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
