import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    type: 'Company Profile',
    name: 'CV. Sriwijaya Serangkai',
    desc: 'Website company profile untuk memperkenalkan bisnis, layanan, dan kontak perusahaan secara rapi.',
    image: '/COMPANY.png',
    tags: ['Laravel', 'Bootstrap', 'Responsive'],
    note: 'Profile, layanan, kontak',
    link: 'https://new.sriwijayaserangkai.id',
    action: 'Live Website',
  },
  {
    type: 'Web Application',
    name: 'Accounting GL System',
    desc: 'Aplikasi General Ledger untuk mencatat transaksi, COA, jurnal umum, buku besar, dan laporan.',
    image: '/GL.png',
    tags: ['Laravel', 'MySQL', 'Tailwind'],
    note: 'COA, jurnal, laporan',
    link: '',
    action: 'Private Internal System',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-b border-[var(--border)]">
      <div className="flex flex-wrap items-end justify-between gap-6 px-6 pt-12 md:px-10">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2 className="editorial-title mt-2">
            RECENT
            <br />
            <em className="not-italic text-[var(--accent)]">WORKS</em>
          </h2>
        </div>
        <p className="max-w-[260px] text-xs leading-6 text-[var(--muted)]">
          Dua project utama yang mewakili pekerjaan saya di website bisnis dan aplikasi internal.
        </p>
      </div>

      <div className="mt-8 grid border-t border-[var(--border)] lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="group relative cursor-pointer border-b border-[var(--border)] transition-colors hover:bg-[#ebe8df] lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <div className="pointer-events-none absolute right-5 top-5 z-10 translate-y-2 rounded-full bg-[var(--ink)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              View
            </div>
            <div className="p-4 md:p-6">
              <div className="relative aspect-[16/10] overflow-hidden border border-[var(--border)] bg-white">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="grid grid-cols-[72px_1fr] border-t border-[var(--border)]">
              <div className="display-font border-r border-[var(--border)] px-4 py-5 text-5xl leading-none text-[var(--border)]">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="p-5 md:p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">{project.type}</p>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">{project.name}</h3>
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.name}`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all group-hover:rotate-45 group-hover:border-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-white"
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  ) : (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)]">
                      <ArrowUpRight size={17} />
                    </span>
                  )}
                </div>

                <p className="max-w-[460px] text-sm leading-7 text-[var(--muted)]">{project.desc}</p>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="mr-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{project.note}</span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] text-[var(--ink-2)]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:text-[var(--accent)]"
                    >
                      {project.action} <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                      {project.action}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
