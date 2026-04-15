'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { services } from '@/lib/content'

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,162,61,0.08),transparent_34%)]" />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <span className="section-kicker">Hizmet Alanlari</span>
          <h2 className="section-title">
            Erzurum odakli <span className="text-gradient">uzman saha hizmetleri</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-300 md:text-base">
            Insaat, yikim, hafriyat, agrega, beton ve kaldirim hizmetlerimizi her biri icin ayri SEO sayfasi ile sunuyoruz.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="premium-panel group overflow-hidden"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-200">
                  {service.tag}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-2xl font-black text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-300">{service.shortDescription}</p>

                <div className="mt-5 space-y-2 border-t border-white/10 pt-5">
                  {service.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-stone-300">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <div className="text-xs uppercase tracking-[0.28em] text-stone-400">Erzurum / Hizmet</div>
                  <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent transition hover:text-[#f0c56f]">
                    Detaylar
                    <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
