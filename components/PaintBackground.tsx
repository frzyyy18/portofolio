const splatters = [
  'left-[4%] top-[3%] h-52 w-52 paint-red rotate-[-12deg]',
  'right-[7%] top-[8%] h-60 w-60 paint-blue rotate-[9deg]',
  'left-[36%] top-[12%] h-40 w-40 paint-yellow rotate-[18deg]',
  'left-[-4rem] top-[24%] h-64 w-64 paint-blue rotate-[-22deg]',
  'right-[12%] top-[30%] h-44 w-44 paint-red rotate-[17deg]',
  'left-[18%] top-[42%] h-48 w-48 paint-yellow rotate-[-8deg]',
  'right-[-3rem] top-[50%] h-72 w-72 paint-red rotate-[28deg]',
  'left-[8%] top-[63%] h-44 w-44 paint-blue rotate-[11deg]',
  'right-[28%] top-[70%] h-48 w-48 paint-yellow rotate-[-18deg]',
  'left-[42%] top-[84%] h-56 w-56 paint-red rotate-[6deg]',
]

const dots = [
  'left-[2%] top-[15%] paint-dot-warm',
  'right-[4%] top-[22%] paint-dot-cool',
  'left-[58%] top-[39%] paint-dot-warm',
  'left-[6%] top-[75%] paint-dot-cool',
  'right-[18%] top-[88%] paint-dot-warm',
]

export default function PaintBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {splatters.map((className, index) => (
        <span key={`paint-${index}`} className={`paint-mark absolute ${className}`} />
      ))}
      {dots.map((className, index) => (
        <span key={`dots-${index}`} className={`paint-speckles absolute ${className}`} />
      ))}
    </div>
  )
}
