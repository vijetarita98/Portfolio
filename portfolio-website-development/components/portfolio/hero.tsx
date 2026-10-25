import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { profile, stats } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section id="top" className="py-20 md:py-28">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
        <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
        Open to internships and collaborations
      </div>
      <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
        {"Hi, I'm "}
        <span className="text-primary">{profile.name}</span>
      </h1>
      <p className="mt-4 flex items-center gap-2 font-mono text-sm text-muted-foreground">
        <MapPin className="size-4" aria-hidden="true" />
        {profile.role}
      </p>
      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {profile.tagline}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View projects
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex h-10 items-center gap-2 rounded-md border px-5 text-sm font-medium transition-colors hover:bg-muted"
        >
          <Mail className="size-4" aria-hidden="true" />
          Get in touch
        </a>
      </div>

      <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <dt className="order-2 text-xs text-muted-foreground md:text-sm">{stat.label}</dt>
            <dd className="order-1 text-2xl font-semibold tracking-tight md:text-3xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
