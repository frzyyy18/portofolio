const highlights = [
  ['Web Development', 'Company profile & landing pages'],
  ['Business Application', 'Internal systems & ERP'],
  ['Automation', 'Workflow & process optimization'],
  ['Problem Solving', 'Analysis & technical solutions'],
]

export default function About() {
  return (
    <section id="about" className="grid border-b border-[var(--border)] md:grid-cols-2">
      <div className="border-b border-[var(--border)] px-6 py-14 md:border-b-0 md:border-r md:px-10">
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--accent)]">About Me</p>
        <h2 className="editorial-title mb-5">
          M DWI
          <br />
          <em className="not-italic text-[var(--muted)]">FACHREZA</em>
        </h2>
        <p className="max-w-[360px] text-sm leading-7 text-[var(--muted)]">
          Web developer berbasis di Palembang, Indonesia. Spesialisasi membangun antarmuka web yang bersih, cepat, dan fungsional - dari company profile hingga sistem internal perusahaan.
        </p>
      </div>

      <div className="px-6 py-14 md:px-10">
        {highlights.map(([title, desc], index) => (
          <div
            key={title}
            className="group flex items-center justify-between border-b border-[var(--border)] py-5 transition-all first:border-t hover:pl-3"
          >
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.06em] text-[var(--ink)]">{title}</h3>
              <p className="mt-1 text-xs text-[var(--muted)]">{desc}</p>
            </div>
            <span className="display-font text-4xl text-[var(--border)] transition-colors group-hover:text-[var(--accent)]">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
