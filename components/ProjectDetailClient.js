'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function ProjectDetailClient({ project }) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <main className="pt-20">
      <section className="relative h-[50vh] bg-gradient-to-r from-primary to-gray-dark flex items-end pb-16">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container-custom">
          <ScrollReveal>
            <Link href="/projects" className="inline-flex items-center text-white/80 hover:text-accent mb-4 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Projelere Don
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-white/80">
              <span>{project.location}</span>
              <span>{project.year}</span>
              <span>{project.category}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-primary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-12">
              <div className="relative h-[400px] md:h-[520px] rounded-xl overflow-hidden shadow-xl mb-4">
                <Image src={project.images[currentImage]} alt={`${project.title} gorsel ${currentImage + 1}`} fill sizes="100vw" className="object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {project.images.map((img, idx) => (
                  <button key={img} onClick={() => setCurrentImage(idx)} className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 ${currentImage === idx ? 'ring-2 ring-accent scale-95' : 'opacity-70 hover:opacity-100'}`}>
                    <Image src={img} alt={`${project.title} thumbnail ${idx + 1}`} fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div>
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Proje Hakkinda</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.fullDescription}</p>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Sahadaki Kapsam</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-gray-light dark:bg-gray-dark rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 dark:text-white">Proje Bilgileri</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-300 dark:border-gray-600"><span className="text-gray-600 dark:text-gray-400">Kategori</span><span className="font-semibold dark:text-white">{project.category}</span></div>
                  <div className="flex justify-between py-2 border-b border-gray-300 dark:border-gray-600"><span className="text-gray-600 dark:text-gray-400">Lokasyon</span><span className="font-semibold dark:text-white">{project.location}</span></div>
                  <div className="flex justify-between py-2 border-b border-gray-300 dark:border-gray-600"><span className="text-gray-600 dark:text-gray-400">Tamamlanma Tarihi</span><span className="font-semibold dark:text-white">{project.year}</span></div>
                  <div className="flex justify-between py-2 border-b border-gray-300 dark:border-gray-600"><span className="text-gray-600 dark:text-gray-400">Calisma Alani</span><span className="font-semibold dark:text-white">{project.area}</span></div>
                  <div className="flex justify-between py-2 border-b border-gray-300 dark:border-gray-600"><span className="text-gray-600 dark:text-gray-400">Proje Suresi</span><span className="font-semibold dark:text-white">{project.duration}</span></div>
                </div>
                <div className="mt-6"><Link href="/contact" className="btn-primary w-full text-center inline-block">Teklif Al</Link></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
