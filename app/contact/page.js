'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/site'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Mesaj gonderilemedi.')
      }

      setSubmitStatus('success')
      setFormData({ name: '', phone: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="pt-20">
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,162,61,0.10),transparent_26%)]" />
        <div className="container-custom relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="section-kicker">Iletisim</span>
            <h1 className="font-display text-4xl font-black uppercase tracking-[0.12em] text-white md:text-6xl">Bize Ulasin</h1>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-stone-300 md:text-base">Erzurum'da yol yapimi, beton agrega, tunel, dere islahi, tas isleri ve buyuk altyapi surecleriniz icin ekibimizle dogrudan iletisime gecin.</p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-custom">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_420px]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="premium-panel p-5 sm:p-7 md:p-8">
              <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-white md:text-3xl">Teklif Alin</h2>
              <p className="mt-4 text-sm leading-7 text-stone-300">Isinizin kapsamini paylasin; saha, malzeme, ekipman ve teslim takvimine uygun ilk planlamayi hazirlayalim.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-200">Adiniz Soyadiniz</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent" placeholder="Adiniz ve soyadiniz" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-200">Telefon Numaraniz</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent" placeholder="0538 486 58 40" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-200">Mesajiniz</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="6" className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent" placeholder="Yol, beton agrega, tunel, dere islahi veya altyapi ihtiyacinizi yazin..." />
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? 'Gonderiliyor...' : 'Teklif Al'}
                </button>

                {submitStatus === 'success' && (
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">Mesajiniz alindi ve e-posta olarak iletildi.</div>
                )}

                {submitStatus === 'error' && (
                  <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{errorMessage}</div>
                )}
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
              <div className="premium-panel p-5 sm:p-7">
                <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-white md:text-3xl">Iletisim Bilgileri</h2>
                <div className="mt-6 space-y-5">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-stone-400">Adres</div>
                    <p className="mt-2 text-sm leading-7 text-stone-200">{siteConfig.address}</p>
                    <a href={siteConfig.mapsLink} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-semibold text-accent transition hover:text-[#f0c56f]">Google Maps'te Ac</a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-stone-400">Telefon</div>
                    <a href={siteConfig.phoneHref} className="mt-2 block text-lg font-bold text-white">{siteConfig.phoneDisplay}</a>
                    <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-semibold text-accent transition hover:text-[#f0c56f]">WhatsApp'tan Yaz</a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-stone-400">E-posta</div>
                    <p className="mt-2 text-sm text-stone-200">{siteConfig.email}</p>
                  </div>
                </div>
              </div>

              <div className="premium-panel overflow-hidden">
                <iframe title="ME-KA İnşaat Erzurum Konum" src={siteConfig.mapsEmbedSrc} className="h-[360px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
