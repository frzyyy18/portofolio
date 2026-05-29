'use client'
import { useState } from 'react'
import { ArrowRight, Check, Mail } from 'lucide-react'

type BrandIcon = 'github' | 'instagram' | 'whatsapp' | 'email'

function SocialIcon({ name }: { name: BrandIcon }) {
  if (name === 'email') return <Mail size={17} />

  const paths: Record<Exclude<BrandIcon, 'email'>, string> = {
    github:
      'M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.1.79-.25.79-.56v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.18 1.18.92-.26 1.91-.38 2.89-.39.98.01 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z',
    instagram:
      'M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.9 2.25a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.15A4.85 4.85 0 1 1 12 16.85 4.85 4.85 0 0 1 12 7.15Zm0 2A2.85 2.85 0 1 0 12 14.85 2.85 2.85 0 0 0 12 9.15Z',
    whatsapp:
      'M12.02 2A9.87 9.87 0 0 0 2.1 11.85c0 1.74.46 3.43 1.33 4.92L2 22l5.39-1.4a9.98 9.98 0 0 0 4.63 1.17h.01A9.89 9.89 0 0 0 22 11.91 9.9 9.9 0 0 0 12.02 2Zm.01 17.96h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.2.83.86-3.1-.2-.32a8.02 8.02 0 0 1-1.23-4.2 8.18 8.18 0 0 1 8.23-8.04 8.17 8.17 0 0 1 .01 16.15Zm4.49-6.1c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z',
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[17px] w-[17px] fill-current">
      <path d={paths[name]} />
    </svg>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      e.currentTarget.reset()
    }, 2500)
  }

  return (
    <section id="contact" className="grid border-b border-[var(--border)] md:grid-cols-2">
      <div className="border-b border-[var(--border)] px-6 py-14 md:border-b-0 md:border-r md:px-10">
        <h2 className="editorial-title mb-7">
          FIND OUT
          <br />
          HOW WE
          <br />
          CAN <em className="not-italic text-[var(--accent)]">WORK</em>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="border-y border-[var(--border)]">
            <input
              required
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full border-b border-[var(--border)] bg-transparent py-4 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--border)] focus:placeholder:text-[var(--muted)]"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-[var(--border)] bg-transparent py-4 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--border)] focus:placeholder:text-[var(--muted)]"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              className="h-24 w-full resize-none bg-transparent py-4 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--border)] focus:placeholder:text-[var(--muted)]"
            />
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[var(--accent)] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-85"
          >
            {sent ? (
              <>
                Sent <Check size={15} />
              </>
            ) : (
              <>
                Diskusi Project <ArrowRight size={15} />
              </>
            )}
          </button>
        </form>
      </div>

      <div className="flex flex-col justify-between px-6 py-14 md:px-10">
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--muted)]">Email</p>
          <p className="mb-10 text-2xl font-light leading-tight text-[var(--ink)]">
            dwifachrez
            <br />
            @gmail.com
          </p>

          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--muted)]">Location</p>
          <p className="mb-10 text-2xl font-light leading-tight text-[var(--ink)]">
            Palembang,
            <br />
            Indonesia
          </p>
        </div>

        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--muted)]">Social Networks</p>
          <p className="mb-4 max-w-[280px] text-xs leading-6 text-[var(--muted)]">On social networks we will be glad to communicate.</p>
          <div className="flex gap-4">
            {[
              { icon: 'github', href: 'https://github.com/frzyyy18', label: 'GitHub' },
              { icon: 'instagram', href: 'https://instagram.com/dwifachreza', label: 'Instagram' },
              { icon: 'whatsapp', href: 'https://wa.me/6281282216942', label: 'WhatsApp' },
              { icon: 'email', href: 'mailto:dwifachrez@gmail.com', label: 'Email' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href === '#' ? undefined : '_blank'}
                rel={href === '#' ? undefined : 'noopener noreferrer'}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)]"
              >
                <SocialIcon name={icon as BrandIcon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
