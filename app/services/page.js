'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { services } from '@/lib/content'

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-primary to-gray-dark">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Hizmetlerimiz</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Yol yapimi, beton agrega, tunel, dere islahi, tas isleri, bordur-kaldirim ve buyuk altyapi uygulamalarimizi inceleyin.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-primary">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <ScrollReveal direction={index % 2 === 0 ? 'left' : 'right'} className="flex-1">
                  <div className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-accent inline-flex">{service.tag}</div>
                  <h2 className="mt-4 text-2xl md:text-3xl font-bold mb-4 dark:text-white">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.fullDescription}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`} className="btn-primary inline-block">Detayli Bilgi</Link>
                </ScrollReveal>

                <ScrollReveal direction={index % 2 === 0 ? 'right' : 'left'} className="flex-1">
                  <div className="relative h-[300px] md:h-[420px] rounded-xl overflow-hidden shadow-xl">
                    <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-accent to-accent-dark">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Sahaniza uygun teklif plani olusturalim</h2>
            <p className="text-primary/80 mb-6">Uygulama alani, makine ihtiyaci, malzeme akisi ve teslim takvimi icin ekibimizle hemen iletisime gecin.</p>
            <Link href="/contact" className="bg-primary hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-block">Teklif Al</Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
