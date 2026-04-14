'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hizmetler', href: '/services' },
  { name: 'Projeler', href: '/projects' },
  { name: 'Kariyer', href: '/career' },
  { name: 'Hakkımızda', href: '/about' },
  { name: 'İletişim', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClasses = scrolled
    ? 'border-white/10 bg-slate-950/95 shadow-[0_24px_55px_rgba(2,6,23,0.48)]'
    : 'border-white/10 bg-slate-950/78'

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${navClasses}`}>
      <div className="container-custom flex min-h-[88px] items-center justify-between gap-4 lg:gap-6">
        <Link href="/" className="group flex min-w-0 items-center gap-3 lg:gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] border border-accent/35 bg-[linear-gradient(145deg,rgba(215,162,61,0.20),rgba(215,162,61,0.06))] text-sm font-black tracking-[0.24em] text-accent shadow-[0_0_30px_rgba(215,162,61,0.16)] transition duration-300 group-hover:scale-[1.03] group-hover:border-accent/55 sm:h-14 sm:w-14 sm:text-base">
            K
          </div>

          <div className="flex min-w-0 flex-col">
            <span className="whitespace-nowrap font-display text-lg font-black uppercase tracking-[0.22em] text-white sm:text-[1.35rem] xl:text-[1.55rem]">
              ME-KA İNŞAAT
            </span>
            <span className="mt-1 hidden whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-stone-300/95 xl:block">
              İnşaat ve Proje Çözümleri
            </span>
          </div>
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-1 lg:flex xl:gap-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2.5 text-[13px] font-bold uppercase tracking-[0.05em] transition-all duration-300 xl:px-5 xl:py-3 xl:text-[15px] ${
                  isActive
                    ? 'border border-white/12 bg-white/12 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]'
                    : 'text-stone-100 hover:bg-white/8 hover:text-accent'
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
          className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 text-xs font-bold uppercase tracking-[0.24em] text-white lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Mobil menu"
        >
          {mobileMenuOpen ? 'Kapat' : 'Menu'}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950/96 px-4 pb-5 pt-3 lg:hidden">
          <div className="container-custom flex flex-col gap-2 px-0">
            {menuItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-bold uppercase tracking-[0.08em] transition ${
                    isActive ? 'bg-white/10 text-white' : 'text-stone-100 hover:bg-white/8 hover:text-accent'
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
