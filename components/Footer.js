import Link from 'next/link'
import { siteConfig } from '@/lib/site'
import { services } from '@/lib/content'

const quickLinks = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hizmetler', href: '/services' },
  { name: 'Projeler', href: '/projects' },
  { name: 'Hakkimizda', href: '/about' },
  { name: 'Iletisim', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040812] pt-14 text-white md:pt-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container-custom">
        <div className="grid gap-10 pb-10 md:grid-cols-2 xl:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-sm font-black tracking-[0.2em] text-accent">
                MK
              </div>
              <div>
                <h3 className="font-display text-2xl font-black uppercase tracking-[0.16em] text-white">
                  {siteConfig.shortName}
                </h3>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                  Erzurum Insaat ve Saha Cozumleri
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-stone-400">
              Erzurum insaat, yikim, hafriyat, agrega, beton ve kaldirim hizmetlerinde planli saha destegi sunuyoruz.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-stone-300 transition hover:border-accent/40 hover:text-accent"
              >
                WhatsApp
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-stone-300 transition hover:border-accent/40 hover:text-accent"
              >
                Ara
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">Hizli Linkler</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-stone-400 transition hover:text-accent">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">Hizmetler</h4>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-stone-400 transition hover:text-accent">
                    {service.title} Erzurum
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">Iletisim</h4>
            <ul className="mt-5 space-y-3 text-sm text-stone-400">
              <li>{siteConfig.address}</li>
              <li>{siteConfig.phoneDisplay}</li>
              <li>{siteConfig.email}</li>
              <li>Pzt - Cmt / 08:30 - 18:30</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.shortName}. Tum haklari saklidir.</p>
          <a
            href="https://xn--erzurumyazlm-b5bb.com/"
            target="_blank"
            rel="noreferrer"
            className="text-right text-stone-400 transition hover:text-accent"
          >
            Created By Erzurum Yazilim
          </a>
        </div>
      </div>
    </footer>
  )
}
