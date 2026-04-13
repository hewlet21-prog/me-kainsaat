'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { siteConfig } from '@/lib/site'

export default function ContactCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="premium-panel overflow-hidden"
        >
          <div className="grid gap-8 bg-[linear-gradient(135deg,rgba(215,162,61,0.12)_0%,rgba(5,8,22,0.96)_34%,rgba(5,8,22,1)_100%)] px-5 py-8 sm:px-7 md:px-10 md:py-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
            <div>
              <span className="section-kicker">Bize Ulasin</span>
              <h2 className="text-3xl font-black uppercase tracking-[0.08em] text-white md:text-5xl">Projeni birlikte netlestirelim</h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-stone-300 md:text-base">
                Yol yapimi, beton agrega, tunel, dere islahi, tas isleri, bordur-kaldirim ve buyuk altyapi islerinde sahaya uygun teklif ve uygulama plani hazirliyoruz.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/contact" className="btn-primary">Teklif Al</Link>
                <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="btn-outline justify-center border-white/20 text-white hover:border-accent">WhatsApp</a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-stone-400">Telefon</div>
                  <div className="mt-2 text-2xl font-black text-accent">{siteConfig.phoneDisplay}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-stone-400">Adres</div>
                  <div className="mt-2 text-sm leading-7 text-stone-100">{siteConfig.address}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-stone-400">Calisma sekli</div>
                  <div className="mt-2 text-base font-semibold text-stone-100">Yerinde kesif, uygulama plani, saha koordinasyonu ve teslim takibi</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
