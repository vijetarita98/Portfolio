import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { Section } from './section'

const socials = [
  { label: 'GitHub', href: profile.links.github },
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'LeetCode', href: profile.links.leetcode },
]

export function Contact() {
  return (
    <Section id="contact" index="06" title="Get in touch">
      <div className="rounded-xl border bg-card p-8 md:p-12">
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {"I'm always happy to talk about internships, projects, or anything around AI and systems. Drop me a message and I'll get back to you."}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline md:text-2xl"
        >
          <Mail className="size-5" aria-hidden="true" />
          {profile.email}
        </a>
        <ul className="mt-8 flex flex-wrap gap-3">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-md border px-4 text-sm font-medium transition-colors hover:bg-muted"
              >
                {social.label}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      {`© ${new Date().getFullYear()} ${profile.name}. Built with Next.js.`}
    </footer>
  )
}
