export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 px-6 py-5 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-10">
      <span className="flex items-center gap-3 tracking-[0.04em]">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--ink)] text-[9px] font-bold text-white">DF</span>
        2026 dwifachreza - All rights reserved
      </span>
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4caf7d]" />
        <span>Available for new projects</span>
      </div>
    </footer>
  )
}
