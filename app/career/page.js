'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const initialForm = {
  fullName: '',
  address: '',
  experience: '',
  position: '',
  machines: '',
  technicalDetails: '',
  documents: '',
  criminalRecord: '',
  maritalStatus: '',
  licenseClasses: '',
  age: '',
  previousEmployers: '',
  about: '',
}

export default function CareerPage() {
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      const response = await fetch('/api/career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.error || 'Basvuru gonderilemedi.')
      }

      setSubmitStatus('success')
      setFormData(initialForm)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = 'w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent'

  return (
    <main className="pt-20">
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,162,61,0.10),transparent_26%)]" />
        <div className="container-custom relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="section-kicker">Kariyer / Basvuru</span>
            <h1 className="font-display text-4xl font-black uppercase tracking-[0.12em] text-white md:text-6xl">Ekibimize katilin</h1>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-stone-300 md:text-base">Saha, makine, uygulama ve teknik ekip icin basvurunuzu buradan iletebilirsiniz.</p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="premium-panel p-5 sm:p-7 md:p-8">
            <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
              <div><label className="mb-2 block text-sm font-semibold text-stone-200">Ad Soyad</label><input name="fullName" value={formData.fullName} onChange={handleChange} required className={inputClass} /></div>
              <div><label className="mb-2 block text-sm font-semibold text-stone-200">Adres</label><input name="address" value={formData.address} onChange={handleChange} required className={inputClass} /></div>
              <div><label className="mb-2 block text-sm font-semibold text-stone-200">Deneyim</label><input name="experience" value={formData.experience} onChange={handleChange} required className={inputClass} placeholder="Orn: 8 yil saha operatorlugu" /></div>
              <div><label className="mb-2 block text-sm font-semibold text-stone-200">Hangi alana basvuru yapiyorsunuz?</label><input name="position" value={formData.position} onChange={handleChange} required className={inputClass} placeholder="Operator / Formen / Usta / Muhendis..." /></div>
              <div><label className="mb-2 block text-sm font-semibold text-stone-200">Kullandiginiz makine / cihazlar</label><textarea name="machines" value={formData.machines} onChange={handleChange} required rows="4" className={inputClass} /></div>
              <div><label className="mb-2 block text-sm font-semibold text-stone-200">Teknik detaylar</label><textarea name="technicalDetails" value={formData.technicalDetails} onChange={handleChange} required rows="4" className={inputClass} /></div>
              <div><label className="mb-2 block text-sm font-semibold text-stone-200">Belgeler</label><textarea name="documents" value={formData.documents} onChange={handleChange} required rows="4" className={inputClass} placeholder="SRC, operatorluk, ustalik, sertifika..." /></div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-stone-200">Sicil durumu</label>
                <select name="criminalRecord" value={formData.criminalRecord} onChange={handleChange} required className={inputClass}>
                  <option value="" className="bg-slate-900">Seciniz</option>
                  <option value="Temiz" className="bg-slate-900">Temiz</option>
                  <option value="Kayit var" className="bg-slate-900">Kayit var</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-stone-200">Evli / Bekar</label>
                <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required className={inputClass}>
                  <option value="" className="bg-slate-900">Seciniz</option>
                  <option value="Evli" className="bg-slate-900">Evli</option>
                  <option value="Bekar" className="bg-slate-900">Bekar</option>
                </select>
              </div>
              <div><label className="mb-2 block text-sm font-semibold text-stone-200">Surucu belgeleri</label><input name="licenseClasses" value={formData.licenseClasses} onChange={handleChange} required className={inputClass} placeholder="B, C, CE, G..." /></div>
              <div><label className="mb-2 block text-sm font-semibold text-stone-200">Yas</label><input name="age" value={formData.age} onChange={handleChange} required className={inputClass} /></div>
              <div className="md:col-span-2"><label className="mb-2 block text-sm font-semibold text-stone-200">Onceki is yerleri</label><textarea name="previousEmployers" value={formData.previousEmployers} onChange={handleChange} required rows="4" className={inputClass} /></div>
              <div className="md:col-span-2"><label className="mb-2 block text-sm font-semibold text-stone-200">Kendinizden bahsedin</label><textarea name="about" value={formData.about} onChange={handleChange} required rows="6" className={inputClass} /></div>
              <div className="md:col-span-2"><button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? 'Kaydediliyor...' : 'Kaydet'}</button></div>
              {submitStatus === 'error' && <div className="md:col-span-2 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{errorMessage}</div>}
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
