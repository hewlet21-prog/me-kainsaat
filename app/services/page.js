import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { services } from '@/lib/content'

export const metadata = {
  title: 'Hizmetler | Erzurum Insaat, Yikim, Hafriyat, Agrega, Beton ve Kaldirim | ME-KA Insaat',
  description:
    'ME-KA Insaat hizmetleri: Erzurum insaat, yikim, hafriyat, agrega, beton ve kaldirim alanlarinda uygulama detaylari ve saha deneyimi.',
  keywords: [
    'me-ka insaat erzurum',
    'erzurum insaat',
    'erzurum yikim',
    'hafriyat erzurum',
    'agrega erzurum',
    'beton erzurum',
    'kaldirim erzurum',
  ],
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="relative flex min-h-[40vh] items-center justify-center bg-gradient-to-r from-primary to-gray-dark">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl px-4 text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Erzurum Hizmetlerimiz</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
            Insaat, yikim, hafriyat, agrega, beton ve kaldirim alanlarinda Erzurum odakli hizmet sayfalarimizi inceleyin.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-primary">
        <div className="container-custom">
          <div className="mb-12 grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 md:grid-cols-3">
            <div>
              <div className="text-sm font-bold text-accent">Planli saha yonetimi</div>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                Her hizmet alaninda ekipman, personel, malzeme ve uygulama sureci birbirini destekleyecek sekilde planlanir.
              </p>
            </div>
            <div>
              <div className="text-sm font-bold text-accent">Yerel saha deneyimi</div>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                Erzurum iklimi, zemin yapisi ve uygulama kosullari dikkate alinarak proje surecleri sahaya uygun bicimde yonetilir.
              </p>
            </div>
            <div>
              <div className="text-sm font-bold text-accent">Temiz teslim anlayisi</div>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                Uygulama sonunda saha duzeni, kalite kontrolu ve is teslim sureci duzenli bir kapanis planiyla tamamlanir.
              </p>
            </div>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                <ScrollReveal direction={index % 2 === 0 ? 'left' : 'right'} className="flex-1">
                  <div className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-accent">
                    {service.tag}
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">{service.title}</h2>
                  <p className="mb-4 mt-4 text-base leading-relaxed text-stone-300">{service.fullDescription}</p>
                  <p className="mb-6 text-sm leading-7 text-stone-400">{service.introText}</p>
                  <div className="mb-8 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-stone-300">
                        <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`} className="btn-primary inline-block">
                    {service.title} detaylarini incele
                  </Link>
                </ScrollReveal>

                <ScrollReveal direction={index % 2 === 0 ? 'right' : 'left'} className="flex-1">
                  <div className="relative h-[300px] overflow-hidden rounded-xl shadow-xl md:h-[420px]">
                    <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-accent to-accent-dark py-16">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">Erzurum sahasina uygun teklif plani olusturalim</h2>
            <p className="mb-6 text-primary/80">
              Uygulama alani, makine ihtiyaci, malzeme akisi ve teslim takvimi icin ekibimizle hemen iletisime gecin.
            </p>
            <Link href="/contact" className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-gray-800">
              Teklif Al
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
