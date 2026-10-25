import { About, Skills } from '@/components/portfolio/about-skills'
import { Contact, SiteFooter } from '@/components/portfolio/contact'
import { Education, Involvements } from '@/components/portfolio/education'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { SiteHeader } from '@/components/portfolio/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Involvements />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
