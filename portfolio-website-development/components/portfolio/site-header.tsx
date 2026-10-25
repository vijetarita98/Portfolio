import { profile } from '@/lib/portfolio-data'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight"
          aria-label={`${profile.name}, back to top`}
        >
          <span className="flex size-8 items-center justify-center rounded-md bg-primary font-mono text-xs text-primary-foreground">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm">
            {navItems.map((item) => (
              <li key={item.href} className={item.href === '#education' ? 'hidden md:block' : ''}>
                <a
                  href={item.href}
                  className="rounded-md px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
