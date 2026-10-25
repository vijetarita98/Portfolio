import { coursework, education, involvements } from '@/lib/portfolio-data'
import { Section } from './section'

export function Education() {
  return (
    <Section id="education" index="04" title="Education">
      <ol className="flex flex-col">
        {education.map((item) => (
          <li
            key={item.degree}
            className="flex flex-col gap-1 border-b py-5 first:pt-0 last:border-b-0 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="font-semibold">{item.degree}</h3>
              <p className="text-sm text-muted-foreground">{item.institute}</p>
            </div>
            <div className="flex flex-col md:items-end">
              <span className="text-sm font-medium text-primary">{item.score}</span>
              <span className="font-mono text-xs text-muted-foreground">{item.year}</span>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 rounded-lg border bg-muted/50 p-5">
        <h3 className="mb-3 text-sm font-semibold">Relevant coursework</h3>
        <ul className="flex flex-wrap gap-2">
          {coursework.map((course) => (
            <li key={course} className="rounded-md border bg-background px-2.5 py-1 text-sm">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export function Involvements() {
  return (
    <Section id="involvements" index="05" title="Campus involvements">
      <ul className="grid gap-4 md:grid-cols-3">
        {involvements.map((item) => (
          <li key={item.role} className="flex flex-col gap-2 rounded-lg border bg-card p-5">
            <span className="w-fit rounded-full bg-accent px-2 py-0.5 font-mono text-xs text-accent-foreground">
              {item.period}
            </span>
            <h3 className="font-semibold">{item.role}</h3>
            <p className="text-sm text-muted-foreground">{item.org}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
