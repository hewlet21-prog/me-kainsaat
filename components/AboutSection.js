'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { siteConfig } from '@/lib/site'

const metrics = [
  { value: '22+', label: 'Yillik deneyim' },
  { value: '287+', label: 'Tamamlanan proje' },
  { value: '48', label: 'Uzman ekip' },
  { value: '7', label: 'Ana hizmet kolu' },
]

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      <div className="container-custom">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="relative order-2 lg:order-1">
            <div className="premium-panel relative overflow-hidden p-4 sm:p-5">
              <div className="relative h-[320px] overflow-hidden rounded-[24px] sm:h-[420px]">
                <Image src="/gallery/15.jpg" alt="ME-KA saha ve operasyon alani" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.18)_0%,rgba(5,8,22,0.34)_38%,rgba(5,8,22,0.82)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,162,61,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-accent">Kurumsal guc</div>
                <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/10 bg-black/35 p-5 backdrop-blur-sm">
                  <h3 className="text-2xl font-black uppercase tracking-[0.08em] text-white">ME-KA İNŞAAT</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-300">Planlama, saha koordinasyonu ve teslim kalitesini aynı çizgide tutan operasyon modeliyle çalışıyoruz.</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <div className="text-2xl font-black text-accent">{metric.value}</div>
                    <div className="mt-1 text-sm text-stone-300">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
            <span className="section-kicker">Kurumsal Yapi</span>
            <h2 className="text-3xl font-black uppercase tracking-[0.1em] text-white md:text-5xl">Erzurum merkezli, sahada net, teslimde duzenli</h2>
            <p className="mt-6 text-sm leading-8 text-stone-300 md:text-base">ME-KA İnşaat; Erzurum merkezli operasyon yapısıyla Erzurum beton, bitüm, agrega, hafriyat, yol yapımı, tünel ve büyük altyapı kalemlerinde sahaya uygun çözümler üretir. Yerel saha bilgisiyle ilerler, uygulama ritmini arazi ve iklim koşullarına göre kurar.</p>
            <p className="mt-5 text-sm leading-8 text-stone-300 md:text-base">Yakutiye merkezli iletişim yapımız sayesinde keşif, teklif, saha kurulumu ve uygulama takibini aynı hat üzerinden yürütürüz. Malzeme, ekipman ve ekip koordinasyonunu teslim hedefiyle aynı çizgide tutarız.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {siteConfig.serviceAreas.map((area) => (
                <span key={area} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone-200">
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="premium-panel px-4 py-4">
                  <div className="text-2xl font-black text-accent">{metric.value}</div>
                  <div className="mt-1 text-sm text-stone-300">{metric.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/about" className="btn-primary inline-flex">Daha Fazla Bilgi</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
