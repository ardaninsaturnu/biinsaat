'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Icon from './Icon';
import { nav, site } from '@/lib/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Üst şerit */}
      <div className="hidden bg-navy-900 text-navy-100 md:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <span className="flex items-center gap-2">
            <Icon name="pin" size={14} className="text-brand-300" />
            {site.address.district} / {site.address.city} · Fethiye
          </span>
          <span className="flex items-center gap-5">
            <a href={`mailto:${site.email}`} className="link-underline flex items-center gap-1.5 hover:text-white">
              <Icon name="mail" size={14} className="text-brand-300" />
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="link-underline flex items-center gap-1.5 font-semibold hover:text-white">
              <Icon name="phone" size={14} className="text-brand-300" />
              {site.phoneDisplay}
            </a>
          </span>
        </div>
      </div>

      {/* Ana navigasyon */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled ? 'border-navy-100 bg-white/95 shadow-sm backdrop-blur' : 'border-transparent bg-white'
        }`}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
          <Link href="/" aria-label={`${site.name} ana sayfa`}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? 'bg-navy-50 text-navy-800' : 'text-navy-600 hover:bg-navy-50 hover:text-navy-800'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phoneHref}`}
              className="hidden items-center gap-2 rounded-full bg-navy-800 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-navy-700 sm:flex"
            >
              <Icon name="phone" size={16} />
              Teklif Alın
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full border border-navy-100 text-navy-800 lg:hidden"
            >
              <Icon name={open ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobil menü */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-3.5 text-base font-semibold ${
                  pathname === item.href ? 'bg-navy-50 text-navy-800' : 'text-navy-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 grid gap-2.5">
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-navy-800 px-5 py-3.5 text-base font-bold text-white"
              >
                <Icon name="phone" size={18} />
                {site.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${site.whatsappHref}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-base font-bold text-white"
              >
                <Icon name="whatsapp" size={18} fill="currentColor" stroke="none" />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
