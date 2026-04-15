'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import VideoPlayer from './VideoPlayer'
import { siteConfig } from '@/lib/site'

const highlights = [
  {
    title: 'Anahtar teslim uygulama',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0H5m4-14h1m4 0h1m-5 4h1m4 0h1" />
      </svg>
    ),
  },
  {
    title: 'Erzurum beton, hafriyat ve agrega planlamasi',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 17l6-6 4 4 7-8" />
      </svg>
    ),
  },
  {
    title: 'Bitum, demir ve saha koordinasyonu',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h8M8 12h8M8 17h5" />
      </svg>
    ),
  },
]

const heroStats = [
  { end: 22, suffix: '+', label: 'Yillik deneyim' },
  { end: 287, suffix: '+', label: 'Tamamlanan proje' },
  { end: 48, suffix: '', label: 'Uzman ekip' },
]

function CounterCard({ end, suffix, label, delay = 0 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let current = 0
      const step = Math.max(1, Math.ceil(end / 45))

      const timer = setInterval(() => {
        current += step

        if (current >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(current)
        }
      }, 28)

      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay, end])

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: delay / 1000 }}
      className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3 backdrop-blur-sm sm:bg-black/35 sm:px-4 sm:py-5 sm:backdrop-blur-md"
    >
      <div className="text-xl font-black text-accent sm:text-2xl md:text-3xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-stone-300 sm:text-sm">{label}</div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-primary pt-24">
      <VideoPlayer
        src="/videos/promo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.22)_0%,rgba(3,7,18,0.18)_38%,rgba(3,7,18,0.84)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(215,162,61,0.14),transparent_20%),radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.08),transparent_16%)]" />

      <div className="relative z-10">
        <div className="container-custom flex min-h-[calc(100vh-96px)] items-end pb-5 sm:pb-8 md:pb-10">
          <div className="w-full">
            <div className="grid gap-2 sm:gap-3 xl:grid-cols-[220px_minmax(0,1fr)_220px]">
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                className="grid grid-cols-2 gap-2 self-end xl:grid-cols-1 xl:gap-3"
              >
                <Link
                  href="/projects"
                  className="inline-flex min-h-[58px] items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:border-accent/50 hover:text-accent sm:min-h-[84px] sm:px-5 sm:py-4 sm:text-sm sm:tracking-[0.14em] sm:bg-black/35 sm:backdrop-blur-md"
                >
                  Projeleri Incele
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-[58px] items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:border-accent/50 hover:text-accent sm:min-h-[84px] sm:px-5 sm:py-4 sm:text-sm sm:tracking-[0.14em] sm:bg-black/35 sm:backdrop-blur-md"
                >
                  Hizmetlerimizi Gor
                </Link>
              </motion.div>

              <div className="grid gap-2 sm:gap-3">
                <div className="grid gap-2 sm:gap-3 md:grid-cols-3">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.18 + index * 0.08 }}
                      className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-xs font-medium text-stone-100 backdrop-blur-sm sm:gap-3 sm:px-4 sm:py-4 sm:text-sm sm:bg-black/35 sm:backdrop-blur-md"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent sm:h-10 sm:w-10">
                        {item.icon}
                      </div>
                      <span className="leading-snug">{item.title}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {heroStats.map((stat, index) => (
                    <CounterCard
                      key={stat.label}
                      end={stat.end}
                      suffix={stat.suffix}
                      label={stat.label}
                      delay={300 + index * 110}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="grid grid-cols-2 gap-2 self-end xl:grid-cols-1 xl:gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex min-h-[58px] items-center justify-center rounded-2xl bg-accent px-3 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-slate-950 shadow-[0_0_24px_rgba(215,162,61,0.28)] transition hover:-translate-y-0.5 sm:min-h-[84px] sm:px-5 sm:py-4 sm:text-sm sm:tracking-[0.14em]"
                >
                  Teklif Al
                </Link>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[58px] items-center justify-center rounded-2xl bg-[#25D366] px-3 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-slate-950 transition hover:-translate-y-0.5 hover:brightness-110 sm:min-h-[84px] sm:px-5 sm:py-4 sm:text-sm sm:tracking-[0.14em]"
                >
                  WhatsApp&apos;tan Yaz
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
