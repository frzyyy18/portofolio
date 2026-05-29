const marqueeItems = ['Web Developer', 'React.js', 'Vue.js', 'Laravel', 'Tailwind CSS', 'MySQL', 'Automation', 'JavaScript', 'Bootstrap']

const categories = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vue.js'],
  },
  {
    title: 'Backend',
    skills: ['PHP', 'Laravel', 'Blade', 'REST API'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'Relational Data', 'Query', 'Reporting'],
  },
  {
    title: 'UI Framework',
    skills: ['Tailwind CSS', 'Bootstrap', 'Responsive Layout'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Excel Automation', 'Debugging', 'Deployment Basic'],
  },
]

export default function Skills() {
  const loop = [...marqueeItems, ...marqueeItems]

  return (
    <section id="skills" className="border-b border-[var(--border)]">
      <div className="overflow-hidden bg-[var(--ink)] py-3">
        <div className="marquee-track hover:[animation-play-state:paused]">
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className={`whitespace-nowrap border-r border-white/10 px-7 text-xs font-bold uppercase tracking-[0.18em] ${
                index % 3 === 0 ? 'text-[var(--accent-2)]' : 'text-white/35'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 py-14 md:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Technical Skills</p>
            <h2 className="editorial-title mt-2">
              SKILL
              <br />
              <em className="not-italic text-[var(--accent)]">SET</em>
            </h2>
          </div>
          <p className="max-w-[320px] text-sm leading-7 text-[var(--muted)]">
            Skill saya disusun berdasarkan area kerja supaya HRD atau klien lebih cepat melihat kemampuan teknis yang relevan.
          </p>
        </div>

        <div className="grid border-t border-[var(--border)] md:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, index) => (
            <article
              key={category.title}
              className="border-b border-[var(--border)] py-6 transition-colors hover:bg-[#ebe8df] md:px-5 lg:border-r lg:last:border-r-0"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)]">{category.title}</h3>
                <span className="display-font text-4xl leading-none text-[var(--border)]">{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="flex flex-wrap gap-2 lg:block lg:space-y-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex rounded-full border border-[var(--border)] px-3 py-1 text-[10px] text-[var(--ink-2)] lg:w-fit"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
