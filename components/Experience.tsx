const stages = [
  ['Briefing', 'Stage 01', 'Menggali kebutuhan, tujuan bisnis, target pengguna, dan spesifikasi teknis dari klien secara menyeluruh.'],
  ['Research', 'Stage 02', 'Memahami referensi visual, alur bisnis, serta kebutuhan pengguna sebelum masuk ke rancangan sistem.'],
  ['Prototyping', 'Stage 03', 'Merancang struktur aplikasi, alur pengguna, dan bentuk halaman sebelum pengembangan dimulai.'],
  ['Development', 'Stage 04', 'Membangun aplikasi dengan kode yang rapi, responsif, dan sesuai tech stack yang dibutuhkan.'],
  ['Delivery', 'Stage 05', 'Review akhir, testing, optimasi, dan serah terima project agar siap digunakan.'],
]

export default function Experience() {
  return (
    <section id="experience" className="border-b border-[var(--border)] px-6 py-14 md:px-10">
      <div className="mb-10 flex flex-wrap items-start justify-between gap-6">
        <h2 className="editorial-title">
          WORK
          <br />
          STAGES
        </h2>
        <p className="max-w-[240px] text-left text-xs leading-6 text-[var(--muted)] md:text-right">
          Alur kerja saya dalam membangun setiap proyek digital.
        </p>
      </div>

      <div>
        {stages.map(([title, stage, body]) => (
          <div
            key={stage}
            className="grid gap-4 border-b border-[var(--border)] py-5 transition-colors first:border-t hover:bg-[rgba(232,83,58,0.04)] md:grid-cols-[200px_1fr]"
          >
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
              {title}
              <span className="mt-1 block text-[10px] font-normal text-[var(--muted)]">{stage}</span>
            </div>
            <p className="text-sm leading-7 text-[var(--muted)]">{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
