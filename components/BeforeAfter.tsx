const cases = [
  {
    project: 'Company Profile',
    before: 'Informasi perusahaan tersebar dan belum punya halaman resmi yang mudah dibagikan ke calon klien.',
    after: 'Profil bisnis, layanan, dan kontak tersusun dalam satu website yang rapi dan responsif.',
  },
  {
    project: 'General Ledger',
    before: 'Pencatatan transaksi dan pengecekan laporan masih membutuhkan alur manual yang sulit ditelusuri.',
    after: 'Transaksi, COA, jurnal, buku besar, trial balance, dan laporan berada dalam satu sistem.',
  },
]

export default function BeforeAfter() {
  return (
    <section className="border-b border-[var(--border)] px-6 py-14 md:px-10">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Case Notes</p>
          <h2 className="editorial-title mt-2">
            BEFORE
            <br />
            <em className="not-italic text-[var(--accent)]">AFTER</em>
          </h2>
        </div>
        <p className="max-w-[300px] text-sm leading-7 text-[var(--muted)]">
          Ringkasan perubahan yang ingin dicapai dari project, bukan hanya daftar teknologi yang dipakai.
        </p>
      </div>

      <div className="grid border-t border-[var(--border)] lg:grid-cols-2">
        {cases.map((item, index) => (
          <article key={item.project} className="border-b border-[var(--border)] lg:border-b-0 lg:border-r lg:last:border-r-0">
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)]">{item.project}</h3>
              <span className="display-font text-4xl leading-none text-[var(--border)]">{String(index + 1).padStart(2, '0')}</span>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="border-b border-[var(--border)] p-5 md:border-b-0 md:border-r">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">Before</p>
                <p className="text-sm leading-7 text-[var(--muted)]">{item.before}</p>
              </div>
              <div className="bg-[#ebe8df] p-5">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">After</p>
                <p className="text-sm leading-7 text-[var(--ink)]">{item.after}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
