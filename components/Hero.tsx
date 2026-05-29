'use client'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[85vh] flex-col justify-end overflow-hidden px-6 pt-16 md:px-10">
      <div className="pointer-events-none absolute bottom-0 right-6 z-10 h-[320px] w-[250px] md:right-10 md:h-[420px] md:w-[340px]">
        <div className="photo-blob absolute inset-0 opacity-60" />
        <div className="photo-shape absolute inset-5 flex items-end justify-center overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="M Dwi Fachreza"
            fill
            priority
            sizes="(min-width: 768px) 300px, 220px"
            className="object-cover object-[50%_18%]"
          />
        </div>
      </div>

      <div className="relative z-20">
        <p className="eyebrow mb-4">Web Developer</p>

        <h1 className="display-font text-[clamp(4.5rem,14vw,9.25rem)] leading-[0.88] text-[var(--ink)]">
          <span className="block">WEB</span>
          <span className="block">DEVELOPER</span>
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-b border-[var(--border)] pb-10">
          <p className="max-w-[360px] text-sm leading-7 text-[var(--muted)]">
            <strong className="font-medium text-[var(--ink)]">M Dwi Fachreza</strong> - Saya tidak berdiam diri dan terus berkembang. Fokus pada pembuatan aplikasi web, sistem internal perusahaan, dan solusi digital yang berdampak nyata bagi bisnis.
          </p>

          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="cta-group flex items-center gap-3"
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">Recent Works</span>
            <span className="circle-cta">
              <ArrowRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
