import Link from 'next/link';
import Icon from './Icon';
import { site } from '@/lib/site';

export default function CtaBand() {
  return (
    <section className="blueprint-dark relative overflow-hidden bg-navy-800 py-14 sm:py-16">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />
      <div className="container-x relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <p className="script text-3xl text-brand-300 sm:text-4xl">Doğru Yatırım, Güvenli Gelecek…</p>
          <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
            Projenizi konuşalım; keşif ve teklif ücretsiz.
          </h2>
          <p className="mt-2 text-sm text-navy-200">
            {site.address.district} / {site.address.city} · Fethiye ve çevresi
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-navy-900 transition-colors hover:bg-brand-50"
          >
            <Icon name="phone" size={17} />
            {site.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${site.whatsappHref}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            <Icon name="whatsapp" size={18} fill="currentColor" stroke="none" />
            WhatsApp
          </a>
          <Link
            href="/iletisim"
            className="flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Teklif Formu
            <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
