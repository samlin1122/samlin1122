export default function SectionHeading({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">{label}</h2>
    </div>
  );
}
