import Link from 'next/link';
import Logo from './Logo';
import Icon from './Icon';
import { nav, people, services, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="blueprint-dark bg-navy-950 text-navy-100">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200">
            İstanbul ve Fethiye’de konut, villa, ticari yapı ve anahtar teslim projeler. Planlı, kaliteli ve
            zamanında.
          </p>
          <p className="script mt-5 text-xl text-brand-300">{site.tagline}</p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-brand-300">Kurumsal</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline text-navy-200 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-brand-300">Hizmetler</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/hizmetler#${s.slug}`} className="link-underline text-navy-200 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-brand-300">İletişim</h3>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-brand-300" />
              <span className="text-navy-200">{site.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" size={18} className="mt-0.5 shrink-0 text-brand-300" />
              <a href={`mailto:${site.email}`} className="link-underline text-navy-200 hover:text-white">
                {site.email}
              </a>
            </li>
            {people.map((p) => (
              <li key={p.name} className="flex gap-3">
                <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-brand-300" />
                <span className="text-navy-200">
                  <a href={`tel:${p.phoneHref}`} className="link-underline font-semibold text-white">
                    {p.phoneDisplay}
                  </a>
                  <span className="block text-xs text-navy-300">{p.name}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-300 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <p className="flex items-center gap-4">
            {site.promise.map((p) => (
              <span key={p} className="flex items-center gap-1.5">
                <Icon name="check" size={13} className="text-brand-300" />
                {p}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
