type RahimTeamInsightProps = {
  body: string;
  title?: string;
};

/** Sparse expert callout — use only for genuine Rahim operational perspective. */
export function RahimTeamInsight({ body, title = "Rahim Team Insight" }: RahimTeamInsightProps) {
  return (
    <aside className="rounded-2xl border border-[#E44F71]/25 bg-gradient-to-br from-[#BC2C7B]/[0.06] to-[#E44F71]/[0.08] p-6 md:p-7">
      <p className="text-[#E44F71] text-sm font-semibold tracking-widest uppercase mb-3">{title}</p>
      <p className="text-[#0a0612]/85 leading-relaxed">{body}</p>
    </aside>
  );
}
