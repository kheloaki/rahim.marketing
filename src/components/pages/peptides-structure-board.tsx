import Image from "next/image";

const icons = {
  bm: "/images/peptides/peptides-card-bm.jpg",
  pixel: "/images/peptides/peptides-card-pixel.jpg",
  page: "/images/peptides/peptides-card-page.jpg",
  account: "/images/peptides/peptides-card-account.jpg",
  campaigns: "/images/peptides/peptides-card-campaigns.jpg",
};

function Node({
  src,
  label,
  note,
  warn,
}: {
  src: string;
  label: string;
  note?: string;
  warn?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center min-w-[132px]">
      <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden bg-[#12061c] ring-1 ring-black/10 shadow-sm">
        <Image src={src} alt="" width={144} height={144} className="w-full h-full object-cover" />
      </div>
      <p className="mt-3 text-sm font-semibold text-[#12061c] leading-snug">{label}</p>
      {note ? <p className="mt-1 text-xs text-[#12061c]/55">{note}</p> : null}
      {warn ? (
        <span className="mt-2 rounded-full bg-[#E44F71]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#BC2C7B]">
          {warn}
        </span>
      ) : null}
    </div>
  );
}

function Line({ className = "" }: { className?: string }) {
  return <div className={`w-px h-8 bg-[#12061c]/20 ${className}`} />;
}

export function PeptideCoreBoard() {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#E44F71]">Live board</p>
          <h3 className="text-lg font-bold text-[#12061c]">Peptide Core Stack</h3>
        </div>
        <p className="text-xs text-[#12061c]/50 hidden sm:block">Admin ↓ · Pixel events stay in the holder</p>
      </div>
      <div className="flex flex-col items-center">
        <Node src={icons.bm} label="Holder Business Manager" note="Pixel · Domain · CAPI" />
        <Line />
        <div className="flex flex-wrap justify-center gap-8">
          <Node src={icons.page} label="Peptide brand page" />
          <Node src={icons.pixel} label="Event Manager" note="CAPI mapped here" />
        </div>
        <Line />
        <Node src={icons.account} label="Agency ad account" warn="Replaceable spend node" />
        <Line />
        <Node src={icons.campaigns} label="Campaign board" note="Prospecting · Retargeting · Offer" />
      </div>
    </div>
  );
}

export function PeptideScaleBoard() {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#E44F71]">Live board</p>
          <h3 className="text-lg font-bold text-[#12061c]">Peptide Scale + Backup</h3>
        </div>
        <p className="text-xs text-[#12061c]/50 hidden sm:block max-w-[220px] text-right">
          If a spend node dies, replace it. Events stay in the holder.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Node src={icons.bm} label="Holder BM · pixel vault" note="If ad accounts die, events stay here" />
        <Line />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-[640px]">
          <div className="flex flex-col items-center rounded-2xl bg-[#f4f5f8] p-5">
            <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#12061c]/40 mb-4">Lane A</p>
            <Node src={icons.bm} label="Advertiser BM 1" />
            <Line />
            <Node src={icons.page} label="Brand page A" />
            <Line />
            <Node src={icons.account} label="Agency ad account 1" warn="Replace this node" />
          </div>
          <div className="flex flex-col items-center rounded-2xl bg-[#f4f5f8] p-5">
            <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#12061c]/40 mb-4">Lane B</p>
            <Node src={icons.bm} label="Advertiser BM 2" />
            <Line />
            <Node src={icons.page} label="Brand page B" />
            <Line />
            <Node src={icons.account} label="Agency ad account 2" />
          </div>
        </div>
        <Line />
        <Node src={icons.campaigns} label="Shared campaign board" note="Prospecting · Retargeting · Offer scale" />
      </div>
    </div>
  );
}
