export type SourceLink = {
  title: string;
  publisher: string;
  url: string;
};

type SourcesListProps = {
  sources: SourceLink[];
  heading?: string;
};

/** Visible references to primary/official documentation. */
export function SourcesList({
  sources,
  heading = "Sources & official documentation",
}: SourcesListProps) {
  if (!sources.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold text-[#0a0612] mb-4">{heading}</h2>
      <ul className="space-y-3">
        {sources.map((source) => (
          <li key={source.url} className="text-[#0a0612]/80 leading-relaxed">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#BC2C7B] hover:text-[#E44F71] underline-offset-2 hover:underline"
            >
              {source.title}
            </a>
            <span className="text-[#0a0612]/55"> — {source.publisher}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
