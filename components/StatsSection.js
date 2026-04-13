'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { id: 1, label: 'Tamamlanan Proje', value: 287, suffix: '+' },
  { id: 2, label: 'Mutlu Musteri', value: 215, suffix: '+' },
  { id: 3, label: 'Yillik Deneyim', value: 22, suffix: '' },
  { id: 4, label: 'Uzman Ekip', value: 48, suffix: '+' },
]

function Counter({ end, suffix, label, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.45 })

  useEffect(() => {
    if (!inView) {
      return
    }

    let start = 0
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [duration, end, inView])

  return (
    <div ref={ref} className="premium-panel px-4 py-6 text-center sm:px-6">
      <div className="text-4xl font-black text-accent md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-300">{label}</div>
    </div>
  )
}

export default function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="relative overflow-hidden py-12 md:py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="premium-panel overflow-hidden px-4 py-6 sm:px-6 md:px-8 md:py-8"
        >
          <div className="mb-6 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-kicker mb-3">Sayilarla ME-KA</span>
              <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-white md:text-4xl">
                Operasyonun gucunu rakamlar anlatiyor
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone-300 md:text-right">
              Uzun soluklu saha deneyimi, tekrar calistigimiz musteriler ve planli teslim
              disipliniyle olusan birikim.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Counter end={stat.value} suffix={stat.suffix} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
