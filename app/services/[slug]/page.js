'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { serviceBySlug } from '@/lib/content'

export default function ServiceDetailPage() {
  const params = useParams()
  const service = serviceBySlug[params.slug]

  if (!service) {
    return (
      <main className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hizmet Bulunamadi</h1>
          <Link href="/services" className="btn-primary inline-block">Hizmetlere Don</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20">
      <section className="relative h-[40vh] bg-gradient-to-r from-primary to-gray-dark flex items-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container-custom">
          <ScrollReveal>
            <Link href="/services" className="inline-flex items-center text-white/80 hover:text-accent mb-4 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Hizmetlere Don
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-white/90 text-lg max-w-2xl">{service.shortDescription}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div>
                <div className="relative h-[320px] md:h-[420px] rounded-xl overflow-hidden shadow-xl mb-8">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
                </div>

                <h2 className="text-2xl font-bold mb-4 dark:text-white">Hizmet Detayi</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.fullDescription}</p>

                <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">Uygulama Akisi</h3>
                <div className="space-y-4">
                  {service.process.map((item, idx) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <div className="w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold shrink-0">{idx + 1}</div>
                      <div>
                        <h4 className="font-semibold dark:text-white">{item.step}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.gallery.map((image, idx) => (
                    <div key={image} className="relative h-40 rounded-xl overflow-hidden">
                      <Image src={image} alt={`${service.title} galeri ${idx + 1}`} fill sizes="(max-width: 768px) 100vw, 22vw" className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-gray-light dark:bg-gray-dark rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 dark:text-white">Sahada Neler Yapiyoruz?</h3>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary w-full text-center inline-block">Teklif Al</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
