'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { projects } from '@/lib/content'

export default function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })
  const featuredProjects = projects.slice(0, 3)

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_30%)]" />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <span className="section-kicker">Referanslar</span>
          <h2 className="section-title">
            Sahadan gelen <span className="text-gradient">gercek is seckileri</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-300 md:text-base">
            Yol, tunel, agrega ve altyapi sahalarindan secilen uygulamalari buyuk gorsellerle one cikariyoruz.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group premium-panel overflow-hidden"
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="relative h-[320px] sm:h-[360px]">
                  <Image src={project.coverImage} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-200">
                    {project.category}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="rounded-[24px] border border-white/10 bg-black/30 p-5 backdrop-blur-sm transition duration-300 group-hover:bg-black/40">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h3 className="text-2xl font-black text-white">{project.title}</h3>
                          <p className="mt-2 text-sm text-stone-300">{project.location}</p>
                        </div>
                        <div className="rounded-full border border-accent/25 bg-accent/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          Proje
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-xs uppercase tracking-[0.26em] text-stone-400">Detayli inceleme</span>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                          Incele
                          <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center md:mt-12">
          <Link href="/projects" className="btn-outline inline-flex">Tum Projeleri Gor</Link>
        </div>
      </div>
    </section>
  )
}
