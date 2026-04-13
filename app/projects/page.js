'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { projects } from '@/lib/content'

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-primary to-gray-dark">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Erzurum Projelerimiz</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Erzurum yol yapimi, tunel kazi, agrega uretimi, beton uygulamalari, dere islahi ve buyuk altyapi projelerimizi gorsellerle uyumlu detayli saha anlatimlariyla inceleyin.</p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-primary">
        <div className="container-custom">
          <div className="space-y-10">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.06}>
                <Link href={`/projects/${project.id}`} className="block">
                  <article className="group premium-panel overflow-hidden">
                    <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                      <div className="relative h-[320px] sm:h-[420px] lg:h-[560px]">
                        <Image src={project.coverImage} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-200">{project.category}</div>
                      </div>

                      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-stone-400">
                            <span>{project.location}</span>
                            <span>{project.year}</span>
                            <span>{project.area}</span>
                          </div>
                          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">{project.title}</h2>
                          <p className="mt-5 text-sm leading-8 text-stone-300 sm:text-base">{project.description}</p>
                          <p className="mt-5 text-sm leading-8 text-stone-300 sm:text-base">{project.fullDescription}</p>
                        </div>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                          {project.highlights.map((item) => (
                            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-stone-200">{item}</div>
                          ))}
                        </div>

                        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                          <div className="text-xs uppercase tracking-[0.26em] text-stone-400">Detayli inceleme</div>
                          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                            Incele
                            <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
