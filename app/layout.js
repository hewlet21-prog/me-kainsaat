import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { siteConfig } from '@/lib/site'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ConstructionCompany',
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  image: '/videos/promo.mp4',
  description: siteConfig.description,
  telephone: '+90 538 486 58 40',
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gez Mah. Orhan Serifsoy Cad. Nafiz Ergun Sok. Murat Apt. Kat:1 No:2',
    addressLocality: siteConfig.locality,
    addressRegion: siteConfig.region,
    addressCountry: siteConfig.countryCode,
  },
  areaServed: siteConfig.serviceAreas.map((area) => ({
    '@type': 'AdministrativeArea',
    name: area,
  })),
  hasMap: siteConfig.mapsLink,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+90 538 486 58 40',
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: ['tr'],
    },
  ],
  knowsAbout: siteConfig.businessCategories,
  keywords: siteConfig.seoKeywords.join(', '),
  url: '/',
}

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.seoKeywords, ...siteConfig.businessCategories],
  robots: { index: true, follow: true },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="dark">
      <body className="min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
