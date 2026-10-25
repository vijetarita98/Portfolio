import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { Section } from './section'

export function Projects() {
  return (
    <Section id="projects" index="03" title="Featured projects">
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-xl border bg-card p-6 transition-colors hover:border-primary/40 md:p-8"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-1 text-sm text-primary">{project.subtitle}</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground">{project.meta}</span>
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed">
              {project.highlights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border bg-accent px-2 py-0.5 font-mono text-xs text-accent-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                View on GitHub
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only">{`(${project.title})`}</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
