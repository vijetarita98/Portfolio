import { about, skillGroups } from '@/lib/portfolio-data'
import { Section } from './section'

export function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="flex max-w-3xl flex-col gap-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" index="02" title="Technical skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-lg border bg-card p-5">
            <h3 className="mb-3 text-sm font-semibold">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
