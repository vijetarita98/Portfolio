import type { ReactNode } from 'react'

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 border-t py-20">
      <div className="mb-10 flex items-baseline gap-3">
        <span className="font-mono text-sm text-primary">{index}</span>
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
