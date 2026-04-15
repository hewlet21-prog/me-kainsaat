'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import { siteConfig } from '@/lib/site'

const focusAreas = [
  'Yol yapimi ve ulasim altyapisi',
  'Beton agrega ve stok sahasi organizasyonu',
  'Tunel kazi, destekleme ve guvenlik',
  'Dere islahi, tahkimat ve su yapilari',
]

const strengths = [
  {
    title: 'Saha planlama disiplini',
    text: 'Ihale sonrasi saha kurulumu, makine yerlesimi ve gunluk uygulama akisini teslim hedefiyle ayni cizgide kuruyoruz.',
  },
  {
    title: 'Malzeme ve lojistik kontrolu',
    text: 'Beton, agrega, tas ve yardimci malzemelerde stok, sevkiyat ve uygulama ritmini birlikte takip ediyoruz.',
  },
  {
    title: 'Guvenli ve raporlu ilerleme',
    text: 'Tunel, yol ve su yapilarinda saha kontrolunu yalnizca hizla degil, olculebilir kaliteyle yonetiyoruz.',
  },
]

const localSignals = [
  { label: 'Merkez', value: `${siteConfig.locality} / ${siteConfig.region}` },
  { label: 'Telefon', value: siteConfig.phoneDisplay },
  { label: 'Hizmet Alani', value: 'Turkiye' },
  { label: 'Iletisim Adresi', value: siteConfig.address },
]

const corporateNotes = [
  'Yerel saha ve lojistik bilgisiyle hizli kurulum',
  'Kesif, teklif, uygulama ve teslim surecinin tek merkezden yonetimi',
  'Google Haritalar uzerinden kolay ulasim ve yerinde gorusme imkani',
  'Erzurum odakli kurumsal iletisim ve daha anlasilir hizmet anlatimi',
]

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="relative min-h-[52vh] overflow-hidden flex items-center">
        <Image src="/gallery/15.jpg" alt="ME-KA İnşaat operasyon alani" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,22,0.88)_0%,rgba(5,8,22,0.58)_42%,rgba(5,8,22,0.45)_100%)]" />
        <div className="container-custom relative z-10 py-16">
          <ScrollReveal>
            <span className="section-kicker">Hakkimizda</span>
            <h1 className="max-w-4xl text-4xl font-black uppercase tracking-[0.1em] text-white md:text-6xl">Erzurum merkezli saha organizasyonu ve kurumsal uygulama gucu</h1>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-stone-300 md:text-lg">ME-KA İnşaat; Erzurum ve Yakutiye merkezli yapısıyla Erzurum beton, bitüm, agrega, hafriyat, yol yapımı, tünel ve büyük altyapı projelerinde planlı uygulama, net koordinasyon ve kontrollü teslim anlayışıyla çalışır.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Kurumsal Yaklasimimiz</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Bizim icin is sadece uygulama yapmak degil; sahayi dogru kurmak, ekipmanlari uygun ritimde kullanmak, malzemeyi zamaninda sahaya sokmak ve sureci raporlu ilerletmektir. Bu nedenle planlama, saha koordinasyonu ve teslim kalitesini ayni anda yonetiyoruz.</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Erzurum ve çevresindeki işlerde iklim, arazi yapısı ve lojistik koşullar sonuca doğrudan etki eder. ME-KA İnşaat, yerel saha tecrübesi sayesinde hızlı karar alan ama kontrolü kaybetmeyen bir uygulama modeli kurar. Kurumsal iletişim dili, sahadaki gerçek uygulama refleksiyle desteklenir.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {focusAreas.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-gray-light px-4 py-4 text-sm dark:bg-gray-dark dark:text-stone-200">{item}</div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative h-[340px] md:h-[440px] overflow-hidden rounded-[28px] shadow-xl">
                <Image src="/gallery/13.jpg" alt="ME-KA İnşaat saha calismasi" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-light dark:bg-gray-dark">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <ScrollReveal>
              <div className="premium-panel h-full p-8">
                <span className="section-kicker">Yerel Isletme Gucleri</span>
                <div className="mt-2 space-y-3">
                  {corporateNotes.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-stone-200">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="premium-panel h-full p-8">
                <span className="section-kicker">Kurumsal Bilgiler</span>
                <div className="mt-2 grid gap-4 sm:grid-cols-2">
                  {localSignals.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                      <div className="text-xs uppercase tracking-[0.24em] text-stone-400">{item.label}</div>
                      <div className="mt-2 text-sm leading-7 text-stone-100">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[24px] overflow-hidden border border-white/10">
                  <iframe
                    title="ME-KA İnşaat Erzurum Harita"
                    src={siteConfig.mapsEmbedSrc}
                    className="h-[280px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-primary">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Bizi ayiran basliklar</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="premium-panel h-full p-8">
                  <div className="text-accent text-sm font-semibold uppercase tracking-[0.22em]">0{index + 1}</div>
                  <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-300">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
