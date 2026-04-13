import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import AboutSection from '@/components/AboutSection'
import StatsSection from '@/components/StatsSection'
import ContactCTA from '@/components/ContactCTA'
import BlogSection from '@/components/BlogSection'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <StatsSection />
      <BlogSection />
      <ContactCTA />
    </main>
  )
}
