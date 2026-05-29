import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'M Dwi Fachreza - Web Developer',
  description: 'Web developer based in Palembang, Indonesia',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
