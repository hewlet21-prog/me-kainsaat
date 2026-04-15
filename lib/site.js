import { services } from '@/lib/content'

export const siteConfig = {
  name: 'ME-KA INSAAT',
  shortName: 'ME-KA INSAAT',
  title: 'ME-KA Insaat Erzurum | Erzurum Insaat, Hafriyat, Agrega, Beton ve Kaldirim',
  description:
    'ME-KA Insaat; Erzurum ve cevresinde insaat, yikim, hafriyat, agrega, beton ve kaldirim hizmetlerini planli saha yonetimiyle sunar.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  locality: 'Yakutiye',
  region: 'Erzurum',
  countryCode: 'TR',
  email: 'ubeyd.atalay@me-kainsaat.com',
  careerEmail: 'm.alisamhal@gmail.com',
  phoneDisplay: '0538 486 58 40',
  phoneHref: 'tel:+905384865840',
  whatsappHref:
    'https://wa.me/905384865840?text=Merhaba%2C%20ME-KA%20Insaat%20icin%20bilgi%20almak%20istiyorum.',
  address:
    'Gez Mah. Orhan Serifsoy Cad. Nafiz Ergun Sok. Murat Apt. Kat:1 No:2, Yakutiye / Erzurum',
  mapsQuery:
    'Gez Mah. Orhan Serifsoy Cad. Nafiz Ergun Sok. Murat Apt. Kat:1 No:2, Yakutiye / Erzurum',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=Gez%20Mah.%20Orhan%20Serifsoy%20Cad.%20Nafiz%20Ergun%20Sok.%20Murat%20Apt.%20Kat%3A1%20No%3A2%2C%20Yakutiye%20%2F%20Erzurum&output=embed',
  mapsLink:
    'https://www.google.com/maps?q=Gez%20Mah.%20Orhan%20Serifsoy%20Cad.%20Nafiz%20Ergun%20Sok.%20Murat%20Apt.%20Kat%3A1%20No%3A2%2C%20Yakutiye%20%2F%20Erzurum',
  serviceAreas: ['Yakutiye', 'Erzurum Merkez', 'Palandoken', 'Aziziye', 'Erzurum geneli'],
  businessCategories: [
    'Erzurum insaat',
    'Erzurum yikim',
    'Erzurum hafriyat',
    'Erzurum agrega',
    'Erzurum beton',
    'Erzurum kaldirim',
  ],
  seoKeywords: Array.from(new Set(['me-ka insaat', 'me-ka insaat erzurum', ...services.flatMap((service) => service.keywords)])),
}
