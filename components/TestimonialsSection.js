'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    id: 1,
    name: 'Ahmet Yilmaz',
    position: 'CEO, Yilmaz Holding',
    content:
      'ME-KA İnşaat ile yürüttüğümüz projede süreç boyunca hızlı geri dönüş, net koordinasyon ve zamanında teslim aldık.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ayse Demir',
    position: 'Mimarlik Ofisi Sahibi',
    content:
      'Teknik detaylara hakim ekipleri sayesinde proje danismanligi surecinde bekledigimizden daha temiz bir ilerleyis yakaladik.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mehmet Kaya',
    position: 'Gayrimenkul Gelistirici',
    content:
      'Anahtar teslim projede butce ve takvim konusunda verdikleri sozu tuttular. Bu disiplin bizi tekrar ayni ekipte bulusturdu.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const active = testimonials[currentIndex]

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <span className="section-kicker">Musteri Gorusleri</span>
          <h2 className="section-title">
            Bizi tercih edenler ne <span className="text-gradient">diyor</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-300 md:text-base">
            Uzun vadeli is iliskilerinin temelinde guven, seffaflik ve istikrarli teslim var.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="premium-panel relative overflow-hidden p-5 sm:p-7 md:p-10"
          >
            <div className="absolute right-6 top-6 text-6xl font-black text-white/5 sm:text-8xl">"</div>

            <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,#1c2739_0%,#09111f_100%)] p-5 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-2xl font-black text-accent">
                  {active.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div className="mt-5">
                  <h4 className="text-xl font-black text-white">{active.name}</h4>
                  <p className="mt-2 text-sm text-stone-300">{active.position}</p>
                </div>
                <div className="mt-5 flex justify-center gap-1">
                  {[...Array(active.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current text-accent" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-lg leading-9 text-stone-100 md:text-2xl">
                  {active.content}
                </p>

                <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    {testimonials.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'w-10 bg-accent' : 'w-2.5 bg-white/20'
                        }`}
                        aria-label={`Yorum ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-accent/40 hover:text-accent"
                      aria-label="Onceki yorum"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={nextSlide}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-accent/40 hover:text-accent"
                      aria-label="Sonraki yorum"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
