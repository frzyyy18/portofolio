'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Portfolio', id: 'projects' },
  { label: 'Process', id: 'experience' },
  { label: 'Contacts', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(245,244,240,0.94)] backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6 md:px-10">
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink)]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink)] text-[10px] tracking-[0.08em] text-white">
            DF
          </span>
          <span>M Dwi Fachreza</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="text-[var(--ink)] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--paper)] px-6 py-3 md:hidden">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full py-3 text-left text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
