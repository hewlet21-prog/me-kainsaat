import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ScrollReveal from '@/components/ScrollReveal'
import { serviceBySlug, services } from '@/lib/content'
import { siteConfig } from '@/lib/site'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = serviceBySlug[slug]

  if (!service) {
    return {
      title: 'Hizmet Bulunamadi | ME-KA Insaat',
    }
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params
  const service = serviceBySlug[slug]

  if (!service) {
    notFound()
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    name: `${service.title} Erzurum`,
    description: service.seoDescription,
    areaServed: {
      '@type': 'City',
      name: 'Erzurum',
    },
    provider: {
      '@type': 'ConstructionCompany',
      name: siteConfig.shortName,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phoneDisplay,
    },
    image: [`${siteConfig.siteUrl}${service.image}`],
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative flex min-h-[44vh] items-center bg-gradient-to-r from-primary to-gray-dark">
        <div className="absolute inset-0 bg-black/45" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="inline-flex rounded-full border border-accent/30 bg-accent/12 px-3 py-1 text-xs font-semibold text-accent">
              {service.tag}
            </div>
            <h1 className="mb-4 mt-5 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">{service.seoTitle}</h1>
            <p className="max-w-3xl text-lg text-white/95">{service.shortDescription}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div>
                <div className="relative mb-8 h-[320px] overflow-hidden rounded-xl shadow-xl md:h-[420px]">
                  <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-white">{service.introHeading}</h2>
                <p className="mb-6 text-base leading-8 text-stone-200">{service.introText}</p>

                <h3 className="mb-4 text-2xl font-bold text-white">Hizmet detayi</h3>
                <p className="mb-8 text-base leading-8 text-stone-200">{service.fullDescription}</p>

                <div className="mb-10 rounded-[28px] border border-white/12 bg-white/8 p-6">
                  <div className="text-sm font-bold text-accent">Bu hizmette odaklandigimiz alanlar</div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm leading-7 text-stone-200">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="mb-4 mt-8 text-xl font-bold text-white">Uygulama akisi</h3>
                <div className="space-y-4">
                  {service.process.map((item, idx) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-primary">{idx + 1}</div>
                      <div>
                        <h4 className="font-semibold text-white">{item.step}</h4>
                        <p className="text-sm leading-7 text-stone-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {service.gallery.map((image, idx) => (
                    <div key={image} className="relative h-40 overflow-hidden rounded-xl">
                      <Image
                        src={image}
                        alt={`${service.title} Erzurum gorseli ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 22vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="sticky top-24 rounded-2xl border border-white/12 bg-white/8 p-6 backdrop-blur-sm dark:bg-slate-900/90">
                <h3 className="mb-4 text-xl font-bold text-white">Sahada neler yapiyoruz?</h3>
                <ul className="mb-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-stone-200">
                      <svg className="h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary inline-block w-full text-center">
                  Teklif al
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050916] py-16">
        <div className="container-custom">
          <div className="mb-8 max-w-3xl">
            <div className="text-sm font-bold text-accent">Sik sorulan sorular</div>
            <h2 className="mt-4 text-3xl font-bold text-white">{service.title} Erzurum hakkinda sorular</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {service.faq.map((item) => (
              <div key={item.question} className="rounded-[24px] border border-white/12 bg-white/8 p-6">
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-200">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
