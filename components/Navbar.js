'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { services } from '@/lib/content'

const menuItems = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hizmetler', href: '/services', children: services.map((service) => ({ name: service.menuLabel, href: `/services/${service.slug}` })) },
  { name: 'Projeler', href: '/projects' },
  { name: 'Kariyer', href: '/career' },
  { name: 'Hakkimizda', href: '/about' },
  { name: 'Iletisim', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeTimerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileServicesOpen(false)
    setDesktopServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  const servicePaths = useMemo(() => services.map((service) => `/services/${service.slug}`), [])
  const navClasses = scrolled
    ? 'border-white/10 bg-slate-950 shadow-[0_24px_55px_rgba(2,6,23,0.55)]'
    : 'border-white/10 bg-slate-950/92'

  const isServicesActive = pathname === '/services' || servicePaths.includes(pathname)

  const openDesktopMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }
    setDesktopServicesOpen(true)
  }

  const closeDesktopMenu = () => {
    closeTimerRef.current = setTimeout(() => {
      setDesktopServicesOpen(false)
    }, 180)
  }

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${navClasses}`}>
      <div className="container-custom flex min-h-[88px] items-center justify-between gap-4 lg:gap-6">
        <Link href="/" className="group flex min-w-0 items-center gap-3 lg:gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] border border-accent/45 bg-[linear-gradient(145deg,rgba(215,162,61,0.22),rgba(215,162,61,0.08))] text-sm font-extrabold text-accent shadow-[0_0_30px_rgba(215,162,61,0.16)] transition duration-300 group-hover:scale-[1.03] group-hover:border-accent/65 sm:h-14 sm:w-14 sm:text-base">
            K
          </div>

          <div className="flex min-w-0 flex-col">
            <span className="whitespace-nowrap font-display text-lg font-extrabold text-white sm:text-[1.35rem] xl:text-[1.5rem]">
              ME-KA Insaat
            </span>
            <span className="mt-1 hidden whitespace-nowrap text-[0.72rem] font-medium tracking-[0.18em] text-stone-200 xl:block">
              Erzurum insaat ve saha cozumleri
            </span>
          </div>
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-2 lg:flex">
          {menuItems.map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={openDesktopMenu}
                  onMouseLeave={closeDesktopMenu}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[15px] font-semibold transition-all duration-300 ${
                      isServicesActive
                        ? 'border border-white/18 bg-white/16 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]'
                        : 'text-stone-100 hover:bg-white/12 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <svg className={`h-4 w-4 transition ${desktopServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  <div className="absolute left-0 top-full h-4 w-full" />
                  <div
                    className={`absolute right-0 top-[calc(100%+12px)] min-w-[300px] rounded-[28px] border border-white/14 bg-slate-950 p-3 shadow-[0_30px_70px_rgba(2,6,23,0.68)] transition-all duration-200 ${
                      desktopServicesOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
                    }`}
                  >
                    <div className="mb-2 px-3 py-2 text-sm font-semibold text-stone-300">Hizmet alanlari</div>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-2xl px-4 py-3 text-[15px] font-medium text-white transition hover:bg-white/10 hover:text-accent"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }

            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2.5 text-[15px] font-semibold transition-all duration-300 ${
                  isActive
                    ? 'border border-white/18 bg-white/16 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]'
                    : 'text-stone-100 hover:bg-white/12 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex h-11 items-center justify-center rounded-full border border-white/12 bg-white/10 px-4 text-sm font-semibold text-white lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Mobil menu"
        >
          {mobileMenuOpen ? 'Kapat' : 'Menu'}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-4 pb-5 pt-3 lg:hidden">
          <div className="container-custom flex flex-col gap-2 px-0">
            {menuItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.href} className="rounded-2xl border border-white/10 bg-white/[0.05]">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      className={`flex w-full items-center justify-between px-4 py-3 text-base font-semibold transition ${
                        isServicesActive ? 'text-white' : 'text-stone-100'
                      }`}
                    >
                      <span>{item.name}</span>
                      <svg className={`h-4 w-4 transition ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {mobileServicesOpen && (
                      <div className="space-y-1 border-t border-white/10 px-3 pb-3 pt-2">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-2xl px-3 py-3 text-sm font-medium text-stone-100 transition hover:bg-white/8 hover:text-white"
                        >
                          Tum hizmetler
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-2xl px-3 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:text-accent"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
                    isActive ? 'bg-white/12 text-white' : 'text-stone-100 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
