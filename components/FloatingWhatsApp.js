'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/site'

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[290px] rounded-[26px] border border-white/10 bg-slate-950/95 p-4 text-white shadow-[0_24px_80px_rgba(2,6,23,0.48)] backdrop-blur-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-accent">
                WhatsApp Destek
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-300">
                Beton, hafriyat, agrega, demir ve ihale süreçleri için hızlı dönüş alın.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white"
              aria-label="WhatsApp panelini kapat"
            >
              ×
            </button>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs uppercase tracking-[0.22em] text-stone-400">Telefon</div>
            <div className="mt-1 text-lg font-bold text-white">{siteConfig.phoneDisplay}</div>
          </div>

          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-950 transition hover:brightness-110"
          >
            WhatsApp'tan Yaz
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-slate-950 shadow-[0_20px_48px_rgba(37,211,102,0.42)] transition hover:scale-105"
        aria-label="WhatsApp iletişim balonunu aç"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.56 0 .24 5.3.24 11.84c0 2.08.54 4.11 1.57 5.91L0 24l6.42-1.68a11.8 11.8 0 0 0 5.66 1.44h.01c6.53 0 11.85-5.31 11.85-11.84 0-3.16-1.23-6.13-3.42-8.44ZM12.09 21.76h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.81 1 1.02-3.71-.23-.38a9.84 9.84 0 0 1-1.5-5.25C2.2 6.41 6.66 1.94 12.08 1.94c2.62 0 5.08 1.02 6.94 2.88a9.78 9.78 0 0 1 2.88 6.96c0 5.42-4.41 9.98-9.81 9.98Zm5.38-7.44c-.3-.15-1.78-.88-2.06-.98-.28-.11-.48-.15-.68.15-.2.29-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.65-2.04-.17-.29-.02-.45.13-.6.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.15-.68-1.64-.94-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.29-1.05 1.02-1.05 2.48 0 1.46 1.08 2.88 1.23 3.08.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
        </svg>
      </button>
    </div>
  )
}
