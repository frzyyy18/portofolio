const capabilities = [
  {
    title: 'Company Profile',
    desc: 'Website bisnis yang rapi untuk menampilkan profil, layanan, kontak, dan informasi utama perusahaan.',
    items: ['Landing page', 'Halaman layanan', 'Kontak bisnis'],
  },
  {
    title: 'Internal Web App',
    desc: 'Aplikasi internal berbasis web untuk membantu operasional, pencatatan data, dan alur kerja perusahaan.',
    items: ['Login & role', 'Form data', 'Dashboard sederhana'],
  },
  {
    title: 'Accounting System',
    desc: 'Sistem akuntansi seperti General Ledger, COA, jurnal umum, buku besar, dan laporan keuangan.',
    items: ['COA', 'Journal entry', 'Financial report'],
  },
  {
    title: 'Workflow Cleanup',
    desc: 'Merapikan proses manual menjadi alur digital yang lebih jelas, mudah dipakai, dan mudah dirawat.',
    items: ['Analisis proses', 'Database flow', 'UI sederhana'],
  },
]

export default function Capabilities() {
  return (
    <section className="border-b border-[var(--border)] px-6 py-14 md:px-10">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Selected Capabilities</p>
          <h2 className="editorial-title mt-2">
            WHAT I
            <br />
            CAN <em className="not-italic text-[var(--accent)]">BUILD</em>
          </h2>
        </div>
        <p className="max-w-[300px] text-sm leading-7 text-[var(--muted)]">
          Fokus saya ada di website bisnis dan sistem internal yang jelas secara tampilan, data, dan alur penggunaan.
        </p>
      </div>

      <div className="grid border-t border-[var(--border)] md:grid-cols-2">
        {capabilities.map((capability, index) => (
          <article
            key={capability.title}
            className="group border-b border-[var(--border)] py-6 transition-colors hover:bg-[#ebe8df] md:odd:border-r md:px-6 md:last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
          >
            <div className="mb-8 flex items-start justify-between gap-5">
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Capability {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">{capability.title}</h3>
              </div>
              <span className="display-font text-5xl leading-none text-[var(--border)] transition-colors group-hover:text-[var(--accent)]">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <p className="max-w-[460px] text-sm leading-7 text-[var(--muted)]">{capability.desc}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {capability.items.map((item) => (
                <span key={item} className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] text-[var(--ink-2)]">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
